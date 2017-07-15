//Declare object.
var myObj = {
      //Assigning a name property, with a ""  value. 
      name: "",
      //Assign a yell property. that is a function.
      yell: function() {
        //Change the name from "" to "Star Powerup" for myObj.
        this.name = "Star Powerup";
          //Declaring a function called changeName, that takes a parameter called newName. 
          //newName is used to assign a new name to the window.
          //We are assigning the name to the window, because this function is declared within another function whcih is in an object. 
          //Logic may indicate that this should be a part of the object but this is a javascript "gotcha" in which the function is actually declared as part of the
          //Global scope. The global scope means that when we say 'this' we are referring to the window since that is as far back as we can go. 
          var changeName = function(newName) {
              //This is where we assign the window, the new name that was passed in. Essentially, this reads window.name = newName. 
              this.name = newName;
              console.log("`this` refers to the window here, because this nested function loses the myObj scope. console.log(this):")
              console.log(this);
              console.log("so we're setting the name '" + newName + "' on the window. console.log(window.name):");
              console.log(window.name);
              console.log("`window` contains the global scope, so you can log the variable itself. console.log(name):")
              console.log(name);
        };

        changeName("Blue Shell");
        changeName("Raven");
        console.log("Window name is : "+window.name);
        console.log("myObj name is: "+myObj.name);
      }
    };
    //This is where we call yell within myObj and make the changes as listed above. 
    myObj.yell();