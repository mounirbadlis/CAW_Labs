const { stdout } = require('process');
var readLine = require('readline');
var fs = require('fs');

var rl = readLine.createInterface({input : process.stdin, output : stdout})

// first question of exo 4
// rl.question('your text!', (text) => {
//     fs.writeFile('suggested.txt', text, function (err, data) {
//         if(!err){
//             console.log('Seccussfully Saved')
//         }else{
//             console.log(err.data)
//         }
//     })
//     rl.close();
// })

// second question of exo 4
rl.question('your file!', (text) => {
    fs.writeFile(text, 'hello world again!', function (err, data) {
        if(!err){
            console.log('Seccussfully Saved')
            fs.readFile(text, function (err, data) {
                console.log(data.toString('ascii'))
            })
        }else{
            console.log(err.data)
        }
    })
    rl.close();
})
