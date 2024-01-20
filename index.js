// #1 get sum of all numbers in an input array using .reduce

function sumOfArr(arr) {
    return arr.reduce((acc, currVal, ) => acc + currVal, 0 );
}



let arr1 = [54,6,78,5,67,8,56,45,2]
console.log(sumOfArr(arr1));



const multplyThisArr = [2,3,4,5,7,9,23]
const arrayMultiplied = multiplyThisArr.reduce((acc, currValue) => 
acc.push(currValue * 6), [])




// # 3 create a fruit object with fig: 9 , raspberr: 67, apple: 6, nectarine: 20, kiwi:5 as your properties and  get total count of fruits from and object using .reduce

const fruits = {
    fig: 9,
    raspberry: 67,
    apple: 6,
    nectarine: 20,
    kiwi: 5,
}

const totalFruit = Object.entries(fruits).reduce((acc, [fruit, num]) => {
    return acc + num 
}, 0); 



    
    //  Object.entries  convert obj ---> to  (nested arrays  of [key , value] ) pair
    // .reduce() itterates through the nested array pairs [fruits, num]
    // -------------------------------------------ex:      [apple, 6]
    //-------------------------------------------->        [nectarine, 20]
    // return acc + count is how i get the count  buyy adding my acculator ( acc )
      
console.log(totalFruit);// 107
