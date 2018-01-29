import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer-bar">
      <p>Made by Brendan Ko</p>
      <div className="footer-sites">
        <i className="fa fa-github">
          <a href="https://github.com/brenny0707"></a>
        </i>
        <i className="fa-linkedin-square">
          <a href="https://www.linkedin.com/in/brenny0707/"></a>
        </i>

      </div>
    </div>
  );
};

//
//   <span className="span-bold"><i className="fa fa-clock-o" aria-hidden="true"></i>Hours:</span>
//
// <li class="fa-github"><a href="https://github.com/brenny0707">GitHub</a></li>
// 								<li class="fa-linkedin-square"><a href="https://www.linkedin.com/in/brenny0707/">LinkedIn</a></li>

//

export default Footer;
