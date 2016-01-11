ContactManager.module("Entities", function (Entities, ContactManager, Backbone, Marionette, $, _) {
  //var alertPrivate = function (message) {
  //  alert("Private alert: " + message);
  //};

  //Entities.alertPublic = function (message) {
  //  alert("I will now call alertPrivate" + message);
  //}

  Entities.Contact = Backbone.Model.extend({
    defaults: {
      //firstName: "Filip",
      //phoneNumber: "No number"
    }
  });

  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.Contact,
    comparator: function (item) {
      return [item.get("firstName"), item.get("lastName")];
    }
  });

  var contacts;

  var initializeContacts = function () {
    contacts = new Entities.ContactCollection([
      {
        id: 1,
        firstName: "Bob",
        lastName: "Brigham",
        phoneNumber: "555-0163"
      },
      {
        id: 2,
        firstName: "Alice",
        lastName: "Arten",
        phoneNumber: "555-0184"
      },
      {
        id: 3,
        firstName: "Charlie",
        lastName: "Campbell",
        phoneNumber: "555-0129"
      }
    ]);
  };
  var API = {
    getContactEntities: function () {
      if (contacts === undefined) {
        initializeContacts();
      }
      console.log("!!");
      return contacts;
    }
  };

  ContactManager.reqres.setHandler("contact:entities", function () {
    console.log("!");
    return API.getContactEntities();
  });

});