import React from "react";
import MediaModal from "./media-modal";
import "./reels-modal.css";

// Replace these with your actual video imports/URLs
import reel1 from "../../assets/Media/FIVE_TREES_REEL2_20260331_214505_0000.mp4";
import reel2 from "../../assets/Media/Halloumi_Burger.mp4";
import reel3 from "../../assets/Media/HALLOUMI_CHEESE_20260331_184853_0000.mp4";
import reel4 from "../../assets/Media/Halloumi_products.mp4";
import reel5 from "../../assets/Media/Halloumi_Toast.mp4";
import reel6 from "../../assets/Media/reel_1.mp4";
import reel7 from "../../assets/Media/reel_2.mp4";
import reel8 from "../../assets/Media/reel_3.mp4";
import reel9 from "../../assets/Media/reel_4.mp4";
import reel10 from "../../assets/Media/reel_5.mp4";
import reel11 from "../../assets/Media/reel_6.mp4";
import reel12 from "../../assets/Media/reel_7.mp4";
import reel13 from "../../assets/Media/reel_8.mp4";
import reel14 from "../../assets/Media/VID_20260507_031609_497.mp4";

const reels = [
  { id: 1, src: reel1 },
  { id: 2, src: reel2 },
  { id: 3, src: reel3 },
  { id: 4, src: reel4 },
  { id: 5, src: reel5 },
  { id: 6, src: reel6 },
  { id: 7, src: reel7 },
  { id: 8, src: reel8 },
  { id: 9, src: reel9 },
  { id: 10, src: reel10 },
  { id: 11, src: reel11 },
  { id: 12, src: reel12 },
  { id: 13, src: reel13 },
  { id: 14, src: reel14 },
];

function ReelsModal({ isOpen, onClose }) {
  return (
    <MediaModal isOpen={isOpen} onClose={onClose} title="Reels">
      <div className="reels-modal__grid">
        {reels.map((reel) => (
          <video
            key={reel.id}
            className="reels-modal__video"
            src={reel.src}
            controls
            preload="metadata"
            playsInline
          />
        ))}
      </div>
    </MediaModal>
  );
}

export default ReelsModal;