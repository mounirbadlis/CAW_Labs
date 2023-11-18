
// The first n elements of an array.
function first(array, n) {
  if (array == null || n<=0)
  return [];
  if (n == null)
  return array[0];
  return array.slice(0, n);
}

  
describe('first', () => {
  test('returns an empty array when input array is null or empty', () => {
    expect(first(null, 5)).toEqual([]);
    expect(first([], 3)).toEqual([]);
  });

  test('returns the first n elements of the array', () => {
    expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  });

  test('returns the entire array if n is greater than array length', () => {
    expect(first([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });
});




