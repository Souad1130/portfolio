import './about.css';
import { useState } from 'react';
import AboutImg from '../../../assets/img/about-1.png';
import Button from '../../atoms/Button/Button';
import Modal from '../../molecules/Modal/Modal';
import Fleur from '../../../assets/img/fleur.webp';

const About = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section id='about'>
            <h2>About me</h2>
            <figure>
                <img src={AboutImg} alt="image avec des photos de profil de face et de jois de Souad" loading='lazy'/>
                <figcaption>
                    <Button text="Qui suis-je ?" onClick={openModal} />
                </figcaption>
            </figure>

            {modalOpen && (
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    <article id='modal'>
                        <h3>Qui suis-je?</h3>
                        <figure>
                            <img src={Fleur} alt="dessin d'une fleur" loading='lazy'/>
                            <figcaption>
                            Bonjour, je m'appelle Souad, je vis à Montpellier et je suis passionnée de voyages, de rencontres humaines... et de code !<br /><br />
                            Mon parcours est une aventure faite de détours enrichissants. Après avoir obtenu mon bac, 
                            j’ai suivi un an d’informatique à l’université, guidée par une vraie curiosité pour le monde numérique. 
                            Mais la vie m’a menée ailleurs : pour des raisons financières, j’ai bifurqué vers la diététique, 
                            un domaine profondément humain où j’ai exercé pendant six ans à l’hôpital. J’y ai appris l’écoute, la rigueur, la gestion de projets
                             et surtout l’importance de créer du lien.<br /><br />
                            Mais ma passion pour le numérique est restée bien présente. J’ai suivi une formation de technicienne en informatique,
                             et en 2023, j’ai décidé de me lancer pleinement dans le développement web. J’ai suivi une formation 
                             intensive chez OpenClassrooms, où j’ai appris à créer des interfaces web modernes, accessibles et esthétiques.
                            Aujourd’hui, je suis développeuse web junior, toujours curieuse, toujours motivée,
                             à la recherche d’un environnement où je peux apprendre, évoluer et créer.
                              Pour moi, chaque ligne de code est comme une nouvelle destination à explorer, 
                              chaque projet une nouvelle histoire à écrire.<br /><br />
                            </figcaption>
                        </figure>
                    </article>
                </Modal>
            )}
        </section>
    );
}

export default About;
