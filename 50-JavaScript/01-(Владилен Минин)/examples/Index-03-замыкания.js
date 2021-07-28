function hello(){
    console.log("Привет !!! ", this)
}
const person = {
    name: 'Владилен',
    age: 25,
    sayHello: hello,

    // привязка контекста
    sayHelloWindow: hello.bind(window),
    sayHelloThis: hello.bind(this),
    sayHelloDocument: hello.bind(document),
    // ........................

    logInfo: function(job, phone){
        // обратные кавычки <~,Ё> в нижнем регистре
        console.group(`Информация по объекту ${this.name}:`)
        console.log(`имя объекта ${this.name}`)
        console.log(`его возраст ${this.age}`)
        console.log(`место работы ${job}`)
        console.log(`телефон ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Лена',
    age: 23,
}

//person.logInfo.bind(lena)();
//fnLenaInfoLog()

const fnLenaInfoLog = person.logInfo.bind(lena)
//fnLenaInfoLog('Программист', '+7(922)-204-3348')

const fnLenaInfoLog1 = person.logInfo.bind(lena, 'Программист', '+7(922)-204-3348')
//fnLenaInfoLog1()

// call()
//person.logInfo.call(lena, 'Программист', '+7(922)-204-3348')

// apply()
//person.logInfo.apply(lena, ['Программист', '+7(922)-204-3348'])

/// ------------------------------------------
/// Контекст и прототипы
const array = [1, 2, 3, 4, 5]

function multBy(arr, n){
    return arr.map(function(item){
        return item * n
        })
}
// console.log(multBy(array, 5))

Array.prototype.multBy1 = function(n){
    //console.log('multBy1', this)
    return this.map(function(item){
        return item * n
        })
}
// console.log(array.multBy1(5))
// [10, 20, 30, 40, 50].multBy1(5)
