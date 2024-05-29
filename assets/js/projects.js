const projectList = [
    {
        id: 1,
        title: 'ویلا شمال',
        category: 'Villa',
        img: '../images/Project-Pic.png',
        description: 'متن زیری که برای توضیح بیشتر قرار داده شده است. متن زیری که برای توضیح بیشتر قرار داده شده است.'
    },
    {
        id: 2,
        title: 'ویلا Beach',
        category: 'Beach',
        img: '../images/Project-Pic.png',
        description: 'متن زیری که برای توضیح بیشتر قرار داده شده است. متن زیری که برای توضیح بیشتر قرار داده شده است.'
    },
    {
        id: 1,
        title: 'ویلا Home',
        category: 'Home',
        img: '../images/Project-Pic.png',
        description: 'متن زیری که برای توضیح بیشتر قرار داده شده است. متن زیری که برای توضیح بیشتر قرار داده شده است.'
    },
    {
        id: 2,
        title: 'ویلا Home',
        category: 'Home',
        img: '../images/Project-Pic.png',
        description: 'متن زیری که برای توضیح بیشتر قرار داده شده است. متن زیری که برای توضیح بیشتر قرار داده شده است.'
    },
    {
        id: 1,
        title: 'ویلا project',
        category: 'Project',
        img: '../images/Project-Pic.png',
        description: 'متن زیری که برای توضیح بیشتر قرار داده شده است. متن زیری که برای توضیح بیشتر قرار داده شده است.'
    },
    {
        id: 2,
        title: 'ویلا شمال',
        category: 'Villa',
        img: '../images/Project-Pic.png',
        description: 'متن زیری که برای توضیح بیشتر قرار داده شده است. متن زیری که برای توضیح بیشتر قرار داده شده است.'
    },
    {
        id: 1,
        title: 'ویلا شمال',
        category: 'Villa',
        img: '../images/Project-Pic.png',
        description: 'متن زیری که برای توضیح بیشتر قرار داده شده است. متن زیری که برای توضیح بیشتر قرار داده شده است.'
    },
    {
        id: 2,
        title: 'ویلا شمال',
        category: 'Villa',
        img: '../images/Project-Pic.png',
        description: 'متن زیری که برای توضیح بیشتر قرار داده شده است. متن زیری که برای توضیح بیشتر قرار داده شده است.'
    },
    {
        id: 1,
        title: 'ویلا شمال',
        category: 'Villa',
        img: '../images/Project-Pic.png',
        description: 'متن زیری که برای توضیح بیشتر قرار داده شده است. متن زیری که برای توضیح بیشتر قرار داده شده است.'
    }
]

let projectContainer = ''
let linkesEl = ''

window.addEventListener("DOMContentLoaded", () => {
    projectContainer = document.querySelector("#project-column")
    linkesEl = document.querySelectorAll('li a');

    displayProjectList("")

    linkesEl.forEach((links) => {
        links.addEventListener("click", (e) => {
            const category = e.target.dataset.id;
            colorSelectedCategory(category)

            const projectCategory = projectList.filter(function (data) {
                if (data.category === category) {
                    return data;
                }
            });

            if (category === "ََAll") {
                displayProjectList("")
            } else {
                displayProjectList(projectCategory)
            }

        });
        links.addEventListener("mouseover", (e) => {
            const category = e.target.dataset.id;
            colorSelectedCategory(category)

            const projectCategory = projectList.filter(function (data) {
                if (data.category === category) {
                    return data;
                }
            });

            if (category === "All") {
                displayProjectList("")
            } else {
                displayProjectList(projectCategory)
            }

        });
    });
})

function colorSelectedCategory(selected) {
    linkesEl.forEach((links) => {
        if (links.dataset.id === selected) {
            links.style.color = "#263F99";
        } else {
            links.style.color = "#303031";

        }
    })
}

function displayProjectList(category) {
    let displayData
    if (category) {
        displayData = projectList.map(function (item) {
            if (category[0].category !== item.category) {
                return `<a onclick="showProjectDetails()" class="disable_project project_card_wrapper col-12 col-md-4"><div class="project_img_box"><div class="hid-box"><p class="project_title">${item.title}</p><p class="project_description">${item.description}</p></div></div></a>`;
            } else {
                return `<a onclick="showProjectDetails()" class="project_card_wrapper col-12 col-md-4"><div class="project_img_box"><div class="hid-box"><p class="project_title">${item.title}</p><p class="project_description">${item.description}</p></div></div></a>`;
            }
        });

    } else {
        displayData = projectList.map(function (item) {
            return `<a onclick="showProjectDetails()" class="project_card_wrapper col-12 col-md-4"><div class="project_img_box"><div class="hid-box"><p class="project_title">${item.title}</p><p class="project_description">${item.description}</p></div></div></a>`;
        });
    }
    displayData = displayData.join("");
    projectContainer.innerHTML = displayData;
}