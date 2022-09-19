import { LitElement, css ,html } from "lit";
import { estilos } from './estilos.js'; 

import './nav.js';
import './form.js';
import './recipes.js';

export class MyElement extends LitElement {
    static get properties()  {
       return { showform: { type: Boolean}}
    }

    static get styles() {
        return [
            estilos
        ];
    }

    render () {
        return html `

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link type="text/css" href="/css/materialize.min.css" rel="stylesheet">

        <nav-bar></nav-bar>

        <my-recipes></my-recipes>

        <my-form></my-form>

        `;
    }
}
customElements.define('my-element', MyElement);
