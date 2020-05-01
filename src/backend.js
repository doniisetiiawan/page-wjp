import EventEmitter from 'event-emitter';
import LocalStore from './local-storage';

class Backend extends EventEmitter {
  constructor() {
    super();

    this.pages = LocalStore.get('pages', []);
  }

  all = () => this.pages;

  update = (id, property, value) => {
    this.pages = this.pages.map((page) => {
      if (page.id == id) {
        page[property] = value;
      }

      return page;
    });

    LocalStore.set('pages', this.pages);

    this.emit('update', this.pages);
  };

  delete = (id) => {
    this.pages = this.pages.filter(
      (page) => page.id !== id,
    );

    LocalStore.set('pages', this.pages);

    this.emit('update', this.pages);
  };
}

export default Backend;
