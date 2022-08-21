
let nams: string = "Masai"

let age: number = 20;

let isFetching: boolean = false;

let array: number[] = [1,2,3,4]

let array2: string[] = ["Masai","school"]

let tuple : [string, boolean] = ["Masai", false]

enum Office{
    User,
    SuperUser,
    Admin,
    SuperAdmin
}

function divide(x:number, y:number): number{
    return x / y
}

console.log (divide(40,20))

function names(y:string){
    console.log(y)
}
names("Masai")