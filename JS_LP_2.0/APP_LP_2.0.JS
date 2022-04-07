
/**
 * DEFINE GLOBAL VARIABLES
 */

/**
 * FOR THE NAV MENU
 */

const navList = document.querySelector('#navbar-list');
const navMenu = document.querySelector('.navbar-menu');
const sections = Array.from(document.getElementsByTagName('section'));


/**
 * END GLOBAL VARIABLES
 * 
 */

/**
 * START HELPER FUNCTIONS
 */

/**
 * 
 * FUNCTION TO DEFINE THE POSITION OF AN ELEMENT IN THE VIEWPORT
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

    
    listItemLink.href = getSectionId;
    listItemLink.textContent = section.dataset.nav;
    listItemLink.classList.add('nav-menu-link');
    listItem.classList.add('nav-list-item');

    listItem.appendChild(listItemLink);
    navList.appendChild(listItem);

};


/**
 * FUNCTION TO ADD AND REMOVE 'ACTIVE-SECTION' TO A SECTION DEPENDING IF IT IS IN VIEWPORT OR NOT
 */


document.addEventListener('scroll', function(){
   
    for(let section of sections) {


        if (isInViewport(section))  {
            section.classList.add('active-section');
            console.log("section in viewport");

            //apply active class to the nav link
            document
                .querySelector(`a[href='${section.id}']`)
                .classList.add('active-link');

            
        } else {
            section.classList.remove('active-section');

             //remove active class to the nav link
            document
                .querySelector(`a[href='${section.id}']`)
                .classList.remove('active-link');
        }
    }

});

/**
 * FUNCTION TO CREATE A SMOOTH BEHAVIOR TO THE SCROLLING
 */
 const navLinks = Array.from(document.querySelectorAll('.nav-menu-link'));

 for (let navLink of navLinks) {
    navLink.addEventListener('click', function(event){
        console.log('clicked');
        event.preventDefault();
        console.log(event.target);

        //get the specific location the page should show 
        let sectionID = event.target.getAttribute('href');
        console.log(sectionID);
        let section = document.getElementById(sectionID);
        
        //apply smooth behavior to the scrolling
        section.scrollIntoView({
            behavior: "smooth"
        });
       
    });

};

