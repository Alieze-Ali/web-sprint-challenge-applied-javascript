import axios from "axios"
// ??? I don't understand what this import is or how to use it below, so I commented it out - with it nothing was passing, help!! ???
//import { createBroadcastChannel } from "msw/lib/types/utils/createBroadcastChannel"

const Card = (article) => {
  console.log(article)
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // Step 1. Create Elements
  const divCard = document.createElement('div')
  const divHeadline = document.createElement('div')
  const divAuthor = document.createElement('div')
  const divImg = document.createElement('div')
  const img = document.createElement('img')
  const span = document.createElement('span')

  // Step 2. Create classes
  divCard.classList.add('card')
  divHeadline.classList.add('headline')
  divAuthor.classList.add('author')
  divImg.classList.add('img-container')

  // Step 3. Create Hierarchy
  divCard.appendChild(divHeadline)
  divCard.appendChild(divAuthor)
  divAuthor.appendChild(divImg)
  divImg.appendChild(img)  
  divAuthor.appendChild(span)

  // Step 4. Add Text 
  divHeadline.textContent = article.headline;
  span.textContent = article.authorName;
  img.src = article.authorPhoto;
  // trying something else
  // divHeadline.textContent = undefined
  // span.textContent = undefined
  // img.src = undefined

  // Step 5. Test divCard - 
  console.log(divCard)

  // Step 6. Return divCard
  return divCard

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  // Step 1: create query selector varible = ??? Help, I don't understand this step - what are we selecting???
  const cards = document.querySelector(selector)
  console.log(cards)
  // Step 1: Get articles from axios
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  // ??? Need help understanding this code
  .then((res) => {
    console.log(res.data.articles.javascript)
    res.data.articles.javascript.forEach(article => {
      cards.appendChild(Card(article))
    });
    res.data.articles.bootstrap.forEach(banana=> {
      //invoking cards
      cards.appendChild(Card(banana))
    });
    res.data.articles.technology.forEach(banana=> {
      //invoking cards
      cards.appendChild(Card(banana))
    });
    res.data.articles.jquery.forEach(banana=> {
      //invoking cards
      cards.appendChild(Card(banana))
    });
    res.data.articles.node.forEach(banana=> {
      //invoking cards
      cards.appendChild(Card(banana))
    });
  })
}

export { Card, cardAppender }
