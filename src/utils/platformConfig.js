const platformConfig = (() => {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/WUBA/i) == 'wuba') {
    return 'app-wuba'; //58app
  } else if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return 'm-weixin'; //微信浏览器
  } else {
    return 'm-browser'; //非微信浏览器
  }
})();
window.platformConfig = platformConfig;
export default platformConfig;
