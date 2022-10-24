const listProjects = document.querySelector("#projects-container");
const allItems = [...listProjects.children];
const listItems = [];

const buttonsBar = document.getElementById("buttons-bar");
const listButtons = [];
const maxItemsPerPage = 3;
const pageCount = () => Math.ceil(listItems.length / maxItemsPerPage);
let currentPage = 1;

function createButton(num) {
    const elementBtn = document.createElement("button");
    elementBtn.classList.add("control");
    elementBtn.textContent = num;
    elementBtn.setAttribute("aria-label", "Page " + num);
    buttonsBar.appendChild(elementBtn);
    listButtons.push(elementBtn);
}

function handlePaginationButtons() {
    listButtons.length = 0;
    while (buttonsBar.firstChild) {
        buttonsBar.firstChild.remove();
    };
    for (let i = 1; i <= pageCount(); i++) {
        createButton(i);
    }
    listButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            setActivePage(listButtons.indexOf(btn) + 1);
        });
    });
}

function setActivePage(num) {
    currentPage = num;
    const lastOnPreviousPage = (num - 1) * maxItemsPerPage;
    const lastOnActivePage = num * maxItemsPerPage;
    listItems.forEach((item, index) => {
        item.classList.remove("active");
        if (index >= lastOnPreviousPage && index < lastOnActivePage) {
            item.classList.add("active");
        }
    });
    listButtons.forEach(btn => {
        btn.classList.remove("active");
        if ((listButtons.indexOf(btn) + 1) === currentPage) {
            btn.classList.add("active");
        }
    })
};

window.addEventListener("load", () => {
    listItems.push(...allItems);
    listItems.forEach((item) => {
        item.classList.remove("active");
    });
    handlePaginationButtons();
    setActivePage(1);
});