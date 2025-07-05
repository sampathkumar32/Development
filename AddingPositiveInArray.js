function SumPositiveInArray(numbers){
    sum = 0;
    for(i=0; i<numbers.length; i++)
    if(numbers[i]>0){
        sum += numbers[i];
    }
    return sum;
    }


let Array = [-1,-5,-9,-6,3,7];
console.log(SumPositiveInArray(Array));
let sam = [1,3,4,5,6,7,8.9];
console.log(SumPositiveInArray(sam));
