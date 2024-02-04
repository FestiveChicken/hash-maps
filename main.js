if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bound");
  }

  class HashMap {
    stringToNumber(string) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < string.length; i++) {
          hashCode = primeNumber * hashCode + string.charCodeAt(i);
        }
      
        return hashCode;
      }
      
    hash(key) {
        return stringToNumber(key)
      }
    
    set(key, value) {
        
    }
  }