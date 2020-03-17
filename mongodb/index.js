const mongoose = require('mongoose')
mongoose.Promise = global.Promise


mongoose.connect('mongodb://localhost/zicobase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)
    .then(() => console.log('MongoDB has started'))
    .catch(e => console.log(e))

require('./persons-model')
const Person = mongoose.model('persons')
const person = new Person({
    name: 'Zico',
    gender: 'male',
    age: 25,
    phones: [4482236, 9635538],
    country: 'Uzbekistan'

})
// person.save()
//     .then(user => {
//         console.log(user);

//     })
//     .catch(e => console.log(e))