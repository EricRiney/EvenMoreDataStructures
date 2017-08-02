Array.matrix = function(numrows, numcols, initial) { var arr = []; for(vari=0;i<numrows;++i){
var columns = []; for(varj=0;j<numcols;++j){
             columns[j] = initial;
          }
          arr[i] = columns;
       }
return arr; }
//Here is some code to test the definition:
var nums = Array.matrix(5,5,0); print(nums[1][1]); 
// displays 0 var names = Array.matrix(3,3,""); names[1][2] = "Joe"; print(names[1][2]); 
// display "Joe"


function compare(num1, num2) { 
    return num1 - num2;
}

var nums = [3,1,2,100,4,200]; 
nums.sort(compare); 
//console.log(nums); // 1,2,3,4,100,200

// function square(num) { 
//     console.log(num, num * num);
// }
// var nums = [1,2,3,4,5,6,7,8,9,10];
// nums.forEach(square);

function afterc(str) {
    if (str.indexOf("cie") > -1) {
        return true; 
    }
    return false; 
}

var words = ["recieve","deceive","percieve","deceit","concieve"]; 
var misspelled = words.filter(afterc);
console.log(misspelled); // displays recieve,percieve,concieve