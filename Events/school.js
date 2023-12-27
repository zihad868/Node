const EventEmitter = require('events');


class School extends EventEmitter{
    startPeriod(){
        console.log('Class Started !')


        // Raise an event
        setTimeout( () => {
            this.emit('bellRing', {
                period: 'first',
                test: 'period ended'
            })
        }, 1000)
    }
}

module.exports = School;