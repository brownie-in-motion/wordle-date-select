const date: HTMLInputElement = document.querySelector('input[type="hidden"]')!;

if (date?.value === undefined || date?.value === 'undefined') {
  date.value = new Date().toISOString();
}

window.localStorage.setItem('gameState', '');

// @ts-expect-error
window.Date = class extends Date {
  constructor(...options: any) {
    if (options.length) {
      // @ts-expect-error
      super(...options);
    } else {
      super(date.value);
    }
  }
};
