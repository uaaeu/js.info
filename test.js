'use strict';

describe('pow', function() {

  // it('3-rd power of 2 is: 8', function() {
  //   assert.equal(pow(2, 3), 8);
  // });

  // it('3-rd power of 3 is: 27', function() {
  //   assert.equal(pow(3, 3), 27);
  // });

  it('for negative n the result is NaN', function() {
    assert.isNaN(pow(2, -1));
  });

  it('for non-integer n the result is NaN', function() {
    assert.isNaN(pow(2, 1.5));
  })

  describe('raises x to power 3', function() {
    
    // before(() => alert('testing started'));
    // after(() => alert('testing finished'));

    // beforeEach(() => alert('enter a test'));
    // afterEach(() => alert('exit a test'));
    
    function test(x) {
      let expected = x * x * x;
      it(`3-rd power of ${x} is: ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }
  
    for (let x = 1; x < 5; x++) {
      test(x);
    }

  });


});