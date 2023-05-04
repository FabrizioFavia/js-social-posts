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

const cardContainer = [];




/**
 * descrizione
 * @param elementType string  -> tipo di tag html 
 * @param className Array<string> -> si aspetta più elementi
 * @param container: HTMLElemwnt -> è il container in cui verranno appesi gli elementi creati
 * @param attributes: Array<Objects> -> array di oggetti composti name e value
 * @param text: string -> innerHTML appeso al Document
 * @returns HTMLElement -> output della funzione
 **/


function createAndAppendEl(elementType, className, container, attributes, text) {

    let elementLocal = document.createElement(elementType);
    className.forEach(element => {
        elementLocal.classList.add(element);
    });
    attributes.forEach(element => {
        elementLocal.setAttribute(element.name, element.value)
    });
    elementLocal.innerHTML = text;
    container.append(elementLocal);

    return elementLocal;
}



posts.forEach(singlePost => {

    const card = {
        id: singlePost.id,
        likes: singlePost.likes,
        click: false,
        element: null
    }
    /* CREO CARD POST */
    let postCard = createAndAppendEl("div", ["post"], mainContainer, [], "");
    let postHeader = createAndAppendEl("div", ["post__header"], postCard, [], "");
    let postMeta = createAndAppendEl("div", ["post-meta"], postHeader, [], "");
    let postMetaIcon = createAndAppendEl("div", ["post-meta__icon"], postMeta, [], "");

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

    createAndAppendEl("img", ["profile-pic"], postMetaIcon, profilePics, "");
    let postMetaData = createAndAppendEl("div", ["post-meta__data"], postMeta, [], "");
    createAndAppendEl("div", ["post-meta__author"], postMetaData, [], singlePost.author.name);
    createAndAppendEl("div", ["post-meta__time"], postMetaData, [], singlePost.created);
    createAndAppendEl("div", ["post__text"], postCard, [], singlePost.content);
    let postImage = createAndAppendEl("div", ["post__image"], postCard, [], "");
    let postImageAttributes = [
        {
            name: "src",
            value: singlePost.media
        },
        {
            name: "alt",
            value: ""
        }
    ];

    createAndAppendEl("img", ["post__image"], postImage, postImageAttributes, "");
    let postFooter = createAndAppendEl("div", ["post__footer"], postCard, [], "");
    let likes = createAndAppendEl("div", ["likes", "js-likes"], postFooter, [], "");
    let likesCta = createAndAppendEl("div", ["likes__cta"], likes, [], "");

    let btnAttributes = [
        {
            name: "href",
            value: "#"
        },
        {
            name: "data-postid",
            value: singlePost.id
        },
        {
            name: "id",
            value: "button_" + singlePost.id
        }
    ];

    let likeBtn = createAndAppendEl("a", ["like-button", "js-like-button"], likesCta, btnAttributes, "");
    createAndAppendEl("i", ["like-button__icon", "fas", "fa-thumbs-up"], likeBtn, [{ name: "aria-hidden", value: "true" }], "");
    createAndAppendEl("span", ["like-button__label"], likeBtn, [], " Mi Piace");

    cardContainer.push(card);

    let likesNumber = "Piace a <b id=\"like-counter-1\" class=\"js-likes-counter\"> <span id=\"likes_" + card.id + "\" >" + card.likes + "</span>" + "</b> persone";
    createAndAppendEl("div", ["likes__counter"], likes, [], likesNumber);


    likeBtn.addEventListener("click", function(){
        let cardId = cardContainer.filter(e => e.id === card.id)[0]
        cardId.click = !cardId.click;
    
    
        if (cardId.click) {
            cardId.likes += 1
            document.getElementById("button_" + cardId.id).classList.add("colorBlue"); 
        console.log(cardContainer);
        } else {
            cardId.likes -= 1
            document.getElementById("button_" + cardId.id).classList.remove("colorBlue"); 
        }
        document.getElementById("likes_" + cardId.id).innerHTML = cardId.likes;
        console.log(cardContainer);
    })
});

console.log(cardContainer);


