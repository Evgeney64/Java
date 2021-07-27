const person = {
    name: 'Maxim',
    age: 25,
    greet: function(){
        console.log('Привет !!!')
    }
}

const lena = Object.create(person)
lena.name = 'Elena'

const str = new String('Новая строка')