// Gonna build a damn stack using an array.

function Stack() { 
    this.dataStore = []; 
    this.top = 0; 
    this.push = push; 
    this.pop = pop; 
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

// When we push a new element onto a stack, 
// we have to store it in the top position and 
// increment the top variable so that the new top 
// is the next empty position in the array. 
// Here is the code:
function push(element) { 
    this.dataStore[this.top++] = element;
}

// The pop() function does the reverse of the push() function—
// it returns the element in the top position of 
// the stack and then decrements the top variable:
function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top-1];
}

function length() { 
    return this.top;
}

function clear() {
    this.top = 0;
}

