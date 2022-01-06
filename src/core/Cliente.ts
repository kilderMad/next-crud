export default class Cliente {
    #id: string
    #nome: string
    #idade: number
    #email: string

    constructor(nome: string = '', idade: number = 0, email: string = "", id: string = null){
        this.#nome = nome
        this.#idade = idade
        this.#email = email
        this.#id = id
    }

    
    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get email(){
        return this.#email
    }
    get idade(){
        return this.#idade
    }
}