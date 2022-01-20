const os = require('os');

function mySystemStatus() {

    setInterval(() => {

        console.clear()
        console.log("====== PC STATUS ====== \n")
    
        const arch = os.arch();
        const platform = os.platform();
        const release = os.release();

        const types = {
            operation_system: `${platform}`,
            architecture: `${arch}`
        }

        console.table(types)
    
        const { freemem, totalmem } = os;
    
        const total = parseInt(totalmem() / 1024 / 1024)
        const mem = parseInt(freemem() / 1024 / 1024)
        const percentage_free = parseInt((mem / total) * 100)
        const percentage_usage = (100 - percentage_free)
    
        const stats = {
            total: `${total} MB`,
            free: `${mem}MB`,
            percentage_usage: `${percentage_usage}%`
        }
    
        if(percentage_usage <= 50) {
            console.table(stats),
            console.log('\nSistema OK!')
            console.log(`\nSistema usando ${stats.percentage_usage},\ ${percentage_free}% da memória livre.`)
        } else {
                console.table(stats),
                console.log(`\nSistema usando ${stats.percentage_usage},\nsomente ${percentage_free}% da memória livre.`)
        }
    
        console.log('\n\nBy: Lucas Newlands')
    }, 1000)
}

console.log(mySystemStatus())
