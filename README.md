# Welcome to com-huawei-cordovahmsgmsverifyplugin!

This plugin is for identify if is available Google services or Huawei Services. Based on https://github.com/salmanyaqoob/Cordova-All-HMS-Kits/tree/master/CordovaHMSPlugin/CordovaHMSGMSCheckPlugin and https://github.com/horaas/CordovaHMSGMSCheckPlugin

# Install

    cordova plugin add com-huawei-cordovahmsgmsverifyplugin
    cordova plugin add https://github.com/danielideriba/CordovaHMSGMSCheckVerifyPlugin.git

## Use

    CordovaHMSGMSCheckPlugin.isGmsAvailable(function (response) {
      alert("is GMS available in this device? "+response);
    }, function (error) {
      alert(" Error: "+error);
    });

    CordovaHMSGMSCheckPlugin.isHmsAvailable(function (response) {
      alert("is HMS available in this device?"+response);
    }, function (error) {
      alert(" Error: "+error);
    });
