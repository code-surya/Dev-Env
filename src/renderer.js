
const webview = document.getElementById('webview');
const urlInput = document.getElementById('url-input');
const goButton = document.getElementById('go-button');
const tabList = document.getElementById('tab-list');
const tabPopup = document.getElementById('tab-popup');

let tabs = [
  { title: 'Google', url: 'https://google.com' }
];
let currentTabIndex = 0;

function loadTab(index) {
  const tab = tabs[index];
  if (tab) {
    webview.src = tab.url;
    urlInput.value = tab.url;
    currentTabIndex = index;
    renderTabList();
  }
}

function renderTabList() {
  tabList.innerHTML = '';
  tabs.forEach((tab, index) => {
    const li = document.createElement('li');
    li.textContent = tab.title || tab.url;
    li.style.cursor = 'pointer';
    li.style.padding = '5px';
    li.style.background = index === currentTabIndex ? '#444' : 'transparent';
    li.onclick = () => loadTab(index);
    tabList.appendChild(li);
  });
}

goButton.onclick = () => {
  let url = urlInput.value.trim();
  if (!url.startsWith('http')) url = 'https://' + url;
  webview.src = url;
  tabs[currentTabIndex].url = url;
  tabs[currentTabIndex].title = url;
};

urlInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') goButton.click();
});

webview.addEventListener('did-navigate', (e) => {
  urlInput.value = e.url;
  tabs[currentTabIndex].url = e.url;
  tabs[currentTabIndex].title = e.url;
  renderTabList();
});

window.addEventListener('new-tab', () => {
  tabs.push({ title: 'New Tab', url: 'https://google.com' });
  loadTab(tabs.length - 1);
});

window.addEventListener('switch-tab', (e) => {
  const offset = e.detail;
  let newIndex = currentTabIndex + offset;
  if (newIndex < 0) newIndex = tabs.length - 1;
  if (newIndex >= tabs.length) newIndex = 0;
  loadTab(newIndex);
});

window.addEventListener('toggle-tab-bar', () => {
  if (tabPopup.style.display === 'none') {
    tabPopup.style.display = 'block';
  } else {
    tabPopup.style.display = 'none';
  }
});

loadTab(0); // Load the first tab
