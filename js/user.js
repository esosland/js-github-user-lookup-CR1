var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

// exports.GithubUser = function(){
// }
//
// exports.GithubUser.prototype.getGithubUser = function() {
//   $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response) {
//     // $('.showUser').text("GitHub user: " + user + " Repositories: " + ?);
//     console.log(response);
//   }).fail(function(error) {
//     $('.showUser').text(error.responseJSON.message);
//   });
// }
