// Resonsive menu

const primaryNav = document.getElementById('primary-navigation');
const navBut = document.getElementById('nav-button');

navBut.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navBut.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute("data-visible", false);
        navBut.setAttribute('aria-expanded', false)
    }
    // console.log(navBut.getAttribute('aria-expanded'));
})

// Easy way

// navBut.addEventListener('click', () => {
//     primaryNav.classList.toggle('active')
// })

// Tabs

const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
let tabFocus = 0;
//  console.log(tabList, tabs);

tabList.addEventListener('keydown',  changeTabFocus)
tabs.forEach(tab => {
    tab.addEventListener('click', changeTabPanel);
});


function changeTabFocus(e){
    const keyDownLeft = 37;
    const keyDownRight = 39;

    // change tab index of the current tab to -1
    if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight){
    tabs[tabFocus].setAttribute('tabindex', -1)
    }

    if (e.keyCode === keyDownRight){
        tabFocus ++;   
        if(tabFocus >= tabs.length){
            tabFocus = 0;
        }
    }

    if (e.keyCode === keyDownLeft){
        tabFocus --;
        if(tabFocus < 0){
            tabFocus = tabs.length -1;
        }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
}

function changeTabPanel(e){
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const correctPanel = document.querySelectorAll('article');
    const pics = document.querySelectorAll('picture');
    const correctPics = targetTab.getAttribute("data-image");

    console.log(pics);

    const newPanel = correctPanel.forEach(panel => {
        if(panel.id === targetPanel){
            hideContent(panel, pics);
            
        } else{
            panel.setAttribute('hidden', true)
        }
    })

    // const newImage = pics.forEach(pic => {
    //     if(pic.id === correctPics){
    //         pic.removeAttribute('hidden')
    //     } else{
    //         pic.setAttribute('hidden', true)
    //     }
    // })

    // Sets current tab underline
    tabList.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
    targetTab.setAttribute("aria-selected", true);
}

function hideContent(parent, pics){
    parent.removeAttribute('hidden')
    console.log(parent.id);
    pics.forEach(pic => {
            if(pic.id === correctPics){
                pic.removeAttribute('hidden')
            } else{
                pic.setAttribute('hidden', true)
            }
    })        
}

function showContent(){

}
