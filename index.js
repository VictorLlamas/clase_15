const process = require('process');

console.log('Memoria')
console.log(`Memoria rss: ${process.memoryUsage().rss}`);
console.log(`Memoria heapTotal: ${process.memoryUsage().heapTotal}`);
console.log(`Memoria heapUsed: ${process.memoryUsage().heapUsed}`);
console.log(`Memoria external: ${process.memoryUsage().external}`);
console.log();
console.log(`Directorio en uso: ${process.execPath}`);
console.log()
console.log('Variables de entorno')
console.log(`TERM: ${process.env.TERM}`);
console.log(`SHELL: ${process.env.SHELL}`);
console.log(`USER: ${process.env.USER}`);
console.log(`PATH: ${process.env.PATD}`);
console.log(`PWD: ${process.env.PWD}`);
console.log(`EDITOR: ${process.env.EDITOR}`);
console.log(`SHLVL: ${process.env.SHLVL}`);
console.log(`HOME: ${process.env.HOME}`);
console.log(`LOGNAME: ${process.env.LOGNAME}`);
console.log(`_: ${process.env._}`);
console.log()
const startUsage = process.cpuUsage();
const now = Date.now();
while (Date.now() - now < 500);
console.log(`CPU utilizado User: ${process.cpuUsage(startUsage).user}`);
console.log(`CPU utilizado System: ${process.cpuUsage(startUsage).system}`)