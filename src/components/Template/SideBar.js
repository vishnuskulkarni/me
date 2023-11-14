import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/vishnu_nyc.jpg`} alt="" />
      </Link>
      <header>
        <h2>Vishnu Kulkarni</h2>
        <p><a href="mailto:vishnu.kulkarni@columbia.edu">vishnu.kulkarni@columbia.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      {/* <p>Hi, I&apos;m Michael. I am a <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC Alumni,
        and the VP of Engineering at <a href="https://smileidentity.com">Smile Identity</a>. Previously,
        I was the co-founder and CTO of <a href="https://arthena.com">Arthena</a>
        , co-founder of <a href="https://matroid.com">Matroid</a>, and worked at
        {' '}<a href="https://planet.com">Planet</a> and <a href="https://facebook.com">Facebook</a>.
      </p> */}
      <p>
        Hi, I&apos;m Vishnu. I am currently pursuing my Master&apos;s degree
        in Electrical Engineering,
        with a specialisation in AI and Machine Learning at <a href="https://www.ee.columbia.edu/ms-program-ee">Columbia University</a>.
        I graduate this fall and I am actively seeking full-time roles in the field of AI,
        Machine Learning and Software Engineering (for AI) starting February 2024.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Vishnu Kulkarni <Link to="/">vishnuskulkarni.github.io/me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
