## Part 1a
2. values added: 20
3. final result: 20
4. values added: 20
5. Error, because 'result' is only defined within the if-statement and can only be accessed in that scope
6. Error, because we can't reassign the value of a const variable
7. Error, because const variables can only be accessed within a block-scope

## Part 2b
1. 3, The for loop will run until i = 3. Since i was declared using var, then we can access it anywhere within the function scope
2. 150, discountedPrice was decalred using var so we can access it outside the for loop
3. 150, finalPrice was declared using var so we can access it outside the for loop
4. [50, 100, 150], discounted is array so the function would return the discounted price in the format of an array. We can access discounted because it is declared in the same scope as the return statement. 
5. Error, because i was declared with let, this means that i is only defined within the for-loop and can only be accessed within the scope of the for-loop.
6. Error, because discountedPrice was declared with let, so it is only defined in the for-loop and can't be access outside of it
7. 150, finalPrice was declared within the function and outside of the for loop so we can still access it.
8. [50, 100, 150], discounted was declared within the function and outside of the for loop so it could still be accessed. 
9. Error, i was declared within the for-loop and it was declared with let. It can't be accessed outside of the for loop
10. 3, length was declared within the function but outside of the for loop, so it could still be accessed.
11. [0,0,0], The function will return an array filled with 0's, since discounted was declared as a const, this means that we can still access it, but we can't modify the array. 
12. 
12A.  student.name \
12B.  student['Grad Year'] \
12C.  student.greeting()   
12D.  student['Favorite Teacher'].name  
12E.  student.courseLoad[0]   

(13)  
13A. 32, Since we are adding a string with an integer. This will result in the concatenation of string.  
13B. 2, Since we are doing the subtraction operation instead of adding, this will not result in a string value, but an integer value. The string orientation of an integer contains the data type of an integer as well.  
13C. 3, null contains the data type of 0, so adding 3 with null would result in 3  
13D. 3null, Since null also contain the data type of a string, this will result in the concatenation of strings  
13E. 4, Since true contains the data type of an integer. True can be evaluated to equal 1. So 1 +3 = 4  
13F. 0, Since false and null contain the data type of an integer, this means that adding them together would result in 0. False and null evaluates to 0.  
13G. 3undefined, Since undefined has a data type of a string. This will result in the concatenation of string 
13H. NaN, Undefined does not have an arithmetic value, so it would not be possible to perform the subtraction operation.  

(14)  
14A. true, Since '2' can be converted from a string to a regular integer. The comparison would be valid/possible.  
14B. false, Since '2' and '12' can be converted from a string to regular integers. The comparison would be valid/possible.  
14C. true, Since '2' cna be converted from a string to an integer. The comparison would be valid/possible.
14D. false, Since we are using the strict eqaulity operator, this means we will be comparing actual type without type conversion  
14E. false, Since true can be converted to an integer value of 1. So the comparison would be valid/possible.  
14F. true, Since Boolean(2) will evaluate to true. So the comparison would result in true === true, which is true  
15. The difference between the == and === operators is that == allows for type conversion. === is the strict equality operator, where it doesn't take into consideration type conversion.  

17. When calling the function, this will result in the return value of an array of [2,4,6]. I arrived at this conclusion because within the modifyArray function, we're pushing in values into the array based on the function doSomething. 

(19)
1
4
3
2




