let arr = [1,2,3,4,5];

let strings = ['tim', 'tom', 'tinny', 'shaggy']

let arr2 = strings.reduce((acc, next) => {
    return acc + next;
})

console.log(arr2);