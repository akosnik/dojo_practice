// Restate
// Imagine an array of numbers represents a bar graph, what is the largest closed area you can make between two bars using only horizontal lines
// The the array value is the height a bar, the distance between two two index is the width

// Assumptions
// the height of bucket made by two bars is the smaller of the two values
// the width of bucket made by two bars is the difference between their index values
// the bucket area is min(h1,h2)*(i1-i2)
// if i move i2 forward and change h2, the bucket gets larger or smaller based on how min(h1,h2) changes
// if there is a larger value on both sides of a number it can be discounted.
// the largest width possible is at the beginning and end of array
// whichever height is smaller should move index inwards b/c height can't get larger unless smaller moves

var maxArea = function (heights) {
  let l = 0;
  let r = heights.length - 1;
  let maxA = 0;
  while (l < r) {
    let h1 = heights[l];
    let h2 = heights[r];
    maxA = Math.max(maxA, Math.min(h1, h2) * (r - l));
    if (h1 < h2) {
      l++;
    } else {
      r--;
    }
  }
  console.log(maxA);

  return maxA;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
