
const form = document.querySelector('form');
const PostNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('New-post');
const ul = document.querySelector('ul');
const textArea = document.querySelector('.Text_holder-input');

const userName = document.querySelector('.User_name');
const topicName = document.querySelector('.Topic_name');

const removePost = (e) => {
    e.target.parentNode.remove();
    PostNumber.textContent = listItems.length;
    console.log("titlePost");
}

const addPost = (e) => {
    e.preventDefault()
    const titlePost = [userName.value, topicName.value, textArea.value];
    console.log(titlePost);
    console.log(textArea);
    if (titlePost === "") return;


    const Name = document.createElement('h2');
    const Topic = document.createElement('h3');
    const Post = document.createElement('li');

    Name.className = 'New-Name';
    Topic.className = 'New-Topic';
    Post.className = 'New-post';

    Name.innerHTML = `<strong>Name:</strong> ${titlePost[0]}`;
    Topic.innerHTML = `<strong>Topic:</strong> ${titlePost[1]}`;
    Post.innerHTML = titlePost[2] + "<button>Usuń</button>";
    ul.appendChild(Name);
    ul.appendChild(Topic);
    ul.appendChild(Post);

    userName.value = "";
    topicName.value = "";
    textArea.value = "";

    //const liItems = document.querySelectorAll('li.task').length;
    PostNumber.textContent = listItems.length;

    Post.querySelector('button').addEventListener('click', removePost);
}

form.addEventListener('submit', addPost)








