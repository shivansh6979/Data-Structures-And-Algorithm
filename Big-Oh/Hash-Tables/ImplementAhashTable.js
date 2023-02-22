class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hashKey(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  //for adding new entries in a hash table

  set(key, value) {
    let address = this._hashKey(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    console.log(this.data);
    return this.data;
  }

  // For extracting data from a hash table

  get(key) {
    let address = this._hashKey(key);
    let currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]; // Generally a get method in hash just returns the value of the hash
        }
      }
    }
    return undefined;
  }

  // for getting all keys of a hash table
  keys() {
    let keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  // Deleting a particular item
  delete(key) {
    let address = this._hashKey(key);
    let currentBucket = this.data[address];
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        console.log("dataaaaaaaaaaa", delete this.data[i]);

        console.log("currentBucket", currentBucket);
      }
    }
    return this.data;
  }
}

const myTable = new HashTable(2);
myTable.set("shivansh", 100);
myTable.set("priya", 200);
console.log("Get data", myTable.get("priya"));
console.log("keys data", myTable.keys());
console.log("Delete", myTable.delete("shivansh"));
