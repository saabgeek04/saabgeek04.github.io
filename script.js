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
    let transX = event.clientX
    let transY = event.clientY

    console.log('begin trans')

    penda.style.transform = 'rotateX(' + transX + 'deg)';
    penda.style.transform = 'rotateY(' + transY + 'deg)';
    penda.style.transition = '100ms'
}

function unrotator(event) {
    penda.style.transform = null
    penda.style.transition = '100ms'
}

