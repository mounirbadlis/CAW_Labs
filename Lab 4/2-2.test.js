// The last n elements of an array.
function last(array, n) {
    if (array == null)
    return [];
    if (n == null)
    return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
}

describe('last', () => {
    test('returns an empty array when input array is null', () => {
      expect(last(null, 3)).toEqual([]);
    });
  
    test('returns the last n elements of the array', () => {
      expect(last([1, 2, 3, 4, 5], 2)).toEqual([4, 5]);
    });
  
    test('returns the last element if n is null', () => {
      expect(last([1, 2, 3])).toEqual(3);
    });
  });