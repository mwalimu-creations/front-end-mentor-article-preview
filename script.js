const shareButton = document.getElementById('share-button');
const shareMenu = document.querySelector('.share-menu-desktop');
const largeScreen = window.matchMedia('(min-width:1024px)');

function adjustMenu(e) {
    shareMenu.style.bottom= e.matches ? '70px' : '0';
}

shareButton.addEventListener('click', () => {
    adjustMenu(largeScreen);
})

document.addEventListener('click', (e) => {
    if(!shareButton.contains(e.target) && !shareMenu.contains(e.target)) {
        shareMenu.style.bottom='-1000px';
    }
})

window.addEventListener('resize', () => {
    shareMenu.style.bottom='-1000px';
})