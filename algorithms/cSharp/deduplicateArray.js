const deduplicateArray = (arr) => {
  let valCount = {};
  for (let i = 0; i < arr.length; i++) {
    valCount[arr[i]] = true;
  }

  output = Object.keys(valCount);
  console.log(output);

  return output;
};

deduplicateArray([0, 1, 1, 2, 5, 4, 2, 1]);
