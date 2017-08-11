function Queue() { 
    this.dataStore = []; 
    this.enqueue = enqueue; 
    this.dequeue = dequeue; 
    this.pointer = pointer; 
    this.toString = toString; 
    this.empty = empty;
}

function enqueue(element) { 
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function pointer() {
      return this.pointer = (this.dataStore.length + pointer +1) % this.dataStore.length;
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n"; 
    }
    return retStr; 
}

function empty() {
    if (this.dataStore.length == 0) {
        return true; 
    }
    else {
        return false;
    } 
}
