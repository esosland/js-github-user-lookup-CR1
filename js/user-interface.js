var GithubObject = require ('./../js/user.js').GithubObject;
// var getRepos = require('./../js/user.js').getRepos;

$(document).ready(function() {
  var currentGithubObject = new GithubObject();
  $('#displayUsername').click(function() {
    $('.showRepos').empty();
    var user = $('#username').val();
    $('#username').val("");
    currentGithubObject.getRepos(user);
  });
});
