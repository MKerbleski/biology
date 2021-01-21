const BasePair = require('./BasePair')

/**
 * Seires of BasePairs that describes a charateristic
 */
class Gene {
    constructor(){
        this.describes = 'charateristic'
        this.contains = [ BasePair ]
    }

}

exports.modules = Gene
