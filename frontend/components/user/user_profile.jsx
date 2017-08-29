import React from 'react';
import UserReservation from './user_reservation';
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserReservations();
  }

  sortByKey(array, key) {
  }

  render() {
    if( this.props.profile.reservations === undefined) {
      return null;
    }
    let reservationHistory = [];
    let upcomingReservations = [];
    this.props.profile.reservations.forEach( (reservation) => {
      new Date(reservation.date).getTime() < new Date().getTime() ? reservationHistory.push(reservation) : upcomingReservations.push(reservation);
    // let historyKeys = Object.keys(reservationHistory);
    // let upcomingKeys = Object.keys(upcomingReservations);
    // debugger
    });
    return(
      <div>
        <div>
          <h2>Your Reservations</h2>
            <div className="upcoming-reservations">
              <h3>Upcoming Reservations</h3>
              <ul>
                {upcomingReservations.map( function(reservation) {
                  return (
                    <UserReservation reservation={reservation}/>
                  )
                })}
              </ul>
            </div>
            <div className="reservation-history">
              <h3>Reservation History</h3>
              <ul>
                {reservationHistory.map( function(reservation) {
                  return (
                    <UserReservation reservation={reservation}/>
                  )
                })}
              </ul>
            </div>

          <ul>
            {this.props.profile.reservations.map( function(reservation) {
              return (
                <UserReservation reservation={reservation}/>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserProfile;
