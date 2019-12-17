
# Android Development FAQ

## How to get the default `debug.keystore` and corresponding SHA1?

The SHA1 of the current keystore is usually required by 3rd service. We can get it by:
```shell
keytool -storepass android -list -keystore ~/.android/debug.keystore
```

## How to solve `cannot resolve symbol` for android studio?

Two methods:

  * File -> Invalidate Cache / Restart
  * Delete all `*.iml` files and `.idea` directory, and then reopen project.


## Install apk to devices

Use `$ANDROID_SDK_ROOT/platform-tools/adb`.

List ids of the connected devices
```
adb devices
```

Install apk
```
adb -s device-id install -r /path/to/apk
```
where `-r` means replacing existed app.

