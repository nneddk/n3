document.ondragstart = function() { return false; };
const container = document.querySelector('body');

function getRandom() {
    return Math.floor(Math.random() * 255) + 1;
  }
function getColor() {
    container.style.backgroundImage = 'linear-gradient(rgb('
            +getRandom()+','+getRandom()+','+getRandom()+'),rgb('+(getRandom()-50)+','+(getRandom()-50)+','+(getRandom()-50)+'))';
}
getColor();
/*header dropdown have to position this way, dont ask.*/
const headerDropdown = document.createElement('div');
headerDropdown.setAttribute('id','header-dropdown');
container.insertBefore(headerDropdown,container.firstChild);
    /* header dropdown content */
    /* rps */
    const rpsLink = document.createElement('a');
    rpsLink.classList.add('dropdown-text');
    rpsLink.setAttribute('id','rps');
    rpsLink.href = '../../pages/rps/rps.html';
    rpsLink.textContent= 'rps';
    headerDropdown.appendChild(rpsLink);
    /* etch a sketch */
    const etchLink = document.createElement('a');
    etchLink.classList.add('dropdown-text');
    etchLink.setAttribute('id','etch');
    etchLink.href = '../../pages/etch/etch.html';
    etchLink.textContent= 'etch';
    headerDropdown.appendChild(etchLink);
    /* calculator */
    const calLink = document.createElement('a');
    calLink.classList.add('dropdown-text');
    calLink.setAttribute('id','calc');
    calLink.href = '../../pages/calc/calc.html';
    calLink.textContent= 'calc';
    headerDropdown.appendChild(calLink);
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
                document.getElementById('header').style.backgroundColor = 'transparent';
            }else if(projectsTabOorC === 1){
                document.getElementById('header-dropdown').style.height = '0vh';
                projectsTabOorC = 0;
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
        gitHub.href = 'https://github.com/nneddk/'+ document.title;
        gitHub.setAttribute("target", "__blank");
        gitHub.setAttribute('id', 'github-image');
        socialLinks.appendChild(gitHub);

        const discord= document.createElement('a');
        discord.classList.add('social-logo');
        discord.href = 'https://discordapp.com/users/169671481221971968';
        discord.setAttribute("target", "__blank")
        discord.setAttribute('id', 'discord-image');
        socialLinks.appendChild(discord);
/* footer */
        const footer =  document.createElement('div');
        footer.setAttribute('id', 'footer');
        container.appendChild(footer);

        const footerLink = document.createElement('a');
        footerLink.setAttribute('id', 'footerLink');
        footerLink.textContent = '< o7';
        footerLink.href = '../../index.html';
        footer.appendChild(footerLink);