function clone(obj){
        return {...obj};
}
const sam = {a:1, b:2};
const copy = console.log(clone(sam));
console.log(sam === copy);
