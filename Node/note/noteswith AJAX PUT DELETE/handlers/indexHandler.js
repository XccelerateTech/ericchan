"use stric"
const path = require('path')

const htmlFunc = function (req,res,next){
    console.log('html')
    // res.send('hello')
    // res.sendFile('../views/index.html');
    // res.sendFile('/Users/wah/Desktop/xccelerate exercise/ericchan/Node/notes/views/index.html');
    res.sendFile('index.html', { root: path.join(__dirname, '../views') });
}



// const contactFunc = function(req,res,next){
//     console.log(`Time: ${Date.now()}`);
//     console.log(`GO TO: contactFunc`);
//     console.log(`The req.url:\t ${req.url}`) // \t = click tab
//     console.log(`The req.path:\t ${req.path}`) 
//     console.log();
//     next();
//     res.end(`The req.url:\t ${req.url}`);
// }

module.exports.htmlFunc= htmlFunc;

// module.exports.aboutFunc = aboutFunc;
// module.export.contactFunc = contactFunc;
