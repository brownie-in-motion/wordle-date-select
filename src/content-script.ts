(async () => {
  const date: string = await new Promise((res) => {
    chrome.storage.sync.get('date', (data) => res(data.date));
  });

  const valueHolder = document.createElement('input');
  valueHolder.type = 'hidden';
  valueHolder.value = date;

  document.body.appendChild(valueHolder);

  // inject script into page
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('pageScript.js');
  document.body.appendChild(script);
})();
