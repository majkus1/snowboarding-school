// components/Slider.js
import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0); // Nowy stan

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openModal = (index) => {
    setModalImageIndex(index); // Ustaw indeks obrazu dla modalu
    setIsModalOpen(true);
  };

  // return (
  //   <div className="slider">
  //     <button onClick={prevImage}>&lt;</button>
  //     <img src={images[currentImageIndex]} alt="current" onClick={() => openModal(currentImageIndex)} className='img-slider' />
  //     <img src={images[(currentImageIndex + 1) % images.length]} alt="next" onClick={() => openModal((currentImageIndex + 1) % images.length)} className='img-slider' />
  //     {/* <img src={images[(currentImageIndex + 2) % images.length]} alt="next-next" onClick={() => openModal((currentImageIndex + 2) % images.length)} className='img-slider' /> */}
  //     <button onClick={nextImage}>&gt;</button>

  //     {isModalOpen && (
  //       <div className="modal">
  //         <div className="modal-content">
  //           <button className="close-button" onClick={() => setIsModalOpen(false)}>X</button>
  //           <button className="prev-button" onClick={() => setModalImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>&lt;</button>
  //           <img src={images[modalImageIndex]} alt="modal" />
  //           <button className="next-button" onClick={() => setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length)}>&gt;</button>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div className="slider">
      <button onClick={prevImage}>&lt;</button>
      <img src={images[currentImageIndex]} alt="current" onClick={() => openModal(currentImageIndex)} className='img-slider' />
      <img src={images[(currentImageIndex + 1) % images.length]} alt="next" onClick={() => openModal((currentImageIndex + 1) % images.length)} className='img-slider' />
      <button onClick={nextImage}>&gt;</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsModalOpen(false)}>X</button>
            <button className="prev-button" onClick={() => setModalImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>&lt;</button>
            <img src={images[modalImageIndex]} alt="modal" />
            <button className="next-button" onClick={() => setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length)}>&gt;</button>
          </div>
        </div>
      )}

      {/* Wstępne ładowanie obrazów */}
      <div style={{ visibility: 'hidden', height: 0, width: 0, overflow: 'hidden' }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`preload-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider