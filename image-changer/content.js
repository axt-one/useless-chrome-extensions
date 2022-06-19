const imgFiles = [
    'resources/fruit_slice_grapefruit_pink.png',
    'resources/fruit_slice_grapefruit.png'
];

function replaceImage() {
    const elements = document.getElementsByTagName('img');
    for (const e of elements) {
        let i = Math.floor(Math.random() * imgFiles.length);
        let imgURL = chrome.runtime.getURL(imgFiles[i]);
        e.src = imgURL;
        e.srcset = imgURL + ' 1x,' + imgURL + ' 2x';
    }
}

window.addEventListener('load', replaceImage);

const observer = new MutationObserver(replaceImage);

observer.observe(document, {
    subtree: true,
    characterData: true,
    childList: true
});