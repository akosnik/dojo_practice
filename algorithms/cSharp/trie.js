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
    this.suggestions = [];
  }
  addDict(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      //an index for each letter of the word
      let currentLetter = word[i].toLowerCase();

      if (!currentNode.childrenDict[currentLetter]) {
        //if letter DOES NOT exist in the current node's dictionary of children nodes?
        let newNode = new TrieNode(currentLetter); //we create a new node with the letter
        currentNode.childrenDict[currentLetter] = newNode; //add that node into the dict
        // console.log("Added", currentLetter);
      }
      currentNode = currentNode.childrenDict[currentLetter];
    }
    currentNode.isWord = true;
  }
  find(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let currentLetter = word[i].toLowerCase();

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
    return currentNode.isWord;
  }
  autofill(buildWord, currentNode = this.root) {
    console.log(currentNode);

    //we need to check the current letter of the word and see if it has children nodes
    for (let i = 0; i < buildWord.length; i++) {
      let currentLetter = buildWord[i].toLowerCase();
      if (currentNode.childrenDict[currentLetter]) {
        //while there is a letter to follow up on go to that letter
        currentNode = currentNode.childrenDict[currentLetter];
      } else {
        //there's no letter to follow up on
        //there's nothing more to suggest
        return;
      }
    }
    //look at all the possible routes and go to each one using recursion
    for (let [letter, node] of Object.entries(currentNode.childrenDict)) {
      this.helperAutofill(buildWord, currentNode.childrenDict[letter]);
    }
    console.log(this.suggestions);
  }
  helperAutofill(buildWord, currentNode) {
    if (!currentNode) {
      return;
    }
    for (let [letter, node] of Object.entries(currentNode.childrenDict)) {
      if (node) {
        //if yes then build the suggested word
        buildWord += letter;
        if (node.isWord) {
          this.suggestions.push(buildWord);
        }
        return this.helperAutofill(buildWord, node);
      }
    }
  }
}

myTrie = new Trie();
myTrie.addDict("Cat");
myTrie.addDict("Cats");
myTrie.addDict("Catsup");
myTrie.addDict("Cap");
myTrie.addDict("Caps");
myTrie.addDict("Cup");
myTrie.addDict("Cups");

myTrie.autofill("Ca");
