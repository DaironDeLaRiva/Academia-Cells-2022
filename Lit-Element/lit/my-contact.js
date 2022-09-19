import { LitElement, html } from "lit";
import './nav.js';

class MyContact extends LitElement{
    render(){
        return html`
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link type="text/css" href="/css/materialize.min.css" rel="stylesheet">
        <nav-bar></nav-bar>

        <div class="container grey-text">
            <h5 class="center">Contact us</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, illum!</p>
            <div class="divider"></div>
            <h6>Find us at</h6>
            <ul>
                <li>123 Spicy Noodle Road</li>
                <li>Manchester, UK</li>
            </ul>
        </div>
        `
    }
}
customElements.define('my-contact', MyContact);