
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

//Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage
//Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение


    const localTheme = localStorage.getItem('Theme');
    
    if (localTheme === Theme.DARK) {
       bodyEl.classList.add(Theme.DARK);
        input.checked = true;
    }



// function onSaveTheme() {
//     
//     if (inputCheck) {
//         localStorage.setItem('Theme', Theme.DARK);
//     } 

// const localTheme = localStorage.getItem('Theme');
//     if (localTheme) { 
//         document.body.classList.remove(Theme.LIGHT);
//         input.checked = true;
//     }
// }
