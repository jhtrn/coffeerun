(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function PopUp(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  PopUp.prototype.addPopUpInfo = function(paymentInfo) {
    // Create a new instance of a row, using the coffee order info
    var popUpElement = new Popup(paymentInfo);
    this.$element.append(popUpElement.$element);
  };

  function Popup(paymentInfo) {
    var $innerDiv = $("<div></div>", {
      id: "paymentPopUp",
      class: "modal"
    });

    var $p = $("<p></p>");

    var output = "Thank you for your payment, " + paymentInfo.title + " " + paymentInfo.username;

    var $modalClose = $("<a></a>", {
      href: "#",
      rel: "modal:close"
    });

    var close = "Close";

    $p.append(output);
    $modalClose.append(close);
    $innerDiv.append($p);
    $innerDiv.append($modalClose);

    // make subtree available as a property of instance because
    // constructors should never have return statement
    this.$element = $innerDiv;
  }

  App.PopUp = PopUp;
  window.App = App;
})(window);
