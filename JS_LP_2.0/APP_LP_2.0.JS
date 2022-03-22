
/**
 * DEFINE GLOBAL VARIABLES
 */

/**
 * FOR THE NAV MENU
 */

const navList = document.querySelector('#navbar-list');
const sections = Array.from(document.getElementsByTagName('section'));

/**
 * END GLOBAL VARIABLES
 * 
 */

/**
 * START HELPER FUNCTIONS
 */
 function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


/**
 * START MAIN FUNCTIONS
 */

// FUNCTION TO CREATE AND POPULATE NAV MENU

for (let section of sections) {
    let listItem = document.createElement('li');
    let listItemLink = document.createElement('a');
    let getSectionId = section.getAttribute('id');

    listItemLink.href = '#' + getSectionId;
    listItemLink.textContent = section.dataset.nav;
    listItemLink.classList.add('nav-menu-link');
    listItem.classList.add('nav-list-item');

    listItem.appendChild(listItemLink);
    navList.appendChild(listItem);
};

// const navLinks = document.querySelectorAll('.nav-menu-link');
// // const navLinks = Array.from(document.getElementsByClassName('nav-menu-link'));

// navLinks.forEach(element => {
//     element.addEventListener('click', () => {
//         let sectionId = document.querySelector('section');
//         console.log('clicked');

//         sectionId.classList.add('active-section');

//     })
    
// });

document.addEventListener('scroll', function(){
    for(let section of sections) {
        if (isInViewport(section)) {
            section.classList.add('active-section');

            // document
            // .querySelector(`[data=${section.id}]`)
            // .classList.add('active-section');
        } else {
            section.classList.remove('active-section');

            // document
            // .querySelector(`[data=${section.id}]`)
            // .classList.remove('active-section');
        }
    }
});

