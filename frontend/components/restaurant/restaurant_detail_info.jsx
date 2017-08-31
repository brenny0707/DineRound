import React from 'react';

class RestaurantDetailInfo extends React.Component {

  render() {
    const { info } = this.props;
    if (info.hours === undefined) {
      return null;
    }
    const hoursSplit = info.hours.split(",");
    const listHours = hoursSplit.map( (day, idx) => {
      return <li key={idx}>{day}</li>;
    });

    return (
      <div className="restaurant-detail-info">
        <div className="restaurant-detail-info-left">
          <div>
            <span className="span-bold">Hours:</span>
            <br/>
            <ul>
              {listHours}
            </ul>
          </div>
        </div>

        <div className="restaurant-detail-info-right">
          <div>
            <span className="span-bold">Phone Number:</span>
            <br/>
            <span>{info.phoneNumber}</span>
          </div>
          <div>
            <span className="span-bold">Website:</span>
            <br/>
            <a href={info.websiteUrl}>{info.websiteUrl}</a>
          </div>
        </div>

      </div>
    );
  }
}

export default RestaurantDetailInfo;
