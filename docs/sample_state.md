{
  entities: {
    users: {
      1: {
        id: 1,
        username: 'foodie_is_a_dumb_term',
        fname: 'Brendan',
        lname: 'Ko',
        email: 'brennyboy@aol.com'
        reservation_ids: [1,2,3],
        favorite_restaurant_ids: [4,5,6],
        owned_restaurant_ids: [4],
      }
    },
    reservations: {
      1: {
        id: 1,
        info: {
          date: "7/20/2017",
          time: "7:00PM",
          party_size: 4,
          special_requests: null,
        },
        user_id: 1,
        restaurant_id: 4,
        status: 'Dined'

      },
      2: {
        id: 2,
        info: {
          date: "8/10/2017",
          time: "7:00PM",
          party_size: 2,
          special_requests: "Might be late, save our spot please!",
        },
        user_id: 9001,
        restaurant_id: 2,
        status: 'No Showed'

      },
      3: {
        id: 3,
        info: {
          date: "10/20/2017",
          time: "5:30PM",
          party_size: 4,
          special_requests: "Celebrating my father's 60th birthday, could you recommend a champagne for the table?",
        },
        user_id: 1,
        restaurant_id: 3,
        status: 'Upcoming',

      }

    },
    restaurants: {
      4: {
        id: 4,
        owner_id: 1,

        info: {
          name: "Ko's Food Shack",
          hours: {
            Monday: '12PM-12AM',
            Tuesday: '12PM-12AM',
            Wednesday: '12PM-12AM',
            Thursday: '12PM-12AM',
            Friday: '12PM-12AM',
            Saturday: '5PM-12AM',
            Sunday: 'Closed',
          },
          photos: { 1: "www.koshack.com/pizza.jpg" },
          aboutUs: "Ko's Food Shack is a shack that's more than just shaking!",
          review_ids: [1,2,3],
          ratings: {
            //calcs in backend if reviews are not directly available?
            overall: 4.6,
            food: 4.7,
            service: 4.8,
            ambience: 4.3,
            value: 4.5
          }
        },
        tables: {
          //not really sure how to implement this, each restaurant has a certain amount of tables per time they set available, so is this something that should be done here, or elsewhere?
          //have to keep track of a restaurants list of reservations, whether they are booked or not, and then relating that to the reservations object in entities?
          "5:30" : [{}, {}, {}],
          "7:00" : [{}, {}, {}, {}, {}],
          "9:00" : [{}, {}, {}],
        }

      }
    },
    reviews: {
      1: {
        id: 1,
        user_id: 1,
        restaurant_id: 4,
        scores: {
          overall: 5,
          food: 5,
          service: 5,
          ambience: 5,
          value: 5
        },
        title: "Best shack ever",
        body: "I totally don't own this place :D"
      }
    }

  },
  ui: {
    loading: true/false,
    //???
  },
  errors: {
    login: ["Incorrect username/password combination"],
    signForm: ["Username cannot be blank"],
    reviewForm: ["Must enter a score for ambience"]
    restaurantForm: ["Name cannot be blank"]
  },
  session: {
    id: 1,
    username: 'foodie_is_a_dumb_term',

  }
}
