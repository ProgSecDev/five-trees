import React from "react";
import dessertPlate from "../../src/assets/Footer/footer-plate.png";
import qrCode from "../../src/assets/Footer/QR-Code.png";
import './Footer.css';

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="footer__icon-svg" aria-hidden="true">
      <path
        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="9"
        r="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="footer__icon-svg" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 7 12 13l7.5-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="footer__icon-svg" aria-hidden="true">
      <path
        d="M15.8 14.5c-2.7 2.7-6.1-.7-8.8-3.4C4.3 8.4.9 5 3.6 2.3l1.7-1.7c.6-.6 1.6-.6 2.2 0l2.3 2.3c.6.6.6 1.6 0 2.2L8.4 6.5c-.3.3-.4.7-.2 1.1.6 1.3 1.7 2.7 3.2 4.2 1.5 1.5 2.9 2.6 4.2 3.2.4.2.8.1 1.1-.2l1.4-1.4c.6-.6 1.6-.6 2.2 0l2.3 2.3c.6.6.6 1.6 0 2.2l-1.7 1.7c-2.7 2.7-6.1-.7-8.8-3.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="footer__icon-svg" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="footer__icon-svg" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 10v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 7.5h.01"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M12 17v-4.2c0-1.7 1-2.8 2.5-2.8S17 11.1 17 12.8V17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Footer() {
  const contactItems = [
    {
      icon: <LocationIcon />,
      href: "https://www.google.com/maps/search/Bank%20of%20Cyprus%200594/@34.93016815185547,33.62872314453125,17z?hl=en",
      content: (
        <>
          Spyrou Kyprianou 41-43,
          <br />
          Larnaca, Cyprus, 6051
        </>
      ),
    },
    {
      icon: <MailIcon />,
      content: <>sales@fivetrees-cy.com</>,
    },
    {
      icon: <PhoneIcon />,
      content: <>+357 97 499 994</>,
    },
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/fivetreescy?igsh=MWN3dGhoM3I1cDFyZw==",
      content: <>fivetreescy</>,
    },
    {
      icon: <LinkedinIcon />,
      content: <>Five Trees Global Trading</>,
    },
  ];

  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer__container">
          <div className="footer__left-card">
            <h2 className="footer__left-title">CONTACT US</h2>

            <div className="footer__contact-list">
              {contactItems.map((item, index) => {
                const inner = (
                  <>
                    <div className="footer__icon">{item.icon}</div>
                    <div className="footer__contact-text">{item.content}</div>
                  </>
                );

                return item.href ? (

                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__contact-item footer__contact-item--link"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={index} className="footer__contact-item">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="footer__qr-wrap">
              <img
                src={qrCode}
                alt="QR Code"
                className="footer__qr-image"
              />
            </div>
          </div>

          <div className="footer__right">
            <h2 className="footer__right-title">GET IN TOUCH</h2>

            <form className="footer__form">
              <input type="text" placeholder="YOUR NAME" className="footer__input" />
              <input type="email" placeholder="YOUR EMAIL" className="footer__input" />
              <textarea
                placeholder="TYPING YOUR MESSAGE HERE"
                className="footer__textarea"
                rows="7"
              />
              <button type="submit" className="footer__submit-btn">
                SUBMIT
              </button>
            </form>

            <img src={dessertPlate} alt="Dessert plate" className="footer__plate-image" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
