# 🗺️ JavaScript HashMap

A simple client‑side implementation of a hash map (hash table) in JavaScript, built to practice hashing functions, collision handling, and basic data structure design without relying on built‑in Map objects.

## 🛠️ Features
- **HashMap Class** with configurable bucket size  
- **`_hash(key)`** private method generating an index from a string key  
- **`set(key, value)`** to add or update entries  
- **`get(key)`** to retrieve values by key  
- **`remove(key)`** to delete entries  
- **`has(key)`** to check existence of a key  
- **`keys()`** and **`values()`** methods to list all stored keys or values  
- **Collision Handling** via separate chaining (arrays in each bucket)  
- Automatic **resize** when load factor exceeds threshold (optional bonus)

## 🧠 What I Learned
- Designing a **hash function** to distribute string keys across buckets  
- Implementing **collision resolution** using separate chaining  
- Managing **load factor** and resizing strategies for performance  
- Building a custom data structure without built‑in Map or Object shortcuts  
- Traversing buckets to implement `keys()`, `values()`, and `remove()` operations  

## 📚 Assignment Summary
This project from The Odin Project’s JavaScript curriculum guided me to:
1. Create a `HashMap` class with an internal array of buckets.  
2. Write a private `_hash(key)` method to convert keys into bucket indices.  
3. Implement `set`, `get`, `remove`, and `has` methods, handling collisions via chaining.  
4. (Optional) Track load factor and resize the bucket array to maintain O(1) average operations.  
5. Write `keys()` and `values()` to retrieve all stored entries.  
6. Test functionality by adding, retrieving, removing, and listing entries in the console.

---

Built with ❤️ by [FestiveChicken](https://github.com/FestiveChicken)
