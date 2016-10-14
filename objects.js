//OBJECT-ORIENTED APPROACH
var pizza = new Object()
pizza.meat = 'Sausage'
pizza.cheese = 'Cheddar'
pizza.veggies = 'Olives'

//LITERAL WAY OF MAKING OBJECTS
var pizza = {
    meat: 'Sausage',
    cheese: 'Cheddar',
    veggies: 'Olives',
}

pizza.meat = 'Pepperoni'

//console.log(pizza.meat)

var topping = 'cheese'
//console.log(pizza[topping])
//console.log(pizza[topping]) //NEED SQUARE BRACKETS TO SPECIFY PATH TO OBJECT

var props = Object.keys(pizza)

props.forEach(function(prop) {
    // console.log(pizza[prop])
})
// console.log(props)

var movies = [
    {
        title: 'Star Wars',
        genre: 'Sci Fi',
        year: 1977,
        directors: [
            {
                name: 'George Lucas'
            },
            {
                name: 'JarJar'
            }
        ]
    },
    {
        title: 'Forest Gump',
        genre: 'Drama',
        year: 1995,
        directors: [
            {
                name: 'Robert Zemechas'
            }
        ]
    }
]
movies.forEach(function(movie) {

    var directors = movie.directors.map(function(director) {
        return director.name
    })
    // console.log(directors.join(', '))

    directors = directors.join(', ')


    console.log(movie.title + '-' + movie.genre + '(' + movie.year + ') - Directed by' + directors
})
