# safe-serve-app

## how to install cordova?

```shell
sudo npm install -g cordova
```

## commands to create app

```shell
cordova create safe-serve

cd safe-serve/

cordova platform add browser
cordova platform add android

cordova run browser
cordova run android
```

When cloning the project you will need to solve all the node dependencies.

```shell
npm install
```

Before running the mobile app in Android you need to accept the Android SDK licenses.

In Windows you can do it like this:

```shell
cd /c/Users/user/AppData/Local/Android/Sdk/tools/bin
sdkmanager --licenses
```

