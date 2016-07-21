var Exercise = require('../models/Exercise');
var assert = require('chai').assert;

function createExcersice(){
  return new Exercise('ExcerciseName', 'AdvancedCategory', 5, ['line1', 'line2']);
}

describe('Exercise', function() {

  it('should create a non null Exercise object', function() {
    var newExercise = createExcersice();
    assert.isNotNull(newExercise);
    assert.instanceOf(newExercise, Exercise);
  });

  it('should create an excercise with name, category and difficulty and get them', function(){
    var newExercise = createExcersice();
    assert.equal(newExercise.name, 'ExcerciseName');
    assert.equal(newExercise.category, 'AdvancedCategory');
    assert.equal(newExercise.difficulty, 5);
  });

  it('should create an excercise with a description array', function(){
    var newExercise = new Exercise('ExcerciseName', 'AdvancedCategory', 5, ['line1', 'line2']);
    assert.equal(newExercise.description.toString(), ['line1', 'line2'].toString());
  });

  it('should create an excercise and save description escaping HTML tags', function(){
    var newExercise = new Exercise('ExcerciseName', 'AdvancedCategory', 5, ["<strong></strong>", 'line2']);
    assert.equal(newExercise.description.toString(), ['&lt;strong&gt;&lt;/strong&gt;', 'line2'].toString());
  });

});
