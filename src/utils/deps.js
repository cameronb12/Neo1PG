export default class Deps {
    //Private method used for creating a new Map.
    static #instances = new Map();
    
    //Returns a stored new type.
    static get(type){
        //Checking if the instances exist. 
        return this.#instances.get(type) 
        //Otherise add a new instance.
        ?? this.add(type, new type());
    }

        //Returns a stored new type.
        static add(type, instance){
            return this.#instances
            .set(type, instance)
            .get(type);
        }
    
}