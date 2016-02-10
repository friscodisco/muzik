$(document).ready(function() {
  if (Cookies.get('userId')) {
    $.ajax({
      url: '/users/' + Cookies.get('userId'),
      method: 'get'
    }).then(function(data) {
      $('.new-user-container').html("<p>Welcome back " + data.name + "</p>")
    });
  }

  $('.js-create-user').on('click', function() {
    var name = $('.js-user-name').val();
    $.ajax({
      url: '/users',
      method: 'post',
      data: {
        user: { name: name }
      }
    })
    .then(function(data) {
      Cookies.set('userId', data.id);
      $('.new-user-container').html("<p>Welcome " + data.name + "!</p>");
    })
    .fail(function(data) {
      $('.new-user-container').html("<p>" + data.responseJSON.error + "</p>");
    });
  });
});
