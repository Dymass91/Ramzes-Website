
const form = document.querySelector('form');
const PostNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('Post');
const ul = document.querySelector('ul');
const input = document.querySelector('input');

const removePost = (e) => {
    e.target.parentNode.remove();
    PostNumber.textContent = listItems.length;
    console.log("titlePost");
}

const addPost = (e) => {
    e.preventDefault()
    const titlePost = input.value;
    console.log(titlePost);

    if (titlePost === "") return;

    const Post = document.createElement('li');
    Post.className = 'Post';
    Post.innerHTML = titlePost + "<button>Usuń</button>";
    ul.appendChild(Post);
    input.value = "";

    //const liItems = document.querySelectorAll('li.task').length;
    PostNumber.textContent = listItems.length;

    Post.querySelector('button').addEventListener('click', removePost);
}

form.addEventListener('submit', addPost)
