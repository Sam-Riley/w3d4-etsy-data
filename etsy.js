

//PROBLEM #1-CALCULATE THE AVERAGE PRICE OF ALL ITEMS

// var total = items.reduce(function(previous, current){
//     return {price: previous.price + current.price}
// }, {price: 0})
//
// var avgPrice = total.price / items.length
// console.log(total)
//
// console.log('The average price is ' + '$' + avgPrice)

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
