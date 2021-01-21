const Fission = require('../Fission')

class Binary extends Fission{
    constructor(){
        super()
        this.types = ['irregular', 'longitudinal', 'transverse', 'oblique']
    }
}

module.export = Binary