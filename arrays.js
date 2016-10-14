//STANDARD WAY OF MAKING A LIST
var invites = ['Matt', 'Susan', 'Jessica', 'John']


//ANOTHER WAY TO MAKE A LIST
var tasks = new Array(3)
tasks[0] = 'Buy Food'
tasks[1] = 'Feed Pets'
tasks[2] = 'Cook Food'


var inbox = new Array('Water Bill', 'Pay Check', 'Greeting Card')

inbox[3] = 'You have rich uncle that wants to give you money.'
//ADDING A NEW LIST ITEM TO THE ARRAY ABOVE

//END
tasks.push('Do Homework') //PUSHES NEW TASK ON END OF "TASKS"
tasks.pop() //REMOVES LAST ITEM FROM THE LIST

//BEGINNING
tasks.unshift('Watch Netflix') //PLACES NEW TASK AT BEGGINNING OF "TASKS"
var thingIGotRidOf = tasks.shift() //How to check what you got rid of off a list

// tasks[0] = 'Watch Hulu'
// console.log(tasks)

var payCheck = inbox.slice(1,3) //GIVES YOU CHUNKS OF ARRAYS.NEED TO ASSIGN TO A NEW VAR TO DISPLAY THE NEW VALUE

//console.log(payCheck)

 inbox.splice(1, 0, 'You Are Hired', 'Job Offer') //ALLOWS YOU TO 'SPLICE' TOGETHER ARRAYS--WILL ACTUALLY MODIFY ORIGINAL ARRAY,NOT JUST TEMPORARILY
//console.log(inbox)

//delete inbox[0] //LEAVES A GAP WHERE THE DELETED ITEM WAS
//console.log(inbox)

inbox[inbox.length] = 'Invite to Spotify' //USING LENGTH TO ADD LIST ITEM TO END OF LIST
//console.log(inbox.length) //length COUNTS NUMBER OF ITEMS IN LIST(WILL ALWAYS BE 1 MORE THAN INDEX NUMBERS DO TO STARTING AT 0)
//console.log(inbox)

var hasJobOffer = inbox.includes('Job Offer') //A WAY TO FIND SOMETHING IN A STRING
// console.log(hasJobOffer)

var jobOfferIndex = inbox.indexOf('Job Offer')//WILL TELL YOU WHAT NUMBER IN STRING THIS ITEM IS
var jobOfferIndex = inbox.indexOf('Job Salary')//RETURNS -1 IF IT CAN'T FIND MATCH

// inbox.push('Job Salary') //LINES 48-57 ARE TO FIND SOMETHING IN A LIST
//
// if (inbox.indexOf('Job Salary') === -1) {
//     console.log('No salary yet')
// }
// else {
//     console.log('It is finally here!')
// }
//
// console.log(jobOfferIndex)

// console.log(inbox)

// var matches = inbox.find(function(item) {  //this is an anonymous function. FIND returns back the first item it locates
//      return item.includes('Job')
//  })

//better way to do the above
function checkForJob(item){ //FILTER WILL BRING BACK EVERYTHING THAT IS A MATCH, DISPLAYED AS AN ARRAY
    return item.includes('Job')
}

var matches = inbox.filter(checkForJob)


var matches = []
for (var i = 0; i < inbox.length; i++){
    // console.log(i + '. ' + inbox[i])
    var hasJob = checkForJob(inbox[i])
    if (hasJob) {
        matches.push(inbox[i])
    }
}
// console.log(hasJob)
var matches = inbox.filter(function(item){ //FILTER WILL BRING BACK EVERYTHING THAT IS A MATCH, DISPLAYED AS AN ARRAY
    return item.includes('Job')
})
// console.log(matches)

//inbox = inbox.reverse() //HOW TO REVERSE SOMETHING
//console.log(inbox)
var fruit = ['Apple', 'Banana','Cherry', 'Watermelon']

fruit.forEach(function(item) { //NOT A PERMANENT CHANGE
    // console.log(item.toUpperCase())
})

fruit = fruit.map(function(item, i) {
    if (i === 2){
        return `<section>${item.toUpperCase()}</section>`
    }
    else {
        return `<div>$${item}</div>`
    }
    // return item.toUpperCase()
})
//TRANSFORMS AN ARRAY OF ITEMS, ONE ITEM AT A TIME. take an array, loop over it, and transform every item into something else

// console.log(fruit)
//**************GATHERING DATA ON PRICES IN AN ARRAY******************
// var prices = [7.98, 14.99, 2.30, 12.80]
//
// var total = prices.reduce(function(previous, current) {
//     //return previous + current //GIVES YOU THE TOTAL SUM OF THE ARRAY
//     return previous + current
// }, 0)     //THE ZERO TELLS THE REDUCE COUNTER WHERE TO START
//
// var avgPrice = total / prices.length //WILL GIVE YOU AVERAGE NUMBER OF ITEMS IN ARRAY
// console.log(total)
// console.log(avgPrice)

var price =
    {price: 7.98},
    {price: 14.99}
    {price: 2.30},
    {price: 12.80},

var total = prices.reduce(function(previous, current){
    return {price: previous.price + current.prices}
}, {price: 0})

var avgPrice = total.price / prices.length
console.log(total)

console.log(avgPrice)
