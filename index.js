function checkTime(i) {
    return (i < 10) ? '0' + i : i;
}
function startTime() {
    let today = new Date(),
        h = checkTime(today.getHours()),
        m = checkTime(today.getMinutes());

    document.getElementById('time-slot').textContent = h + ':' + m;
    setTimeout(startTime, 1000);
}
//startTime();
const searchField = document.getElementById('search-bar-outline');
const searchBarHider = document.getElementById('search-bar-hider');
let searchBarHiderOoC = 0;
searchBarHider.onclick = function(){
    if (searchBarHiderOoC === 0){
        searchField.style.height = '32px';
        searchBarHiderOoC = 1;
    }else{
        searchField.style.height = '0px';
        searchBarHiderOoC = 0;
    }
}

const searchButton = document.getElementById('search-bar-search');
searchButton.onclick = function(){
    const searchText = document.querySelector('#search-bar').value;
    let param = encodeURI(searchText);
    let url ="https://www.google.com/search?q="+param;
    window.open(url, "_blank");
    
}

searchField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && searchBarHiderOoC === 1) {
        const searchText = document.querySelector('#search-bar').value;
        let param = encodeURI(searchText);
        let url ="https://www.google.com/search?q="+param;
        window.open(url, "_blank");
    }
});