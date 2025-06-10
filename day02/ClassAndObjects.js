/*
    Attributes:
        employeeName
        salary
        ...

    Methods:
        work()
        ...
*/

class Employee{
    constructor(employeeName, employeeSalary){
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
    }

    work(){
        console.log(`${this.employeeName} is working.`);
    }
}


let employee1 = new Employee("John", 110_000);
let employee2 = new Employee("Isabella", 120_000);

//console.log(employee1.employeeName);
//console.log(employee1.employeeSalary);
console.log(employee1);
console.log(employee2);

employee1.work();
employee2.work();


console.log("----------------------------------------------------------------");

/*
Create a class named Item with the following requiremnts:

    Attributes:
        name, price, quantity

    Methods:
        constructor: define and initialize the attributes.
        calcPrice: calculate the total price of item
*/

class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    calcPrice() {
        return this.price * this.quantity;
    }
}

// Usage
let item1 = new Item("Laptop", 1000, 1);
console.log(item1);
console.log("Total Price: " + item1.calcPrice());


