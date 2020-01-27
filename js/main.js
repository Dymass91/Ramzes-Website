const btnExpand = document.getElementById('blog__btn-expand')

function openTab(tabName) {

    this.classList.toggle("active");

    let content = document.querySelector('content')

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }

};

btnExpand.addEventListener('click', openTab);