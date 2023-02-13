const fs = require("fs")
const record = (req, res, next) => {
    const date = new Date().toString();

    if (req.method == "PATCH") {
        const record = `The dish with id:${req.params.id} has been updated | ${date}\n`;

        fs.appendFile('records.txt', record, (err) => {
            if (err) console.error(err);
        });
    }
    else if (req.method == "DELETE") {
        const record = `The dish with id:${req.params.id} has been deleted | ${date}\n`;
        fs.appendFile('records.txt', record, (err) => {
            if (err) console.error(err);
        });

    }
    next();

};

module.exports = {
    record
}


// const fs = require('fs');

// module.exports = (req, res, next) => {
//   res.on('finish', () => {
//     const date = new Date().toString();
//     let action = '';
//     switch (req.method) {
//       case 'PATCH':
//         action = 'updated';
//         break;
//       case 'DELETE':
//         action = 'deleted';
//         break;
//     }
//     if (action) {
//       const record = `The dish with id:${req.params.id} has been ${action} | ${date}\n`;
//       fs.appendFile('records.txt', record, (err) => {
//         if (err) console.error(err);
//       });
//     }
//   });
//   next();
// };