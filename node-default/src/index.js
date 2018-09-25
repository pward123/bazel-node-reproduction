// import _ from 'lodash'
const _ = require('lodash')

/*
const main = async () => new Promise((resolve) => {
    setTimeout(() => {
        console.log(_.reverse([1,2,3,4,5,6,7]))
        resolve()
    }, 1000)
})
*/

function main() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(_.reverse([1,2,3,4,5,6,7]))
            resolve()
        }, 1000)
    })
}

main()
    .then(function() {
        console.log('process complete')
        process.exit(0)
    })
    .catch(function(e) {
        console.error('process failed', e.stack)
        process.exit(-1)
    })
