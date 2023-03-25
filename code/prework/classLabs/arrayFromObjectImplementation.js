let arrayObject = {
  length: 0,
  
  update_length: function (){
    ++this.length;
  },
  
  push: function(entry){
    this[entry.key] = entry.value;
    this.update_length();
  }
}

for (let i = 0 ; i <= 5 ; ++i){
  arrayObject.push({key: i, value: i});
}

console.log(arrayObject);
console.log(arrayObject.length);