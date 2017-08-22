# API Endpoints

## HTML API

### Root
  - `GET /` loads React App


## JSON API

### Users
  - `POST /api/users`
  - `PATCH /api/users/:userId`

#### Favorites
  - `GET /api/users/:userId/favorites`
  - `POST /api/users/:userId/favorites/`
      - Would be located on restaurant show page and link to current user
  - `DELETE /api/users/:userId/favorites/:favoriteId`

### Session
 - `POST /api/session`
 - `DELETE /api/session`

### Restaurants
  - `GET /api/search/?`
      - Searches based on params
  - `GET /api/restaurants/:restaurantId`

### Reservations
  - `GET /api/search/?`
      - Searches based on params
  - `GET /api/reservations/:reservationId`
  - `POST /api/reservations`
  - `PATCH /api/reservations/:reservationId`
  - `DELETE /api/reservations/:reservationId`

#### Reviews
  Reviews are done through the attached reservation
  - `POST /api/reservations/:reservationId/reviews`
  - `PATCH /api/reservations/:reservationId/reviews/:reviewId`
  - `DELETE /api/reservations/:reservationId/reviews/:reviewId`
