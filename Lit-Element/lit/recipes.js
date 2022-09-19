import { LitElement, html } from "lit";
import { estilos} from './estilos';

class MyRecipes extends LitElement{

    static get styles(){
        return[
            estilos
        ]
    }

    render (){
        return html`
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link type="text/css" href="/css/materialize.min.css" rel="stylesheet">

                <!-- recipes -->
                <div class="recipes container grey-text text-darken-1">
            <div class="card-panel recipe white row">
                <img src="./img/dish.png" alt="recipe thumb">
                <div class="recipe-details">
                    <div class="recipe-title">Edame Noodles</div>
                    <div class="recipe-ingredients">Edame Beans, Noodles, Garlic oil</div>
                </div>
                <div class="recipe-delete">
                    <i class="material-icons">delete_outline</i>
                </div>
            </div>
            <div class="card-panel recipe white row">
                <img src="./img/dish.png" alt="recipe thumb">
                <div class="recipe-details">
                    <div class="recipe-title">Edame Noodles</div>
                    <div class="recipe-ingredients">Edame Beans, Noodles, Garlic oil</div>
                </div>
                <div class="recipe-delete">
                    <i class="material-icons">delete_outline</i>
                </div>
            </div>
            <div class="card-panel recipe white row">
                <img src="./img/dish.png" alt="recipe thumb">
                <div class="recipe-details">
                    <div class="recipe-title">Edame Noodles</div>
                    <div class="recipe-ingredients">Edame Beans, Noodles, Garlic oil</div>
                </div>
                <div class="recipe-delete">
                    <i class="material-icons">delete_outline</i>
                </div>
            </div>
            <div class="card-panel recipe white row">
                <img src="./img/dish.png" alt="recipe thumb">
                <div class="recipe-details">
                    <div class="recipe-title">Edame Noodles</div>
                    <div class="recipe-ingredients">Edame Beans, Noodles, Garlic oil</div>
                </div>
                <div class="recipe-delete">
                    <i class="material-icons">delete_outline</i>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define('my-recipes', MyRecipes);