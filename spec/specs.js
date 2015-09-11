describe("findReplace", function () {
  it("will find a single word in a string and replace it with another", function () {
    expect(findReplace("i think your face is cool", "face", "mom")).to.equal("i think your mom is cool");
  });
});
