var assert = require('assert');

const { DependencySorter } = require('../src/function.js');
const sorter = new DependencySorter();

const array1 = ['KittenService: CamelCaser', 'CamelCaser: '];
const result1 = 'CamelCaser, KittenService';

const array2 = ['KittenService: ','Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser: KittenService','Fraudstream: Leetmeme','Ice: '];
const result2 = 'KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream';

const errorArray = ['KittenService: ', 'Leetmeme: Cyberportal', 'Cyberportal: Ice', 'CamelCaser: KittenService', 'Fraudstream: ', 'Ice: Leetmeme'];
const errorResult = 'Error - dependencies contain cycles.';

describe('#printPackages', function() {
  it('should return the correct string of packages', function() {
    const result = sorter.getOutput(array1);
    assert.equal(result, result1)
  });
  it('should return the correct string of packages', function() {
    const result = sorter.getOutput(array2);
    assert.equal(result, result2)
  });
  it('should return an error if array contains cycles', function() {
    const result = sorter.getOutput(errorArray);
    assert.equal(result, errorResult)
  });
});
