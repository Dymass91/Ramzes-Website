


const toggle = document.querySelector('.toggle')
const overlay = document.querySelector('.overlay')
const btnBlog = document.querySelector('.btn__blog')
const active = document.querySelector('.active')
const buttons = document.querySelector('.buttons')
const btnProject = document.querySelector('.btn__projects')
const navbar = document.querySelector('.topnav')
const blogPost = document.querySelector('.blog-post')

const body = document.querySelector('body');
const btnRefresh = document.querySelector('.refresh')

const sliderPosts = document.querySelectorAll('.slide-in')

const expand = () => {

    overlay.classList.toggle('active');
    btnBlog.classList.toggle('active');
    btnProject.classList.toggle('active');
    buttons.classList.toggle('active');
    navbar.classList.toggle('active');

    const delayInMilliseconds = 300;

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

if (btnBlog == active) {

    overlay.style.backgroundColor = 'red';
    overlay.style.height = '100%';
    blogPost.classList.add('.slide-in active')
}
// else if (btnBlog !== active) {
//     overlay.style.backgroundColor = 'red';

//     overlay.style.height = '0%';
// }

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};





function checkSlide() {

    sliderPosts.forEach(sliderPost => {
        let slideInAt = (window.scrollY + window.innerHeight) - sliderPost.height / 2;

        console.log(slideInAt)


        const postBottom = sliderPost.offsetTop + sliderPost.height;

        const isHalfShown = slideInAt > sliderPost.offsetTop;
        const isNotScrolledPast = window.scrollY < postBottom;



        if (isHalfShown && isNotScrolledPast) {
            sliderPost.classList.add('active')
            console.log('widzi')
        }
        else {
            sliderPost.classList.remove('active')
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));