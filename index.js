// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(name){
    const catsCopyAppend = [...cats, name];
    return catsCopyAppend;
}

function prependCat(name){
    const catsCopyPrepend = [name, ...cats];
    return catsCopyPrepend;
}

function removeLastCat(){
    const catsCopyLast = cats.slice(0,cats.length - 1);
    return catsCopyLast;
}

function removeFirstCat(){
    const catsCopyFirst = cats.slice(1, cats.length);
    return catsCopyFirst;
}