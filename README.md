# AI Chats App

This is a monorepo for the project.
This is a primary frontend part for the application.

[Production url](https://.../)

[Staging url](https://.../)

## If you're open the repo first time:

Prerequisites:

- `node -v` - 16.17.0
- install git cli

1. Clone the repo

```
git clone https://github.com/holdiana/ai-chats.git
```

2. Install dependencies

```
npm install

- Material UI for most of the components
- Styling using UI theme and literals for custom styling
- Eslint, Stylelint, Prettier, Husky for the code quality
- Auth0 for authorisation

```

3. Install husky (if it hasn't yet automatically)

```
npm add husky --dev
```

4. Configure Eslint for your IDE
5. Set environment variables for backend and frontend to `.env` files (get them from me)

## How to run locally

Run:

```
npm start
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

```

Build and run:

```

npm run build
npm run build && npm start

## Contribution

1. Go to `develop` branch and pull the latest version.
2. Create a branch with the name `feature/your-feature-name` from `develop`. The first part is type that can be 'feature', 'bugfix' or 'docs'
3. Code, lint, commit and push into new branch
4. If you're branch gets outdated (new commits in `develop`), please rebase it
5. Create a PR with the detailed description and photo/video
6. Close PR via `Squash and merge`. Do not merge without approval
7. Check it on staging as soon as it is deployed

[More details](https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow)

## Project's structure

- Declare styles in the `*.styled.js` file near your component
- Create a folder in pages for the new separate page
- Create a folder in `components` under `pages/**component-name**/components/` for the component which is exclusive for this page
- Create a folder in `shared` for the component that might be used somewhere else later
- Create a component in case you're using a library for the customised component. Do not customise the component where you're going to use it.

## Work with dependencies

Install common dependencies for package , example for installing lodash:

```

npx lerna add lodash packages/\*

npx lerna add @types/lodash packages/\* --dev

```

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

```

```
