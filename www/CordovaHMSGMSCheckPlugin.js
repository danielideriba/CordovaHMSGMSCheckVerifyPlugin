var exec = require("cordova/exec");

module.exports = {
  isHmsAvailable: function (success, error, arg0) {
    exec(success, error, "CordovaHMSGMSCheckPlugin", "isHmsAvailable", [arg0]);
  },
  isGmsAvailable: function (success, error, arg0) {
    exec(success, error, "CordovaHMSGMSCheckPlugin", "isGmsAvailable", [arg0]);
  }
}

