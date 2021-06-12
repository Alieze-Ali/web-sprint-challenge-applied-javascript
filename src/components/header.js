const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // Step 1. Create elements - ??? is this correct and the correct first step - seems different than the review
  const divHeader = document.createElement('div')
  const spanDate = document.createElement('span')
  const h1 = document.createElement('h1')
  const spanTemp = document.createElement('span')

  // ??? IDK how to console log this, trying to 'check' - nothing seems to be showing up in my console 
  // console.log(divHeader)


  // Step 2. Create Classes - ??? what exactly is this doing, how do I check???
    divHeader.classList.add('header')
    spanDate.classList.add('date')
    spanTemp.classList.add('temp')


  // Step 3. Create Hierarchy & Appends
  divHeader.appendChild(spanDate)
  divHeader.appendChild(h1)
  divHeader.appendChild(spanTemp)

  // ??? So far I'm not passing any tests, Why!!?? :(
    

  // Step 4. Add text with .textContent ??? - where exactly is this text coming from ???
  h1.textContent = title
  spanDate.textContent = date
  spanTemp.textContent = temp

  // Step 5. Futile attempt to Check for progress again ???? How do I get this to work ???
  console.log(divHeader)

  // Step 6. Return divHeader
  return divHeader
  // !!! ahhh - finally got something to pass - lol, still confused but hell yeah!!!
  // It's been an hour - taking a break

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // Step 1. Creating a header & invoking function
  const header = Header('Lambda Times', 'January 6, 2021', 26)
  // Step 2. Grabbing header-container DOM element from HTML & assigningß it to a variable
  const headerContainer = document.querySelector(selector)
  // Step 3. Appending header variable to headerContainer
  headerContainer.appendChild(header)

// ??? OK everything is failing - I don't know why
}

export { Header, headerAppender }
