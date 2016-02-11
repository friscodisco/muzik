App = {};
App.cable = ActionCable.createConsumer('/cable');

App.chat = App.cable.subscriptions.create("ChatChannel", {
  connected: function() {

  },

  disconnected: function() {

  },

  received: function(data) {
    var receivedMessage = data['message'];
    $('.js-messages').append("<p>" + receivedMessage + "</p>");
  },

  speak: function(message) {
    this.perform('speak', {
      message: message
    }); 
  }    
});

$(document).ready(function() {
  $('.js-add-message').on('click', function() {
    var userId = Cookies.get('userId')
    if (!userId) {
      alert('Please register your name');
      return false;
    }

    var message = $('.js-new-message').val().trim();
    if (!message) {
      alert('Please fill out your message');
      return false;
    }

    $('.js-new-message').val('');
    App.chat.speak(message);
  });
});
