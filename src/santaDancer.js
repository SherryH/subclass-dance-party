var makeSantaDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src=src/img/giphy-santa.gif>');
};

makeSantaDancer.prototype = Object.create(makeDancer.prototype);