var apiKey = require('./../.env').apiKey;

exports.GithubUser = function(){
}

exports.GithubUser.prototype.getRepos = function() {
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response) {
    // $('.showUser').text("GitHub user: " + user + " Repositories: " + ?);
    console.log(JSON.stringify(response));
  }).fail(function(error) {
    $('.showUser').text(error.responseJSON.message);
  });
}
