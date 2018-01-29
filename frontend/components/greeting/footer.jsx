import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer-bar">
      <p>Made by Brendan Ko</p>
      <div className="footer-sites">
        <a className="site-links" href="https://github.com/brenny0707" target="_blank">
          <i className="fa fa-github fa-2x"></i>
        </a>
        <a className="site-links" href="https://www.linkedin.com/in/brenny0707/"
          target="_blank">
          <i className="fa fa-linkedin-square fa-2x"></i>
        </a>


      </div>
    </div>
  );
};

export default Footer;
