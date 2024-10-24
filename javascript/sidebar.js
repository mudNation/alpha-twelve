let collapse = false; 
let darkMode = false; 
const primary = "#8576FF"
const darkModeBackground = "#383544"
const darkModeSurface = "#484554"
const primaryDark = "#484554"
const white = "#ffffff"

// open navigation for mobile devices
function openSidebar(){
    const burger = document.getElementById("burger");
    const close = document.getElementById("close");
    const extraMob = document.getElementById("extra-mob"); 
    const mobTop = document.getElementById("mobile-nav-top")
    
    burger.style.display = "none"; 
    close.style.display = "flex"; 
    extraMob.style.display = "block"; 
    mobTop.classList.add("coverNav");
}

// close navigation for mobile devices
function closeSidebar(){
    const burger = document.getElementById("burger")
    const close = document.getElementById("close")
    const extraMob = document.getElementById("extra-mob");
    const mobTop = document.getElementById("mobile-nav-top")

    burger.style.display = "flex"; 
    close.style.display = "none"; 
    extraMob.style.display = "none";
    mobTop.classList.remove("coverNav");
}


//toggle side bar when collapse is clicked for desktop devices
function collapseClick(){
    const collapseImg = document.getElementById("collapse-img"); 
    const sideBar = document.getElementById("side-bar")
    const statSection = document.getElementById("stat-section"); 
    const chartHolder = document.getElementById("myChart");
    const slideHolder = document.getElementById("slide-show-holder"); 
    const chartSlide = document.getElementById("chart-slide");
    const tableInputHolder = document.getElementById("table-input-holdeer");
    const tableSection = document.getElementById("table-section");
    const logo = document.getElementById("side-bar-logo"); 
    const activeTab = document.getElementsByClassName("active-tab")[0]; 
    const activeHome = document.getElementById("active-home")

    console.log(tableInputHolder, "====chart holder")

    collapse = !collapse; 

    if(collapse){
        collapseImg.src = "assets/icons/un-collapse.svg"; 
        hideCollapse("none"); 

        sideBar.classList.remove("full-sidebar")
        sideBar.classList.add("collapsed-sidebar");

        swapClasses(statSection, "stats-section", "extra-stats-section")
        swapClasses(chartHolder, "chart-holder", "extra-chart-holder")
        swapClasses(slideHolder, "slide-show-holder", "extra-slide-show-holder")
        swapClasses(chartSlide, "stat-slide-holder", "extra-stat-slide-holder")

        swapClasses(tableInputHolder, "table-input-holder", "extra-table-input-holder")
        swapClasses(tableSection, "table-section", "extra-table-section")

        logo.src="assets/icons/collapsed-logo.svg"
        logo.style.height = "32px";
        logo.style.width = "32px";

        activeTab.style.backgroundColor = "white"

        activeHome.src = "assets/icons/home.svg"
    }else{
        hideCollapse("flex"); 
        collapseImg.src = "assets/icons/collapse.svg"; 

        sideBar.classList.remove("collapsed-sidebar");
        sideBar.classList.add("full-sidebar");
        
        swapClasses(statSection, "extra-stats-section", "stats-section")
        swapClasses(chartHolder, "extra-chart-holder", "chart-holder")
        swapClasses(slideHolder, "extra-slide-show-holder", "slide-show-holder")
        swapClasses(chartSlide, "extra-stat-slide-holder", "stat-slide-holder")

        swapClasses(tableInputHolder, "extra-table-input-holder", "table-input-holder")
        swapClasses(tableSection, "extra-table-section", "table-section")

        document.getElementById("profile-name-holder").style.display = "block"

        logo.src="assets/icons/full-logo.svg"
        logo.style.height = "32px";
        logo.style.width = "64px";

        activeHome.src = "assets/icons/home-primary.svg"

        activeTab.style.backgroundColor = "#FCF7FF"
    }
}

//swap classes of elments, used when the side bar has been collapsed. 
function swapClasses(element, oldClass, newClass){
    element.classList.remove(oldClass)
    element.classList.add(newClass);
}


// hide the text and extra icons when side bar has been collapsed
function hideCollapse(display){
    const collapsables = document.getElementsByClassName("collapsable"); 

    for(let i = 0; i < collapsables.length; i++){
        if(display === "none"){
            
            collapsables[i].style.opacity = "0"

            setTimeout(function(){
                collapsables[i].style.display = display;
            }, 500)
        }else{
            collapsables[i].style.display = display;

            collapsables[i].style.opacity = "1"
            // collapsables[i].classList.remove("hiddenCollapse")
            collapsables[i].classList.add("show-collapse")
            // collapsables[i].style.display = display;
        }
        
    }
}

