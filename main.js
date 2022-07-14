document.ondragstart = function() { return false; };
const container = document.querySelector('body');

function getRandom() {
    return Math.floor(Math.random() * 255) + 1;
  }
function getColor() {
    container.style.backgroundImage = 'linear-gradient(rgb('
            +getRandom()+','+getRandom()+','+getRandom()+'),rgb('+getRandom()+','+getRandom()+','+getRandom()+'))';
}


getColor();


/*header dropdown have to position this way, dont ask.*/
const headerDropdown = document.createElement('div');
headerDropdown.setAttribute('id','header-dropdown');
container.insertBefore(headerDropdown,container.firstChild);
    /* header dropdown content */
    /* rps */
    const rps = document.createElement('a');
    rps.classList.add('dropdown-text');
    rps.setAttribute('id','rps');
    rps.href = '#';
    rps.textContent= 'rps';
    headerDropdown.appendChild(rps);

    /* etch a sketch */
    const etch = document.createElement('a');
    etch.classList.add('dropdown-text');
    etch.setAttribute('id','etch');
    etch.href = '#';
    etch.textContent= 'etch';
    headerDropdown.appendChild(etch);

    /* calculator */
    const cal = document.createElement('a');
    cal.classList.add('dropdown-text');
    cal.setAttribute('id','cal');
    cal.href = '#';
    cal.textContent= 'calc';
    headerDropdown.appendChild(cal);


/* header creation */
const header = document.createElement('div');
header.setAttribute('id','header');
container.insertBefore(header,container.firstChild);

    /* header content */
    const headerContent = document.createElement('div');
    headerContent.setAttribute('id','header-content');
    header.appendChild(headerContent);

        /*n3 logo*/
        const titleLogo = document.createElement('button');
        titleLogo.classList.add('header-text');
        titleLogo.setAttribute('id','title-logo');
        titleLogo.textContent = '[n3]';
        headerContent.appendChild(titleLogo);
        titleLogo.onclick = function(){
            getColor();
        }
        /*projects tab*/
    
        const projectsTab = document.createElement('button');
        projectsTab.classList.add('header-text');
        projectsTab.setAttribute('id','projects');
        projectsTab.setAttribute('type', 'button');
        projectsTab.textContent = '+';
        headerContent.appendChild(projectsTab);
        let projectsTabOorC = 0;
        projectsTab.onclick = function(){

            if (projectsTabOorC === 0){
                document.getElementById('header-dropdown').style.height = '4vh';
                projectsTabOorC = 1;
                projectsTab.textContent = 'X';
                document.getElementById('header').style.backgroundColor = 'transparent';
            }else if(projectsTabOorC === 1){
                document.getElementById('header-dropdown').style.height = '0vh';
                projectsTabOorC = 0;
                projectsTab.textContent = '+';
                document.getElementById('header').style.backgroundColor = '';
            }
        }
        window.onscroll = function (){
            if(projectsTabOorC === 1){
                document.getElementById('header-dropdown').style.height = '0vh';
                projectsTabOorC = 0;
                projectsTab.textContent = '+';
                document.getElementById('header').style.backgroundColor = '';
            }
        }

    /*social links*/
    const socialLinks = document.createElement('div');
    socialLinks.setAttribute('id','social-links');
    header.appendChild(socialLinks);

        /*logo and links */
        const gitHub = document.createElement('a');
        gitHub.classList.add('social-logo');
        gitHub.href = 'https://github.com/nneddk';
        gitHub.setAttribute("target", "__blank")
        socialLinks.appendChild(gitHub);
            const gitHubImage = document.createElement('img');
            gitHubImage.src = './images/main/GitHub-Mark-Light-64px.png'
            gitHubImage.setAttribute('draggable',false);
            gitHubImage.width = 32;
            gitHub.appendChild(gitHubImage);

        const discord= document.createElement('a');
        discord.classList.add('social-logo');
        discord.href = 'https://discordapp.com/users/169671481221971968';
        discord.setAttribute("target", "__blank")
        socialLinks.appendChild(discord);
            const discordImage = document.createElement('img');
            discordImage.src = './images/main/Discord-Logo-White.png'
            discordImage.setAttribute('draggable', false);
            discordImage.width = 32;
            discord.appendChild(discordImage);

/* footer */
        const footer =  document.createElement('div');
        footer.setAttribute('id', 'footer');
        container.appendChild(footer);

        const footerLink = document.createElement('a');
        footerLink.setAttribute('id', 'footerLink');
        footerLink.textContent = '< back to home o7';
        footerLink.href = './index.html';
        footer.appendChild(footerLink);
        
    


    


