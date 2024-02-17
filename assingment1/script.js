// Variables are declared here that will be used to select the buttons
const field1 = document.querySelector("#field1");
const field2 = document.querySelector("#field2");
const field3 = document.querySelector("#field3");
const field4 = document.querySelector("#field4");
const field5 = document.querySelector("#field5");
const submit = document.querySelector("#submit");
const randomstory = document.querySelector("#randomstory");

// a variable for catching the click is declared
let clicked = false;

// Event listeners with property click are defined here
field1.addEventListener("click",list1);
field2.addEventListener("click",list2);
field3.addEventListener("click",list3);
field4.addEventListener("click",list4);
field5.addEventListener("click",list5);
randomstory.addEventListener("click",list6);

// variable counters for loops are declared here along with a default story
let storyarray=["The Turkey", "Sits on", "A funny", "girafe", "On the moon"];
let i = 0
let j = 0;
let k = 0;
let l = 0;
let m = 0;

// List types are used to generate arrays that contain data
array1 = ["The Turkey","Mom","Dad","The Dog","My Teacher","THE Elephant","The Cat"];
array2 = ["Sits on","Eats","Kissed","Danced With","Doesn't like","Saw",];
array3 = ["A funny","A scary","A goofy","A slimmy","A barking","A fat"];
array4 = ["girafe","monkey","fish","cow","frog","bug","snake"];
array5 = ["On the moon","On the chair","in my spagetti","in my shoe","in my soup","on the grass"];


// All functions are made the same way

// A function is declared and when it is called the clicked variable is set
// to true and if it is true the for loop will run which will again use a
// if statement to check if the "x"(index of item) item is same or not
// if the item is same, the next item on array is selected, this will continue
// till we reach the end of the array
function list1(){
    
    clicked = true;
    

    if(clicked){
        for(i = 0; i < array1.length -1; i++){
            if( array1[i] == storyarray[0]){
                storyarray[0] = array1[i+1];
                break;
            }
            else{
                continue;
            }
        }
    }
}
function list2(){
    clicked = true;

    if(clicked){
        for(j = 0; j < array1.length -1; j++){
            if( array2[j] == storyarray[1]){
                storyarray[1] = array2[j+1];
                break;
            }
            else{
                continue;
            }
        }
    }
}
function list3(){
    clicked = true;
    

    if(clicked){
        for(k = 0; k < array1.length -1; k++){
            if( array3[k] == storyarray[2]){
                storyarray[2] = array3[k+1];
                break;
            }
            else{
                continue;
            }
        }
    }
}
function list4(){
    clicked = true;
    if(clicked){
        for(l = 0; l < array1.length -1; l++){
            if( array4[l] == storyarray[3]){
                storyarray[3] = array4[l+1];
                break;
            }
            else{
                continue;
            }
        }
    }
}
function list5(){
    clicked = true;

    if(clicked){
        for(m = 0; m < array1.length -1; m++){
            if( array5[m] == storyarray[4]){
                storyarray[4] = array5[m+1];
                break;
            }
            else{
                continue;
            }
        }
    }
}

// list6 is a special random function which helps us in selecting the
// random elements using random function on different indexes of the array
// after using push to generate a fully-fledged array it is set equal to the
// main storyarray which is then displayed
function list6(){
    clicked = true;
    let rndstory = [];
    rndstory.push(array1[Math.floor(Math.random() * array1.length)]);
    rndstory.push(array2[Math.floor(Math.random() * array2.length)]);
    rndstory.push(array3[Math.floor(Math.random() * array3.length)]);
    rndstory.push(array4[Math.floor(Math.random() * array4.length)]);
    rndstory.push(array5[Math.floor(Math.random() * array5.length)]);
    
    storyarray = rndstory;
}

// a submit button is used to finalize and display the result story
const output = document.querySelector("#submit");
output.addEventListener('click', function(){
    const output = document.querySelector("#Output");
    output.textContent = storyarray.join(' ');
})


