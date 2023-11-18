// Divide an array into several sub-arrays of predefined size.
function chunk(array, size){
    var chunkedArr = [];
    var index = 0;
    while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
    }
    return chunkedArr;
    }


describe('chunk', () => {
    test('divides an array into sub-arrays of predefined size', () => {
      expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
    });
  
    test('returns an empty array if input array is empty', () => {
      expect(chunk([], 3)).toEqual([]);
    });
  });