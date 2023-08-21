const {readFile,writeFile,readFileSync,writeFileSync}= require('fs');

const v = readFileSync('./tests/employee.txt','utf8')


writeFile('./tests/cont.txt',`The salary is ${v}`,(err)=>{
    if(err){
        console.log(err)
    }
});

