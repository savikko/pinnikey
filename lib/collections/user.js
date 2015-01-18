Schemas.UserCountry = new SimpleSchema({
    name: {
        type: String
    },
    code: {
        type: String,
        regEx: /^[A-Z]{2}$/
    }
});

Schemas.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        optional: true
    },
    lastName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    fbprofile: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    weight: {
        type: Number,
        optional: true
    },
    phone: {
        type: String,
        optional: true
    },
    bio: {
        type: String,
        optional: true
    },
    country: {
        type: Schemas.UserCountry,
        optional: true
    },
    homedz: {
        type: SimpleSchema.RegEx.Id,
        optional: true
    },
    currentdz: {
        type: SimpleSchema.RegEx.Id,
        optional: true
    }
});

Schemas.User = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        optional: true
    },
    type: {
        type: String,
        allowedValues: ['Person', 'Organization'],
        optional: true
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
    },

    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
      // Force value to be current date (on server) upon insert
      // and prevent updates thereafter.
      createdAt: {
        type: Date,
          autoValue: function() {
            if (this.isInsert) {
              return new Date;
            } else if (this.isUpsert) {
              return {$setOnInsert: new Date};
            } else {
              this.unset();
            }
          }
      },
    profile: {
        type: Schemas.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Note that when using this package, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

Meteor.users.attachSchema(Schemas.User);

Meteor.users.allow({
  insert: function (userId, doc) {
    // only admin can insert 
    var u = Meteor.users.findOne({_id:userId});
    return (u && u.isAdmin);
  },
  update: function (userId, doc, fields, modifier) {
    console.log("user "+userId+"wants to modify doc"+doc._id);
    if (userId && doc._id === userId) {
      console.log("user allowed to modify own account!");
      // user can modify own 
      return true;
    }
    // admin can modify any
    var u = Meteor.users.findOne({_id:userId});
    return (u && u.isAdmin);
  },
  remove: function (userId, doc) {
    // only admin can remove
    var u = Meteor.users.findOne({_id:userId});
    return (u && u.isAdmin);
  }
});