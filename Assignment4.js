/* 
    TITLE: ASSIGNMENT 4 JAVASCRIPT
    AUTHOR: MISTY MORREYN
    CLASS: COMM644 FALL 2015
*/

// PRACTICE WITH JAVASCRIPT OOP CONCEPTS

/*
// STEP 1. Create a namespace called Animal. Then, define two sub namespaces, one called Cat and another called Dog.

var ANIMAL = ANIMAL || {};

ANIMAL.Cat = function() {};

ANIMAL.Dog = function() {};
*/

/*
// STEP 2. Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal syntax and the Dog class should be created using the constructor syntax.


var Cat = {
    _name: "Basil";
}; 

var Dog = function() {
    this._name = "Spot";
};
*/

/*
// STEP 3. Create a new instance of Cat class. Directly underneath, create a new instance of the Dog class.
    
var kitty = new Cat();

var puppy = new Dog();
*/


/*
// STEP 4. 4. Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.

var Animal = function () {
    console.log("The Animal has been created");
};

var myAnimal = new Animal();
*/


/*
// STEP 5. 5. Now, change the above code so that it uses constructor notation instead. The class should accept a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.

var Animal = function(value) {
    console.log(value);
}

var myAnimal = new Animal("This is a cat");
*/

/*
// STEP 6. 6. Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 

function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}

var cat = new Animal("Cat", "DSH", "White", "Cat-height", "Cat-length");
*/

/*
// STEP 7. Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}

var cat = new Animal();

for (var property in cat) {
    console.log(property);
};
*/


/*
// STEP 8. Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
    this._speak = function () {
        if (this._type === "cat") {
            return "The " + this._color + " cat is meowing!";
        } else if (this._type === "dog") {
            return "The " + this.color + " dog is barking!";
        } else {
            return "Nothing happened";
        }
    };
}

var cat = new Animal("cat", "DSH", "white", "cat-height", "cat-length");
console.log(cat._speak());
*/


/*
// STEP 9. Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”

function Animal (type, breed, color, height, length) {
    var _type = type;
    var _breed = breed;
    var _color = color;
    var _height = height;
    var _length = length;
    var checkType = function() {
        if (_type === "dog") {
            console.log("The dog has made a noise!");
        } else if (_type === "cat") {
            console.log("The cat has made a noise!");
        } else {
            return "Nothing happened";
        }
    };
    this.speak = function() {
        checkType();
    }
}

var cat = new Animal("cat", "DSH", "white", "cat-height", "cat-length");

cat.speak();
*/


// STEP 10. Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.

//String.prototype.findWords = function (paragraph, word) {
//    var wordsArray = paragraph.match(/\S\w*/g);
//    var index, num = 0;
//    for (index in wordsArray) {
//        if (wordsArray[index] === word) {
//            num += 1;
//        }
//    }
//
//    alert(num);
//};
//
//var str = new String();
//
//str.findWords("This is a sample within a sample  but not really a nested sample. It's just a regular sample.", "sample");

/*---------------------------------------------------------*/

// Does My Vehicle Need An Oil Change?

// In this lab you will be building an application that determines whether or not your vehicle needs an oil change. If it does, it should alert the user of the fact within the console window. To complete this application, follow the steps outlined below:

// STEP 1. Create an abstract base class called Vehicle that accepts four parameters including make (string), model (string), total miles (number), and the mileage for the last oil change (number).

// STEP 2. Within the Vehicle class, create 6 public properties named make, model, totalMiles, drivenMiles, type, and lastOilChange. Initialize the make, model, totalMiles, and lastOilChange properties with their respective arguments. The drivenMiles property should be initialized to 0 and the type property should be initialized to an empty string.

// STEP 3. Now create a public method called drive() that accepts a parameter (perhaps miles). Increment and set the public drivenMiles property to the miles argument. Return the method (return this).

// STEP 4. Now create a public method called checkOil(). Within this method, check to see if the total miles minus the last oil change plus the driven miles are less than or equal to 3000. If they are, return a message to the user that they need an oil change. Otherwise, return the method (return this).

// STEP 5. Now create a new sub class called Car that accepts one parameter for the amount of doors that the car has. 

// STEP 6. Within the new Car class, initialize a public property called doorCount and set it equal to the argument.

