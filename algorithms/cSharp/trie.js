class TrieNode {
  constructor(val) {
    this.val = val;
    //use value when we create a new node for a letter
    this.children = [];
    //an alternative children attempt
    this.childrenDict = {
      a: null,
      b: null,
      c: null,
      d: null,
      e: null,
      f: null,
      g: null,
      h: null,
      i: null,
      j: null,
      k: null,
      l: null,
      m: null,
      n: null,
      o: null,
      p: null,
      q: null,
      r: null,
      s: null,
      t: null,
      u: null,
      v: null,
      w: null,
      x: null,
      y: null,
      z: null,
    };
    //use children when one node points to another
    this.isWord = false;
    //use isWord when we reach the end of a word
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode("");
  }
  addDict(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      //an index for each letter of the word
      let currentLetter = word[i].toLowerCase;
      if (!currentNode.childrenDict[currentLetter]) {
        //if letter DOES NOT exist in the current node's dictionary of children nodes?
        let newNode = new TrieNode(currentLetter); //we create a new node with the letter
        currentNode.childrenDict[currentLetter] = newNode; //add that node into the dict
        console.log("Added", currentLetter);
      }
      currentNode = currentNode.childrenDict[currentLetter];
    }
    currentNode.isWord = true;
  }
  find(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let currentLetter = word[i].toLowerCase;

      //does the current letter have an entry in the current node's dictionary
      if (currentNode.childrenDict[currentLetter]) {
        //if so, use that letter's entry as the current node
        currentNode = currentNode.childrenDict[currentLetter];
      } else {
        //if not, the letter was never added in so the word cannot be completed
        return false;
      }
    }
    //we finish looping through the letters of the provided word
    //we need to check if the letter/node we finished at marks the end of a word
    if (currentNode.isWord) {
      return true;
    }
    return false;
  }
}

myTrie = new Trie();
myTrie.addDict("Hi");
myTrie.addDict("Hip");
console.log(myTrie.find("h"));
