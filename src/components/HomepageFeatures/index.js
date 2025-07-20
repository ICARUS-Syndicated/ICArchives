import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '从 RWP...',
    Svg: require('@site/static/img/rwp.svg').default,
    description: (
      <>
        RWP 的种子处处都在。
      </>
    ),
  },
  {
    title: '到 RMS...',
    Svg: require('@site/static/img/rms.svg').default,
    description: (
      <>
        一个计划不足的产物。
      </>
    ),
  },
  {
    title: '再到 Pykefox...',
    Svg: require('@site/static/img/pykefox.svg').default,
    description: (
      <>
        希望暂时的放弃能带来更好的启航...
      </>
    ),
  },
  {
    title: '接着是伊卡洛斯。',
    Svg: require('@site/static/img/icarus.svg').default,
    description: (
      <>
        然后绽放双翼。
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
