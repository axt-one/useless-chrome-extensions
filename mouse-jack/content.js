document.body.style.cursor = "none";
const elements = document.querySelectorAll('*');
for (const e of elements) {
    e.style.cursor = "none";
}

const pointerElement = document.createElement('img');
pointerElement.setAttribute('id', 'mypointer');
pointerElement.style.position = 'absolute';
pointerElement.style.zIndex = 1000000;
document.body.prepend(pointerElement);


// ポインタの画像を設定
// http://www9.plala.or.jp/oyoyon/html/script/platform.html
if (navigator.platform.indexOf("Win") != -1) {
  // Windows
  pointerElement.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAXCAYAAADtNKTnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjnRFWHRDb21tZW50AGNIUk0gY2h1bmtsZW4gMzIgaWdub3JlZA1BU0NJSTogLi56JS4uLi4uLi4lLi4uLi4ubV8uLi5sLi48Li4uLlgNSEVYOiAwMDAwN0EyNTAwMDA4MDgzMDAwMEY0MjUwMDAwODREMTAwMDA2RDVGMDAwMEU4NkMwMDAwM0M4QjAwMDAxQjU4GN773QAAAgFJREFUeJyUlEtLAlEUx0cd7YFagUkvxKIgiB4USEREUNAqWgvtatEnaNVnaVWrNrVoEURFT6JCxBDDIpKScGG5EATR2/9MZ6ZrjjJe+MHMmXt+c+65c0cRQihEuVy2lUolO0HXetwKil31valN3SFFUVygFTQDJ7CBhiSHYA45ncAHvI2INMlH+lNAcgRWkDMI+kCbVZEmwYVg0SlYRc7of5EliSS6AGtIHLMqqpBIoiuwblVUJZFE12Yis+03leBbEanUu2VRlYQExWJRFAoF8fzyWlMkL61CIgvy+bzI5XIiHk/UFdH2GxIzQTabFZlMRkQiUTPR3wdJknqCdDqN/qTE7e2dwNwrJM2AEdDFx8SuSWTB01PSEODZjcQ1uGQJVRMAHuDQJLLA1ezL7ezuaRVw4pbb27OEyfNgGkyAIdAN3IZEEnyDDcQepSXEMHEBzIJxEOSD6uGT/7scFnyBMIJziJ3s7x+KZDJJkmOwyRJaRi8LnJqAd+cIyVmwiNthMIVYGEQTiYQ4OzsnUZTk9KyiF3y69aHy3tPWDThcPX1IPCBBLBYjyT1XEuJ+dHBOxaCymvgN7WikG4kB8AC2wTLik9zUfn5hlUQXqQyValNdfjugb8HPDQ3ydavRD31N8rpMBklb+O1eFlDM+OOZ/2RqV+mQK9Dn/wAAAP//AwCGMlcrSCX+UAAAAABJRU5ErkJggg==";
} else {
  // Mac
  pointerElement.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAVCAMAAABBhy+7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA+VBMVEUAAAAAAAD7+/sAAAD09PQAAAAAAAD09PTz8/PS0tJqampubm5+fn6np6cAAAD19fXw8PD39/cJCQkAAAAAAAAAAAAAAAD19fWzs7OgoKDX19cAAAD+/v6ysrIAAAAICAj29vb09PQAAAAAAADFxcUAAAAAAADR0dH8/Py2trYAAAAAAAAAAABRUVH29vb39/fJycni4uLp6emjo6MHBwcAAAAAAAAAAAD////T09MUFBTS0tIAAAAXFxfb29sbGxseHh4aGhrr6+vv7+/39/c5OTni4uIKCgqurq5BQUFmZmZDQ0PQ0NDW1tY9PT1tbW2np6cgICCioqIFyGmYAAAAOHRSTlMAAooIjg4QiH6dTUpBMQT92N4bFBILA/t4aU0B+3AgIt6zBQ1lGwqE/CMGCQcp9txCpsJpJQ8iGe73bXgAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAArUlEQVQY003P1xKCMBRFUaKCvSuWWFFsYG9Rr1jA3v3/jzGMwOS8rac9h0MuxDFzEw9rnixYC2S5YiwQYE0Ja82xSdhoXsSQ2ocYOrZo26Zlk1vY7XXdINSUh+MJzv5AMBSOUF6isSvc4olkKi1SZrK5O8AjLyKEOaFQLJUrT3hVJTNUq8sNofmGT6uNKTu8gtVu72v0B2YXi5hDqeFoPJk6txR5NuclbBOpyh8/ou0enbQh1QcAAAAASUVORK5CYII=";
}

// クリックされた時

// マウス移動イベント
window.addEventListener('mouseenter', () => {
    console.log('mouseenter');
    pointerElement.style.display = "block"
}, false);

window.addEventListener('mouseleave', () => {
    console.log('mouseleave');
    pointerElement.style.display = "none"
}, false);

window.addEventListener('mousemove', (mouse) => {
    console.log('mousemove');
    let mousePos = {
        x: mouse.pageX,
        y: mouse.pageY
    };
    
    mousePos.x += (0.5 - Math.random()) * 250;
    mousePos.y += (0.5 - Math.random()) * 250;

    pointerElement.style.left = `${mousePos.x}px`;
    pointerElement.style.top = `${mousePos.y}px`;
}, false);
