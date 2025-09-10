import React from "react";
import Home from "../../components/Home/Home";

const page = () => {
  return (
    <div>
      <h1>Emna TRABELSI - Portfolio Ingénieur Informatique</h1>
      <section>
        <h2>À Propos de Mes Projets en Développement Web et IA</h2>
        <Home />
      </section>
      <section>
        <h2>Compétences Techniques et Expériences</h2>
      </section>
    </div>
  );
};


export const metadata = {
  title: 'Emna TRABELSI - Portfolio Ingénieur Informatique',
  description: 'Portfolio de Emna TRABELSI, ingénieur informatique en Tunisie. Expert en développement web, IA et logiciels. Consultez mes projets et contactez-moi !',
};



export default page;