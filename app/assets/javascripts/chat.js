App = {};
App.cable = ActionCable.createConsumer('/cable');

App.chat = App.cable.subscriptions.create("ChatChannel", {
  connected: function() {

  },

  disconnected: function() {

  },

  received: function(data) {
    var receivedContent = data['content'];
    var contentAuthor = data['user_name'];
    $('.js-messages').append("<p>" + contentAuthor + " said: " + receivedContent + "</p>");
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

    var content = $('.js-new-message').val().trim();
    if (!content) {
      alert('Please fill out your message');
      return false;
    }

    $('.js-new-message').val('');
    App.chat.speak({ content: content, user_id: userId});
  });
});
