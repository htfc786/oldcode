// xxx
var storage = {
  getItem: function (sKey) {
    if (!sKey || !this.hasOwnProperty(sKey)) {
      return null
    }
    // TODO
    return unescape(
      document.cookie.replace(
        new RegExp(
          '(?:^|.*;\\s*)' +
          /* eslint disable */
          escape(sKey).replace(/[\-\.\+\*]/g, '\\$&') +
          '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*'
        ),
        '$1'
      )
    )
  },
  key: function (nKeyId) {
    return unescape(
      document.cookie
        .replace(/\s*\=(?:.(?!;))*$/, '')
        .split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[nKeyId]
    )
  },
  setItem: function (sKey, sValue) {
    if (!sKey) {
      return
    }
    document.cookie =
      escape(sKey) +
      '=' +
      escape(sValue) +
      '; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/'
  },
  length: 0,
  removeItem: function (sKey) {
    if (!sKey || !this.hasOwnProperty(sKey)) {
      return
    }
    document.cookie =
      escape(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
  },
  hasOwnProperty: function (sKey) {
    return new RegExp(
      '(?:^|;\\s*)' +
      escape(sKey).replace(/[\-\.\+\*]/g, '\\$&') +
      '\\s*\\='
    ).test(document.cookie)
  }
}
var fiyLocalStorage
try {
  fiyLocalStorage = (window.localStorage || storage)
} catch (err) {
  fiyLocalStorage = storage
}
window.fiyLocalStorage = fiyLocalStorage

export default fiyLocalStorage



// WEBPACK FOOTER //
// ./src/api/checkStorage.js