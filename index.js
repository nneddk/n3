//see what time is it
function checkTime(i) {
    return (i < 10) ? '0' + i : i;
}
function startTime() {
    let today = new Date(), h = today.getHours(), m = today.getMinutes();
    let ampm = h > 12 ? 'pm': 'am';
    h = h % 12;
    h = h ? h: h = 12;
    h = checkTime(h);
    m = checkTime(m);
    document.getElementById('time-slot').textContent = h + ':' + m;
    document.getElementById('am-or-pm').textContent =ampm;
    setTimeout(startTime, 1000);
}
startTime();
//open search bar
const searchField = document.getElementById('search-bar-outline');
const searchBarHider = document.getElementById('search-bar-hider');
let searchBarHiderOoC = 0;
searchBarHider.onclick = function(){
    if (searchBarHiderOoC === 0){
        searchField.style.height = '55px';
        searchBarHiderOoC = 1;
    }else{
        searchField.style.height = '0vh';
        searchBarHiderOoC = 0;
    }
}
//search
const searchButton = document.getElementById('search-bar-search');
searchButton.onclick = function(){
    const searchText = document.querySelector('#search-bar').value;
    let param = encodeURI(searchText);
    let url ="https://www.google.com/search?q="+param;
    window.open(url, "_blank");
}
// search when enter key is pressed
searchField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && searchBarHiderOoC === 1) {
        const searchText = document.querySelector('#search-bar').value;
        let param = encodeURI(searchText);
        let url ="https://www.google.com/search?q="+param;
        window.open(url, "_blank");
    }
});
// Powered by Quotable
// https://github.com/lukePeavey/quotable
document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const quote = document.querySelector("#quote");
    const author = document.querySelector("#author");
    async function updateQuote() {
        // Fetch a random quote from the Quotable API
        const response = await fetch("https://api.quotable.io/random?maxLength=100");
        const data = await response.json();
        if (response.ok) {
          // Update DOM elements
          quote.textContent = '"'+data.content+'"';
          author.textContent = "- "+data.author;
        } else {
          quote.textContent = "An error occured";
          console.log(data);
        }
      }
      // Attach an event listener to the `button`
      quote.addEventListener("click", updateQuote);
      setInterval(updateQuote, 20000);
      // call updateQuote once when page loads
      updateQuote();
    });

