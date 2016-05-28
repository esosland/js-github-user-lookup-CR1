var apiKey = require('./../.env').apiKey;

exports.GithubObject = function(){
}

exports.GithubObject.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response) {
    var result = 'Github User: ' + user + "<br>Repository names:<br>";
    response.forEach(function(repo) {
      result += repo.name;
      if (repo.description !== '') {
        result += ' - ' + repo.description;
      }
      result += "<br>";
    });
    $('.showRepos').append(result);
  }).fail(function(error) {
    $('.showRepos').text("Unable to find user; please try again.");
  });
}
