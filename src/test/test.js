var expect = chai.expect;
// var should = chai.should();

// sample!
describe('Compare Numbers', function() {
  it('1 should equal 1', function() {
    expect(1).to.equal(1);
  });
});

describe('Find Intersection', function() {
  it('Should return the matching values between two arrays of numbers', function() {
    expect(intersection([1,2,3], [1,3,5])).to.deep.equal([1,3]);
  });
  it('Should return the matching values between two arrays of strings', function() {
    expect(intersection(['cat', 'dog', 'parrot'], ['hamster', 'apple', 'rollercoaster', 'cat'])).to.deep.equal(['cat']);
  });
  it('Should return an error if there are not two arrays', function() {
    expect(intersection('something', 234)).to.equal('Please enter arrays for both arguments');
  });
  it('Should return an error if there are not two arguments', function() {
    expect(intersection([1,2,3])).to.equal('Please enter arrays for both arguments');
  });
});
