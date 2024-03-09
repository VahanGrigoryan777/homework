function func(str) {
    if (str.length === 0 || !str.includes('pi')) {
        return str
    }
    const index = str.indexOf('pi')
    return str.substring(0, index) + '3.14' + func(str.substring(index + 2))
}


function func2(str){
    return str.substring().split('').reverse().join('')

}

console.log(func2('23585'))

function func1(arr){
    return arr.flat(Infinity)
 }

console.log(func1([1,2,3,[1,2,3],[33],]))