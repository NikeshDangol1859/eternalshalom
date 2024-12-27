import React, {  useEffect, useState } from 'react'
import ScrollUp from '../ScrollUp';
import Footer from '../Footer';

const Gallary = () => {
  const images = [
    '/gallery/1.jpg',
    '/gallery/2.jpg',
    '/gallery/3.jpg',
    '/gallery/4.jpg',
    '/gallery/5.jpg',
    '/gallery/6.jpg',
    '/gallery/7.jpg',
    '/gallery/8.jpg',
    '/gallery/9.jpg',
    '/gallery/10.jpg',
    '/gallery/11.jpg',
    '/gallery/12.jpg',
    '/gallery/13.jpg',
    '/gallery/14.jpg',
    '/gallery/15.JPG',
    '/gallery/16.JPG',
    '/gallery/17.JPG',
    '/gallery/18.JPG',
    '/gallery/19.JPG',        
    '/gallery/20.JPG',
    '/gallery/21.JPG',
    '/gallery/22.JPG',
    '/gallery/23.JPG',
    '/gallery/24.jpg',
    '/gallery/25.jpg',
    '/gallery/26.jpg',
    '/gallery/27.jpg',
    '/gallery/28.jpeg',
  ];

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

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  if (!Array.isArray(images)) {
    console.error('Gallery: `images` prop must be an array.');
    return <p>No images to display</p>;
  }

  return (
    <>
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
<Footer/>
    </div>
    
    </>
    
  );
};

export default Gallary
