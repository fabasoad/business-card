import imgAngular from '../assets/images/technologies/angular.png';
import imgBootstrap from '../assets/images/technologies/bootstrap.png';
import imgBitrise from '../assets/images/technologies/bitrise.png';
import imgCodeIgniter from '../assets/images/technologies/codeIgniter.png';
import imgCSharp from '../assets/images/technologies/csharp.png';
import imgDocker from '../assets/images/technologies/docker.png';
import imgDotNetCore from '../assets/images/technologies/dotnet-core.png';
import imgElasticsearch from '../assets/images/technologies/elasticsearch.png';
import imgFluentBit from '../assets/images/technologies/fluentBit.png';
import imgFluentD from '../assets/images/technologies/fluentD.png';
import imgGit from '../assets/images/technologies/git.png';
import imgGitHub from '../assets/images/technologies/github.png';
import imgGitHubActions from '../assets/images/technologies/github-actions.png';
import imgGrafana from '../assets/images/technologies/grafana.png';
import imgHelm from '../assets/images/technologies/helm.png';
import imgHpeAlm from '../assets/images/technologies/hpeAlm.png';
import imgIntellijIdea from '../assets/images/technologies/intellijIdea.png';
import imgJava from '../assets/images/technologies/java.png';
import imgJavaScript from '../assets/images/technologies/javascript.png';
import imgJenkins from '../assets/images/technologies/jenkins.png';
import imgJira from '../assets/images/technologies/jira.png';
import imgJquery from '../assets/images/technologies/jquery.png';
import imgJunit from '../assets/images/technologies/junit.png';
import imgKafka from '../assets/images/technologies/kafka.png';
import imgKibana from '../assets/images/technologies/kibana.png';
import imgKubernetes from '../assets/images/technologies/kubernetes.png';
import imgLombok from '../assets/images/technologies/lombok.png';
import imgMariaDb from '../assets/images/technologies/mariadb.png';
import imgMaven from '../assets/images/technologies/maven.png';
import imgMsSql from '../assets/images/technologies/mssql.png';
import imgMySql from '../assets/images/technologies/mysql.png';
import imgNetBeans from '../assets/images/technologies/netBeans.png';
import imgNpm from '../assets/images/technologies/npm.png';
import imgOracle from '../assets/images/technologies/oracle.png';
import imgOxidEShop from '../assets/images/technologies/oxidEShop.png';
import imgPhp from '../assets/images/technologies/php.png';
import imgPrism from '../assets/images/technologies/prism.png';
import imgPrometheus from '../assets/images/technologies/prometheus.png';
import imgPython from '../assets/images/technologies/python.png';
import imgReact from '../assets/images/technologies/react.png';
import imgRedis from '../assets/images/technologies/redis.png';
import imgRedmine from '../assets/images/technologies/redmine.png';
import imgSilverlight from '../assets/images/technologies/silverlight.png';
import imgSmarty from '../assets/images/technologies/smarty.png';
import imgSpring from '../assets/images/technologies/spring.png';
import imgSvn from '../assets/images/technologies/svn.png';
import imgTeamCity from '../assets/images/technologies/teamCity.png';
import imgTomcat from '../assets/images/technologies/tomcat.png';
import imgTravis from '../assets/images/technologies/travis-ci.png';
import imgTypeScript from '../assets/images/technologies/typescript.png';
import imgVBulletin from '../assets/images/technologies/vBulletin.png';
import imgVisualStudio from '../assets/images/technologies/visualStudio.png';
import imgVsCode from '../assets/images/technologies/vsCode.png';
import imgWebpack from '../assets/images/technologies/webpack.png';
import imgWindowsForms from '../assets/images/technologies/windowsForms.png';
import imgXamarin from '../assets/images/technologies/xamarin.png';
import Technology from './Technology';

export default class Technologies {

  _images = new Map<string, Technology>();

