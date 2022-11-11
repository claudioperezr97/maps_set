new Set([1,1,2,2,3,4]) //{1,2,3,4}

[...new Set("referee")].join("")
//ref

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
/*
Map(2) {Array(3) => true, Array(3) => false}
*/

function hasDuplicate(array){
    const s = new Set(array)
    return s.size !== array.length
}
function vowelCount(str){
    let map = new Map()
    for(let char of str){
        if ('aeiou'.includes(char)){
            if (map.get(char)){
                map.set(char, map.get(char) + 1)
            }
            else{
                map.set(char, 1)
            }
        }
    }
}
