### React Fake E-Commerce App for Selling Pokémon

#### Technologies to Use:
- Vite for build setup
- React Router for page navigation
- Redux Toolkit for global state management
- TypeScript for typing and better code maintainability
- Axios for fetching data

### API
  - use open pokemon api to fetch data and add it to redux toolkit implementation of stores

### Provide commands to initialize app and libraries to install

### Page Content
  - centered on screen with max width 1280px

### Should have following pages:
  - main page with cards
  - individual product page
  - shopping cart page

### All pages should have common:
  - header with search input cart button
  - page content here
  - footer with some dummy info about this pokemon store and contacts etc

### Header
  - left pokemon shop logo
  - center search input (manage search query inside Redux).
    - search logic to be encapsulated in Redux (header only handles input and dispatches).
  - on far right cart button

### Main page:
  ## Filter component:
    - right side (70vw) has grid of pokemon cards
    - each pokemon card has to have + -  to add to cart button and quantity
  
  ## Pokemon cards grid component:
    - left side (30vw) has filters for qualities of pokemons to filter from
    - two check boxes for non numeric
    - couple of sliders for numeric qualities

### Product/item page:
  - should have bigger card for product (pokemon)
  - on right side should have qualities
  - also add to cart with + - buttons below the card


### Shopping cart page:
  - shows items added in cart
  - grid with picture description and +- on the right to add remove from cart


### Redux Toolkit Requirements:
  - Multiple slices (stores): Pokémon data, search, cart, favorites, filters.
  - Root Store: Combine multiple slices into a root store.
  - Good selector practices: Ensure efficient use of useSelector.
  - Pokémon Data Fetching:
  - Fetch cards for the main page on load main me inside Provider component for redux store.
  - Store Pokémon data in the Redux store.
  - Apply filters and search directly within the Redux reducer logic.
  - Cart and Favorites Management:
  - Store cart items and favorite Pokémon in separate slices.
  - contain all logic for filtering and search inside redux only

### Additional instructions
  - provide commands to initialize app and libraries to install
  - each time you use a new library not from the list ot technologies ask if Y/N if you can use it wait fro my command
  - provide general app folder structure
  - use best practice folder structure for redux with features, slices, reducers etc.
  - Encapsulate Business Logic: Search, filters, and data-fetching logic must be inside Redux reducers.
  - in each code listing in comments at the top provide file location within directory
  - Component Styles: Use modular SCSS files (.module.scss) for each component.
  - Ensure the main content is centered (max width: 1280px).

### Component Styles
  - component styles should use modules
  - files for styels should be named styles.module.scss

### Clarifying Questions:
  - Stop after the first code listing of each section.
  - Wait for confirmation with "continue", "change", or "redo".
  - ask clarifying questions when generating code if something is unclear and needs my input

