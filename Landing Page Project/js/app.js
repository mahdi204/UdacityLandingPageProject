const navList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));
let numberOfListItems = sections.length;

function createListItem(){
    for(section of sections){
        sectionName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute('id');
        //create an item for each section
        listItem = document.createElement("li");
        //add the item text 
        listItem.innerHTML = `<a href="#${sectionLink}" class="menu__link">${sectionName}</a>`;
        //add listItem to the menu
        navList.appendChild(listItem);
    }
}

function sectionInViewPort(element){
    let sectionPosition = element.getBoundingClientRect();
    return (
        sectionPosition.top >= 0 &&
        sectionPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function toggleActiveClass(){
    for(section of sections){
        section.classList.remove("your-active-class");
    }
    let activeSection = null;
    for (let section of sections) {
        if (sectionInViewPort(section)) {
            activeSection = section;
        }
    }

    for (let section of sections) {
        if (section === activeSection) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
            //meassage
        }
    }
}

createListItem();
document.addEventListener("scroll",toggleActiveClass);