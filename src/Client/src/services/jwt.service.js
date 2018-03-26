/*export default class JWT {
  constructor(AppConstants, $window) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$window = $window;
  }
*/
  function save(token) {
    window.localStorage[this._AppConstants.jwtKey] = token;
  }

  function get() {
    return this._$window.localStorage[this._AppConstants.jwtKey];
  }

  function destroy() {
    this._$window.localStorage.removeItem(this._AppConstants.jwtKey);
  }/*
}*/
export {save,get,destroy};