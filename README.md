[![Netlify Status](https://api.netlify.com/api/v1/badges/bcf9ed02-438f-4e59-8611-2664d78ac2bc/deploy-status)](https://app.netlify.com/sites/hh-quiz/deploys)

<h1 align="center">
hhQuiz
</h1>

## About

hhQuiz is a quiz app themed around hiphop, built with ReactJS.

Live link - [hhquiz](https://hh-quiz.netlify.app/)

## Preview

![](/preview-gif-hhquiz.gif)

## Features

-  Home page
-  Quizzes by Category
-  Rules page before attempting a quiz
-  MCQ based quiz questions
-  Result page with answers & total score
-  Quit quiz
-  Loader and alert
-  Dark mode
-  Responsive site
-  Authentication
   -  Signup
   -  Login
   -  Logout

## Run the app locally

-  Clone the repository on your local machine with the command below in your terminal, and cd into the folder

```
git clone https://github.com/amartya-rs/hhQuiz.git

cd hhQuiz
```

-  install dependencies

```
npm install
```

-  create a `.env` file with a variable as mentioned below, in the root directory

```
REACT_APP_JWT_SECRET = <JWT_SECRET_KEY_>
```

-  start the server

```
npm start
```
