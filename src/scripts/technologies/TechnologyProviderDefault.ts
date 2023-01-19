import * as imgAlgorithms from '../../assets/images/technologies/algorithms.png'
import * as imgAngular from '../../assets/images/technologies/angular.png'
import * as imgAws from '../../assets/images/technologies/aws.png'
import * as imgBitrise from '../../assets/images/technologies/bitrise.png'
import * as imgBootstrap from '../../assets/images/technologies/bootstrap.png'
import * as imgCSharp from '../../assets/images/technologies/csharp.png'
import * as imgCodeIgniter from '../../assets/images/technologies/codeIgniter.png'
import * as imgConcourseCI from '../../assets/images/technologies/concourseCI.png'
import * as imgDocker from '../../assets/images/technologies/docker.png'
import * as imgDotNetCore from '../../assets/images/technologies/dotnet-core.png'
import * as imgElasticsearch from '../../assets/images/technologies/elasticsearch.png'
import * as imgFluentBit from '../../assets/images/technologies/fluentBit.png'
import * as imgFluentD from '../../assets/images/technologies/fluentD.png'
import * as imgGit from '../../assets/images/technologies/git.png'
import * as imgGitHub from '../../assets/images/technologies/github.png'
import * as imgGitHubActions from '../../assets/images/technologies/github-actions.png'
import * as imgGitlab from '../../assets/images/technologies/gitlab.png'
import * as imgGitlabCi from '../../assets/images/technologies/gitlabCi.png'
import * as imgGrafana from '../../assets/images/technologies/grafana.png'
import * as imgHelm from '../../assets/images/technologies/helm.png'
import * as imgHpeAlm from '../../assets/images/technologies/hpeAlm.png'
import * as imgIntellijIdea from '../../assets/images/technologies/intellijIdea.png'
import * as imgJava from '../../assets/images/technologies/java.png'
import * as imgJavaScript from '../../assets/images/technologies/javascript.png'
import * as imgJenkins from '../../assets/images/technologies/jenkins.png'
import * as imgJira from '../../assets/images/technologies/jira.png'
import * as imgJquery from '../../assets/images/technologies/jquery.png'
import * as imgJunit from '../../assets/images/technologies/junit.png'
import * as imgKafka from '../../assets/images/technologies/kafka.png'
import * as imgKibana from '../../assets/images/technologies/kibana.png'
import * as imgKubernetes from '../../assets/images/technologies/kubernetes.png'
import * as imgLeetcode from '../../assets/images/technologies/leetcode.png'
import * as imgLombok from '../../assets/images/technologies/lombok.png'
import * as imgMariaDb from '../../assets/images/technologies/mariadb.png'
import * as imgMaven from '../../assets/images/technologies/maven.png'
import * as imgMongoDb from '../../assets/images/technologies/mongodb.png'
import * as imgMsSql from '../../assets/images/technologies/mssql.png'
import * as imgMySql from '../../assets/images/technologies/mysql.png'
import * as imgNetBeans from '../../assets/images/technologies/netBeans.png'
import * as imgNpm from '../../assets/images/technologies/npm.png'
import * as imgOracle from '../../assets/images/technologies/oracle.png'
import * as imgOxidEShop from '../../assets/images/technologies/oxidEShop.png'
import * as imgPhp from '../../assets/images/technologies/php.png'
import * as imgPrism from '../../assets/images/technologies/prism.png'
import * as imgPrometheus from '../../assets/images/technologies/prometheus.png'
import * as imgPython from '../../assets/images/technologies/python.png'
import * as imgQuarkus from '../../assets/images/technologies/quarkus.png'
import * as imgReact from '../../assets/images/technologies/react.png'
import * as imgRedis from '../../assets/images/technologies/redis.png'
import * as imgRedmine from '../../assets/images/technologies/redmine.png'
import * as imgSilverlight from '../../assets/images/technologies/silverlight.png'
import * as imgSmarty from '../../assets/images/technologies/smarty.png'
import * as imgSpring from '../../assets/images/technologies/spring.png'
import * as imgStackOverflow from '../../assets/images/technologies/stackoverflow.png'
import * as imgSvn from '../../assets/images/technologies/svn.png'
import * as imgTeamCity from '../../assets/images/technologies/teamCity.png'
import * as imgTerraform from '../../assets/images/technologies/terraform.png'
import * as imgTomcat from '../../assets/images/technologies/tomcat.png'
import * as imgTravis from '../../assets/images/technologies/travis-ci.png'
import * as imgTypeScript from '../../assets/images/technologies/typescript.png'
import * as imgVBulletin from '../../assets/images/technologies/vBulletin.png'
import * as imgVisualStudio from '../../assets/images/technologies/visualStudio.png'
import * as imgVsCode from '../../assets/images/technologies/vsCode.png'
import * as imgWebpack from '../../assets/images/technologies/webpack.png'
import * as imgWindowsForms from '../../assets/images/technologies/windowsForms.png'
import * as imgXamarin from '../../assets/images/technologies/xamarin.png'

import { Technology, TechnologyProvider } from './types'

