function FirstLetterUpper(stri){
    return stri.replace(/\b\w+/g, function (word){
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
}

console.log(FirstLetterUpper("the quick brown fox"));
