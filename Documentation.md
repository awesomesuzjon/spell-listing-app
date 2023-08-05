### Spell Listing App Documentation
`The Spell Listing App is a React-based web application that
allows users to view a list of spells 
and manage their favorite spells. 
The app fetches spell data from an external API of dnde5,
displays them in a paginated list, 
and provides a search feature for users to filter spells by name.`

### Project Structure
```
spell-listing-app/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── SpellList/
│   │   ├── Favorites/
│   │   └── ...
│   ├── redux/
│   ├── services/
│   ├── App.css
│   ├── App.tsx
│   └── index.tsx
├── public/
├── package.json
├── tsconfig.json
├── .eslintrc.bak
├── documentation.md
└── ...

=> src/: Contains all the source code of the React components, Redux store, and other utility files.
=> assets/: Stores any static assets, such as images or icons.
=> components/: Contains reusable React components, organized into different folders based on their functionalities.
=> redux/: Holds the Redux store configuration and action/reducer files.
=> services/: Includes API services for fetching spell data from an external source.
=> App.css: Global CSS styles for the entire app.
=> App.tsx: The main application component that renders the navigation and other components.
=> index.tsx: The entry point of the React app.
=> public/: Contains static files like the index.html file.
```

### Features
```
=> Spell List
The Spell List is the main component of the app, responsible for displaying a paginated list of spells. It fetches spell data from the API and renders each spell as a card with its name and a button to add/remove it from the user's favorites.

=> Favorites
The Favorites section displays a list of spells that the user has marked as favorites. Users can add or remove spells from their favorites list by clicking the "Add to Favorites" or "Remove from Favorites" button on each spell card.

=> Search
The Search feature allows users to filter the spell list by entering a search term. As the user types, the spell list dynamically updates to show only the spells whose names start with the entered search term.

=> Pagination
The Spell List is paginated to display a fixed number of spells per page. Users can navigate through the pages using the pagination component, which shows the total number of spells and the current page.
```

### Dependencies

```The Spell Listing App utilizes the following key dependencies:

=> React
    react: A JavaScript library for building user interfaces.
=> Redux
   @reduxjs/toolkit: A library for efficient Redux store setup.
=> Ant Design
     antd: A React UI library with a set of high-quality components.
=> Testing Library
     @testing-library/react: A testing utility for React components.
=> Axios: A promise-based HTTP client for the browser and Node.js.
=> React Router: A routing library for React.

```

