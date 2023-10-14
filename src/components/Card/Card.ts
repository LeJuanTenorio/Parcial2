export enum attribute{
    img = "img",
    frase = "frase"
}

class Card extends HTMLElement {

    img = null;
    frase = null;
    
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

   static get observedAttributes(){
        return ['img','frase'];
    }

    attributeChangedCallback(name:any, oldValue:any, newValue:any) {
        if (name = this.img){
            this.img = newValue
        } else (name =this.frase)=>{ 
            this.frase = name 
        }
      }

    connectedCallback() {
        this.mount();
    }

    mount(){
        this.render();

        const button = this.ownerDocument.createElement('button');
        button.addEventListener('click',()=>{

        })

    }
    
    render() {
        if (this.shadowRoot){
            this.shadowRoot.innerHTML=`<img src=${this.img}></img>
            <p>${this.frase}</p>`
        }
    }
}

customElements.define('app-container', Card)
export default Card;