import React, { useState } from "react";
import "./NavBar.css";
import { Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/">
            <img
              src="/logo.png"
              alt="BlauCutz logo"
              className="navbar-logo"
            />
          </a>
        </div>

        <div className="navbar-right">
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#book" className="nav-link">Book</a>
          <a href="https://instagram.com/blaucutz" target="_blank" rel="noreferrer">
            <img src="/instagram.svg" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://twitter.com/blaucutz" target="_blank" rel="noreferrer">
            <Twitter className="social-icon" />
          </a>
          <span
            className="nav-link modal-trigger"
            onClick={() => setIsModalOpen(true)}
          >
            About
          </span>
        </div>
      </nav>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
              <h2>About BlauCutz</h2>
              <p>BlauCutz is a modern barber brand offering precision fades, clean lineups, and timeless cuts. Located in the heart of the city, we bring fresh energy to classic barbering.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
