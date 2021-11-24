const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if theres an error, reject the Promise and send the error to the promises 'catch' method
            if (err) {
            reject(err);
            //return out of the function
            return;
        }
        
        
        //if everything went well, resolve the Promise and send the successful data to the '.then()' method
        resolve({
            ok: true,
            message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'CSS Copied!'
            });
        });

    });
};

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};
//alternatively - module.exports = {writeFile, copyFile};