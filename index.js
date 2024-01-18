// get total count of fruits from and object using .reduce


const fruits = {
    fig: 9,
    raspberry: 67,
    apple: 6,
    nectarine: 20,
    kiwi: 5,
}

const totalFruit = Object.entries(fruits).reduce((acc, [fruits, num]) => {
    return acc + num },); 
    
    //  Object.entries  convert obj ---> to  (nested arrays  of [key , value] ) pair
    // .reduce() itterates through the nested array pairs [fruits, num]
    // -------------------------------------------ex:      [apple, 6]
    //-------------------------------------------->        [nectarine, 20]
    // return acc + count is how i get the count  buyy adding 
    

    
console.log(totalFruit);


