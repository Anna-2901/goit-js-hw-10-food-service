const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('.theme-switch__toggle'),
};


console.log(Theme.DARK);
refs.themeSwitch.addEventListener('change', e => {
  if (e.target.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
});


const ourTheme = localStorage.getItem('theme');

if (ourTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.themeSwitch.checked = true;
} else {
  refs.body.classList.add(Theme.LIGHT);
}

