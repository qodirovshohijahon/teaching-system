#### Basic
#### 1.1
Write a JavaScript program to `delete` the `age` property from the following object. Also print the object before or after deleting the property.
Sample 
object:
```js
var student = {
    name : "David Rayy",
    sclass : "VI",
    age : 16 
};
```
#### 1.2


#### 1. Football Club

Create an object to store the following information about your favorite football club: `name` (a `string`), numbers of football players (a `number`), and players (an `array of strings`).

Create a function to print out the movie information like so: "Real Madrid has 25 more players . Players: Sergio Ramos, Varane, Kross."

#### 2. The Cash Register
Write a function called `cashRegister` that takes a shopping cart object. The object contains item names and prices (`itemName: itemPrice`). The function should return the total price of the shopping cart.
Example
// Input
```js
    let cartForParty = {  
            banana: "1.25",
            handkerchief: ".99",
            Tshirt: "25.01",
            apple: "0.60",
            nalgene: "10.34",
            proteinShake: "22.36"
    };
```
// Output
`cashRegister(cartForParty)); // 60.55`
#### 3. Credit Card Validation

You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

- [ ] Number must be 16 digits,
- [ ] all of them must be numbers
- [ ] You must have at least two different digits represented (all of the digits cannot be the same)
- [ ] The final digit must be even
- [ ] The sum of all the digits must be greater than 16

**The following credit card numbers are valid:**

`9999777788880000`
`6666666666661666`

**The following credit card numbers are invalid:**

`a92332119c011112 invalid characters`
`4444444444444444 only one type of number`
`1111111111111110 sum less than 16`
`6666666666666661 odd final number`
*******************

<br>
<br>
<br>
<br>



**After doing above exercises you can do it more with the following**
##### Make optimize the above exercises
A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following credit card numbers are now also valid:

`9999-7777-8888-0000`
`6666-6666-6666-1666`

Update your program to allow such numbers. (Hint: Remove the dashes from the input string before checking if the input credit card number is valid.)
