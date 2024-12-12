export class Product {
  #name;
  #price;
  #imgUrl;

  constructor(name, price) {
    name = this.#name;
    price = this.#price;
  }

  getName() {
    return this.#name;
  }

  getPrice() {
    return this.#price;
  }

  getImgUrl() {
    return this.#imgUrl;
  }

  setName(newName) {
    this.#name = newName;
  }

  setPrice(newPrice) {
    this.#price = newPrice;
  }

  setImgUrl(newImgUrl) {
    this.#imgUrl = newImgUrl;
  }
}
