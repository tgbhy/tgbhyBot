const { exec } = require("child_process");

exec("npm i discord.js@dev", (error, stdout, stderr) => { // you can change the npm i package to anything you want to execute in the console
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});