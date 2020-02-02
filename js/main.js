
const toggle = document.querySelector('.toggle')
const overlay = document.querySelector('.overlay')
const btnBlog = document.querySelector('.btn__blog')
const active = document.querySelector('.active')
const buttons = document.querySelector('.buttons')
const btnProject = document.querySelector('.btn__projects')
const navbar = document.querySelector('.topnav')

const expand = () => {

    overlay.classList.toggle('active');
    btnBlog.classList.toggle('active');
    btnProject.classList.toggle('active');
    buttons.classList.toggle('active');
    navbar.classList.toggle('active');

    const delayInMilliseconds = 200;


    setTimeout(function () {
        if (btnBlog.textContent == 'Blog') {
            btnBlog.textContent = "Main Page";

        }
        else {
            btnBlog.textContent = 'Blog'

        }
    }, delayInMilliseconds);

};


btnBlog.addEventListener('click', expand);


