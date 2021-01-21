
class Fission {
    constructor(){
        super()
    }

    split(original, numberOfCopies=1){
        return [].fill(original, 0, numberOfCopies-1)
    }
}

exports.modules = Fission
