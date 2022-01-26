const unionArrays = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let results = [];
  while (arr1[i] && arr2[j]) {
    if (arr1[i] === arr2[j]) {
      results.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      results.push(arr2[j]);
      j++;
    }
  }
  if (arr1[i]) {
    results.concat(arr1.slice(i, arr1.length));
  }
  if (arr2[j]) {
    results.concat(arr2.slice(j, arr2.length));
  }
  console.log(results);
  return results;
};
