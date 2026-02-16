// var e1={id:1 ,ename:"Rishi" , job:"Developer" , salary:709090};
// console.log(e1.id);
// console.log(e1.ename);
// console.log(e1.job);
// console.log(e1.salary);


var employees=[
    {id:1 ,ename:"Rishi" , job:"Developer" , salary:709090},
    {id:2 , ename:"Raj" , job:"Tester" , salary:609090},
    {id:3 , ename:"Gupta" , job:"Manager" , salary:809090},
    {id:4 , ename:"Rishi Raj" , job:"Developer" , salary:709090}
]
// for (var i=0;i<employees.length;i++){
//     console.log(employees[i].id + " " + employees[i].ename + " " + employees[i].job + " " + employees[i].salary);
// }

//another type of loop for (var emp of employees){
for(let e of employees){
    for ( var i in e){
        console.log(`${i}=${e[i]}`);
    }
    console.log("================================");

}