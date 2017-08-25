import React from 'react';

class RestaurantDetailInfo extends React.Component {

  render() {
    const { info } = this.props;
    const hoursSplit = info.hours.split(",");
    const listHours = hoursSplit.map( (day, idx) => {
      return <li key={idx}>{day}</li>;
    });
    
    return (
      <div className="restaurant-detail-info">
        <div className="restaurant-detail-info-left">
          <p>
            <span className="span-bold">Hours:</span>
            <br/>
            <ul>
              {listHours}
            </ul>
          </p>
        </div>

        <div className="restaurant-detail-info-right">
          <p>
            <span className="span-bold">Phone Number:</span>
            <br/>
            <span>{info.phoneNumber}</span>
          </p>
          <p>
            <span className="span-bold">Website:</span>
            <br/>
            <a href={info.websiteUrl}>{info.websiteUrl}</a>
          </p>
        </div>

      </div>
    );
  }
}

export default RestaurantDetailInfo;
