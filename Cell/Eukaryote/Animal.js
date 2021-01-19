const Eukaryote = require('./Eukaryote')

class HumanCell extends Eukaryote {
    constructor(args){
        super()
        this.wall = false
    }
}

module.exports = HumanCell
