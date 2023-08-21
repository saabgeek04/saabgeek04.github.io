console.log('JS started');

const slcard = document.querySelector('#sillycard');

const penda = slcard.querySelector('div');

/**
 * @param {MouseEvent} event 
 */

penda.onmousemove = rotator;
penda.onmouseleave = unrotator;

/**
 * @param {PointerEvent} event 
 */
function rotator(event) {

    const posbox = penda.getBoundingClientRect();

    const relcursorX = event.clientX - posbox.x;
    const relcursorY = event.clientY - posbox.y;

    const normcurseX = relcursorX / posbox.width;
    const normcurseY = relcursorY / posbox.height;

    const Xfactor = ( normcurseX * 2 - 1 ) * 30;
    const Yfactor = ( normcurseY * 2 - 1 ) * -30;
    
    penda.style.transform = 'rotateY(' + Xfactor.toString() + 'deg) rotateX(' + Yfactor.toString() + 'deg)';


}

function unrotator(event) {
    penda.style.transform = null
    penda.style.transition = '70ms'
}
