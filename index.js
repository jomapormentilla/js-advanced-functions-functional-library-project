const nestedArr = [1, [2, 3], [[4, 5], 6, [7, [8, 9]]]]

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function( collection, callback ) {
      let _collection

      if (collection instanceof Array) {
        _collection = collection
      } else {
        _collection = Object.values(collection)
      }

      for(let i=0; i<_collection.length; i++) {
        callback(_collection[i])
      }
        
      return collection
    },

    map: function( collection, callback ) {
      const arr = []
      let _collection

      if (collection instanceof Array) {
        _collection = collection
      } else {
        _collection = Object.values(collection)
      }

      for(let i=0; i<_collection.length; i++) {
        arr.push(callback(_collection[i]))
      }

      return arr
    },

    reduce: function( collection, callback, acc=0) {
      let result, i
      
      if (acc === 0) {
        result = collection[0]
        i = 1
      } else {
        result = acc
        i = 0
      }

      for(i; i<collection.length; i++) {
        result = callback(result, collection[i], collection)
      }

      return result
    },

    find: function( collection, predicate ) {
      let result
      for(let i=0; i<collection.length; i++) {
        if (!!predicate(collection[i])) {
          result = collection[i]
          break
        }
      }
      return result
    },

    filter: function( collection, predicate ) {
      let result = []
      for(let i=0; i<collection.length; i++) {
        if (!!predicate(collection[i])) {
          result.push(collection[i])
        }
      }
      return result
    },

    size: function( collection ) {
      let counter = 0, _collection

      if (collection instanceof Array) {
        _collection = collection
      } else {
        _collection = Object.keys(collection)
      }
      
      for(let i=0; i<_collection.length; i++) {
        counter++
      }
      return counter
    },

    first: function( array, num=0 ) {
      let result = []
      
      if (num === 0) {
        result = array[0]
      } else {
        for(let i=0; i<num; i++) {
         result.push(array[i]) 
        }
      }
      
      return result
    },

    last: function( array, num=0 ) {
      let result = []
      
      if (num === 0) {
        result = array[array.length-1]
      } else {
        for(let i=array.length-1; i>=array.length-num; i--) {
         result.unshift(array[i]) 
        }
      }
      
      return result
    },

    compact: function( array ) {
      let result = []

      for(let i=0; i<array.length; i++) {
        if (!!array[i]) {
          result.push(array[i])
        }
      }

      return result
    },

    sortBy: function( array, callback ) {
      let newArray = []

      for( const el of array ){
        newArray.push(el)
      }

      return newArray.sort(function(a,b){
        return callback(a) - callback(b)
      })
    },

    flatten: function( array, shallow ) {
      let result = []
      
      if (!!shallow) {
        for(let el of array ) {
          result.push(el)
        }
      } else {
        let iterate = (arr=array) => {
          for( let el of arr ) {
            if (el instanceof Array) {
              iterate(el)
            } else {
              result.push(el)
            }
          }
        }
      }

      return result
    },

    uniq: function( array, isSorted, callback ) {
      let newArray = []
      for(let i=0; i<array.length; i++) {
        if (!newArray.includes(array[i])) {
          newArray.push(array[i])
        }
      }

      return newArray
    },

    keys: function( object ) {
      let arr = []
      for( const keys in object ) {
        arr.push(keys)
      }
      
      return arr
    },

    values: function( object ) {
      let arr = []
      for( const keys in object ) {
        arr.push(object[keys])
      }

      return arr
    },

    functions: function( object ) {
      let arr = []
      for( const keys in object ) {
        if (typeof(object[keys]) === "function") {
          arr.push(keys)
        }
      }

      return arr.sort()
    },
  }
})()

fi.libraryMethod()
