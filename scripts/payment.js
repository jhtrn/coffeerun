(function(window) {
  "use strict";
  var App = window.App || {};

  function Payment(db) {
    this.db = db;
  }

  Payment.prototype.createPayment = function(payment) {
    /* eslint-disable no-console */
    console.log("Processing payment for " + payment.username);
    /* eslint-disable no-console */
    this.db.add(payment.username, payment);
  };

  Payment.prototype.printPayments = function() {
    var customerIdArray = Object.keys(this.db.getAll());

    customerIdArray.forEach(function(id) {
      console.log(this.db.get(id));
    }.bind(this)); //manually specify what object should be the owner
  };

  App.Payment = Payment;
  window.App = App;
})(window);
