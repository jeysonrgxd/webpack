export class HelloWord {

   name: String

   constructor(name: String) {
      this.name = name
   }

   saludar(): String {
      return `Hola como estas ${this.name}`
   }
}