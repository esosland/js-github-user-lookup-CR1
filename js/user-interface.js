var getRepos = require('./../js/user.js').getRepos;

$(document).ready(function() {
  $('#displayUsername').click(function() {
    getRepos();
  });
});
