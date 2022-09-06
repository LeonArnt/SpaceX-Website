#SpaceX Mission

## Live Version [SpaceX- Missions] (https://space-x-website.vercel.app)

===========================================================================================


##Project Goal

To create a React application that integrates the Apollo Client and connects to https://api.spacex.land/graphql/. The app displays all the past SpaceX missions with images, the mission name and desccriptions about the missions. When u click on a card it goes to a page where you can find more detaild information about the mission, and on the right side of that page you can see comments from people that visited the site.

##Dependencies
-@mui/material- v5.10.4
-@apollo/client- v3.6.9
-graphql- v16.6.0
-react- v18.2.0
-react-router-dom- v6.3.0
-@mui/icons-material- v5.10.3

##Getting Started
First, run the development server:
```bash
npm start
 # or
yarn start
```

Open another terminal and start watching the json file:

```bash
npx json-server --watch data/db.json --port 8000
```

Open [http://localhost:3000](http://localhost:300) with your browser to see the result.

You can start editing the page by modifying 'HomePage.js'.
The page auto-updates as you edit the file

The `db.json` can be found on the [http://localhost:8000/comments] where the data for the comments will be displayed.


