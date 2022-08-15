import { Container } from "./style.js";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const handleSubmit = (e) => {};
  return (
    <Container>
      <section id="contato">
        <h2>Entre em contato</h2>
        <div className="container-contact">
          <div className="options">
            <article className="options-container">
              <MdOutlineEmail className="contact-option-icon" />
              <h4>Email</h4>
              <h5>example@jetbov.com</h5>
              <a> Envie um email</a>
            </article>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" name="user_name" required />
            <input type="text" placeholder="Email" name="user_email" required />
            <textarea
              placeholder="Mensagem"
              rows="7"
              name="message"
              required
            ></textarea>
            <button type="submit">Enviar mensagem</button>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
