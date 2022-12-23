const menuBtn = document.querySelector('.share_btn');
const menuBtn2 = document.querySelector('.share_btn_2')
const menuContent = document.querySelector(".social_pop_up");

let menuPopup = false;

// Popup and change button bg color on click desktop

menuBtn.addEventListener('click', () => {
    if(menuPopup){
        menuContent.classList.remove('show');
        menuBtn.classList.remove('bg');
        menuPopup = false;
    }else {
        menuContent.classList.add('show');
        menuBtn.classList.add('bg');
        menuPopup = true;
    }
});

// Popup and change button bg color on click mobile

menuBtn2.addEventListener('click', ()=> {
    if(menuPopup){
        menuContent.classList.remove('show');
        menuBtn.classList.remove('bg');
    } else {
        menuContent.classList.add('show');
        menuBtn.classList.add('bg');
    }
})

// Close the popup when clicking outside the div

document.addEventListener('click', (event) => {
    if(!menuContent.contains(event.target) && !menuBtn.contains(event.target)){
        if(menuPopup){
            menuContent.classList.remove('show');
            menuBtn.classList.remove('bg');
            menuPopup = false;
        }
    }
})









