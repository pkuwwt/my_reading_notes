
# Android Development FAQ

## How to get the default `debug.keystore` and corresponding SHA1?

The SHA1 of the current keystore is usually required by 3rd service. We can get it by:
```shell
keytool -storepass android -list -keystore ~/.android/debug.keystore
```
