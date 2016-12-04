export default class Greet {
  constructor(selector, name = 'Alex') {
    this.innerEl = document.querySelector(selector);
    this.name = name;
  }

  render() {
    this.innerEl.innerHTML = `<em>Hello ${this.name}, what are we doing today?</em>`;
  }
}
