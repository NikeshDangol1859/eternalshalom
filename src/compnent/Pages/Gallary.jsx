import React, {  useState } from 'react'

const Gallary = ({ images=[]}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  if (!Array.isArray(images)) {
    console.error('Gallery: `images` prop must be an array.');
    return <p>No images to display</p>;
  }

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(image)}>
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={currentImage} alt="Expanded view" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallary
