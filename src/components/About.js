import React from 'react';
import './About.css';
import tinkeritLogo from '../images/tinkeritLogo.png'

const About = () => {
  // Data for the cards
  const projects = [
    {
      logo: tinkeritLogo,
      name: 'TinkerIT',
      text: 'Niko on ollut kulmakivi liiketoimintamme menestykselle. Hänen kykynsä mukautua haasteisiin ja tarjota innovatiivisia, räätälöityjä ratkaisuja on ollut ratkaisevan tärkeää. Arvostamme suuresti hänen omistautumistaan, asiantuntemustaan ja väsymätöntä pyrkimystään erinomaisuuteen.',
    },
    // {
    //   logo: 'path-to-another-logo.png',
    //   name: 'Another Company',
    //   text: 'Niko consistently exceeds expectations by delivering solutions that truly understand our business needs. His passion and technical expertise are unmatched.',
    // },
  ];

  return (
    <section className="about-section">
      <h2>Lisää työstäni</h2>
      <p className='about-plain-text'>tuloksellinen myynti ei ole sattumaa, vaan järjestelmällisen tekemisen lopputulos. Olen kouluttautunut systemaattisiin myyntimalleihin ja auttanut useita yrityksiä saavuttamaan mitattavia tuloksia lyhyessä ajassa. Uskon, että toistuvat myynnin haasteet voidaan ratkaista selkeällä prosessilla ja modernilla lähestymistavalla. Jos haluat lopettaa rahan tuhlaamisen satunnaiseen markkinointiin ja rakentaa myyntikoneiston, joka tuo tuloksia kuukaudesta toiseen, olen täällä auttamassa. Varaa ilmainen konsultaatio ja katsotaan yhdessä, miten voin auttaa sinua saavuttamaan tavoitteesi.</p>
      <br></br>
      <h3>Asiakkaita ja asiakastapauksia</h3>
      <div className="cards-container">
        {projects.map((project, index) => (
          <div key={index} className="appreciation-card">
            <img
              src={project.logo}
              alt={`${project.name} Logo`}
              className="company-logo"
            />
            <h3 className="company-name">{project.name}</h3>
            <p className="appreciation-text">{project.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
