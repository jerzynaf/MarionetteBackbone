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

});