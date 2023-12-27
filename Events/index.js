const School = require('./school')

const school = new School();

school.on('bellRing', ({period, test}) => {
    console.log(`We need to run ${period} ${test}`)
})


school.startPeriod();



