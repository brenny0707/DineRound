import React from 'react';
import UserReservation from './user_reservation';
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.FetchUserProfile();
  }

  render() {
    if( this.props.profile.reservationIds === undefined) {
      return null;
    }
    let reservationHistory = [];
    let upcomingReservations = [];
    this.props.profile.reservationIds.forEach( (reservationId) => {
      let reservation = this.props.reservations[reservationId];
      new Date(reservation.date).getTime() < new Date().getTime() ? reservationHistory.push(reservation) : upcomingReservations.push(reservation);
    });
    return(
      <div className="user-reservations">
        <div className="upcoming-reservations user-profile-section">
          <h2>Upcoming Reservations</h2>
          <ul>
            {upcomingReservations.map( function(reservation) {
              return (
                  <UserReservation
                    key={reservation.reservationId}
                    reservation={reservation}/>
              );
            })}
          </ul>
        </div>
        <div className="reservation-history user-profile-section">
          <h2>Reservation History</h2>
          <ul>
            {reservationHistory.map( function(reservation) {
              return (
                  <UserReservation
                    key={reservation.reservationId} reservation={reservation}/>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserProfile;
