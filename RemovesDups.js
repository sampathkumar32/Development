function Unique(bayern){
    let rev = [...new Set(bayern)]
    return rev;
}

let dom = [1,2,3,3,3,4,2,1,5,6,6,7];
console.log(Unique(dom));
