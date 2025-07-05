function secondHighestInArray(sandy){
    let dan = sandy.sort((a,b) => b-a);
    return dan[1]

}
let sam = [1,3,4,5,6,7,8,9];
console.log(secondHighestInArray(sam));
