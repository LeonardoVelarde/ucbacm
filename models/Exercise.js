var Exercise = function(name, category, difficulty, descriptionString){
  this.name = name;
  this.category = category;
  this.difficulty = difficulty;
  this.descriptionString = this.escapeHTML(descriptionString);
};

Exercise.prototype.escapeHTML = require('escape-html');

module.exports = Exercise;
