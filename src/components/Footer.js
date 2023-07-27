import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div style={{ backgroundColor: '#9C0045', color: 'white' }}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my- border-top">
      <div className="col-md-4 font-italic font-weight bold">
       <p>Discover the latest trends and styles for every season at StyleHub.
       Shop now and step up your fashion game!</p>

      </div>
        <div className="col-md-4 ">

          <span className="text-white justify-content-center d-flex">© 2023 StyleHub, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-white" href="https://twitter.com/adans0_0">
              <svg className="bi" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.64 3.28c-.58.26-1.2.44-1.84.52a3.3 3.3 0 0 0 1.45-1.8 6.64 6.64 0 0 1-2.1.8 3.32 3.32 0 0 0-5.66 3.02A9.42 9.42 0 0 1 1.12 2.06a3.31 3.31 0 0 0 1.03 4.42A3.28 3.28 0 0 1 .64 5.7v.04a3.31 3.31 0 0 0 2.65 3.24c-.53.14-1.1.16-1.64-.04a3.32 3.32 0 0 0 3.09 2.3A6.68 6.68 0 0 1 0 13.12a9.41 9.41 0 0 0 5.1 1.49c6.13 0 9.48-5.08 9.48-9.48 0-.14 0-.28 0-.42a6.78 6.78 0 0 0 1.66-1.74 6.43 6.43 0 0 1-1.87.52A3.31 3.31 0 0 0 15.64 3.28z" />
              </svg>
            </a>
          </li>
         
          <li className="ms-3">
            <a className="text-white" href="https://www.facebook.com/yourfacebookpage">
              <svg className="bi" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.01 14V8.66h-1.5V6.33h1.5V5.14a3.73 3.73 0 0 1 3.79-4 20.83 20.83 0 0 1 2.33.12V3h-1.41c-1.26 0-1.5.59-1.5 1.46V6.32h2.8l-.37 2.33h-2.43v5.35H5.01z" />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
