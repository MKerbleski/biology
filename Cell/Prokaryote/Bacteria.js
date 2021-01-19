const Prokaryote = require('./Prokaryote')
const Fission = require('../../Process/Reporduction/Fission')

class Bactria extends Prokaryote {
    constructor(args){
        super()
        this.wall = false
        this.reproduction = [Fission]
    }
}

module.exports = Bactria
