import LocalStore from './local-storage';

class Backend {
  constructor() {
    this.pages = LocalStore.get('pages', []);
  }

  all() {
    return this.pages;
  }

  update(id, property, value) {
    this.pages = this.pages.map((page) => {
      if (page.id == id) {
        page[property] = value;
      }

      return page;
    });

    LocalStore.set('pages', this.pages);

    this.emit('update', this.pages);
  }

  delete(id) {
    this.pages = this.pages.filter(
      (page) => page.id !== id,
    );

    LocalStore.set('pages', this.pages);
  }
}

export default Backend;
