const drawernav = document.querySelector('.drawer__nav')
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

// opens nav dropdown
const openNav = () => {
    drawernav.style.display = 'inline-block'
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block'
} 

// close nav dropdown
const closeNav = () => {
    drawernav.style.display = 'none';
    
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none'
} 


// if click => action
openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);


// Function to reset nav buttons on screen resize
const handleResize = () => {
    if (window.innerWidth > 800) {
        // Reset the display properties for larger screens
        drawernav.style.display = 'none';
        openNavBtn.style.display = 'none';
        closeNavBtn.style.display = 'none';
    } else {
        // Ensure only the open button is visible on smaller screens
        openNavBtn.style.display = 'inline-block';
        closeNavBtn.style.display = 'none';
    }
};

// Listen for resize events
window.addEventListener('resize', handleResize);

// Initial check
handleResize();