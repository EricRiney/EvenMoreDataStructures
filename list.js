// abstract data type (ADT) list implementation. 
// kinda... I think.

function List() {
   this.listSize = 0;
   this.pos = 0;
   this.dataStore = [];
   this.clear = clear;
   this.find = find;
   this.toString = toString;
   this.insert = insert;
   this.append = append;
   this.remove = remove;
   this.front = front;
   this.end = end;
   this.prev = prev;
   this.next = next;
   this.length = length;
   this.currPos = currPos;
   this.moveTo = moveTo;
   this.getElement = getElement;
   this.length = length;
}

// The append() function appends a new element onto the list 
// at the next available position, which will be equal to 
// the value of the listSize variable:
function append(element) {
   this.dataStore[this.listSize++] = element;
}

// remove() is a helper function and one of the harder 
// functions to implement in the List class
function find(element) {
   for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
         return i;
      }
   }
   return -1;
}

// remove() function uses the position returned by find() 
// to splice the dataStore array at that place. 
// After the array is modified, listSize is decremented 
// by 1 to reflect the new size of the list.
function remove(element) {
   var foundAt = this.find(element);
   if (foundAt > -1) {
      this.dataStore.splice(foundAt,1);
      --this.listSize;
      return true;
   }
   return false;
}

// ...
function toString() {
    return this.dataStore;
}

// lol
function length() { 
    return this.listSize;
}

// Clears the list
function clear() {
    delete this.dataStore; 
    this.dataStore = [];    
    this.listSize = 
    this.pos = 0;
}

// An insertion function needs to know where to insert an element, 
// so for now we will say that insertion occurs after 
// a specified element already in the list.
function insert(element, after) { 
    var insertPos = this.find(after); 
    if (insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, element); 
        ++this.listSize;
        return true;
    }
    return false; 
}

// contains() function is useful when you want to check a 
// list to see if a particular value is part of the lis
function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) { 
            return true;
        } 
    }
    return false; 
}

// This set of functions allows movement through a list, 
// and the last function, getElement(), 
// displays the current element in a list:

function front() { 
    this.pos = 0;
}

function end() {
    this.pos = this.listSize-1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos; 
    }
}

function next() {
    if (this.pos < this.listSize-1) {
        ++this.pos; 
    }
}

function currPos() { 
    return this.pos;
}

function moveTo(position) { 
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}


var fs = require('fs');

// file to array 
function grabMovies () {
    var movies = fs.readFileSync('movies.txt').toString().split("\n");
    for (var i = 0; i < movies.length; ++i) {
        movies[i] = movies[i].trim();
    }
    return movies;
}

var hellaMovies = grabMovies();

// array to our list
function arrToList(arr) {
    var list = new List();
    for (var i = 0; i < arr.length; ++i) {
       list.append(arr[i]);
    }
    return list;
}

var movieList = arrToList(hellaMovies);


console.log(movieList.toString());


// for(movie in movies) {
//     console.log(movies[movie]);
// }

// var movieList = new List();
// var customers = new List();

// for (var i = 0; i < movies.length; ++i) {
//    movieList.append(movies[i]);
// }
// print("Available movies: \n");
// displayList(movieList);
// checkOut("Jane Doe", "The Godfather", movieList, customers);
// print("\nCustomer Rentals: \n");
// displayList(customers);