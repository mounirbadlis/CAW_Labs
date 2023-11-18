// String = the concatenation of all the elements of an array of Strings.
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString()); console.log(myColor.join());
console.log(myColor.join(''));


describe('concatStrings', () => {
    test('returns the concatenation of all elements in the array', () => {
      const myColor = ["Red", "Green", "White", "Black"];
      expect(concatStrings(myColor)).toEqual("RedGreenWhiteBlack");
    });
  });