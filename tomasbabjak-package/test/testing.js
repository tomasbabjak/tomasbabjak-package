const assert = require("assert");
describe("testing mocha", function() {

  const {
    testFunc
  } = require("../src/tb.js");

  describe("First test", function() {

    it("Test Hello World", function() {
      assert.deepStrictEqual(testFunc(), 'Hello World',
        "Object.keys() does not return Symbols");
    });
  })
})
