const readLineSync = require('readline-sync');

const ip = readLineSync.question('Enter IP: ');
let mask = readLineSync.question('Enter Mask: ');

mask = Number(mask);

// fetching all numbers of hosts and networks
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
    // get last octet
    let ipSplit = ip.split('.')
    let lastOctet = ipSplit[3]
    lastOctet = Number(lastOctet)



    let allIps = ipSplit[3]
    allIps = Number(allIps)
    console.log(`All Networks IP's: ${ipSplit[0]}.${ipSplit[1]}.${ipSplit[2]}.${lastOctet}`)
    while (allIps < 255) {
        allIps = allIps + 1
        console.log(`All Networks IP's: ${ipSplit[0]}.${ipSplit[1]}.${ipSplit[2]}.${allIps}`)
    }


    // fetching all network ips
    let allNetworks = ipSplit[3]
    allNetworks = Number(allNetworks)
    console.log(`All Networks: ${ipSplit[0]}.${ipSplit[1]}.${ipSplit[2]}.${allNetworks}`)
    numHost = Number(numHost)
    while (allNetworks <= 255){
        allNetworks = Number(allNetworks + numHost)
        if (allNetworks <= 255){
            console.log(`All Networks: ${ipSplit[0]}.${ipSplit[1]}.${ipSplit[2]}.${allNetworks}`)   
        }
    }

    // fetching all broadcast ips
    let allBroadcast = ipSplit[3]
    allBroadcast = Number(allBroadcast)
    while (allBroadcast <= 255){
        allBroadcast = Number(allBroadcast + numHost)
        if (allBroadcast <= 256){
            console.log(`All Broadcasts: ${ipSplit[0]}.${ipSplit[1]}.${ipSplit[2]}.${allBroadcast - 1}`)   
        }
    }

    // class of ip

    let classIp = ipSplit[0]
    classIp = Number(classIp)
    if (classIp >= 1 && classIp <= 126){
        console.log(`Class of IP: A`)
    } else if (classIp >= 128 && classIp <= 191){
        console.log(`Class of IP: B`)
    } else if (classIp >= 192 && classIp <= 223){
        console.log(`Class of IP: C`)
    }


console.log(`IP informed: ${ip}`);
console.log(`Mask: ${mask}`);
console.log(`Decimal mask: ${maskDecimal}`);
console.log(`Host's number: ${numHost}`);
console.log(`Network's number: ${numRede}`);



