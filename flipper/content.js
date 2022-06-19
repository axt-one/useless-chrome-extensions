"use strict";

const animateTime = 500;
const blockContainer = new Set(['DIV', 'CENTER', 'FIELDSET', 'BLOCKQUOTE', 'FORM', 'NOSCRIPT']);
const blockTag = new Set(['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'ADDRESS', 'P', 'PRE', 'UL', 'OL', 'DL', 'DIR', 'MENU', 'TABLE', 'HR', 'ISINDEX', 'NOFRAMES']);

function setTransform(el) {
    const transform = el.style.transform;
    el.myTransformFlag = false;
    el.myMouseoverFlag = false;
    el.addEventListener('mouseover', () => {
        el.myMouseoverFlag = true;
        if (!el.myTransformFlag) {
            el.myTransformFlag = true;
            el.style.transform += ' rotateY(180deg)';
            // TODO: element.style.transition property is overwritten and not restored its original state.
            el.style.transition = `transform ${animateTime}ms 0s ease`;
            setTimeout(() => {
                el.myTransformFlag = false;
                if (!el.myMouseoverFlag) {
                    el.style.transform = transform;
                }
            }, animateTime);
        }
    });
    el.addEventListener('mouseleave', () => {
        el.myMouseoverFlag = false;
        if (!el.myTransformFlag) {
            el.style.transform = transform;
        }
    });
}

function flipper(elements) {
    // TODO: improve how to specify the elements
    for (const el of elements) {
        if (blockTag.has(el.tagName)) {
            setTransform(el);
        } else {
            if (el.getElementsByTagName('div').length == 0 && el.getElementsByTagName('center').length == 0 && el.getElementsByTagName('fieldset').length == 0) {
                setTransform(el);
            } else {
                flipper(el.children);
            }
        }
    }
}


window.addEventListener('load', () => {
    const elements = document.body.children;
    flipper(elements);
});