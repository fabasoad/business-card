import imgAngular from '../../assets/images/technologies/angular.png'
import imgBootstrap from '../../assets/images/technologies/bootstrap.png'
import imgBitrise from '../../assets/images/technologies/bitrise.png'
import imgCodeIgniter from '../../assets/images/technologies/codeIgniter.png'
import imgCSharp from '../../assets/images/technologies/csharp.png'
import imgDocker from '../../assets/images/technologies/docker.png'
import imgDotNetCore from '../../assets/images/technologies/dotnet-core.png'
import imgElasticsearch from '../../assets/images/technologies/elasticsearch.png'
import imgFluentBit from '../../assets/images/technologies/fluentBit.png'
import imgFluentD from '../../assets/images/technologies/fluentD.png'
import imgGit from '../../assets/images/technologies/git.png'
import imgGitHub from '../../assets/images/technologies/github.png'
import imgGitHubActions from '../../assets/images/technologies/github-actions.png'
import imgGrafana from '../../assets/images/technologies/grafana.png'
import imgHelm from '../../assets/images/technologies/helm.png'
import imgHpeAlm from '../../assets/images/technologies/hpeAlm.png'
import imgIntellijIdea from '../../assets/images/technologies/intellijIdea.png'
import imgJava from '../../assets/images/technologies/java.png'
import imgJavaScript from '../../assets/images/technologies/javascript.png'
import imgJenkins from '../../assets/images/technologies/jenkins.png'
import imgJira from '../../assets/images/technologies/jira.png'
import imgJquery from '../../assets/images/technologies/jquery.png'
import imgJunit from '../../assets/images/technologies/junit.png'
import imgKafka from '../../assets/images/technologies/kafka.png'
import imgKibana from '../../assets/images/technologies/kibana.png'
import imgKubernetes from '../../assets/images/technologies/kubernetes.png'
import imgLombok from '../../assets/images/technologies/lombok.png'
import imgMariaDb from '../../assets/images/technologies/mariadb.png'
import imgMaven from '../../assets/images/technologies/maven.png'
import imgMsSql from '../../assets/images/technologies/mssql.png'
import imgMySql from '../../assets/images/technologies/mysql.png'
import imgNetBeans from '../../assets/images/technologies/netBeans.png'
import imgNpm from '../../assets/images/technologies/npm.png'
import imgOracle from '../../assets/images/technologies/oracle.png'
import imgOxidEShop from '../../assets/images/technologies/oxidEShop.png'
import imgPhp from '../../assets/images/technologies/php.png'
import imgPrism from '../../assets/images/technologies/prism.png'
import imgPrometheus from '../../assets/images/technologies/prometheus.png'
import imgPython from '../../assets/images/technologies/python.png'
import imgReact from '../../assets/images/technologies/react.png'
import imgRedis from '../../assets/images/technologies/redis.png'
import imgRedmine from '../../assets/images/technologies/redmine.png'
import imgSilverlight from '../../assets/images/technologies/silverlight.png'
import imgSmarty from '../../assets/images/technologies/smarty.png'
import imgSpring from '../../assets/images/technologies/spring.png'
import imgSvn from '../../assets/images/technologies/svn.png'
import imgTeamCity from '../../assets/images/technologies/teamCity.png'
import imgTomcat from '../../assets/images/technologies/tomcat.png'
import imgTravis from '../../assets/images/technologies/travis-ci.png'
import imgTypeScript from '../../assets/images/technologies/typescript.png'
import imgVBulletin from '../../assets/images/technologies/vBulletin.png'
import imgVisualStudio from '../../assets/images/technologies/visualStudio.png'
import imgVsCode from '../../assets/images/technologies/vsCode.png'
import imgWebpack from '../../assets/images/technologies/webpack.png'
import imgWindowsForms from '../../assets/images/technologies/windowsForms.png'
import imgXamarin from '../../assets/images/technologies/xamarin.png'

import { Technology, TechnologyProvider } from './types'

const TechnologyProviderDefault: TechnologyProvider = {
  items: new Array<Technology>(
    { name: 'angular', img: imgAngular },
    { name: 'bitrise', img: imgBitrise },
    { name: 'bootstrap', img: imgBootstrap, isSkill: true },
    { name: 'codeigniter', img: imgCodeIgniter },
    { name: 'csharp', img: imgCSharp, isSkill: true },
    { name: 'docker', img: imgDocker, isSkill: true },
    { name: 'dotNetCore', img: imgDotNetCore, isSkill: true },
    { name: 'elasticsearch', img: imgElasticsearch },
    { name: 'fluentBit', img: imgFluentBit },
    { name: 'fluentD', img: imgFluentD },
    { name: 'git', img: imgGit },
    { name: 'grafana', img: imgGrafana },
    { name: 'helm', img: imgHelm },
    { name: 'hpeAlm', img: imgHpeAlm },
    { name: 'jenkins', img: imgJenkins },
    { name: 'jira', img: imgJira },
    { name: 'jQuery', img: imgJquery },
    { name: 'junit', img: imgJunit },
    { name: 'intellijIdea', img: imgIntellijIdea },
    { name: 'kibana', img: imgKibana },
    { name: 'lombok', img: imgLombok },
    { name: 'mariaDb', img: imgMariaDb },
    { name: 'mssql', img: imgMsSql },
    { name: 'mysql', img: imgMySql },
    { name: 'netBeans', img: imgNetBeans },
    { name: 'oracle', img: imgOracle },
    { name: 'oxidEShop', img: imgOxidEShop },
    { name: 'php', img: imgPhp },
    { name: 'prism', img: imgPrism },
    { name: 'prometheus', img: imgPrometheus },
    { name: 'redmine', img: imgRedmine },
    { name: 'silverlight', img: imgSilverlight },
    { name: 'smarty', img: imgSmarty },
    { name: 'spring', img: imgSpring },
    { name: 'svn', img: imgSvn },
    { name: 'teamCity', img: imgTeamCity },
    { name: 'tomcat', img: imgTomcat },
    { name: 'gitHub', img: imgGitHub, isSkill: true },
    { name: 'gitHubActions', img: imgGitHubActions, isSkill: true },
    { name: 'java', img: imgJava, isSkill: true },
    { name: 'javaScript', img: imgJavaScript, isSkill: true },
    { name: 'kafka', img: imgKafka, isSkill: true },
    { name: 'kubernetes', img: imgKubernetes, isSkill: true },
    { name: 'maven', img: imgMaven, isSkill: true },
    { name: 'npm', img: imgNpm, isSkill: true },
    { name: 'python', img: imgPython, isSkill: true },
    { name: 'react', img: imgReact, isSkill: true },
    { name: 'redis', img: imgRedis, isSkill: true },
    { name: 'travis', img: imgTravis, isSkill: true },
    { name: 'typeScript', img: imgTypeScript, isSkill: true },
    { name: 'webpack', img: imgWebpack, isSkill: true },
    { name: 'xamarin', img: imgXamarin, isSkill: true },
    { name: 'vBulletin', img: imgVBulletin },
    { name: 'visualStudio', img: imgVisualStudio },
    { name: 'vsCode', img: imgVsCode },
    { name: 'windowsForms', img: imgWindowsForms }
  ).reduce((map, tech) => {
    map.set(tech.name, tech)
    return map
  }, new Map<string, Technology>())
}

export default TechnologyProviderDefault
