import { LitElement, html } from "lit";
import { estilos } from './estilos';

class MyForm extends LitElement{
    static get properties(){
        return { showform: {type: Boolean}}
    }

    static get styles(){
        return [
            estilos
        ]
    }

    showForm(){
        this.showform = !this.showform;
    }

    render(){
        return html`
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link type="text/css" href="/css/materialize.min.css" rel="stylesheet">

        <div class="center">
            <a class="btn-floating btn-small btn-large add-btn sidenav-trigger" data-target="side-form">
                <i class="material-icons" @click="${this.showForm}">add</i>
            </a>
        </div>

        <!-- add recipe side nav -->
        <div ?hidden = "${!this.showform}" id="side-form" class="sidenav side-form">
            <form class="add-recipe container section">
                <h6 >New Recipe</h6>
                <div class="divider"></div>
                <div class="input-field">
                    <label for="title">Recipe Title</label>
                    <br>
                    <input placeholder="e.g. Ninja soup" id="title" type="text" class="validate">
                </div>
                <div class="input-field">
                    <label for="ingredients">Ingredients</label>
                    <br>
                    <input placeholder="e.g. Tofu, mushroom, garlic" id="ingredients" type="text" class="validate">   
                </div>
                <div  class="input-field center">
                    <button class="btn-small">Add</button>
                </div>
            </form>
        </div>
        `;
    }
}
customElements.define('my-form', MyForm);