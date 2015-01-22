Pinnikey
============

This is Pinnikey. Skydiving management system built with Meteor.

Test version runs at http://beta.pinnikey.com

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

How to start developing?
==============

First, install Meteor (https://www.meteor.com/install). Works on OS X and Linux. If running Windows, then first try to convert yourself to better OS and if you are not able to do that, read <http://win.meteor.com/>

If you are not familiar with Meteor, I recommend you to purchase and read Discover Meteor <https://www.discovermeteor.com/>.

Then, clone this repository to your environment (If you are not familiar with git, google for some instructions).

When you have meteor installed and this repository cloned, start meteor on your project directory:
```
meteor
```
Command launches meteor instance and you should see Pinnikey on http://localhost:30000

Then, explore repository with *insert-your-favorite-text-editor-here* (Sublime Text for example or emacs or vi) and make your edits and commit your changes to your own branch.

Miscellaneous instructions
=======================

Building android version (this command has few dependencies, please google for help):
```
meteor build /path/to/build/pinnikey-build --server http://server-to-connect
cd /to/right/path
...jarsigner
...zipalign
```
