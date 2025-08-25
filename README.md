TravelTrucks — Frontend

Client-side part of a camper rental web application. Implemented: homepage,
catalog with filters and pagination, camper details page with gallery, features,
reviews, and booking form. Stack: Vite, React, Redux Toolkit, React Router,
Axios.

Main Features

Routes: / (Home), /catalog (Catalog), /catalog/:id (Details).

Backend filtering: location (dropdown list of cities → Ukraine, <City>), body
type (panelTruck | fullyIntegrated | alcove), features (AC, bathroom, kitchen,
TV, radio, refrigerator, microwave, gas, water). Results reset before a new
request.

Pagination via “Load More” button with active filters applied.

Favorites persisted in localStorage.

Camper details: photo gallery (universal URL extractor), Features/Details
blocks, reviews with 5-star rating, booking form with validation and success
notification.

Price format: 8000.00.

Installation & Running

Requirements: Node.js 18+

# install dependencies

npm install

# development mode

npm run dev

# production build

npm run build

# preview production build locally

npm run preview

Usage

Open / and click View Now to go to the catalog.

On /catalog, select filters and click Apply filters (results update from the
backend).

Load more cards with the Load More button; add/remove items from Favorites.

Click Show more on a card → opens /catalog/:id in a new tab with gallery,
features, reviews, and booking form.

Fill in the form (name, email, date) — after submission, a notification confirms
successful booking.

Author

Name: Nikolas GitHub: https://github.com/Nikolas-vl

Email: nikvv02@gmail.com
