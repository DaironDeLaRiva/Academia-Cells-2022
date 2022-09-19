import { LitElement, html } from "lit";
import './nav.js';

class MyAbout extends LitElement{
    render(){
        return html`
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link type="text/css" href="/css/materialize.min.css" rel="stylesheet">
        <nav-bar></nav-bar>
        <div class="container grey-text">
            <h5 class="center">About Food Ninja</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, esse!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sunt eius ut doloribus voluptas officiis.</p>
        </div>
        `;
    }
}
customElements.define('my-about', MyAbout);