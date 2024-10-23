import React from 'react';
import './UclaFooter.css';

const UclaFooter = () => {
  return (
    <footer>
      <div className="ucla-dept-footer">
        <div className="ucla-dept-footer__container">
          <img className="ucla-dept-footer__logo" src="https://www.ucla.edu/img/logo-ucla.svg" alt="UCLA Logo" />
          <div className="ucla-dept-footer__body">
            <div className="ucla-dept-footer__info">
              <address className="ucla-dept-footer__info-address">
                10889 Wilshire Blvd., Suite 1400<br />
                Los Angeles, CA 90024<br />
                (626) 123-4567<br />
                <a href="mailto:contact@stratcomm.ucla.edu">contact@stratcomm.ucla.edu</a>
              </address>
              <ul className="ucla-social">
                <li className="ucla-social__item">
                  <a href="#" className="ucla-social__link">
                    <span className="visuallyhidden">Facebook</span>
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Facebook icon SVG path */}
                    </svg>
                  </a>
                </li>
                {/* Add more social media items here */}
              </ul>
            </div>
            <nav className="ucla-dept-footer__tertiary-nav">
              <div className="ucla-dept-footer__nav-column">
                <h6 className="tertiary-nav-header">Column Heading 1</h6>
                <ul className="ucla-dept-footer__nav">
                  <li><a href="#">Navigation Link 1</a></li>
                  <li><a href="#">Navigation Link 2</a></li>
                  <li><a href="#">Navigation Link 3</a></li>
                </ul>
              </div>
              <div className="ucla-dept-footer__nav-column">
                <h6 className="tertiary-nav-header">Column Heading 2</h6>
                <ul className="ucla-dept-footer__nav">
                  <li><a href="#">Navigation Link 4</a></li>
                  <li><a href="#">Navigation Link 5</a></li>
                  <li><a href="#">Navigation Link 6</a></li>
                </ul>
              </div>
              {/* Add more navigation columns as needed */}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UclaFooter;