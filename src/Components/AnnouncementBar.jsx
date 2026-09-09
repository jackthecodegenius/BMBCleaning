import React from "react";
import "./AnnouncementBar.css";

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <span className="announcement-badge">Special Offer</span>
        <p>
          Book your carpet or sofa clean today and get <strong>10% off</strong>{" "}
          your first service!
        </p>
      </div>
    </div>
  );
}

export default AnnouncementBar;
