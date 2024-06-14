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


// open/close links footer
const about = document.querySelectorAll('#about')
const order = document.querySelectorAll('#order')
const reward = document.querySelectorAll('#reward')

// buttons
const openAboutBtn = document.querySelector('#open__about-btn');
const closeAboutBtn = document.querySelector('#close__about-btn');
const openOrderBtn = document.querySelector('#open__order-btn');
const closeOrderBtn = document.querySelector('#close__order-btn');
const openRewardBtn = document.querySelector('#open__reward-btn');
const closeRewardBtn = document.querySelector('#close__reward-btn');


// opens about dropdown
const openAbout = () => {
    about.forEach(element => {
        element.style.display = 'block';

    });
    openAboutBtn.style.display = 'none';
    closeAboutBtn.style.display = 'block';
} 

// close about dropdown
const closeAbout = () => {
    about.forEach(element => {
        element.style.display = 'none';
    });
    openAboutBtn.style.display = 'block';
    closeAboutBtn.style.display = 'none';
} 

// opens order dropdown
const openOrder = () => {
    order.forEach(element => {
        element.style.display = 'block';
    });
    openOrderBtn.style.display = 'none';
    closeOrderBtn.style.display = 'block';
} 

// close order dropdown
const closeOrder = () => {
    order.forEach(element => {
        element.style.display = 'none';
    });
    openOrderBtn.style.display = 'block';
    closeOrderBtn.style.display = 'none';
} 

// opens reward dropdown
const openReward = () => {
    reward.forEach(element => {
        element.style.display = 'block';
    });
    openRewardBtn.style.display = 'none';
    closeRewardBtn.style.display = 'block';
} 

// close Reward dropdown
const closeReward = () => {
    reward.forEach(element => {
        element.style.display = 'none';
    });
    openRewardBtn.style.display = 'block';
    closeRewardBtn.style.display = 'none';
} 

// if click => action
openAboutBtn.addEventListener('click', openAbout);
closeAboutBtn.addEventListener('click', closeAbout);
openOrderBtn.addEventListener('click', openOrder);
closeOrderBtn.addEventListener('click', closeOrder);
openRewardBtn.addEventListener('click', openReward);
closeRewardBtn.addEventListener('click', closeReward);


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
        openAboutBtn.style.display = 'none';
        closeAboutBtn.style.display = 'none';
        openOrderBtn.style.display = 'none';
        closeOrderBtn.style.display = 'none';
        openRewardBtn.style.display = 'none';
        closeRewardBtn.style.display = 'none';
    } else {
        // Ensure only the open button is visible on smaller screens
        openNavBtn.style.display = 'inline-block';
        closeNavBtn.style.display = 'none';
        openAboutBtn.style.display = 'inline-block';
        closeAboutBtn.style.display = 'none';
        openOrderBtn.style.display = 'inline-block';
        closeOrderBtn.style.display = 'none';
        openRewardBtn.style.display = 'inline-block';
        closeRewardBtn.style.display = 'none';
    }
};

// Listen for resize events
window.addEventListener('resize', handleResize);

// Initial check
handleResize();
