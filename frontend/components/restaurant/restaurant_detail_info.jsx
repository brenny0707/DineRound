import React from 'react';

const RestaurantDetailInfo = (props) => {
  const { info } = props;
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
            <span className="span-bold"><i className="fa fa-clock-o" aria-hidden="true"></i>Hours:</span>
            <br/>
            <ul>
              {listHours}
            </ul>
          </div>
        </div>

        <div className="restaurant-detail-info-right">
          <div>
            <span className="span-bold"><i className="fa fa-home" aria-hidden="true"></i>Address:</span>
            <br/>
            <span>{info.address}</span>
          </div>
          <div>
            <span className="span-bold"><i className="fa fa-phone-square" aria-hidden="true"></i>Phone Number:</span>
            <br/>
            <span>{info.phoneNumber}</span>
          </div>
          <div>
            <span className="span-bold"><i className="fa fa-keyboard-o" aria-hidden="true"></i>Website:</span>
            <br/>
            <a href={info.websiteUrl}>{info.websiteUrl}</a>
          </div>
        </div>

      </div>
    );
  };

export default RestaurantDetailInfo;
