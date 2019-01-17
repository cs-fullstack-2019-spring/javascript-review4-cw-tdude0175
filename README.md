# JavaScript Review 4 Classwork

Put the start of your program in a main function in your JavaScript file. It's OK to just put all solutions in one JavaScript File as separate functions, but be sure to clearly separate each solution with comments

//////////////////////////////////////////////////////////////////////////////////////////

### Problem 1:
Write a JavaScript function that accepts a sentence of words all in lowercase, and returns every other word in all caps.  

ex. ```in a galaxy far far away``` -> ```in A galaxy FAR far AWAY```

### Problem 2:
Write a JavaScript function that accepts a word in all lowercase or in all uppercase, and returns the word in the opposite case.

ex. ```hello``` -> ```HELLO``` or ```HOWDY``` -> ```howdy```

### Problem 3:

#### Return first n number of elemnts

Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

ex: 
```
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],1));
```
Expected Output : 
```
[7, 9, 0] 
[7] 
```
#### Return last n number of elements

Write a JavaScript function to get the last n element(s) of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

ex:
```
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));
```
Expected Output : 
```
[9, 0, -2] 
[7, 9, 0, -2]
```
### Problem 4:
Write a JavaScript function to remove an element with a specific value from an array.

ex:
```
console.log(remove_array_element([2, 5, 9, 6], 5));
```
Expected Output:
```
[2, 9, 6]
```

### Problem 5:
Create a new empty array called ```pet_list```. Add 3 pet objects to the ```pet_list``` array (each pet should have a type and a breed property) You can choose the pets.

Add a new property called ```age``` to each pet instance in ```pet_list```

Assign a number for the ```age``` for all of the pets

Iterate the list of pets and print the properties for each pet

BONUS:

### Multiplications table

Write a function that writes in the console the multiplication table (from 1 to 10). Hint: use ``` "\n" ``` to insert a newline.

![multiplication](multiplication.png)
