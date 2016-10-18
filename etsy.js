console.log(items)  //USE TO VERIFY YOU ARE PULLING IN CONTENT***

//PROBLEM #1-CALCULATE THE AVERAGE PRICE OF ALL ITEMS

var total = items.reduce(function(previous, current) {
    return {price: previous.price + current.price}
}, {price: 0})

var avgPrice = total.price / items.length
console.log(total)

console.log('The average price is ' + '$' + avgPrice)

//I USED YOUR TEMPLATE FROM CLASS TO WRITE THIS CODE. I HAD TO CHANGE A FEW OF THE VARIABLES (WITH YOUR HELP KEK)

//PROBLEM #2 -ARRAY OF ITEMS THAT COST BETWEEN $14.00 AND $18.00

var specificStuff = items.filter(function(listItems){
    if (listItems.price >= 14.00 && listItems.price <= 18.00) {
        return listItems
    }
})
console.log("Items that cost between $14.00 USD and $18.00 USD:")
console.log(specificStuff)

// PLAYED AROUND WITH FILTER; I WAS HAVING FORMATTING ISSUES WITH THE ARRAY TRYING TO CONCATENATE THE STRING "ITEMS THAT COST....". KYLE SUGGESTED ANOTHER CONSOLE LOG TO PLACE IT ABOVE THE ARRAY.


// PROBLEM #3 -FIND THE ITEM WITH A "GBP" CURRENCY CODE & PRINT IT'S NAME AND PRICE

// var currenyCode =  items.filter(function(item){
//     return item.gbpPath === "GBP"
// })
// console.log(currency.Code.title + currencyCode.price)
// USED FILTER TO PLAY PULL IN CURRENCY CODE. STARTED OUT TRYING AN IF STATEMENT BUT ENDED USING FILTER AGAIN

// PROBLEM #4 -FIND ITEMS MADE OF WOOD AND PRINT.

// var woodItems = items.filter(function(item){
//     return item.materials.includes('wood')
// })

//---trying to play around with filter more and use it to pull in wood from materials


// console.log('All wood items:' + woodItems)

// NEED TO CHECK #4 AGAIN I AM TRYING TO USE FILTER AGAIN. TRIED TO ACCESS THE MATERIALS 2 DIFFERNT WAYS


// PROBLEM #5 -FIND ITEMS WITH 8+ MATERIALS AND PRINT

// var materialsNumber = items.filter(function(item){
//     return item.materials.length >= 8
// })
//
// console.log(materialsNumber)

// I USED FILTER AGAIN AND JUST ADDED A LENGTH REQUIREMENT TO THE MATERIALS SEGMENT

// PROBLEM #6 -CALCULATE HOW MANY ITEMS

var totalItems = items.reduce(function(total, currentItem) {
    if (currentItem.whoMade === 'i_did') {
        return total + 1
    }
    else {
        return total
    }
}, 0)
console.log(totalItems)
