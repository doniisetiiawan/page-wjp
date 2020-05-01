import EventEmitter from 'event-emitter';
import LocalStore from './local-storage';

class Backend extends EventEmitter {
  constructor() {
    super();

    const pages = LocalStore.get('pages', []);

    this.id = 1;

    this.pages = pages.map((page) => {
      page.id = this.id++;
      return page;
    });
  }

  insert = () => {
    this.pages.push({
      id: this.id,
      title: `New page ${this.id}`,
      body: '',
    });

    this.id++;

    LocalStore.set('pages', this.pages);

    this.emit('update', this.pages);
  };

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
