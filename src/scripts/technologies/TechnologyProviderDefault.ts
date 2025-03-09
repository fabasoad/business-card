import * as imgAlgorithms from '../../assets/images/technologies/algorithms.png'
import * as imgAngular from '../../assets/images/technologies/angular.png'
import * as imgAws from '../../assets/images/technologies/aws.png'
import * as imgAwsLight from '../../assets/images/technologies/aws-light.png'
import * as imgAzureAd from '../../assets/images/technologies/azure-ad.png'
import * as imgBash from '../../assets/images/technologies/bash.png'
import * as imgBitrise from '../../assets/images/technologies/bitrise.png'
import * as imgBootstrap from '../../assets/images/technologies/bootstrap.png'
import * as imgCSharp from '../../assets/images/technologies/csharp.png'
import * as imgCodeIgniter from '../../assets/images/technologies/codeIgniter.png'
import * as imgCodeQL from '../../assets/images/technologies/codeql.png'
import * as imgConcourseCI from '../../assets/images/technologies/concourseCI.png'
import * as imgDocker from '../../assets/images/technologies/docker.png'
import * as imgDotNetCore from '../../assets/images/technologies/dotnet-core.png'
import * as imgElasticsearch from '../../assets/images/technologies/elasticsearch.png'
import * as imgFluentBit from '../../assets/images/technologies/fluentBit.png'
import * as imgFluentD from '../../assets/images/technologies/fluentD.png'
import * as imgGit from '../../assets/images/technologies/git.png'
import * as imgGitHub from '../../assets/images/technologies/github.png'
import * as imgGitHubNeon from '../../assets/images/technologies/github-neon.png'
import * as imgGitHubActions from '../../assets/images/technologies/github-actions.png'
import * as imgGitlab from '../../assets/images/technologies/gitlab.png'
import * as imgGitlabCi from '../../assets/images/technologies/gitlabCi.png'
import * as imgGo from '../../assets/images/technologies/go.png'
import * as imgGrafana from '../../assets/images/technologies/grafana.png'
import * as imgHelm from '../../assets/images/technologies/helm.png'
import * as imgHpeAlm from '../../assets/images/technologies/hpeAlm.png'
import * as imgIntellijIdea from '../../assets/images/technologies/intellijIdea.png'
import * as imgIstio from '../../assets/images/technologies/istio.png'
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
import * as imgLeetcodeLight from '../../assets/images/technologies/leetcode-light.png'
import * as imgLombok from '../../assets/images/technologies/lombok.png'
import * as imgMariaDb from '../../assets/images/technologies/mariadb.png'
import * as imgMaven from '../../assets/images/technologies/maven.png'
import * as imgMongoDb from '../../assets/images/technologies/mongodb.png'
import * as imgMsSql from '../../assets/images/technologies/mssql.png'
import * as imgMySql from '../../assets/images/technologies/mysql.png'
import * as imgNetBeans from '../../assets/images/technologies/netBeans.png'
import * as imgNpm from '../../assets/images/technologies/npm.png'
import * as imgOpa from '../../assets/images/technologies/opa.png'
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
import * as imgSnyk from '../../assets/images/technologies/snyk.png'
import * as imgSpring from '../../assets/images/technologies/spring.png'
import * as imgStackOverflow from '../../assets/images/technologies/stackoverflow.png'
import * as imgSuperUser from '../../assets/images/technologies/superuser.png'
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
    { name: 'algorithms', imgLight: imgAlgorithms, title: 'Algorithms' },
    { name: 'angular', imgLight: imgAngular, title: 'Angular' },
    { name: 'aws', imgLight: imgAws, imgDark: imgAwsLight, isSkill: true, title: 'AWS' },
    { name: 'azureAd', imgLight: imgAzureAd, title: 'Azure AD' },
    { name: 'bash', imgLight: imgBash, isSkill: true, title: 'Bash' },
    { name: 'bitrise', imgLight: imgBitrise, title: 'Bitrise' },
    { name: 'bootstrap', imgLight: imgBootstrap, isSkill: true, title: 'Bootstrap' },
    { name: 'codeigniter', imgLight: imgCodeIgniter, title: 'CodeIgniter' },
    { name: 'codeql', imgLight: imgCodeQL, isSkill: true, title: 'CodeQL' },
    { name: 'concourseCI', imgLight: imgConcourseCI, isSkill: true, title: 'Concourse CI' },
    { name: 'csharp', imgLight: imgCSharp, isSkill: true, title: 'C#' },
    { name: 'docker', imgLight: imgDocker, isSkill: true, title: 'Docker' },
    { name: 'dotNetCore', imgLight: imgDotNetCore, title: '.NET Core' },
    { name: 'elasticsearch', imgLight: imgElasticsearch, title: 'Elasticsearch' },
    { name: 'fluentBit', imgLight: imgFluentBit, title: 'fluent-bit' },
    { name: 'fluentD', imgLight: imgFluentD, title: 'FluentD' },
    { name: 'git', imgLight: imgGit, isSkill: true, title: 'Git' },
    { name: 'gitHub', imgLight: imgGitHub, imgDark: imgGitHubNeon, isSkill: true, title: 'GitHub' },
    { name: 'gitHubActions', imgLight: imgGitHubActions, isSkill: true, title: 'GitHub Actions' },
    { name: 'gitlab', imgLight: imgGitlab, isSkill: true, title: 'GitLab' },
    { name: 'gitlabCi', imgLight: imgGitlabCi, isSkill: true, title: 'GitLab CI' },
    { name: 'go', imgLight: imgGo, isSkill: true, title: 'Go' },
    { name: 'grafana', imgLight: imgGrafana, title: 'Grafana' },
    { name: 'helm', imgLight: imgHelm, title: 'Helm' },
    { name: 'hpeAlm', imgLight: imgHpeAlm, title: 'HPE ALM' },
    { name: 'intellijIdea', imgLight: imgIntellijIdea, title: 'Intellij IDEA' },
    { name: 'istio', imgLight: imgIstio, title: 'Istio' },
    { name: 'jQuery', imgLight: imgJquery, title: 'jQuery' },
    { name: 'java', imgLight: imgJava, isSkill: true, title: 'Java' },
    { name: 'javaScript', imgLight: imgJavaScript, isSkill: true, title: 'JavaScript' },
    { name: 'jenkins', imgLight: imgJenkins, title: 'Jenkins' },
    { name: 'jira', imgLight: imgJira, title: 'Jira' },
    { name: 'junit', imgLight: imgJunit, title: 'jUnit' },
    { name: 'kafka', imgLight: imgKafka, title: 'Kafka'},
    { name: 'kibana', imgLight: imgKibana, title: 'Kibana' },
    { name: 'kubernetes', imgLight: imgKubernetes, title: 'Kubernetes' },
    { name: 'leetcode', imgLight: imgLeetcode, imgDark: imgLeetcodeLight, title: 'Leetcode' },
    { name: 'lombok', imgLight: imgLombok, title: 'Lombok' },
    { name: 'mariaDb', imgLight: imgMariaDb, title: 'Maria DB' },
    { name: 'maven', imgLight: imgMaven, isSkill: true, title: 'Maven' },
    { name: 'mongodb', imgLight: imgMongoDb, title: 'MongoDB' },
    { name: 'mssql', imgLight: imgMsSql, title: 'MS-SQL' },
    { name: 'mysql', imgLight: imgMySql, title: 'MySQL' },
    { name: 'netBeans', imgLight: imgNetBeans, title: 'NetBeans' },
    { name: 'npm', imgLight: imgNpm, title: 'npm' },
    { name: 'oracle', imgLight: imgOracle, title: 'Oracle' },
    { name: 'opa', imgLight: imgOpa, title: 'Open Policy Agent' },
    { name: 'oxidEShop', imgLight: imgOxidEShop, title: 'Oxid E-Shop' },
    { name: 'php', imgLight: imgPhp, title: 'PHP' },
    { name: 'prism', imgLight: imgPrism, title: 'Prism' },
    { name: 'prometheus', imgLight: imgPrometheus, title: 'Prometheus' },
    { name: 'python', imgLight: imgPython, isSkill: true, title: 'Python' },
    { name: 'quarkus', imgLight: imgQuarkus, title: 'Quarkus' },
    { name: 'react', imgLight: imgReact, isSkill: true, title: 'React' },
    { name: 'redis', imgLight: imgRedis, title: 'Redis' },
    { name: 'redmine', imgLight: imgRedmine, title: 'Redmine' },
    { name: 'silverlight', imgLight: imgSilverlight, title: 'Silverlight' },
    { name: 'smarty', imgLight: imgSmarty, title: 'Smarty' },
    { name: 'snyk', imgLight: imgSnyk, isSkill: true, title: 'Snyk' },
    { name: 'spring', imgLight: imgSpring, title: 'Spring' },
    { name: 'stackoverflow', imgLight: imgStackOverflow, title: 'StackOverflow' },
    { name: 'superuser', imgLight: imgSuperUser, title: 'SuperUser' },
    { name: 'svn', imgLight: imgSvn, title: 'SVN' },
    { name: 'teamCity', imgLight: imgTeamCity, title: 'Team City' },
    { name: 'terraform', imgLight: imgTerraform, isSkill: true, title: 'Terraform' },
    { name: 'tomcat', imgLight: imgTomcat, title: 'Tomcat' },
    { name: 'travis', imgLight: imgTravis, isSkill: true, title: 'Travis CI' },
    { name: 'typeScript', imgLight: imgTypeScript, isSkill: true, title: 'TypeScript' },
    { name: 'vBulletin', imgLight: imgVBulletin, title: 'vBulletin' },
    { name: 'visualStudio', imgLight: imgVisualStudio, title: 'Visual Studio' },
    { name: 'vsCode', imgLight: imgVsCode, title: 'VS Code' },
    { name: 'webpack', imgLight: imgWebpack, title: 'Webpack' },
    { name: 'windowsForms', imgLight: imgWindowsForms, title: 'Windows Forms' },
    { name: 'xamarin', imgLight: imgXamarin, title: 'Xamarin' }
  ).reduce((map, tech) => {
    map.set(tech.name, tech)
    return map
  }, new Map<string, Technology>())
}

export default TechnologyProviderDefault
