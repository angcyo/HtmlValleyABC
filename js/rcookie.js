var RCookie = {
	get: function() {
		var cookie = {};
		/*不传参数,表示获取整个cookie*/
		cookie.getCookie = function(key) {
			if(key == undefined) {
				return unescape(document.cookie)
			} else {
				var name = key + "=";
				var ca = document.cookie.split(';');
				for(var i = 0; i < ca.length; i++) {
					var c = ca[i].trim();
					if(c.indexOf(name) == 0) {
						return unescape(c.substring(name.length, c.length))
					}
				}
				return ""
			}
		};

		/*设置cookie*/
		cookie.setCookie = function setCookie(key, value, expiredays) {　　　　
			var exdate = new Date();　　　　
			exdate.setDate(exdate.getDate() + expiredays);　　　　
			document.cookie = key + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())　
		}

		/*清除所有cookie*/
		cookie.clear = function() {
			var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
			if(keys) {
				for(var i = keys.length; i--;)
					document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
			}
		}
		return cookie
	}
};