ContactManager.module("ContactsApp.List", function (List, ContactManager, Backbone, Marionette, $, _) {
  List.Contact = Marionette.ItemView.extend({
    template: "#contact-list-item",
    tagName: "tr",
    events: {
      "click": "highlightName",
      "click button": "deleteClicked"
    },
    highlightName: function () {
      this.$el.toggleClass("warning");
    },
    deleteClicked: function () {
      alert("Delete button was clicked");
      e.stopPropagation();
    }
  });

  List.Contacts = Marionette.CompositeView.extend({
    tagName: "table",
    className: "table table-hover",
    template: "#contact-list",
    childView: List.Contact,
    childViewContainer: "tbody"
  });
})