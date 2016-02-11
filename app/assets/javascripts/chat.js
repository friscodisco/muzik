App = {};
App.cable = ActionCable.createConsumer('/cable');

App.chat = App.cable.subscriptions.create("ChatChannel", {
  connected: function() {

  },

  disconnection: function() {

  },

  received: function(data) {
    data['message']
  },

  speak: function(message) {
    this.perform('speak', {
      message: message
    }); 
  }    
});

$('.js-add-message').on('click', function() {
  var message = $('.js-message').val();

  App.chat.speak(message);
});
