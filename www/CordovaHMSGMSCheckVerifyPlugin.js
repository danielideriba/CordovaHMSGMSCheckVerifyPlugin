var exec = require("cordova/exec");



module.exports = {
  isHmsAvailable: function (success, error, arg0) {
    exec(success, error, "CordovaHMSGMSCheckVerifyPlugin", "isHmsAvailable", [arg0]);
  },
  isGmsAvailable: function (success, error, arg0) {
    exec(success, error, "CordovaHMSGMSCheckVerifyPlugin", "isGmsAvailable", [arg0]);
  }
}

