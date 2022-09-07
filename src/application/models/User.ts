/*
   Details of currenlty loggedin user
*/

//TODO: hook me up into the context
export default class User {
   private id: number;
   private name : string;
   private email: string;

   constructor(id: number, name: string, email: string){
    this.id = id;
    this.email = email;
    this.name = name;
   }
}