// STEP 7. Within the Car class use a conditional to check and see if the door count is greater than 2. If it is, set the type property to Sedan. Otherwise, set it to coupe.

// STEP 8. Now, make sure that the Car class inherits from the Vehicle base class. Use this opportunity to pass in the make, model, total miles, and last oil change values into the Vehicle’s constructor. 

// STEP 9. Then, create a new instance of the Car class and pass in the number of doors that the car has into the Car’s constructor.

// STEP 10. Finally, using method chaining, call the drive() method of the car object, passing in a numeric value as a parameter. At the same time, call the checkOil() method. Display the results in the console window. You will either get a message indicating your car needs an oil change or you will get the object hierarchy.

/*
var Vehicle = function(make, model, miles, mileage) {
    this._make = make;
    this._model = model;
    this._totalMiles = miles;
    this._drivenMiles = 0;
    this._type = "";
    this._lastOilChange = mileage;
};

Vehicle.prototype.drive = function(miles) {
    this._drivenMiles += miles;
    return this;
};

Vehicle.prototype.checkOil = function(miles) {
    var a = this._totalMiles - (this._lastOilChange + this._drivenMiles);
    if (a <= 3000) {
        return "You need an oil change!";
    } else {
        return this;
    }
};

var Car = function(doors) {
    this._doorCount = doors;
};

Car.prototype.conditional = function() {
    if (this._doorCount >= 2) {
        this._type = "Sedan";
    } else {
        this._type = "Coupe";
    }
};

Car.prototype = new Vehicle("toyota", "yaris", 100000, 95000);

var toyota = new Car(2);

toyota.drive(4000);
console.log(toyota.checkOil());
*/

/*--------------------------------------------------*/

/*
// The Recipe Card (10 points)	

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:

Guacamole
Serves: 4
Ingredients: 
- 3 Avocados
- 1 Lime
- 1 Teaspoon Salt
- 1/2 Cup Onion
- 3 Tablespoons Cilantro
- 2 Diced Tomatoes
- 1 Teaspoon Garlic
- 1 Pinch Ground Pepper


var favRecipe = function(title, servings, ingredients) {
    this._title = title;
    this._servings = servings;
    this._ingredients = ingredients;
    this._printRecipe = function() {
        console.log(this._title + "\nServes: " + this._servings + "\nIngredients: ");
        for (var index in this._ingredients) {
            console.log("- " + this._ingredients[index])
        };
    }
    
};

var ingredientsArray = ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"];

var guac = new favRecipe("Guacamole", "4", ingredientsArray);

guac._printRecipe();
*/

/*--------------------------------------------------*/

// The Reading List (10 points)

// Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.

/*
var Book = function(title, author, alreadyRead) {
    this._title = title;
    this._author = author;
    this._alreadyRead = alreadyRead;
    this._log = function() {
        console.log( '"' + this._title + '" by "' + this._author + '"');
    }
};

var hobbit = new Book("The Hobbit", "J.R.R. Tolkien", true);
var wiseMan = new Book("The Wise Man's Fear", "Patrick Rothfuss", true);
var foolsQuest = new Book("Fool's Quest", "Robin Hobb", false);
var c = new Book("C# 6.0 in a Nutshell", "Joseph Albahari", false);
var locke = new Book("The Lies of Locke Lamora", "Scott Lynch", true);

var bookCollection = [hobbit, wiseMan, foolsQuest, c, locke];

for (var index in bookCollection) {    
    if (bookCollection[index]._alreadyRead === true) {
        console.log('You already read "' + bookCollection[index]._title + '" by ' + bookCollection[index]._author)
    } else if (bookCollection[index]._alreadyRead === false) {
        console.log('You still need to read "' + bookCollection[index]._title + '" by ' + bookCollection[index]._author);
    } else {
        console.log("Error");
    };
};
*/


/*--------------------------------------------------*/

/*
Fill in the Blanks (10 points)

Fill in the blanks to make this program work.

(function() {
    var person = {
        buy: function() {console.log("I'm rich!"); }// add code here
    };

    var car = {
        drive: function() {console.log("vroom vroom"); },
        price: 200000
    };

    // print vroom vroom
    car.drive();

    // print 'I'm rich'
    if (car.price > 100000) {
        person.buy(car);
    }
}());
*/
