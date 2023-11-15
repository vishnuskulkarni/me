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
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> If you wish to download my resume, you can do so <a href="https://github.com/vishnuskulkarni/">here</a>.</p>
    </article>
  </Main>
);

export default Index;
