import { LitElement, html, css } from 'lit-element';

export class MyElement extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = '';
  }
}

customElements.define('my-element', MyElement);
