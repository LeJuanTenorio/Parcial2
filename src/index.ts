import "./components/export"
import {Card} from "./components/export"
import { attribute } from "./components/Card/Card";

const fetchFunction = async (data:any)=>{
    try{
        const response = await fetch(data);
        const jsonJimenez = await response.json();
        console.log(jsonJimenez);
        return jsonJimenez;
        
    } catch{
        console.error(Error)
    }
}

class AppContainer extends HTMLElement {
    constructor(){

        
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {


        if (this.shadowRoot){
            const gatoFrase = fetchFunction('https://catfact.ninja/fact');
            const gatoImagen = fetchFunction('https://cataas.com/cat');

            console.log(gatoImagen);
            this.shadowRoot.innerHTML=`<img src=${gatoImagen.gatoImagen}></img>
            <p>${gatoFrase.fact}</p>`
        }
    }
}

customElements.define('app-containerr', AppContainer)