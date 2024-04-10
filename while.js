/* let i = 0
let text = ""
while (i < 10){

    text += "The number is " + i;
    i++;
    
}
console.log(text) */


/* let i = 1

while(i<101){
    console.log(i)
    i++
}


i = 100

while(i>0){
    console.log(i)
    i--
} */


function table(){
    const inputs = process.argv;
    let value = +inputs[2]
    let i = 1
    while(i<10){

        total = `${value} * ${i} = ${value*i} `

        i++

        console.table(total)
    }

}

table()
