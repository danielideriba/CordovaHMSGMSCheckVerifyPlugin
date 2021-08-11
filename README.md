# Welcome to com-huawei-cordovahmsgmsverifyplugin!

this plugin is for indetify if is available Google services o Huawei Services.
Based on https://github.com/salmanyaqoob/Cordova-All-HMS-Kits/tree/master/CordovaHMSPlugin/CordovaHMSGMSCheckPlugin

# Install

    cordova plugin add com-huawei-cordovahmsgmsverifyplugin
    cordova plugin add https://github.com/horaas/CordovaHMSGMSCheckPlugin.git

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
