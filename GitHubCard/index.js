/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


const container =document.querySelector('.cards')

// const card = document.createElement('div')
// card.classList.add('cards')
// container.appendChild(card)

axios.get('https://api.github.com/users/nezlobnaya')

  .then((response) => {
    console.log('Network request was successful')
    // Data that comes back from the server
    console.log((response))
    container.appendChild(githubUserCard(response))
  })
  // Promise has rejected
  .catch((error) => {
    console.log('Network request was unsuccessful')
    console.log(error)
  })

// Our component creator function
function githubUserCard(userCard) {
  const card = document.createElement('div')
  card.classList.add('card')
  container.appendChild(card)


  const img = document.createElement('img')
  img.src = userCard.data.avatar_url
  card.appendChild(img)

  const info = document.createElement('div') 
  info.classList.add('card-info') 
  card.appendChild(info) 

  const userName = document.createElement('h3') 
  userName.classList.add('name') 
  userName.textContent = userCard.data.name
  info.appendChild(userName) 

  const user = document.createElement('p') 
  user.classList.add('username') 
  user.textContent = userCard.data.login 
  info.appendChild(user) 

  const location = document.createElement('p') 
  location.textContent = userCard.data.location 
  info.appendChild(location) 

  const profile = document.createElement('p') 
  profile.textContent = 'Profile:' 
  info.appendChild(profile) 

  const profileLink = document.createElement('a') 
  profileLink.href = userCard.data.html_url 
  profileLink.textContent = ` ${userCard.data.html_url}`
  profile.appendChild(profileLink) 

  const followers = document.createElement('p') 
  followers.textContent = `Followers: ${userCard.data.followers}` 
  info.appendChild(followers) 

  const following = document.createElement('p') 
  following.textContent = `Following: ${userCard.data.following}` 
  info.appendChild(following) 

  const bio = document.createElement('p') 
  bio.textContent =  `Bio: ${userCard.data.bio}`
  info.append(bio) 


  return card 
}

const followersArray = [
   "https://api.github.com/users/xpolb01",

   "https://api.github.com/users/simplesolutiondev",

  "https://api.github.com/users/Fotocopantla",

  "https://api.github.com/users/Spground",

  "https://api.github.com/users/mnichols08",

  "https://api.github.com/users/verejava",
] 

followersArray.forEach((item) => {
  axios.get(item)
    .then((response) => {
      container.appendChild(githubUserCard(response));
    })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
