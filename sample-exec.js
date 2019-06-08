const { exec} = require('child_process');
exec('git branch', (err, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
})