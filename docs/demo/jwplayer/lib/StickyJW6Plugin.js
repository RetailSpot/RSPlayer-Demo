(function(jwplayer)
{
	var protocol = ("https:" == document.location.protocol) ? "https:" : "http:";

	var isFlashWithJW6 = false;
		
	var template = function(player, config, div) 
	{
		var adsComponent;

		//JW6
		if(typeof player.on !== "undefined")
		{
			player.on("ready",readyHandler);
		} 
		else
		{
			player.onReady(readyHandler);
		}

		function readyHandler(event) 
		{
			if(!this._ready)
			{
				this._ready = true;
				addScriptOnHead(protocol + "//cdn.stickyadstv.com/mustang/mustang.min.js",init);
			}
		};
		
		function addScriptOnHead(url,callback)
		{
			var script = document.createElement('script');
			
			script.type = "text/javascript";

			script.addEventListener("load",function(e)
			{
				callback();
			});
			
			script.src = url;
			
			var firstDomScript = document.getElementsByTagName('script')[0];
			
			firstDomScript.parentNode.insertBefore(script, firstDomScript);
		}
		
		var pauseRequested = false;

		function init()
		{
			config.componentId = "jw-plugin";

			if(config.ads && !config.ads.vastUrlParams)
	        {
	            config.ads.vastUrlParams = {};
	        }
	        config.ads.vastUrlParams.componentVersion = "2.5.0.4";

			//JW6
			if(isJW6())
			{
				var iFreewheelPlayer = com.stickyadstv.PlayerAdsManager.IFreewheelPlayerAdapter.getIFreewheelPlayerFromJW6Player(player);
			}
			//JW7+
			else
			{
				var iFreewheelPlayer = com.stickyadstv.PlayerAdsManager.IFreewheelPlayerAdapter.getIFreewheelPlayerFromJW7Player(player);
			}
			
			var adcontainer = getContainer();

			initHTML5VideoTag();

			/*In flash integration, don't use the original player because it is not able to seek while the seek point is
			not buffered.*/
			if(isFlashIntegration())
			{
				config.isJWWithFlash = true;
			}

			if(typeof player.getConfig == "function" && player.getConfig().related)
			{
				config.resetPlayerAdsManagerWhenEnded = true;	
			}

			var playerAdsManager = new com.stickyadstv.PlayerAdsManager(iFreewheelPlayer, adcontainer, config);  

			function isJW6()
			{
				return typeof player.on == "undefined";
			}

			function initHTML5VideoTag()
			{	
				var isMobile = com.stickyadstv.browser.isMobile();

				//Need to use an overlay to init the html5 video tag on jw6 mobile
				if(isJW6() && isMobile)
				{
					setInitOverlay();
				}

				var html5Video = document.createElement("video"); 
				html5Video.style.position = "absolute";
				html5Video.style.zIndex = 4099; //Not a random value, refer to iab zindex guideline
				html5Video.style.backgroundColor = "black";
				html5Video.style.display = "none";
				html5Video.style.width = adcontainer.clientWidth + "px";
				html5Video.style.height = adcontainer.clientHeight + "px";
				var playerWidthBackup = adcontainer.clientWidth + "px";
				var playerHeightBackup = adcontainer.clientHeight + "px";
				html5Video.videoSlotCanAutoPlay = true;
				html5Video.muted = isMobile; //on mobile phones, allow autoplay (allowed if video tag is muted)
				adcontainer.insertBefore(html5Video, adcontainer.firstChild);
				adcontainer.addEventListener("click", clickHandler);
				adcontainer.addEventListener("resize", resizeHandler.bind(this));
				document.addEventListener("webkitfullscreenchange", fullScreenChangeHandler.bind(this));
				document.addEventListener("mozfullscreenchange", fullScreenChangeHandler.bind(this));
				document.addEventListener("fullscreenchange", fullScreenChangeHandler.bind(this));
				window.addEventListener("orientationchange", fullScreenChangeHandler.bind(this));
				iFreewheelPlayer.setHTML5InitializedVideoTag(html5Video);
			
				function resizeHandler(e)
				{
					adcontainer.style.width = playerWidthBackup;
					adcontainer.style.height = playerHeightBackup;
					html5Video.style.width = adcontainer.offsetWidth + "px";
					html5Video.style.height = adcontainer.offsetHeight + "px";
					playerAdsManager.resizeAd(adcontainer.offsetWidth, adcontainer.offsetHeight, "");
				}

				function fullScreenChangeHandler()
				{
					//Let JW catch the event first
					setTimeout(function()
					{
						//An other element than the player is fullscreened or the fullscreen is over, restore container size
						if(adcontainer != document.webkitFullscreenElement && 
						adcontainer != document.mozFullScreenElement &&
						adcontainer != document.fullscreenElement)
						{
							resizeHandler();
						}
						//The JW player is now fullscreen
						else
						{
							var width = getGlobalWidth();
                        	var height = getGlobalHeight();

							html5Video.style.width = width + "px";
							html5Video.style.height = height + "px";
							playerAdsManager.resizeAd(width, height, "fullscreen");
						}
					}.bind(this),100);
				}

				function getGlobalWidth()
				{
					return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth||0;
				}

				function getGlobalHeight()
				{
					return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight||0;
				}

				function clickHandler(e)
				{
					adcontainer.removeEventListener("click", clickHandler);
					initVideo();
				}

				//Init HTML5 video tag (for mobile use)
				function initVideo()
				{
					if(html5Video.readyState == 0 && !html5Video.videoSlotCanAutoPlay)
					{
						html5Video.muted = false;
						html5Video.play();
						html5Video.videoSlotCanAutoPlay = true;
					}
				}

				/* Use an overlay to catch the first user click on player to init the html5 video tag
				with the JW player */
				function setInitOverlay()
				{
					var style = {cursor:"pointer","z-index":4100};
					var  overlay = new com.stickyadstv.tools.Overlay(null,{style:style});
					var containerElement = new com.stickyadstv.tools.Element(adcontainer); 
					overlay.attach(containerElement);
					overlay.follow(containerElement);
					overlay.one("click", function()
					{
						initVideo();
						overlay.unfollow();
						overlay.remove();
						iFreewheelPlayer.play();
					});

					iFreewheelPlayer.on(com.stickyadstv.PlayerAdsManager.PLAYER_PLAYING, _playingHandler, this);

					function _playingHandler()
					{
						if(overlay)
						{
							overlay.unfollow();
							overlay.remove();
						}

						iFreewheelPlayer.off(com.stickyadstv.PlayerAdsManager.PLAYER_PLAYING, _playingHandler);
					} 
				}
			}

			function isFlashIntegration()
			{	
				//JW6
				if(isJW6())
				{
					return player.getRenderingMode() == "flash"; 	
				}
				//JW7
				else
				{
					return player.getProvider().name.indexOf("flash") != -1; 
				}
			}

			function getContainer()
			{
				var adContainer = (typeof player.container == "undefined") ? player.getContainer() : player.container;
				
				if(adContainer.nodeName.toLocaleLowerCase() == "object")
				{
					adContainer = adContainer.parentNode;
				}

				return adContainer;
			}
		}
	};

	//register the old plugin name (StickyJW6Plugin.js) To be removed once no publisher use it anymore
	jwplayer().registerPlugin('StickyJW6Plugin', '6.0',template);

	//register the new plugin name (fw-jwplayer-plugin.js truncated at the first '-')
	jwplayer().registerPlugin('fw', '6.0',template);
})(jwplayer);