// toggle dark mode
function darkModeSwitch(){
    darkMode = !darkMode; 
    const content = document.getElementById("content"); 
    const sideBar = document.getElementById("side-bar");
    const activeTab = document.getElementsByClassName("active-tab")[0]; 
    const activeHome = document.getElementById("active-home")

    const darks = document.getElementsByClassName("dark");
    const formControl = document.getElementsByClassName("form-control")
    const formSelect = document.getElementsByClassName("form-select");
    const iconHolder = document.getElementsByClassName("icon-holder")

    const ellipses = document.getElementById("elipsis-image"); 
    const download = document.getElementById("export-image"); 

    const ths = document.getElementsByTagName("th");
    const trs = document.getElementsByTagName("tr");

    const completeds = document.getElementsByClassName("completed-pill"); 
    const inProgress = document.getElementsByClassName("in-progress-pill")

    const navMobTop = document.getElementsByClassName("nav-mobile-logo-holder");
    const burger = document.getElementById("burger-image"); 

    const mobileFooter = document.getElementsByClassName("mobile-footer"); 

    const footerHome = document.getElementById("footer-home")

    const modalFooter  = document.getElementsByClassName("modal-footer")

    const leftPagination = document.getElementById("left-pagination")
    const rightPagination = document.getElementById("right-pagination")

    


    backgroundLoop(darks);
    backgroundLoop(formControl);
    backgroundLoop(formSelect);
    backgroundLoop(iconHolder);
    backgroundLoop(ths, "th-dark-surface");
    backgroundLoop(trs);
    backgroundLoop(completeds, "dark-completed-pill")
    backgroundLoop(inProgress, "dark-progress-pill")
    backgroundLoop(navMobTop, "border-none")
    backgroundLoop(mobileFooter, "primary-dark-surface")
    backgroundLoop(modalFooter, "footer-background")


    if(darkMode){
        document.body.style.backgroundColor = darkModeBackground

        activeTab.style.backgroundColor = primary; 
        activeHome.src = "assets/icons/home-white.svg"

        ellipses.src="assets/icons/white-ellipses.svg"
        download.src="assets/icons/white-download.svg"

        burger.src ="assets/icons/white-burger.svg"

        footerHome.src = "assets/icons/home-primary.svg"

        leftPagination.src = "assets/icons/blue-left-chev.svg"
        rightPagination.src = "assets/icons/blue-right-chev.svg"

    }else{
        document.body.style.backgroundColor = white


        activeTab.style.backgroundColor = white; 
        activeHome.src = "assets/icons/home-primary.svg"

        ellipses.src="assets/icons/vertical-elpsis.svg"
        download.src="assets/icons/download.svg"
        burger.src ="assets/icons/burger.svg"

        footerHome.src = "assets/icons/home.svg";

        leftPagination.src = "assets/icons/pagination-left-chev.svg"
        rightPagination.src = "assets/icons/pagination-right-chev.svg"
    }

    

    switchTextColor();

    setMobileTableChevs();

    setInfoImages()
    setChart();
}


// swap the info icons for darkmode/lightmode
function setInfoImages(){
    const infos = document.getElementsByClassName("info-image")

    for(let i = 0; i < infos.length; i++){
        if(darkMode){
            infos[i].src = "assets/icons/white-info.svg"
        }else{
            infos[i].src = "assets/icons/info.svg"
        }
    }
}

//toggle table chev icons for darkmode
function setMobileTableChevs(){
    const mobileTableChevs = document.getElementsByClassName("mobile-table-chev"); 

    for(let i = 0; i < mobileTableChevs.length; i++){
        const image = document.getElementById(`table-chev-${i}`); 
        const elementBottom = document.getElementById(`table-bottom-${i}`)
        const display = elementBottom.style.display; 

        if(display){
            if(darkMode){
                image.src = "assets/icons/white-down-chev.svg";
            }else{
                image.src = "assets/icons/down-chev.svg";
            }
        }else{
            if(darkMode){
                image.src = "assets/icons/white-right-chev.svg";
    
            }else{
                image.src = "assets/icons/mob-right-chev.svg";
            }
        }

        if(darkMode){
            elementBottom.style.backgroundColor = darkModeBackground; 
        }else{
            elementBottom.style.backgroundColor = "#FCF7FF"
        }        
    }
}

//helper function to toggle text collors for dark mode on text tags
function switchTextColor(){
    const p1s = document.getElementsByTagName("p"); 
    const h1s = document.getElementsByTagName("h1"); 
    const h2s = document.getElementsByTagName("h2"); 
    const ths = document.getElementsByTagName("th");

    textLoop(p1s); 
    textLoop(h1s);
    textLoop(h2s);
    textLoop(ths)
}


//toggle background collors for collections of elements for darkmode
function backgroundLoop(tags, className = "dark-mode-surface"){
    for(let i = 0; i < tags.length; i++){
        if(darkMode){
            tags[i].classList.add(className)
        }else{
            tags[i].classList.remove(className)
        }
    }
}


//toggle text colors for collection of elements for darkmode
function textLoop(tags){
    for(let i = 0; i < tags.length; i++){
        if(darkMode){
            tags[i].classList.add("text-white")
        }else{
            tags[i].classList.remove("text-white")
        }
    }
}