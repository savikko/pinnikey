Pinnikey
============

This is Pinnikey. Skydiving management system built with Meteor.

Beta version runs at http://beta.pinnikey.com
Android .apk can be found from public/apk (beta.pinnikey.com/Pinnikey_signed.apk)

Components:

* Logbook (partially done)
* Dropzone list (partially done)
* Manifesting (few skeletons done)
* Gear management (not done)
* Dropzone communications (notifications to local skydivers, not done)
* Events (not done)
* Pilot functions (including logging in with qr-code etc, not done)
* Statistics:
  * Dropzone-specific
  * Skydiver-specific

Deployment help
==============

Deployment to your local computer (starting at localhost:3000 as default:

```
meteor
```

Building android version:
```
meteor build /path/to/build/pinnikey-build --server https://beta.pinnikey.com
cd /to/right/path
...jarsigner
...zipalign
```

Deploying to beta.pinnikey.com (with Meteor Up):
In pinnikey-deploy directory 
```
mup deploy
```