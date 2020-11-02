import platformConfig from './platformConfig';
/**
 * @module isEmptyFc
 * @description 判断是否为空
 */
function isEmptyFc(obj) {
  if (obj == null) return true;
  if (Array.isArray(obj) || typeof obj == 'string') return obj.length === 0;
  if (Object.keys(obj).length > 0) return false;
  return true;
}
/**
 * @module trim
 * @description 去除前后空格
 */
function trim(params) {
  return params.replace(/(^\s*)|(\s*$)/g, '');
}
/**
 * @module compareVersion
 * @description 版本比较
 */
function compareVersion(nowVersion, compareVer) {
  let arr = [],
    result = '';
  arr = nowVersion.split('.');
  // console.log('arr', arr);
  let sum = 0;
  arr[0] = arr[0] * 100 || 0;
  arr[1] = arr[1] * 10 || 0;
  arr[2] = arr[2] * 1 || 0;

  for (var i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  //与compareVer比较
  result = sum >= parseInt(compareVer) ? 'big' : 'small';
  return result;
}
/**
 * @module wmdaClickLog
 * @description wmda埋点
 */
function wmdaClickLog(eventID, param) {
  const params = Object.assign(window.WMDA_SDK_CONFIG, param);
  let clickLog = window.WMDA_REPORT;
  let timeClickLog;
  clearTimeout(timeClickLog);
  if (typeof clickLog == 'function') {
    //判断是否校验通过，通过就拼接detail数据提交后台
    clearTimeout(timeClickLog);
    let newParams = Object.assign({}, {
        event_id: eventID,
      },
      params
    );
    window.WMDA_REPORT && window.WMDA_REPORT('custom', newParams);
    //console.log(newParams)
  } else {
    timeClickLog = setTimeout(() => {
      this.wmdaClickLog(eventID);
    }, 1000);
  }
}
/**
 * @module throttle
 * @description 节流
 */
function throttle(func, wait, mustRun) {
  var timeout,
    startTime = new Date();

  return function() {
    var context = this,
      args = arguments,
      curTime = new Date();

    clearTimeout(timeout);
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      func.apply(context, args);
      startTime = curTime;
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args)
      }, wait);
    }
  };
}
/**
 * @module getQueryVariable
 * @description 获取url传参
 */
const getQueryVariable = (variable) => {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) { return pair[1]; }
  }
  return ('');
}
/**
 * 加载js后执行回调
 * @param {*} url
 * @param {*} callback
 */
let loadjs = (url, callback) => {
  function onload() {
    var readyState = script.readyState;
    if (typeof readyState == 'undefined' || /^(loaded|complete)$/.test(readyState)) {
      script.onload = script.onreadystatechange = null;
      script = null;
      callback && callback();
    }
  }
  var script = document.createElement('script');
  script.async = true;
  if (script.readyState) {
    script.onreadystatechange = onload;
  } else {
    script.onload = onload;
  }
  script.src = url;
  var parent = document.getElementsByTagName('head')[0] || document.body;
  parent.appendChild(script) && (parent = null);
}

/**
 * 处理数字如果小于10000直接返回
 * 如果大于10000,四舍五入后返回
 * 例如 188000 返回 19万
 * @param {*} num
 */
let dealNum = (num) => {
  if ((parseInt(num) / 100) >= 10000) {
    var baseNum = parseInt(parseInt(num / 100) / 10000);
    var lastNum = parseInt(parseInt(num / 100) % 10000 / 1000);
    if (lastNum >= 5) {
      baseNum += 1
    }
    return baseNum + "万";
  }
  return parseInt(parseInt(num) / 100);
}
//返回时间
const castTime = (t) => {
  let time = parseInt(t);
  if (time < 60) {
    return `${time}分钟`;
  } else {
    return `${(time / 60).toFixed(1)}小时`;
  }
}

/**
 * 倒计时
 */
let countTime = (end, cb) => {
  // let endTime = end.replace(/-/g, '/');
  let endTime = end;
  let nowTime = new Date().getTime();
  let leftTime = endTime - nowTime;
  let h, m, s;
  if (leftTime >= 0) {
    h = Math.floor(leftTime / 1000 / 60 / 60);
    m = Math.floor(leftTime / 1000 / 60 % 60);
    s = Math.floor(leftTime / 1000 % 60);
    if (s < 10) {
      s = "0" + s;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (h < 10) {
      h = "0" + h;
    }
    cb({
      h,
      m,
      s
    });
  } else {
    console.log('已截止');
    cb({
      h: '--',
      m: '--',
      s: '--'
    });
  }
}
/**
 * 判断是不是iphoneX
 */
const isIphoneX = () => {
  if (typeof window !== 'undefined' && window) {
    return /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812;
  }
  return false;
};

/**
 * 判断是ios还是安卓
 */
const nativeSystem = () => {
  if (typeof window !== 'undefined') {
    return !!!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? 'ios' : 'android';
  }
}

/**
 * 轮询
 */
function checkObj(callback) {
  //let clickLog = window.clickLog;
  // clearTimeout(timeClickLog);
  let timeCheck = null;
  if (window.WBAPP) {
    //判断是否校验通过，通过就拼接detail数据提交后台
    !!timeCheck && checkObj(callback);
    callback();
  } else {
    timeCheck = setTimeout(() => { checkObj(callback) }, 1000);
  }
};

/**
 * @param {url的host} host
 * @param {url的path} path
 * @param {url的参数} data
 */
const pinkUrl = (host, path, data) => {
  let url = host + path,
    index = 0;
  for (let item in data) {
    let tmpVal = data[item];
    let value = (tmpVal !== undefined ? tmpVal : '');
    let param = index++ === 0 ? `?${item}=${encodeURIComponent(value)}` : `&${item}=${encodeURIComponent(value)}`;
    url += param;
  }
  return url;
}

//获取当天剩余时间
const getRestTime = () => {
  const curDate = new Date();
  //当前时间戳
  const curTamp = curDate.getTime();
  //当日凌晨的时间戳,减去一毫秒是为了防止后续得到的时间不会达到00:00:00的状态
  const curWeeHours = new Date(curDate.toLocaleDateString()).getTime() - 1;
  //当日已经过去的时间（毫秒）
  const passedTamp = curTamp - curWeeHours;
  //当日剩余时间（毫秒数）
  var leftTamp = 24 * 60 * 60 * 1000 - passedTamp;
  return leftTamp;
}

/**
 * 埋点
 * page:pagetype
 * action:actiontype
 *
 */
//埋点方法
let log = (page = '', action = '') => {
  window.WBAPP.action.setWeblog(page, action, {
    cate: '13941'
  });
};

const setLog = (page, action) => {
  console.log(page, action, platformConfig);
  switch (platformConfig) {
    case "app-wuba": {
      log(page, action);
      break;
    }
    default:
      window.clickLog && window.clickLog(`from=m_${action}`);
  }
}


export {
  isEmptyFc,
  trim,
  compareVersion,
  throttle,
  wmdaClickLog,
  getQueryVariable,
  loadjs,
  dealNum,
  countTime,
  isIphoneX,
  nativeSystem,
  castTime,
  checkObj,
  pinkUrl,
  getRestTime,
  setLog
};
