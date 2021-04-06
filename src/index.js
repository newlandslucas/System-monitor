const os = require('os');

function mySystemStatus() {
    
    setInterval(() => {

        console.clear()
        console.log("====== PC STATUS ====== \n")
        
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

        if(percents <= 50) {
                console.table(stats),
                console.log('\nSistema OK!')
        } else {
                console.table(stats),
                console.log(`\nSistema usando ${stats.percents}%, da memória ram disponível, tente fechar algumas aplicações para seu uso ficar abaixo de 50%`)
        }

        console.log('\n\nBy: Lucas Newlands          Version: 0.1.0')
    }, 1000)
}

console.log(mySystemStatus())


