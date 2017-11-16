export class Collegue {

    constructor(private _nom:string, private _image:string, private _score:number=100){
    }

    get nom():string{
        return this._nom
    }
    get image():string{
        return this._image
    }
    get score():number{
        return this._score
    }
    set score(newScore:number){
        this._score=newScore
    }
}
