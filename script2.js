// Pull x and o out of this string xoxoxoxoxoxo

let letterFull = "xoxoxoxoxoxo";

function countLetters(fullString){
    let letterX = 0;
    let letterO = 0;
    for (let i = 0; i < fullString.length; i++) {
        let current = fullString[i];
        if (current === "x"){
            letterX = letterX + 1;
        } 
        if (current === "o"){
            letterO = letterO + 1;
        }

    }
    return {
        x: letterX,
        O: letterO
    }

};

countLetters (letterFull);
let result = countLetters(letterFull);
console.log(result);