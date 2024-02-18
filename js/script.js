//==========================  Object_Method  ========================== 

let person = {
     FirstName: "Foysal",
     LastName: "Hasib", 
     DOB: "10-10-2000",


   fulname: function (){
       return `${this.FirstName} ${this.LastName}`;
   }

}

console.log(person.FirstName);
console.log(person.fulname());
