const Cell = require('../Cell')
const Chromosone = require('../Eukaryote/Chromosone')

class Eukaryote extends Cell {
    constructor(){
        super()
        this.contains = [ Chromosone ]
    }
}

module.export = Eukaryote
