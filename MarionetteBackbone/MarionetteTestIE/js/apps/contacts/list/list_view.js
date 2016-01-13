ContactManager.module("ContactsApp.List", function (List, ContactManager, Backbone, Marionette, $, _) {
  List.Contact = Marionette.ItemView.extend({
    template: "#contact-list-item",
    tagName: "tr",
    events: {
      "click": "highlightName",
      "click button.js-delete": "deleteClicked",
      "click button.js-show": "showClicked"
    },
    highlightName: function () {
      this.$el.toggleClass("warning");
    },
    deleteClicked: function () {
      this.trigger("contact:delete", this.model);
      //e.stopPropagation();
    },
    remove: function () {
      this.$el.fadeOut(function () {
        //Marionette.ItemView.prototype.remove.call(self);
        $(this).remove();
      });
    },

    showClicked: function (e) {
      this.trigger("contact:show", this.model);
      e.preventDefault();
      e.stopPropagation();
    }

  });

  List.Contacts = Marionette.CompositeView.extend({
    tagName: "table",
    className: "table table-hover",
    template: "#contact-list",
    childView: List.Contact,
    childViewContainer: "tbody",
    //onChildviewContactDelete: function () {
    //  this.$el.fadeOut(1000, function () {
    //    $(this).fadeIn(1000);
    //  });
    //}
  });
})