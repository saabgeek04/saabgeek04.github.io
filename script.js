console.log('JS started');

const blah = document.querySelector('#blah');

blah.innerHTML += '<p> Testing Text Content </p>';

const penda = document.createElement('a');

penda.href = 'https://google.com';
penda.innerHTML = 'go to google';
penda.style.opacity = '1'
blah.appendChild(penda)

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

    const Xfactor = ( normcurseX * 2 - 1 ) * 25;
    const Yfactor = ( normcurseY * 2 - 1 ) * -25;
    
    penda.style.transform = 'rotateY(' + Xfactor.toString() + 'deg) rotateX(' + Yfactor.toString() + 'deg)';


}

function unrotator(event) {
    penda.style.transform = null
    penda.style.transition = '100ms'
}

