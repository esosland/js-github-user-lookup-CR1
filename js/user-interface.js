var GithubUser = require ('./../js/user.js').GithubUser;
var getRepos = require('./../js/user.js').getRepos;

$(document).ready(function() {
  var currentGithubUser = new GithubUser();
  $('#displayUsername').click(function() {
    var user = $('#username').val();
    $('#username').val("");
    currentGithubUser.getRepos(user);
  });
});