const TechnologyProviderDefault: TechnologyProvider = {
  items: new Array<Technology>(
    { name: 'algorithms', img: imgAlgorithms, title: 'Algorithms' },
    { name: 'angular', img: imgAngular, title: 'Angular' },
    { name: 'aws', img: imgAws, isSkill: true, title: 'AWS' },
    { name: 'bitrise', img: imgBitrise, title: 'Bitrise' },
    { name: 'bootstrap', img: imgBootstrap, isSkill: true, title: 'Bootstrap' },
    { name: 'codeigniter', img: imgCodeIgniter, title: 'CodeIgniter' },
    { name: 'concourseCI', img: imgConcourseCI, isSkill: true, title: 'Concourse CI' },
    { name: 'csharp', img: imgCSharp, isSkill: true, title: 'C#' },
    { name: 'docker', img: imgDocker, isSkill: true, title: 'Docker' },
    { name: 'dotNetCore', img: imgDotNetCore, isSkill: true, title: '.NET Core' },
    { name: 'elasticsearch', img: imgElasticsearch, title: 'Elasticsearch' },
    { name: 'fluentBit', img: imgFluentBit, title: 'fluent-bit' },
    { name: 'fluentD', img: imgFluentD, title: 'FluentD' },
    { name: 'git', img: imgGit, isSkill: true, title: 'Git' },
    { name: 'gitHub', img: imgGitHub, isSkill: true, title: 'GitHub' },
    { name: 'gitHubActions', img: imgGitHubActions, isSkill: true, title: 'GitHub Actions' },
    { name: 'gitlab', img: imgGitlab, isSkill: true, title: 'GitLab' },
    { name: 'gitlabCi', img: imgGitlabCi, isSkill: true, title: 'GitLab CI' },
    { name: 'grafana', img: imgGrafana, title: 'Grafana' },
    { name: 'helm', img: imgHelm, title: 'Helm' },
    { name: 'hpeAlm', img: imgHpeAlm, title: 'HPE ALM' },
    { name: 'intellijIdea', img: imgIntellijIdea, title: 'Intellij IDEA' },
    { name: 'jQuery', img: imgJquery, title: 'jQuery' },
    { name: 'java', img: imgJava, isSkill: true, title: 'Java' },
    { name: 'javaScript', img: imgJavaScript, isSkill: true, title: 'JavaScript' },
    { name: 'jenkins', img: imgJenkins, title: 'Jenkins' },
    { name: 'jira', img: imgJira, title: 'Jira' },
    { name: 'junit', img: imgJunit, title: 'jUnit' },
    { name: 'kafka', img: imgKafka, title: 'Kafka'},
    { name: 'kibana', img: imgKibana, title: 'Kibana' },
    { name: 'kubernetes', img: imgKubernetes, isSkill: true, title: 'Kubernetes' },
    { name: 'leetcode', img: imgLeetcode, title: 'Leetcode' },
    { name: 'lombok', img: imgLombok, title: 'Lombok' },
    { name: 'mariaDb', img: imgMariaDb, title: 'Maria DB' },
    { name: 'maven', img: imgMaven, isSkill: true, title: 'Maven' },
    { name: 'mongodb', img: imgMongoDb, isSkill: true, title: 'MongoDB' },
    { name: 'mssql', img: imgMsSql, title: 'MS-SQL' },
    { name: 'mysql', img: imgMySql, title: 'MySQL' },
    { name: 'netBeans', img: imgNetBeans, title: 'NetBeans' },
    { name: 'npm', img: imgNpm, title: 'npm' },
    { name: 'oracle', img: imgOracle, title: 'Oracle' },
    { name: 'oxidEShop', img: imgOxidEShop, title: 'Oxid E-Shop' },
    { name: 'php', img: imgPhp, title: 'PHP' },
    { name: 'prism', img: imgPrism, title: 'Prism' },
    { name: 'prometheus', img: imgPrometheus, title: 'Prometheus' },
    { name: 'python', img: imgPython, isSkill: true, title: 'Python' },
    { name: 'quarkus', img: imgQuarkus, isSkill: true, title: 'Quarkus' },
    { name: 'react', img: imgReact, isSkill: true, title: 'React' },
    { name: 'redis', img: imgRedis, title: 'Redis' },
    { name: 'redmine', img: imgRedmine, title: 'Redmine' },
    { name: 'silverlight', img: imgSilverlight, title: 'Silverlight' },
    { name: 'smarty', img: imgSmarty, title: 'Smarty' },
    { name: 'spring', img: imgSpring, title: 'Spring' },
    { name: 'stackoverflow', img: imgStackOverflow, title: 'StackOverflow' },
    { name: 'svn', img: imgSvn, title: 'SVN' },
    { name: 'teamCity', img: imgTeamCity, title: 'Team City' },
    { name: 'terraform', img: imgTerraform, isSkill: true, title: 'Terraform' },
    { name: 'tomcat', img: imgTomcat, title: 'Tomcat' },
    { name: 'travis', img: imgTravis, isSkill: true, title: 'Travis CI' },
    { name: 'typeScript', img: imgTypeScript, isSkill: true, title: 'TypeScript' },
    { name: 'vBulletin', img: imgVBulletin, title: 'vBulletin' },
    { name: 'visualStudio', img: imgVisualStudio, title: 'Visual Studio' },
    { name: 'vsCode', img: imgVsCode, title: 'VS Code' },
    { name: 'webpack', img: imgWebpack, title: 'Webpack' },
    { name: 'windowsForms', img: imgWindowsForms, title: 'Windows Forms' },
    { name: 'xamarin', img: imgXamarin, title: 'Xamarin' }
  ).reduce((map, tech) => {
    map.set(tech.name, tech)
    return map
  }, new Map<string, Technology>())
}

export default TechnologyProviderDefault
