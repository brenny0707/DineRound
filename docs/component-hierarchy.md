# Component Hierarchy

## AuthFormContainter
  - AuthForm

## HomeContainer
  - Home
  - ReservationSearch

## User
  - ReservationsIndex
  - FavoriteIndex
      - ReservationSearch
      - RestaurantIndexItem

## SearchResultsContainer
  - Search
  - ReservationIndex

## ReservationsIndex
  - ReservationIndexItem
  - RestaurantIndexItem

## RestaurantIndexItem
  - RestaurantDetail
  - ReservationSearch
  - ReviewIndex

## ReservationIndexItem
  - ReservationDetail
  - RestaurantIndexItem

## NewRestaurantForm
  - RestaurantDetail
  - NewRestaurantButton

## EditRestaurantForm
  - RestaurantDetail
  - EditRestaurantButton

## NewReservationForm
  - ReservationDetail
  - RestaurantIndexItem
  - NewReservationButton

## EditReservationForm
  - ReservationIndexItem
  - RestaurantIndexItem
  - EditReservationButton

## NewReviewForm
  - ReservationIndexItem
  - RestaurantIndexItem
  - NewReviewButton

## EditReviewForm
  - ReservationIndexItem
  - RestaurantIndexItem
  - NewReviewButton


# Routes

|    Path             |   Component          |
| -------------       | -------------        |
| "/signup"           | AuthFormContainer       |
| "/signin"            | AuthFormContainer     |
| "/"                  | HomeContainer         |
| "/users/:userId"    | User              |
| "/users/:userId/reservations"   | ReservationIndex              |
| "/users/:userId/favorites"    | FavoriteIndex               |
| "/search/?"         | SearchResultsContainer               |
| "restaurants/:restaurantId"   | RestaurantIndexItem   |
| "restaurants/new"   | NewRestaurantForm   |
| "reservations/:reservationId"   | ReservationIndexItem               |
| "reservations/:reservationId/reviews"   | NewReviewForm
