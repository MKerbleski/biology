const BasePair = require('./BasePair')
const Telomere = require('./Telomere')

/**
 * Containes DNA
 */
class Chromosone {
    constructor(){
        this.type = [1-23]
        'ftp://ftp.ensembl.org/pub/current_genbank/homo_sapiens/'
        this.contains = [ BasePair, Telomere, Gene ]
    }

}

exports.modules = Chromosone
