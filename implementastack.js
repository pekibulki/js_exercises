function initStack() {
  return {
    collection: [],
  };
}

function push(obj, element) {
  obj.collection.push(element);
}

function pop(obj) {
  return obj.collection.pop();
}

function peek(obj) {
  return obj.collection[obj.collection.length - 1];
}

function isEmpty(obj) {
  return obj.collection.length === 0;
}

function clear(obj) {
  obj.collection = [];
}

const myStack = initStack();
//push(myStack, 1);
//push(myStack, 2);
//clear(myStack);
//console.log(myStack.collection);
push(myStack, undefined);
console.log(peek(myStack));
console.log(isEmpty(myStack));
