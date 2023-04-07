const obj = {
    name: "Bruce",
    age: 25,
    "key-three": true,
    sayMyName: function() {console.log(this.name)}
}

obj.hobby = "football"
console.log(obj['key-three'])
console.log(obj)

// We delete element with help of the delete keyword
delete obj.hobby

// Object Method:
Object.keys() //Return arrays with all the keys of the object
Object.values() //Return arrays with all the values of the object
Object.entries() //Return arrays with all the keys-values pairs of the object