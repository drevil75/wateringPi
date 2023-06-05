let Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
let fs = require('fs')

let config = {
    1: {"mode": "out", "status": "offline", "name": "beet1"},
    2: {"mode": "out", "status": "offline", "name": "beet2"},
    3: {"mode": "out", "status": "offline", "name": "green house"},
    4: {"mode": "out", "status": "offline", "name": "beet3"}
}

function getPortStatus(portId) {    
    let port = new Gpio(portId, mode);
    let state = port.readSync();
}

function setPortStatus(portId, status) { 
    let port = new Gpio(portId, mode);   
    port.writeSync(0);
}

function setConfigStatus(portId, status, mode, name) {    
    let port = new Gpio(portId, mode);
    port.writeSync(0);

}

function writeJson(input) {

    fs.writeFile(file, input, function (err) {
        if (err) throw err;
        console.log('Replaced!');
      });

}

function readJson() {
    try {
        var config = fs.readFileSync(getConfig().healthfile);
        config = JSON.parse(config);
    }
    catch (e) {
       // Anweisungen für jeden Fehler
       writeLog('error',e); // Fehler-Objekt an die Error-Funktion geben
       config = {"error": 1}
    }
   
    return config
}



