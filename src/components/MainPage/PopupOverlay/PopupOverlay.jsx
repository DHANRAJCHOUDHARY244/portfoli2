import React, { useState } from 'react'

const PopupOverlay = (props) => {
  const [src, setSrc] = useState(props.src)
  const closePopup = () => {
    document.getElementById("popup-overlay").style.display = "none";
  }
  const openPopup = async() => {
    document.getElementById('popup-iframe').src = await src
    document.getElementById("popup-overlay").style.display = "block";
  }
  return (
    <>
      <a href="#portfolio" onClick={openPopup}>Preview</a>
      <div id="popup-overlay" style={{ zIndex: 50, width: '100vw', margin: 0, padding: 0 }}>
        <div id="popup-content" style={{ width: '100vw' }}>
          <span style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, cursor: 'pointer', background: '#1f1f1f' }} id="close-popup" onClick={closePopup}>
            <i style={{ animation: 'rotating 3s infinite linear' }} className="las la-window-close" />
          </span>
          <iframe id="popup-iframe" src='#' style={{ width: '100vw', margin: '-20px', padding: 0 }} frameBorder={0} />
        </div>
      </div>
    </>

  )
}

export default PopupOverlay 