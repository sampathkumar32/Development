function isObjextEmpty(sam){
    return Object.keys(sam).length === 0;
}
console.log(isObjextEmpty({a:1,b:3}));//false
console.log(isObjextEmpty({}));//true
