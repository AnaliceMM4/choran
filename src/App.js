import React, { useState } from "react";
import './App.css'; // Importando o CSS
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { PiBriefcaseFill } from "react-icons/pi";

const Navbar = () => (
  <nav className="navbar">

    <div className="navList">

      <div>
        <li className="logo"><a href="#home" className="navLink">Logo</a></li>
      </div>
      <ul>

        <li><a href="#home" className="navLink">Home</a></li>
        <li><a href="#about" className="navLink">About</a></li>
        <li><a href="#services" className="navLink">Services</a></li>
        <li><a href="#contact" className="navLink">Contact</a></li>
      </ul>
    </div>

  </nav>
);

// Componente Footer
const Footer = () => (
  <footer className="footer">
    <p>© 2025 Your Company. All rights reserved.</p>
  </footer>
);

// Componente principal App
const App = () => {
  const [form, setForm] = useState({ telefone: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <Navbar />


      <section className="section">
        <div className="section-content">
          <img src="foguete.png" alt="Quem Somos" className="section-image" />
          <div className="section-text">
            <h2>Quem Somos</h2>
            <p>Somos uma empresa dedicada a oferecer serviços de alta qualidade, sempre focados no cliente e na inovação.</p>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="section-content-image">
          <div className="section-text">
            <h2 className="break-text">Soluções de marketing para os mais diversos negócios de diversos tamanhos.</h2>
            <p className="form-intro">PREENCHA O FORMULÁRIO </p>

            <form className="register">

            <div className="row mb-2">
                <div className="" data-mdb-input-init>
                  <label className="form-label" htmlFor="nome">Nome</label>
                  <div className="input-container">
                    <span className={`input-icon ${form.nome ? "hidden" : ""}`}>
                    <FaUserAlt />
                    </span>
                    <input
                      type="nome"
                      id="nome"
                      className="form-control"
                      value={form.nome}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-2">
                <div className="" data-mdb-input-init>
                  <label className="form-label" htmlFor="telefone">Telefone</label>
                  <div className="input-container">
                    <span className={`input-icon ${form.telefone ? "hidden" : ""}`}>
                    <FaPhoneAlt />
                    </span>
                    <input
                      type="telefone"
                      id="telefone"
                      className="form-control"
                      value={form.telefone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-2">
                <div className="" data-mdb-input-init>
                  <label className="form-label" htmlFor="segmento">Segmento</label>
                  <div className="input-container">
                    <span className={`input-icon ${form.segmento ? "hidden" : ""}`}>
                    <PiBriefcaseFill />
                    </span>
                    <input
                      type="segmento"
                      id="segmento"
                      className="form-control"
                      value={form.segmento}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>


              <button type="submit" className="btn">RECEBER INFORMAÇÕES</button>
            </form>

          </div>
          {/* <img src="foguete1.jpg" alt="a" className="section-image" /> */}

        </div>
      </section>



      <Footer />
    </div>
  );
};

export default App;
