export default class Food {
    
    constructor (foodJSON) {
        this._id = foodJSON.id
        this._name = foodJSON.nom
        this._qte = foodJSON.qte
        this._photo = foodJSON.photo ?? ""
    }

    get id() { return this._id }

    get name() { return this._name }

    get qte() { return this._qte }

    get photo() { return this._photo }

    toString() { return `--> ${this._name} (${ this._qte})`; }

    nameToLowerCase() { return this._name.toLowerCase(); }
}