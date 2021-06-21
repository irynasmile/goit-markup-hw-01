function hello() {
  console.log('Hello', this)
}
// console.log(hello())
const person = {
  name: 'Iri',
  age: 30,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function () {
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
  },
}
const Lena = {
  name: 'Elena',
  age: 24,
}
person.logInfo.bind(Lena)() //Name is Elena//Age is 24
