import React, { useState } from "react";
import './App.css'; // Importando o CSS
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { PiBriefcaseFill } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";


const CirclesWithDots = () => {
  const words = [
    "Escalamos empresas para múltiplos 5 dígitos/mês com previsibilidade.",
    "Reduzimos o custo de aquisição em até X% enquanto aumentamos as conversões",
    "Multiplicamos a recorrência e o ticket médio sem aumentar seu investimento em tráfego.",
    "Eliminamos gargalos invisíveis que bloqueiam seu crescimento."
  ];

  return (
    <div className="circle-container">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="circle"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            position: 'absolute',
          }}
        ></div>
      ))}
      {[{ top: "-20%", left: "85%" }, { top: "20%", left: "90%" }, { top: "50%", left: "90%" }, { top: "90%", left: "90%" }].map((pos, index) => (

        // <div key={index} className="dot" style={{ top: pos.top, left: pos.left }}>
        <div key={index} className="dot" style={{ position: 'absolute', top: pos.top, left: pos.left }}>

          <span className="dot-label">{words[index]}</span>
        </div>
      ))}
    </div>
  );
};


const Navbar = () => (
  <nav className="navbar">
    <div className="navList">

      <div>
        <li className="logo"><a href="#home" className="navLink">Logo</a></li>
      </div>
      <ul>

        <li><a href="#section1" className="navLink">Quero Vender Mais</a></li>
        <li><a href="#section2" className="navLink">Receber Informações</a></li>
        <li><a href="#section3" className="navLink">Agendar uma conversa</a></li>
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
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [activeSection, setActiveSection] = useState("section1");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <Navbar />
      <section className="section" id="section1">
        <div className="section-content">
          <div className="section-text">
            <h2 className="">
              Fature de R$100 mil a R$500 mil em 6 meses com uma estrutura de marketing criada para sua necessidade.
            </h2>
            <h5>Sistema de vendas previsível e escalável para sua empresa nunca parar de vender!</h5>
            <p className="form-intro">Seja escalando o seu negócio ou criando um negócio digital do absoluto zero.    </p>
            <p className="form-intro">Tem um PROBLEMA. Nós RESOLVEMOS.   </p>
           
            <button type="submit" className="btn-vender">QUERO VENDER MAIS</button>
          
          </div>

          <img src="section1.png" alt="Fundo da Seção 1" className="section1-image" />

          {/* Se quiser ativar os círculos com textos, descomente a linha abaixo */}
          {/* <CirclesWithDots /> */}
        </div>
      </section>


      <section className="section2" id="section2">
        <div className="section-content-image">
          <div className="section-text">
            <h2 className="break-text">Soluções de marketing para os mais diversos negócios de diversos tamanhos.</h2>
            <h5 className="form-intro">PREENCHA O FORMULÁRIO </h5>

            <form className="register">
              <div className="input-row mb-2 ">
                <div className="input-group" data-mdb-input-init>
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

                {/* <div className="row mb-2"> */}
                <div className="" data-mdb-input-init>
                  <label className="form-label" htmlFor="email">E-mail</label>
                  <div className="input-container">
                    <span className={`input-icon ${form.nome ? "hidden" : ""}`}>
                      <MdOutlineMail />
                    </span>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="input-row mb-2 ">
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

      <section className="section3" id="section3">
        <h2>O que a Choran entrega</h2>
        <div className="card-cursos">
          <div className="card-content">
            <img src="escalar.png" alt="Imagem do curso" className="card-image" />
            <div className="card-body">
              <p>Escalamos empresas para múltiplos 5 dígitos/mês com previsibilidade.</p>
            </div>
          </div>
          <div className="card-content">
            <img src="reduzir.png" alt="Imagem do curso" className="card-image" />
            <div className="card-body">
              <p>Reduzimos o custo de aquisição em até X% enquanto aumentamos as conversões.</p>
            </div>
          </div>
          <div className="card-content">
            <img src="multiplicar.png" alt="Imagem do curso" className="card-image" />
            <div className="card-body">
              <p>Multiplicamos a recorrência e o ticket médio sem aumentar seu investimento em tráfego.</p>
            </div>
          </div>
          <div className="card-content">
            <img src="eliminar.png" alt="Imagem do curso" className="card-image" />
            <div className="card-body">
              <p>Eliminamos gargalos invisíveis que bloqueiam seu crescimento.</p>
            </div>
          </div>
        </div>
        <p>
          Se você está investindo e não está vendo retorno, não é um problema do digital.

          É um problema de ESTRATÉGIA.
        </p>

      </section>

      <Footer />
    </div>
  );
};

export default App;
