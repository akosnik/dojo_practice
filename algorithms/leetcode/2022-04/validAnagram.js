var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  dict = {};
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] == null) {
      dict[s[i]] = 1;
    } else {
      dict[s[i]] += 1;
    }
    if (dict[t[i]] == null) {
      dict[t[i]] = -1;
    } else {
      dict[t[i]] -= 1;
    }
  }
  for (const v of Object.values(dict)) {
    if (v != 0) return false;
  }
  return true;
};
console.log(isAnagram("hello", "olleh"));
console.log(isAnagram("hello", "oleeh"));