  constructor() {
    this._images.set('angular', new Technology('angular', imgAngular));
    this._images.set('bitrise', new Technology('bitrise', imgBitrise));
    this._images.set('bootstrap', new Technology('bootstrap', imgBootstrap, true));
    this._images.set('codeigniter', new Technology('codeigniter', imgCodeIgniter));
    this._images.set('csharp', new Technology('csharp', imgCSharp, true));
    this._images.set('docker', new Technology('docker', imgDocker, true));
    this._images.set('dotNetCore', new Technology('dotNetCore', imgDotNetCore, true));
    this._images.set('elasticsearch', new Technology('elasticsearch', imgElasticsearch));
    this._images.set('fluentBit', new Technology('fluentBit', imgFluentBit));
    this._images.set('fluentD', new Technology('fluentD', imgFluentD));
    this._images.set('git', new Technology('git', imgGit));
    this._images.set('gitHub', new Technology('gitHub', imgGitHub, true));
    this._images.set('gitHubActions', new Technology('gitHubActions', imgGitHubActions, true));
    this._images.set('grafana', new Technology('grafana', imgGrafana));
    this._images.set('helm', new Technology('helm', imgHelm));
    this._images.set('hpeAlm', new Technology('hpeAlm', imgHpeAlm));
    this._images.set('java', new Technology('java', imgJava, true));
    this._images.set('javaScript', new Technology('javaScript', imgJavaScript, true));
    this._images.set('jenkins', new Technology('jenkins', imgJenkins));
    this._images.set('jira', new Technology('jira', imgJira));
    this._images.set('jQuery', new Technology('jQuery', imgJquery));
    this._images.set('junit', new Technology('junit', imgJunit));
    this._images.set('intellijIdea', new Technology('intellijIdea', imgIntellijIdea));
    this._images.set('kafka', new Technology('kafka', imgKafka, true));
    this._images.set('kibana', new Technology('kibana', imgKibana));
    this._images.set('kubernetes', new Technology('kubernetes', imgKubernetes, true));
    this._images.set('lombok', new Technology('lombok', imgLombok));
    this._images.set('mariaDb', new Technology('mariaDb', imgMariaDb));
    this._images.set('maven', new Technology('maven', imgMaven, true));
    this._images.set('mssql', new Technology('mssql', imgMsSql));
    this._images.set('mysql', new Technology('mysql', imgMySql));
    this._images.set('netBeans', new Technology('netBeans', imgNetBeans));
    this._images.set('npm', new Technology('npm', imgNpm, true));
    this._images.set('oracle', new Technology('oracle', imgOracle));
    this._images.set('oxidEShop', new Technology('oxidEShop', imgOxidEShop));
    this._images.set('php', new Technology('php', imgPhp));
    this._images.set('prism', new Technology('prism', imgPrism));
    this._images.set('prometheus', new Technology('prometheus', imgPrometheus));
    this._images.set('python', new Technology('python', imgPython, true));
    this._images.set('react', new Technology('react', imgReact, true));
    this._images.set('redis', new Technology('redis', imgRedis, true));
    this._images.set('redmine', new Technology('redmine', imgRedmine));
    this._images.set('silverlight', new Technology('silverlight', imgSilverlight));
    this._images.set('smarty', new Technology('smarty', imgSmarty));
    this._images.set('spring', new Technology('spring', imgSpring));
    this._images.set('svn', new Technology('svn', imgSvn));
    this._images.set('teamCity', new Technology('teamCity', imgTeamCity));
    this._images.set('tomcat', new Technology('tomcat', imgTomcat));
    this._images.set('travis', new Technology('travis', imgTravis, true));
    this._images.set('typeScript', new Technology('typeScript', imgTypeScript, true));
    this._images.set('vBulletin', new Technology('vBulletin', imgVBulletin));
    this._images.set('visualStudio', new Technology('visualStudio', imgVisualStudio));
    this._images.set('vsCode', new Technology('vsCode', imgVsCode));
    this._images.set('webpack', new Technology('webpack', imgWebpack, true));
    this._images.set('windowsForms', new Technology('windowsForms', imgWindowsForms));
    this._images.set('xamarin', new Technology('xamarin', imgXamarin, true));
  }

  skills() : Technology[] {
    const images : Technology[] = [];
    for (const technology of this._images.values()) {
      if (technology.isSkill) {
        images.push(technology);
      }
    }
    return images;
  }

  getImg(name : string) : Technology {
    return this._images.has(name) ? this._images.get(name) : new Technology(name);
  }
}