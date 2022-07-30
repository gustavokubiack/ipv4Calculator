const readLineSync = require('readline-sync');

const ip = readLineSync.question('Enter IP: ');
let mask = readLineSync.question('Enter Mask: ');

mask = Number(mask);

let maskDecimal
let numHost
let numRede
switch (mask){
    case 24:
        maskDecimal = '255.255.255.0'
        numHost = '256'
        numRede = '1'
        break
    case 25:
        maskDecimal = '255.255.255.128'
        numHost = '128'
        numRede = '2'
        break
    case 26:
        maskDecimal = '255.255.255.192'
        numHost = '64'
        numRede = '4'
        break
    case 27:   
        maskDecimal = '255.255.255.224'
        numHost = '32'
        numRede = '8'
        break
    case 28:   
        maskDecimal = '255.255.255.240'
        numHost = '16'
        numRede = '16'
        break
    case 29:   
        maskDecimal = '255.255.255.248'
        numHost = '8' 
        numRede = '32'
        break
    case 30:   
        maskDecimal = '255.255.255.252'
        numHost = '4'
        numRede = '64'
        break
    case 31:   
        maskDecimal = '255.255.255.254'
        numHost = '2'
        numRede = '128'
        break
    default:
        break
    }


console.log(`IP: ${ip}`);
console.log(`Mask: ${mask}`);
console.log(`Mask Decimal: ${maskDecimal}`);
console.log(`Numero de Hosts: ${numHost}`);
console.log(`Numero de Redes: ${numRede}`);



