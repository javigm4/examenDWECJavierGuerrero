export class Category {
  #CatName;
  #CategoryValue;

  constructor(catName, catValue) {
    catName = this.#CatName;
    catValue = this.#CategoryValue;
  }

  getCatName() {
    return this.#CatName;
  }

  getCatValue() {
    return this.#CategoryValue;
  }

  setCatName(newCatName) {
    this.#CatName = newCatName;
  }

  setCatValue(newCatValue) {
    this.#CategoryValue = newCatValue;
  }
}
