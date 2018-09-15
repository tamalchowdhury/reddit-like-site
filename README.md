# Simple Reddit Site

Heroku link: https://reddit-like-site.herokuapp.com/

## Installation

Use `npm run client-install` to install client dependecies.
Use `npm install` to install server dependecies.

You will need to rename `sample.env` file to just `.env` and supply your own mongodb driver url to work with the database.

To start the server, run `npm run dev` or `yarn run dev`

## Notes after deploying to Heroku

I deployed a branch of this code into Heroku. After deploying and setting up the env variables, the site was showing **Not Found** error. I realized that the `/build/` folder was being ignored in .gitignore. So after pushing it to the repo, it now works fine.

## To Do

- Add option to display the text body under the posts
- Allow comments
- Allow only one upvote/downvote per user
- Add option to load more posts

## Improvements from Next Projects

- Use git version control and branches to streamline development
- Write more documentation
- Seperate the API calls into different components, so the codebase will become more mangable.
