 const mainContainer = document.getElementById("container");
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

function createAndAppendEl(elementType, className, container, attributes) {

    let elementLocal = document.createElement(elementType);
    className.forEach(element => {
        elementLocal.classList.add(element);
    });
    attributes.forEach(element => {
        elementLocal.setAttribute(element.name, element.value)
    });
    container.append(elementLocal);
    return elementLocal;
}



for (let i = 0; i <= posts.length; i++) {
    const singlePost = posts[i];

    /* CREO CARD POST */
    let postCard = createAndAppendEl("div", ["post"], mainContainer, []);
    let postHeader = createAndAppendEl("div", ["post__header"], postCard, []);
    let postMeta = createAndAppendEl("div", ["post-meta"], postHeader, []);
    let postMetaIcon = createAndAppendEl("div", ["post-meta__icon"], postMeta, []);
    let profilePics = [
        {
            name: "src",
            value: singlePost.author.image
        },
        {
            name: "alt",
            value: singlePost.author.name
        }
    ];
    createAndAppendEl("img", ["profile-pic"], postMetaIcon, profilePics);
    /* CREO POST HEADER E LO INSERISCO NELLA CARD */
    mainContainer.append(postCard);

} 

