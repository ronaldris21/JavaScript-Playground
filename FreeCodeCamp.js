// Only change code below this line
var a=5;
var b=10;
var c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = b + " String!";
var sum = 10 + 0;
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


console.log({a,b,c,sum});
console.log(Math.floor(25/3));
console.log({myStr});


function palindrome(str) {
    for(var i=0;i<String.length;i++){
        if (str[i]!=str[str.length-i-1]){
            return false;
        }
    }
    return true;
  }
  console.log(palindrome("eye"));