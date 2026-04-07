import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1">
          <img src="img/jspsych-logo.jpg" alt="jsPsych Logo" style={{maxWidth: '50%'}}/>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.heroText}>
          <p>
            jsPsych is a JavaScript framework for creating behavioral experiments that run in a web browser.
          </p>
          <p>
            Experiments in jsPsych are created using plugins.
            Each plugin defines different kinds of events, like showing an image on the screen, and collects different kinds of data, 
            like recording which key was pressed at which time. 
            You can use the plugins that are included with jsPsych, use plugins that are developed by community members in the contrib repository, 
            or create your own plugins.
            By assembling different plugins together into a timeline, it is possible to create a wide range of experiments.
          </p>
          <p>
            The page on timelines is a good place to start learning about jsPsych. 
            From there, you might want to complete the hello world tutorial to learn how to set up a jsPsych experiment and 
            the reaction time experiment tutorial to learn the core features of the framework.
          </p>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorials/hello-world">
            Get Started With jsPsych - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
