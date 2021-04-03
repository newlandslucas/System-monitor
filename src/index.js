const os = require('os');

function mySystemStatus() {
    
    setInterval(() => {

        console.clear()
        console.log("====== PC STATUS ====== ")
        

        const system = os.type();
        const architecture = os.arch();

        const type = {
            Operation_System: `${system}`,
            Artchitecture: `${architecture}`
        }

        console.table(type)

    //Memory RAM

        const { freemem, totalmem } = os

        const total = parseInt(totalmem() / 1024 / 1024);
        const memFree = parseInt(freemem() / 1024 / 1024);
        const percents = parseInt((memFree / total) * 100);

        const stats = {
            total:`${total} MB`,
            used:`${memFree} MB`,
            percents:`${percents}%`
        }

        console.table(stats)

        const time = parseInt(os.uptime() / 3600)
        console.table(`\nActivity time: ${time} minutes.`)

    }, 1000)
}

console.log(mySystemStatus())


