// Get the input element
const input = document.getElementById("search");

// Get the output element
const output = document.getElementById("main");
//Get button
const search = document.getElementById("searchbtn");

// Add an event listener to the input element
search.addEventListener("click", function (e) {
  // Get the value of the input element
  const value = input.value;
  output.innerHTML = "";

  // Make a GET request to the GitHub API to search for the username
  fetch(`https://api.github.com/search/users?q=${value}`)
    .then((response) => response.json())
    .then((data) => {
      data.items.forEach((item) => {
        //create a div element
        const div = document.createElement("div");
        div.className = "card";
        // Create an image element with the user's avatar
        const img = document.createElement("img");
        img.src = item.avatar_url;
        img.alt = item.login;
        img.className = "avatar";

        // Create a div element for the avatar
        const avatarDiv = document.createElement("div");
        avatarDiv.className = "avatar";
        avatarDiv.appendChild(img);

        // Create a div element for user information
        const userDiv = document.createElement("div");
        userDiv.className = "user-info";

        // Create a h2 element with the user's login
        const h2 = document.createElement("h2");
        h2.innerHTML = item.login;

        // Create a ul element for followers, following and repos
        const ul = document.createElement("ul");
        const followerLi = document.createElement("li");
        const followerSpan = document.createElement("span");
        followerSpan.innerHTML = item.followers_url.length;
        followerLi.appendChild(followerSpan);
        followerLi.appendChild(document.createTextNode(" Followers"));
        ul.appendChild(followerLi);

        const followingLi = document.createElement("li");
        const followingSpan = document.createElement("span");
        followingSpan.innerHTML = item.following_url.length;
        followingLi.appendChild(followingSpan);
        followingLi.appendChild(document.createTextNode(" Following"));
        ul.appendChild(followingLi);

        const reposLi = document.createElement("li");
        const reposSpan = document.createElement("span");
        reposSpan.innerHTML = item.repos_url.length;
        reposLi.appendChild(reposSpan);
        reposLi.appendChild(document.createTextNode(" Repos"));
        ul.appendChild(reposLi);

        // Append the image, h2 and ul elements to the div
        userDiv.appendChild(h2);
        userDiv.appendChild(ul);
        div.appendChild(avatarDiv);
        div.appendChild(userDiv);
        output.appendChild(div);
      });
    });
});
