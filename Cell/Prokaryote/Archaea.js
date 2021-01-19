const Prokaryote = require('./Prokaryote')

class Archaea extends Prokaryote {
    constructor(args){
        super()
        this.wall = false
    }
}

module.exports = Archaea
