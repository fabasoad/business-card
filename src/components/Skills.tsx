/// <reference path='./Skills.d.ts' />
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import imgBootstrap from '../assets/images/skills/bootstrap.png';
import imgCSharp from '../assets/images/skills/csharp.png';
import imgDocker from '../assets/images/skills/docker.png';
import imgDotNetCore from '../assets/images/skills/dotnet-core.png';
import imgGitHubActions from '../assets/images/skills/github-actions.png';
import imgGitHub from '../assets/images/skills/github.png';
import imgJava from '../assets/images/skills/java.png';
import imgJavaScript from '../assets/images/skills/javascript.png';
import imgKafka from '../assets/images/skills/kafka.png';
import imgKubernetes from '../assets/images/skills/kubernetes.png';
import imgMaven from '../assets/images/skills/maven.png';
import imgNpm from '../assets/images/skills/npm.png';
import imgPython from '../assets/images/skills/python.png';
import imgReact from '../assets/images/skills/react.png';
import imgTravis from '../assets/images/skills/travis-ci.png';
import imgTypeScript from '../assets/images/skills/typescript.png';
import imgWebpack from '../assets/images/skills/webpack.png';
import imgXamarin from '../assets/images/skills/xamarin.png';

export default function Skills() {
  const { t } = useTranslation();
  return (
    <div id="skills" className="light-component">
      <div className="section-title text-center center">
        <h2>{t("business-card-skills-title")}</h2>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="skills-list col text-center">
            <img className="m-4" src={imgCSharp} />
            <img className="m-4" src={imgDotNetCore} />
            <img className="m-4" src={imgJava} />
            <img className="m-4" src={imgMaven} />
            <img className="m-4" src={imgPython} />
            <img className="m-4" src={imgDocker} />
            <img className="m-4" src={imgGitHub} />
            <img className="m-4" src={imgGitHubActions} />
            <img className="m-4" src={imgTravis} />
            <img className="m-4" src={imgJavaScript} />
            <img className="m-4" src={imgTypeScript} />
            <img className="m-4" src={imgKafka} />
            <img className="m-4" src={imgKubernetes} />
            <img className="m-4" src={imgBootstrap} />
            <img className="m-4" src={imgNpm} />
            <img className="m-4" src={imgReact} />
            <img className="m-4" src={imgWebpack} />
            <img className="m-4" src={imgXamarin} />
          </div>
        </div>
      </div>
    </div>
  );
}