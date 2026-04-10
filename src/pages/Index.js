import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Vishnu Kulkarni's personal website. New York based Columbia Engineering graduate."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome to my website.</Link></h2>
          <p>
            This website serves as an interactive resume and portfolio,
            showcasing my professional journey, past experiences, and a collection of
            projects I&apos;m proud of.
            Dive in to discover more about my passion and expertise.
          </p>
        </div>
      </header>
      <p>
        I love working at the intersection of AI, data, and people. I&apos;m interested
        in industry-facing roles where AI systems are built, deployed, and translated
        into real-world impact across AI Solutions, Data Science, and Forward Deployed
        Engineering.
      </p>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> If you wish to download my resume, you can do so <a href="https://drive.google.com/file/d/1wyoztsBbqxKl5jFxzplp_pJunpWkl4Hh/view?usp=sharing">here</a>.</p>
    </article>
  </Main>
);

export default Index;
