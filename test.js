export default class XCheckbox extends HTMLElement {
  constructor() {
    this._checked = false;
  }
  connectedCallback() {
    this.addEventListener('click', this._onclick);
  }
  disconnectedCallback() {
    this.removeEventListener('click', this._onclick);
  }
  _onclick(e) {
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('checkedchange', {
      detail: { checked: this.checked }, bubbles: false
    }));
  }
  set checked(value) {
    this._checked = value;
    value ? this.setAttribute('checked', '') : this.removeAttribute('checked');
  }
  get checked() {
    return this._checked;
  }
}
window.customElements.define('x-checkbox', XCheckbox);
