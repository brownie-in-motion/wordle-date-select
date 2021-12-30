(async () => {
  await new Promise((resolve) => {
    window.addEventListener('load', resolve);
  });

  const date: string = await new Promise((res) => {
    chrome.storage.sync.get('date', (data) => res(data.date));
  });

  const input: HTMLInputElement = document.querySelector('input[type=date]')!;
  if (date) {
    input.valueAsDate = new Date(date);
  }

  const form = document.querySelector('form')!;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const date: HTMLInputElement = document.querySelector('input[type=date]')!;
    const dateObject = new Date(date.valueAsDate!);
    const adjusted = new Date(
      dateObject.getUTCFullYear(),
      dateObject.getUTCMonth(),
      dateObject.getUTCDate()
    );
    chrome.storage.sync.set({ date: adjusted.toISOString() });
  });
})();
