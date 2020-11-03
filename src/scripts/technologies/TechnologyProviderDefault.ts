import imgAngular from '../../assets/images/technologies/angular.png'
import imgBootstrap from '../../assets/images/technologies/bootstrap.png'
import imgBitrise from '../../assets/images/technologies/bitrise.png'
import imgCodeIgniter from '../../assets/images/technologies/codeIgniter.png'
import imgConcourseCI from '../../assets/images/technologies/concourseCI.png'
import imgCSharp from '../../assets/images/technologies/csharp.png'
import imgDocker from '../../assets/images/technologies/docker.png'
import imgDotNetCore from '../../assets/images/technologies/dotnet-core.png'
import imgElasticsearch from '../../assets/images/technologies/elasticsearch.png'
import imgFluentBit from '../../assets/images/technologies/fluentBit.png'
import imgFluentD from '../../assets/images/technologies/fluentD.png'
import imgGit from '../../assets/images/technologies/git.png'
import imgGitHub from '../../assets/images/technologies/github.png'
import imgGitHubActions from '../../assets/images/technologies/github-actions.png'
import imgGitlab from '../../assets/images/technologies/gitlab.png'
import imgGitlabCi from '../../assets/images/technologies/gitlabCi.png'
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
import imgQuarkus from '../../assets/images/technologies/quarkus.png'
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
    { name: 'angular', img: imgAngular, title: 'Angular' },
    { name: 'bitrise', img: imgBitrise, title: 'Bitrise' },
    { name: 'bootstrap', img: imgBootstrap, isSkill: true, title: 'Bootstrap' },
    { name: 'codeigniter', img: imgCodeIgniter, title: 'CodeIgniter' },
    { name: 'concourseCI', img: imgConcourseCI, title: 'Concourse CI' },
    { name: 'csharp', img: imgCSharp, isSkill: true, title: 'C#' },
    { name: 'docker', img: imgDocker, isSkill: true, title: 'Docker' },
    { name: 'dotNetCore', img: imgDotNetCore, isSkill: true, title: '.NET Core' },
    { name: 'elasticsearch', img: imgElasticsearch, title: 'Elasticsearch' },
    { name: 'fluentBit', img: imgFluentBit, title: 'fluent-bit' },
    { name: 'fluentD', img: imgFluentD, title: 'FluentD' },
    { name: 'git', img: imgGit, title: 'Git' },
    { name: 'gitlab', img: imgGitlab, title: 'GitLab' },
    { name: 'gitlabCi', img: imgGitlabCi, title: 'GitLab CI' },
    { name: 'grafana', img: imgGrafana, title: 'Grafana' },
    { name: 'helm', img: imgHelm, title: 'Helm' },
    { name: 'hpeAlm', img: imgHpeAlm, title: 'HPE ALM' },
    { name: 'jenkins', img: imgJenkins, title: 'Jenkins' },
    { name: 'jira', img: imgJira, title: 'Jira' },
    { name: 'jQuery', img: imgJquery, title: 'jQuery' },
    { name: 'junit', img: imgJunit, title: 'jUnit' },
    { name: 'intellijIdea', img: imgIntellijIdea, title: 'Intellij IDEA' },
    { name: 'kibana', img: imgKibana, title: 'Kibana' },
    { name: 'lombok', img: imgLombok, title: 'Lombok' },
    { name: 'mariaDb', img: imgMariaDb, title: 'Maria DB' },
    { name: 'mssql', img: imgMsSql, title: 'MS-SQL' },
    { name: 'mysql', img: imgMySql, title: 'MySQL' },
    { name: 'netBeans', img: imgNetBeans, title: 'NetBeans' },
    { name: 'oracle', img: imgOracle, title: 'Oracle' },
    { name: 'oxidEShop', img: imgOxidEShop, title: 'Oxid E-Shop' },
    { name: 'php', img: imgPhp, title: 'PHP' },
    { name: 'prism', img: imgPrism, title: 'Prism' },
    { name: 'prometheus', img: imgPrometheus, title: 'Prometheus' },
    { name: 'redmine', img: imgRedmine, title: 'Redmine' },
    { name: 'silverlight', img: imgSilverlight, title: 'Silverlight' },
    { name: 'smarty', img: imgSmarty, title: 'Smarty' },
    { name: 'spring', img: imgSpring, title: 'Spring' },
    { name: 'svn', img: imgSvn, title: 'SVN' },
    { name: 'teamCity', img: imgTeamCity, title: 'Team City' },
    { name: 'tomcat', img: imgTomcat, title: 'Tomcat' },
    { name: 'gitHub', img: imgGitHub, isSkill: true, title: 'GitHub' },
    { name: 'gitHubActions', img: imgGitHubActions, isSkill: true, title: 'GitHub Actions' },
    { name: 'java', img: imgJava, isSkill: true, title: 'Java' },
    { name: 'javaScript', img: imgJavaScript, isSkill: true, title: 'JavaScript' },
    { name: 'kafka', img: imgKafka, isSkill: true, title: ''},
    { name: 'kubernetes', img: imgKubernetes, isSkill: true, title: 'Kubernetes' },
    { name: 'maven', img: imgMaven, isSkill: true, title: 'Maven' },
    { name: 'npm', img: imgNpm, isSkill: true, title: 'npm' },
    { name: 'python', img: imgPython, isSkill: true, title: 'Python' },
    { name: 'quarkus', img: imgQuarkus, title: 'Quarkus' },
    { name: 'react', img: imgReact, isSkill: true, title: 'React' },
    { name: 'redis', img: imgRedis, isSkill: true, title: 'Redis' },
    { name: 'travis', img: imgTravis, isSkill: true, title: 'Travis CI' },
    { name: 'typeScript', img: imgTypeScript, isSkill: true, title: 'TypeScript' },
    { name: 'webpack', img: imgWebpack, isSkill: true, title: 'Webpack' },
    { name: 'xamarin', img: imgXamarin, isSkill: true, title: 'Xamarin' },
    { name: 'vBulletin', img: imgVBulletin, title: 'vBulletin' },
    { name: 'visualStudio', img: imgVisualStudio, title: 'Visual Studio' },
    { name: 'vsCode', img: imgVsCode, title: 'VS Code' },
    { name: 'windowsForms', img: imgWindowsForms, title: 'Windows Forms' }
  ).reduce((map, tech) => {
    map.set(tech.name, tech)
    return map
  }, new Map<string, Technology>())
}

export default TechnologyProviderDefault
