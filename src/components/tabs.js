import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // Step 1. Create Elements
  const mainDiv = document.createElement('div')

  // Step 2. Create Classes
  mainDiv.classList.add('topics')

  // Step 3. Creating forEach Loop to add tabs in each subDiv
  // ??? Where is this topics array comming from???
  topics.forEach(topic => {
    // creating a DOM element for div
    const tab = document.createElement('div')
    // create classes for tabs
    tab.classList.add('tab')
    // pass text to each tab ???? Where is this coming from???
    tab.textContent = topic
    // append tabs to mainDiv
    mainDiv.appendChild(tab)

  })

 // Step 4. Check for progress w a console ??? I'm not seeing this console, but I do now see the console fron header.js
 console.log(mainDiv)

 // Step 5. Returning mainDiv
 return mainDiv

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  // Step 1: Add axios script tag to HTML -- ??? Did I do this correctly
  // Step 2: Create get request
  axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then(data => {
    //pass array into function & assign to variable
    const tabs = Tabs(data.data.topics)
    //grab selector from DOM
    const tabsContainer = document.querySelector(selector)
    //append tabsContainer
    tabsContainer.appendChild(tabs)
    //trying to test data input - I see it!!
    console.log(data.data.topics)
  })
  .catch(err => {
    console.log(err)
  })
}

export { Tabs, tabsAppender }
