# Getting Started with ZTM Robofriends (Hooks edition)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is part of ZTM Academy [Web Development Course](https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/).

The basic version (using classes) on github: [ztm-robofriends](https://github.com/alexfedorov86/ztm-robofriends)

**In this edition classes are replaced with hooks.**

## Step-by-step guide

### Create new repository

**Clone base application**

`git clone https://github.com/alexfedorov86/ztm-robofriends ztm-robofriends-hooks`  
Clone initial repository to new local folder

`npm install`  
Install all dependencies

! Probably we get some vulnerabilities we need to fix.

`npm update`  
`npm audit fix`  
To update libraries and fix any issues

`npm start` Check if all works  

**Create new app on github, link local project to it and push**

On github new app "ztm-robofriends-hooks" created.

`git remote set-url origin https://github.com/alexfedorov86/ztm-robofriends-hooks.git`  
existing "origin" remote URL updated

`git add`  
`git commit -m "project copied and ready to be modified"`  
`git push`

### Refactore a component (class -> functional) using hooks

We have only 2 class components:  
App.js  
ErrorBoundry.js  

We will leave second component as a class component, because it uses `componentDidCatch(error, info) {...}` and there is no simple way to simplify code using hooks.  

And App.js is easily refactored with basic hooks `useState` and `useEffect`

// app compiled successfully, works as intended, commited and pushed to github.

