import { Env } from './Env';

export class BaseModule{

    public el:      HTMLElement;
    public uuid:    string;
    public app:     App;
    public isDebug: boolean;

    constructor(el:HTMLElement, uuid:string, app:App){
        this.el         = el;
        this.uuid       = uuid;
        this.app        = app;
        this.isDebug    = Env.isDebug;

        this.el.dataset.uuid = this.uuid;
    }

    public init():void{}

    public destroy(MODULE_NAME:string):void{
        this.el.removeAttribute('data-uuid');
        if(this.isDebug){
            console.log(`${ MODULE_NAME } has been removed`);
        }
    }

}