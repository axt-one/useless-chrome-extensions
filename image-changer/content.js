const imgUrl = [
    'https://1.bp.blogspot.com/-BtA-5lUEZ7U/XdttdTmBVZI/AAAAAAABWIc/WDbvWBJkN3UzdKhCAXkRU5h3TGhJwE16ACNcBGAsYHQ/s400/fruit_slice_grapefruit.png',
    'https://1.bp.blogspot.com/-A5z35AuVSwA/XdttdxDvwwI/AAAAAAABWIg/Qxl_6sg1v6Asa0AQEEOLg6fe_wEB8bCDQCNcBGAsYHQ/s400/fruit_slice_grapefruit_pink.png'
];
window.onload = () => {
    const elements = document.querySelectorAll('img');
    let i;
    for (const e of elements) {
        i = Math.floor(Math.random() * imgUrl.length);
        e.src = imgUrl[i];
        e.srcset = imgUrl[i] + ' 1x,' + imgUrl[i] + ' 2x';
    }
}