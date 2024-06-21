const apiKey = "ZNPUy9nJBQIifSCmEqGOXobqg1cd6OUX_wShVaBDht0"
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreButton = document.getElementById("show-more-button");

let keyword = "";
let page = 1;


async function searchImages(){
  keyword = searchBox.value;
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;


  results.forEach((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";  // Open in new tab

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
    
  })
  showMoreButton.style.display = "block";
  
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchResult.innerHTML = "";
  searchImages();
})

showMoreButton.addEventListener("click", ()=>{
  page++;
  searchImages();
}
)
