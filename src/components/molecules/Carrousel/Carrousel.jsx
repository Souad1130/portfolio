import './carrousel.css';
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { portfolio } from '../../../assets/data.json';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carrousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (projectId) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjectId(null);
  };

  const getProjectById = (projectId) =>
    portfolio.find((project) => project.id === projectId);

  const selectedProject = selectedProjectId
    ? getProjectById(selectedProjectId)
    : null;

  const renderCard = (project) => (
    <Card
      key={project.id}
      project={project}
      onCardClick={() => openModal(project.id)}
    />
  );

  return (
    <>
      {isMobile ? (
        <div className="carrousel-column">
          {portfolio.map(renderCard)}
        </div>
      ) : (
        <Slider
          className="center"
          centerMode={true}
          infinite={true}
          centerPadding="70px"
          slidesToShow={3}
          speed={500}
        >
          {portfolio.map(renderCard)}
        </Slider>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProject && (
          <div className="modal-content">
            <h2>{selectedProject.name}</h2>
            <p className="project-category">{selectedProject.category}</p>
            <img src={selectedProject.image} alt={selectedProject.alt} />
            <p>{selectedProject.texte}</p>

            <h3>{selectedProject.title}</h3>
            <ul>
              {Object.keys(selectedProject)
                .filter((key) => key.startsWith("objectif"))
                .map((key) => (
                  <li key={key}>{selectedProject[key]}</li>
                ))}
            </ul>

            <div className="btn-group">
              <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                Voir la démo
              </a>
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  Code source
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default Carrousel;
