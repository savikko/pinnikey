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

Collections
==============

Currently there are following "main" collections:

* Users (with user profile)
* Rigs
  * Gear linked to user with managers -object
* Logbook
  * Logbook is linked to user with createdBy
* Aircrafts
  * List of aircrafts, including weight/maxjumpers data
* Dropzones
  * List of dropzones, including geolocation data. Linked to users (as managers) and aircrafts.
* Loads
  * List of loads, currently every load has dropzone and aircraft info, and (auto)increment value for load number by date. One document is one load.

Planned (which will probably change somehow) workflows
=========

##User registration

Pinnikey should ask user's current licenses and all the info which is relevant to skydiving operations (weight etc).
If should be able to mark himself/herself as a pilot also.

##Registration to dropzone

User should be able to registrate to dropzone, reading all the documents dropzone managers want new skydivers to read. There may be documents regarding aircraft (loading instructions, door opening instructions) or dropzone (landing zone instructions etc).
When user registrates to dropzone, dropzone manager should next do some kind of authorization which includes checking his/her logbook and rig status.
There may be (historical reasons) dropzone-specific accounts for skydivers. Used usually for reporting/accounting.

##Manifesting to load

User should be able to manifest by himself/herself by mobile by logging in with his/her own credentials. There should be option to manifest any (who has registrated to dropzone) skydiver by logging in with some sort of 'manager' account. That will also allow smalled dropzones to use one public computer for self-manifesting without logging in separately.

Team manifesting should not be MVP feature. Student manifesting should be done for MVP as simple as it's possible.

##Ground person functions

Ground person should be able to see current load status (defined by pilot) and do (optionally) post-manifesting.

##Pilot functions

Pilot should be able to see detailed info on loads: what kind of jumpruns should we fly, is there some special occasions.
Pilot should be able to mark different status regarding pre-load, load and post-load:

* People on board
* Takeoff
* Skydivers dropped (jumprun by jumprun possibly)
* Coming down (putting 5 min call)
* Touchdown
* Kerosene fillings

## Dropzone reporting functions

Dropzone should be able to print out all the loads day by day in some machine-readable format.

Miscellaneous instructions
=======================

Building android version (this command has few dependencies, please google for help):
```
meteor build /path/to/build/pinnikey-build --server http://server-to-connect
cd /to/right/path
...jarsigner
...zipalign
```
