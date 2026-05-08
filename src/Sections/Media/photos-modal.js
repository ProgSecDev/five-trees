import React, { useState } from "react";
import MediaModal from "./media-modal";
import "./photos-modal.css";

import photo1 from "../../assets/Media/media-section2-image1.png";
import photo2 from "../../assets/Media/media-section2-image2.png";
import photo3 from "../../assets/Media/media-section-3-banner.png";
import photo4 from "../../assets/Media/media-section4-grid-image1.png";
import photo5 from "../../assets/Media/media-section4-grid-image2.png";
import photo6 from "../../assets/Media/media-section4-grid-image3.png";
import photo7 from "../../assets/Media/media-section4-grid-image4.png";
import photo8 from "../../assets/Media/media-section-5-banner.png";
import photo9 from "../../assets/Media/media-section6-grid-image1.png";
import photo10 from "../../assets/Media/media-section6-grid-image2.png";
import photo11 from "../../assets/Media/media-section6-grid-image3.png";
import photo12 from "../../assets/Media/media-section6-grid-image4.png";
import photo13 from "../../assets/Media/media-section6-grid-image5.png";
import photo14 from "../../assets/Media/media-section6-grid-image6.png";

const photos = [
  { id: 1, src: photo1, alt: "Halloumi platter" },
  { id: 2, src: photo2, alt: "Grilled halloumi" },
  { id: 3, src: photo3, alt: "Halloumi salad" },
  { id: 4, src: photo4, alt: "Halloumi platter" },
  { id: 5, src: photo5, alt: "Grilled halloumi" },
  { id: 6, src: photo6, alt: "Halloumi salad" },
  { id: 7, src: photo7, alt: "Halloumi platter" },
  { id: 8, src: photo8, alt: "Grilled halloumi" },
  { id: 9, src: photo9, alt: "Halloumi salad" },
  { id: 10, src: photo10, alt: "Halloumi platter" },
  { id: 11, src: photo11, alt: "Grilled halloumi" },
  { id: 12, src: photo12, alt: "Halloumi salad" },
  { id: 13, src: photo13, alt: "Halloumi platter" },
  { id: 14, src: photo14, alt: "Grilled halloumi" },
];

function PhotosModal({ isOpen, onClose }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <MediaModal isOpen={isOpen} onClose={onClose} title="Photos">
      <div className="photos-modal__grid">
        {photos.map((photo) => (
          <button
            key={photo.id}
            type="button"
            className="photos-modal__item"
            onClick={() => setLightbox(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="photos-modal__image"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="photos-modal__lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox.src} alt={lightbox.alt} className="photos-modal__lightbox-img" />
        </div>
      )}
    </MediaModal>
  );
}

export default PhotosModal;