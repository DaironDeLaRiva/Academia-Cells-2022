import { LitElement, html } from "lit";
import { estilos } from "./estilos";

export class NavBar extends LitElement {
    static get properties() {
        return {showbar: { type: Boolean}}
    }

    static get styles() {
        return [
            estilos
        ]
    }

    showBar(){
        this.showbar = !this.showbar;
    }

    render() {
        return html`

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link type="text/css" href="/css/materialize.min.css" rel="stylesheet">

        <!-- Top nav -->
        <nav class="z-depth-0">
            <div class="nav-wrapper container">
            <a href="/">Food<span>Ninja</span></a>
            <span class="right grey-text text-darken-1">
                <i class="material-icons sidenav-trigger" data-target="side-menu" @click="${this.showBar}">menu</i>
            </span>
            </div>
        </nav>
        
        <!-- side nav -->
        <ul ?hidden = "${!this.showbar}" class="sideform side-menu" id="side-menu">
            <li><a class="subheader">FOODNINJA</a></li>
            <li><a href="/" class="wave-effect">Home</a></li>
            <li><a href="/pages/about.html" class="wave-effect">About</a></li>
            <li><div class="divider"></div></li>
            <li><a href="/pages/contact.html" class="wave-effect">
                <i class="material-icons">mail_outline</i>Contact</a>
            </li>
        </ul>
        `;
    }
}
customElements.define('nav-bar', NavBar);