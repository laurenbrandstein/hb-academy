//Write code here

/* User Story:
	I want to use a binary search tree in the following code:
*/
const binarySearchTree: BinarySearchTree<number> = new BinarySearchTree<number>();
binarySearchTree.insert(4);
binarySearchTree.insert(6);
binarySearchTree.insert(8);
binarySearchTree.insert(2);
binarySearchTree.insert(2);
binarySearchTree.insert(1);
console.log(binarySearchTree.search(1) === true); //should print true
binarySearchTree.delete(2)
console.log(binarySearchTree.search(2) === true); //should print true
binarySearchTree.delete(2)
console.log(binarySearchTree.search(2) === false);  //should print true


/* User Story:
	I want to use a trie in the following code:
*/
const trie: Trie<String> = new Trie<String>();
trie.insert('joseph')
trie.insert('josephene')
trie.insert('jose')
trie.insert('michael')
trie.insert('mitchel')
console.log(trie.search('mitchel') == true); //should print true
trie.delete('mitchel');
console.log(trie.search('mitchel') == false); //should print true

/* User Story:
	I want to refer to use trees interchangably:
*/

const tree: Tree<String> = new Trie<String>();
trie.insert('joseph')
trie.insert('josephene')
trie.insert('jose')
console.log(trie.search('jose') == true); //should print true
trie.delete('jose');
console.log(trie.search('jose') == false); //should print true



