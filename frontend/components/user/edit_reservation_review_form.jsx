import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import { fetchReview } from '../../actions/reservation_actions';

class EditReservationReviewForm extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      body: this.props.review.body,
      overall_rating: this.props.review.overall_rating,
      food_rating: this.props.review.food_rating,
      service_rating: this.props.review.service_rating,
      ambiance_rating: this.props.review.ambiance_rating,
      value_rating: this.props.review.value_rating,
      user_id: this.props.review.user_id,
      reservation_id: this.props.review.reservation_id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    debugger
    this.props.fetchReview(this.props.match.params.reservationId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.review.body === undefined || this.props.review.id !== nextProps.review.id){
  //     this.setState({review: nextProps.review});
  //   }
  // }
    // if (this.props.reservation.user_id !== this.props.currentUser.id) {
    //   this.props.history.push(`/profile`);

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(review)
      .then((res) => this.props.history.push(`/profile`));
  }

  update(property) {
    return function(e) {
      this.setState({[property]: e.currentTarget.value});
    }.bind(this);
  }

  render() {
    if (this.props.reservation === null) {
      return null;
    }
    else{
      let moment = require('moment');
      let parseDate= moment.utc(this.props.reservation.date).format("LL");
      return(
        <div className="review-form-div">
          <h3 className="review-header">{this.props.currentUser.fname}, how was your visit?</h3>
          <h4 className="review-date-dined">You dined here on {parseDate}</h4>
          <form className="reservation-review-form"
            onSubmit={this.handleSubmit}>
            <div className="rating-div">
              <label htmlFor="overall-rating">Overall</label>
              <select className="select-overall-rating"
                id="overall-rating"
                value={this.state.overall_rating} onChange={this.update('overall_rating')}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="rating-div">
              <label htmlFor="food-rating">Food</label>
              <select className="select-food-rating"
                id="food-rating"
                value={this.state.food_rating} onChange={this.update('food_rating')}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="rating-div">
              <label htmlFor="service-rating">Service</label>
              <select className="select-service-rating"
                id="service-rating"
                value={this.state.service_rating} onChange={this.update('service_rating')}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="rating-div">
              <label htmlFor="ambiance-rating">Ambiance</label>
              <select className="select-ambiance-rating"
                id="ambiance-rating"
                value={this.state.ambiance_rating} onChange={this.update('ambiance_rating')}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="rating-div">
              <label htmlFor="value-rating">Value</label>
              <select className="select-value-rating"
                id="value-rating"
                value={this.state.value_rating} onChange={this.update('value_rating')}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <label htmlFor="review-body">Write a review</label>
            <textarea onChange={this.update('body')}></textarea>
            <button className="submit-review">Submit your review</button>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // const reservationId = ownProps.match.params.reservationId;
  // if (state.entities.reservations[reservationId]) {
  //   return {
  //     reservation: state.entities.reservations[reservationId],
  //     currentUser: state.session.currentUser
  //   };
  // }
  // else{
  debugger;
    let defaultState = {
      body: "",
      overall_rating: 1,
      food_rating: 1,
      service_rating: 1,
      ambiance_rating: 1,
      value_rating: 1,
      user_id: 1,
      reservation_id: 1,
    };


    let reservationId = ownProps.match.params.reservationId;
    let reservation;
    debugger;
    if (state.entities.reservations[reservationId]) {
      reservation = state.entities.reservations[reservationId];
      }
    else {
      reservation = defaultState;
      }
      return {
        reservation,
      };
    };

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
    fetchReview: (id) => dispatch(fetchReview(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditReservationReviewForm));
