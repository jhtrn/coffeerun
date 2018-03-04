(function(window) {
  "use strict";
  var PAYMENT_FORM_SELECTOR = "[payment-order=\"form\"]";
  var POPUP_SELECTOR = "[data-payment-modal=\"popup\"]";
  var App = window.App;
  var Payment = App.Payment;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var PopUp = App.PopUp;
  var myPayment = new Payment(new DataStore());
  window.myPayment = myPayment;
  var popUp = new PopUp(POPUP_SELECTOR);
  var paymentFormHandler = new FormHandler(PAYMENT_FORM_SELECTOR);
  var $ = window.jQuery;

  paymentFormHandler.addSubmitHandler(function(data) {
    myPayment.createPayment.call(myPayment, data);
    popUp.addPopUpInfo.call(popUp, data);
    $("#paymentPopUp").modal();
  });
  /* eslint-disable no-console */
  console.log(paymentFormHandler);
})(window);
