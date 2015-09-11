describe("findReplace", function () {
  it("will find all instances of a word in a string and replace it with another", function () {
    expect(findReplace("i think your face is cool", "face", "mom")).to.equal("i think your mom is cool");
  });

  it("will convert all input to lower case", function () {
    expect(findReplace("i WAnT chEEtos", "cheetos", "fries")).to.equal("i want fries");
  });
});
