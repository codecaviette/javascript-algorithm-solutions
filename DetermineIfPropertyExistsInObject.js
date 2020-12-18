/**********************************
Coding Challenge:    
    - We have an array of objects representing different people in our contacts lists.
    - A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
    - The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
        - If both are true, then return the "value" of that property.
        - If name does not correspond to any contacts then return "No such contact".
        - If prop does not correspond to any valid properties of a contact found to match name then return "No such property".

Ex object array:
    var contacts = [
        {
            "firstName": "Akira",
            "lastName": "Laine",
            "number": "0543236543",
            "likes": ["Pizza", "Coding", "Brownie Points"]
        },
        {
            "firstName": "Harry",
            "lastName": "Potter",
            "number": "0994372684",
            "likes": ["Hogwarts", "Magic", "Hagrid"]
        },
        {
            "firstName": "Sherlock",
            "lastName": "Holmes",
            "number": "0487345643",
            "likes": ["Intriguing Cases", "Violin"]
        },
        {
            "firstName": "Kristian",
            "lastName": "Vos",
            "number": "unknown",
            "likes": ["JavaScript", "Gaming", "Foxes"]
        }
    ];
*/

/**********************************
Solution:
*/
// First step in problem-solving - Translate instructions into steps:
    // loop thru objects in array
    // if name === firstName AND prop is included, then return val of prop
    // if name === firstName and prop is not included then return "No such property"
    // if name !== firstName, then return "No such contact" (catch-all)

// Second step: Translate steps into JS code:    
function lookUpProfile(name, prop){
    // Don't nd to declare empty var for this for loop bc not creating a new var, just pulling from existing data

    for(let i = 0; i < contacts.length; i++) {            
        if (name === contacts[i].firstName) {           // if this is true, go to next line...   
            if (contacts[i].hasOwnProperty(prop)) {     // DOUBLE IF stmt! If this line AND previous line are true...
                return contacts[i][prop];               // ... then return this (obj.property notation [[1_1a20]])
            } else {                                    // ... otherwise, ...
                return "No such property";              // ... return this
            }
        }
    }
    return "No such contact";                           // if 1st if stmt was not true, perform this line.
}

lookUpProfile("Akira", "likes");                        // output: ["Intriguing Cases", "Violin"]
