const decToBinary = (num, result) => {
  if (num < 2) {
    result.push(num);
    return result
  }

  num = num - Math.floor(num / 2)
}