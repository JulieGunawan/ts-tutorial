// type Draggable = {
//     drag: () => void;
// }

// type Resizeable = {
//     resize: () => void;
// }

// type UIWidget = Draggable & Resizeable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {},
// }

//literal type (exact, specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch';

//Nullable type
// function greet(name:string | null | undefined){
//     if (name)
//         console.log(name.toUpperCase());
//     else
//         console.log("Hola!");
// }

// greet(null);

// type Customer = {
//     birthday:Date;
// }

// function getCustomer(id:number): Customer | null | undefined {
//     return id===0 ? null : {birthday: new Date()};
// }

// let customer = getCustomer(1);
// if(customer !== null && customer !== undefined)
//     console.log(customer.birthday);

//Optional property access operator
// console.log(customer?.birthday?.getFullYear());

//optional element access operator
//customers?.[0];

//Optional call
// let log: any = null;
// log?.("a");

// type User={
//     name:string;
//     age:number;
// }

// interface IUser {
//     name:string;
//     age?:number;
//     getMessage():string;
// }

// const user:IUser = {
//     name:"Monster",
//     age:30,
//     getMessage() {
//         return `Hello ${this.name}`
//     },
// };

// const user2:IUser = {
//     name:"Minion",
//     getMessage() {
//         return `Hello ${this.name}`
//     },
// }

//this way of defining type is valid, but not for interface
// type ID = string;

//interface is related to entity or object, if we write it like type, it won't work
// interface UserInterface{
//     id: ID;
//     name: string;
//     surname: string;
//     email: string;
//     getPermission():string;
// }

// interface Admin extends UserInterface {
//     permissions: string[];
//     below code won't work, as we will get an error types returned are incompatible
//     getPermission():string[] 
// }

// type User = {
//     id: ID;
//     name: string;
//     surname: string;
//     email: string,
//     getPermission: (id: string) => string;
// }
// type Admin = User & {
//     permissions: string[];
//     //using type, it can overwrite the User getPermission function, but if we define in interface, it won't work
//     getPermission: (id: string[]) => string[];
// }

// const user1: Admin = {
//     id: "1",
//     name: "Alex",
//     surname: "S",
//     email: "a@a.com",
//     permissions: ["read", "write"],
//     getPermission(id: string[] | string) {
//         return (typeof id === "string" ? id : [id]) as string[] & string;
//     }
// }
// let username: string = "Alexandra";

// let pageName: string | number = "1";

//you can create class to implement interface or type in typescript
//for example like this

//interface User {
//     name: string;
//     surname: string;
//     email: string;
// }

// class User implements User {
//     name: "Gru";
//     surname: "G";
//      email: "g@g.com";
// }

//we could use type as clarity of our code, which is called aliases or union like:
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null;

// const popularTag: PopularTag[] = ["dragon", "coffee", "pizza"];

// const dragonsTag: MaybePopularTag = null;

//never will never return anything, it will throw an error a function returning never cannot have a reachable end point
//the way we fix it is by throwing never
// const doSomething = (): never => {
//     throw "never";
// }

//type unknown is not assignable to type string but any can be
// let vAny: any = 10;
// let vUnknown: unknown = 10;
// let s1:string = vAny;

// how to convert or type assertion to string
// let s2:string = vUnknown as string; 

//double assertion
// let pageNumber: string = "1";
// let numericPageNumber: number = (pageNumber as unknown) as number;

//working with DOM, if we don't specify it as HTMLInputElement, it will show as Element, it doesn't know if it's input
// const someElement = document.querySelector(".foo") as HTMLInputElement;
//below is incorrect, by specifying someElement as HTMLInputElement, we can delete "as any"
// console.log("someElement", (someElement as any).value);
// console.log("someElement", someElement.value); //this is the correct way

//if we add listener, without the HTMLInputElement, it will show event as a generic
// const someElement = document.querySelector(".foo");
// someElement.addEventListener("blur", (event) => {
//     const target = event.target as HTMLInputElement;
//     console.log("event", target.value);
// });
// interface UserI {
//     getFullname():string;
// }
// class Person implements UserI {
//     private firstName: string;
//     private lastName:string;
//     readonly nickName: string;
//     static readonly maxAge = 50; //static is only accessible from the class itself,
//     constructor(firstName: string, lastName: string){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.nickName = firstName;
//     }
//     //if below is not implemented, we will get an error as it is required because we implemented the interface
//     getFullname():string {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// //inheritance
// class Developer extends Person {
//     private editor: string;

//     setEditor(editor: string):void {
//         this.editor = editor;
//     }

//     getEditor():string {
//         return this.editor;
//     }
// }

// const person = new Person("Amanda", "S");
// const developer = new Developer("Bobby", "S");

// console.log(person.getFullname());
// console.log(person.maxAge); //this is invalid as we can't access it
// console.log(Person.maxAge); //this is valid

// const addId = <T extends object>(obj:T) => {
//     const id = Math.random().toString(16);
//     return {
//         ...obj,
//         id,
//     };
// };

// interface UserInterface<T, V> {
//     name: string;
//     data:T;
//     meta:V;
// }

//if we use UserInterface<T>, we get an error generic type requires 1 type argument
// const person:UserInterface<{meta:string}, string> = {
//     name:"Jack",
//     data: {
//         meta:"foo",
//     },
//     meta:"bar",
// };

// const person2:UserInterface<string[]> = {
//     name:"John",
//     data: ["foo", "bar", "baz"],
// }

// const personWithId = addId<UserInterface>(person);
// console.log("result "+ personWithId);

/**
* Returns a new list containing the contents of the given list, followed by the given element
**/
//below function means a function named append with T generic type with 2 arguments: el of type, and list of T array.
//eg if we provide string in first argument, T will be string. second argument is readonly T array. 
//the function returns a T array
// export function append<T>(el:T, list: readonly T[]): T[]; 
//example
// const updatedArray =  append<string>('baz', ['foo', 'bar']);

/**
 * Returns true if at least one of elements of the list match the predicate, false otherwise.
 **/
//we have a function named any with 2 arguments: fn and list.
//first argument is a function with an argument that has the same type of any<T>, and returns boolean
//second argument is a list of T array. The function any returns boolean
// export function any<T>(fn: (a:T) => boolean, list:readonly T[]):boolean;

// //example
// const searchStr = 'foo';
// const hasSearchedString = any<string>((el:string) => el.contains(searchStr),    
//     ['fooooo','bar','baz'
// ])

//ENUMS - enumerables. it generates incremental number
// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }

//we could write it in capital letters with no values
// enum Status{
//     NotStarted,
//     InProgress,
//     Done
// }

//we could also create a datatype of enum
// let notStartedStatus: Status = Status.NotStarted;
// notStartedStatus = Status.InProgress;

//we could also assign string to our enum
enum StatusEnum{
    NotStarted = "not Started",
    InProgress = "in progress",
    Done = "done"
}

//use enum inside interfaces
interface Task {
    id: string;
    status: StatusEnum;
}