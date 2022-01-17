const os = require('os');

function mySystemStatus() {
    
    setInterval(() => {

        console.clear()
        console.log("====== PC STATUS ====== \n\n")
        
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
        const mem = parseInt(freemem() / 1024 / 1024);
        const percents = parseInt(((mem / total)) * 100);
        const usageMemory = (100 -percents)

        const stats = {
            total:`${total} MB`,
            free:`${mem} MB`,
            percetage_usage:`${usageMemory}%`
        }

        if(usageMemory <= 50) {
                console.table(stats),
                console.log('\nSistema OK!')
        } else {
                console.table(stats),
                console.log(`\nSistema usando ${stats.percetage_usage}, da memória ram disponível 🔥`)
        }

        console.log('\n\nBy: Lucas Newlands          Version: 0.1.0')
    }, 1000)
}

console.log(mySystemStatus())


