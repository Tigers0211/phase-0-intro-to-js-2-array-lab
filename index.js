// Write your solution here!
let cats =['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    name = cats.push(name)
}

function destructivelyPrependCat(name){
    name = cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
const cats2 = [ ...cats, name]
 return cats2
}


function prependCat(name){
    const cats3 = [name, ...cats];
    return cats3;
}

/*removeLastCat()
1) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
removeFirstCat()
2) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
*/


function removeLastCat(){
  const  cats4 = cats.slice(0,2)
  return cats4
}

function removeFirstCat(){
    const  cats5 = cats.slice(1)
    return cats5
}