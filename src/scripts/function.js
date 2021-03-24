
const Theme = {
LIGHT: 'light-theme',
DARK: 'dark-theme',
};
const bodyEl = document.querySelector('body');
const input = document.querySelector('#theme-switch-toggle');


input.addEventListener('change', replaceTheme);



function replaceTheme(e) {
    
    if (e.target.checked) {
        bodyEl.classList.add(Theme.DARK) 
        bodyEl.classList.remove(Theme.LIGHT);
         localStorage.setItem('Theme', Theme.DARK);
    } else {
        bodyEl.classList.add(Theme.LIGHT)
       bodyEl.classList.remove(Theme.DARK);
         localStorage.setItem('Theme', Theme.LIGHT);
    }
  
} 


    const localTheme = localStorage.getItem('Theme');
    
    if (localTheme === Theme.DARK) {
       bodyEl.classList.add(Theme.DARK);
        input.checked = true;
    }




