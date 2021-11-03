function contain(myObj,n,myArr){
    for (let key in myObj){
        if (typeof myObj[key] === 'object'){
            contain(myObj[key],n,myArr)
        }
        else{
            myArr.push(myObj[key]);
        }
    }
    return myArr.includes(n);
}

let myObj = {
    d:{
        c:{
            b:{
                a:{
                    number:20,
                    str:'hi',
                }
            }
        }
    }
}

console.log(contain(myObj,20,[]))

