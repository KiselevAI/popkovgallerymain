const tabsBtns = document.querySelectorAll(".tabs-nav button")

const tabsItems = document.querySelectorAll(".tabs-item")

function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}


hideTabs();
showTab(0);


tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));

// якори ---------------------

const anchors = document.querySelectorAll(".header-nav a");

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();
        const id = anc.getAttribute("href")
        const elem = document.querySelector(id)
        window.scroll({
            top: elem.offsetTop,
            behavior: 'smooth'
        });
    });
});


const anchorswel = document.querySelectorAll(".welcome-links a");

anchorswel.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();
        const id = anc.getAttribute("href")
        const elem = document.querySelector(id)
        window.scroll({
            top: elem.offsetTop,
            behavior: 'smooth'
        });
    });
});