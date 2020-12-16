/**********************************
Coding Challenge:
    Given a noun, a verb, an adjective and an adverb, form a complete sentence using words of your choice, along with the words we provide.
    You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.
Ex: 
    var myNoun = "dog";
    var myAdjective = "big";
    var myVerb = "ran";
    var myAdverb = "quickly";
*/

/**********************************
Solution
*/

var wordBlanks = "The "+ myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; 
// output:   wordBlanks = "The big dog ran quickly."