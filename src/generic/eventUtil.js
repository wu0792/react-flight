export const setTooltip = (el, tip) => {
    tip.style.left = `${el.offsetLeft}px`;
    tip.style.top = `${el.offsetTop + el.offsetHeight}px`;
    tip.style.display = 'block';
}

export const hideTooltip = (tip) => {
    tip.attributes['hideInterval'] = setTimeout(()=>{
        tip.style.display = 'none';
    },100);
}

export const revertHideTooltip = (tip) => {
    clearTimeout(tip.attributes['hideInterval']);
}