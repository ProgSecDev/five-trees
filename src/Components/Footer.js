// Sections/Footer/Footer.js
import React from "react";
import dessertPlate from "../../src/assets/Footer/footer-plate.png";
import qrCode from "../../src/assets/Footer/QR-Code.png";

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
              {contactItems.map((item, index) => (
                <div key={index} className="footer__contact-item">
                  <div className="footer__icon">{item.icon}</div>
                  <div className="footer__contact-text">{item.content}</div>
                </div>
              ))}
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
            </form>

            <img src={dessertPlate} alt="Dessert plate" className="footer__plate-image" />
          </div>
        </div>
      </footer>

      <style>{`
  @font-face {
    font-family: "SairaCondensedBold";
    src: url("../../font/SairaCondensed-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Impact";
    src: url("../../font/impact.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "CanvaSansRegular";
    src: url("../../font/canva-sans-regular.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  .footer {
    width: 100%;
    background: #fff;
    padding: 32px 28px 26px;
    box-sizing: border-box;
  }

  .footer__container {
    max-width: 1320px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 520px 1fr;
    gap: 110px;
    align-items: start;
  }

  .footer__left-card {
    background: #617827;
    min-height: 770px;
    padding: 76px 56px 34px;
    box-sizing: border-box;
    color: #ffffff;
    box-shadow: 14px 14px 30px rgba(0, 0, 0, 0.18);
  }

  .footer__left-title {
    margin: 0 0 46px;
    color: #ffffff;
    font-size: 3.7rem;
    line-height: 1;
    font-weight: 900;
    text-transform: uppercase;
    font-family: "Impact", sans-serif;
  }

  .footer__contact-list {
    display: flex;
    flex-direction: column;
    gap: 34px;
  }

  .footer__contact-item {
    display: grid;
    grid-template-columns: 34px 1fr;
    gap: 18px;
    align-items: center;
  }

  .footer__icon {
    width: 34px;
    height: 34px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer__icon-svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .footer__contact-text {
    color: #ffffff;
    font-size: 1.05rem;
    line-height: 1.18;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
  }

  .footer__qr-wrap {
    margin-top: 44px;
    display: flex;
    justify-content: center;
  }

  .footer__qr-image {
    width: 154px;
    height: 154px;
    object-fit: contain;
    display: block;
  }

  /* RIGHT PANEL — always relative so absolute plate is contained */
  .footer__right {
    position: relative;
    padding-top: 18px;
    padding-bottom: 300px;
    min-height: 770px;
  }

  .footer__right-title {
    margin: 0 0 28px;
    color: #c1d667;
    font-size: 4.1rem;
    line-height: 1;
    font-weight: 900;
    text-transform: uppercase;
    font-family: "SairaCondensedBold", sans-serif;
  }

  .footer__form {
    width: 100%;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .footer__input,
  .footer__textarea {
    width: 100%;
    border: 1.8px solid #7e7a7d;
    background: transparent;
    color: #3d3843;
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 26px 24px;
    box-sizing: border-box;
    outline: none;
    font-family: "Montserrat", sans-serif;
  }

  .footer__input::placeholder,
  .footer__textarea::placeholder {
    color: #3d3843;
    opacity: 1;
    font-family: "Montserrat", sans-serif;
  }

  .footer__input {
    height: 82px;
  }

  .footer__textarea {
    min-height: 340px;
    resize: none;
    padding-top: 36px;
  }

  /* PLATE — absolute, oblique, desktop default */
  .footer__plate-image {
    position: absolute;
    right: -250px;
    bottom: 16px;
    top: 140px;
    width: 620px;
    max-width: none;
    object-fit: contain;
    pointer-events: none;
    filter: drop-shadow(0 20px 14px rgba(0, 0, 0, 0.18));
    transform: rotate(-18deg);
    transform-origin: bottom right;
  }

  @media (max-width: 1280px) {
    .footer__container {
      grid-template-columns: 460px 1fr;
      gap: 56px;
    }

    .footer__left-card {
      min-height: 720px;
      padding: 60px 40px 28px;
    }

    .footer__left-title {
      font-size: 3.2rem;
    }

    .footer__right-title {
      font-size: 3.5rem;
    }

    .footer__plate-image {
      width: 500px;
      right: -100px;
      bottom: 16px;
    }
  }

  @media (max-width: 980px) {
    .footer__container {
      grid-template-columns: 1fr;
      gap: 36px;
    }

    .footer__left-card,
    .footer__right {
      min-height: auto;
    }

    /* enough bottom space for the rotated plate to overlap the textarea */
    .footer__right {
      padding-bottom: 200px;
    }

    .footer__form {
      max-width: 100%;
    }

    .footer__plate-image {
      width: 360px;
      right: -80px;
      bottom: 10px;
      top: 340px;
    }
  }

  @media (max-width: 576px) {
    .footer {
      padding: 18px 14px 20px;
    }

    .footer__left-card {
      padding: 34px 22px 22px;
    }

    .footer__left-title {
      font-size: 2.5rem;
      margin-bottom: 28px;
    }

    .footer__right-title {
      font-size: 2.6rem;
    }

    /* enough room for smaller rotated plate */
    .footer__right {
      padding-bottom: 160px;
    }

    .footer__contact-item {
      grid-template-columns: 28px 1fr;
      gap: 14px;
    }

    .footer__contact-text {
      font-size: 0.95rem;
    }

    .footer__input {
      height: 68px;
      padding: 18px;
      font-size: 0.95rem;
    }

    /* smaller plate, still absolute + rotated in bottom-right corner */
    .footer__plate-image {
      width: 240px;
      right: -50px;
      bottom: 10px;
      top: 300px;
    }

    .footer__textarea {
      min-height: 240px;
      padding: 20px 18px;
      font-size: 0.95rem;
    }
  }
`}</style>
    </>
  );
}

export default Footer;
