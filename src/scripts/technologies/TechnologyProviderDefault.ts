import imgAlgorithms from '../../assets/images/technologies/algorithms.png'
import imgAngular from '../../assets/images/technologies/angular.png'
import imgAws from '../../assets/images/technologies/aws.png'
import imgAwsLight from '../../assets/images/technologies/aws-light.png'
import imgAzureAd from '../../assets/images/technologies/azure-ad.png'
import imgBash from '../../assets/images/technologies/bash.png'
import imgBitrise from '../../assets/images/technologies/bitrise.png'
import imgBootstrap from '../../assets/images/technologies/bootstrap.png'
import imgCSharp from '../../assets/images/technologies/csharp.png'
import imgCodeIgniter from '../../assets/images/technologies/codeIgniter.png'
import imgCodeQL from '../../assets/images/technologies/codeql.png'
import imgConcourseCI from '../../assets/images/technologies/concourseCI.png'
import imgDocker from '../../assets/images/technologies/docker.png'
import imgDotNetCore from '../../assets/images/technologies/dotnet-core.png'
import imgElasticsearch from '../../assets/images/technologies/elasticsearch.png'
import imgFluentBit from '../../assets/images/technologies/fluentBit.png'
import imgFluentD from '../../assets/images/technologies/fluentD.png'
import imgGit from '../../assets/images/technologies/git.png'
import imgGitHub from '../../assets/images/technologies/github.png'
import imgGitHubNeon from '../../assets/images/technologies/github-neon.png'
import imgGitHubActions from '../../assets/images/technologies/github-actions.png'
import imgGitlab from '../../assets/images/technologies/gitlab.png'
import imgGitlabCi from '../../assets/images/technologies/gitlabCi.png'
import imgGo from '../../assets/images/technologies/go.png'
import imgGrafana from '../../assets/images/technologies/grafana.png'
import imgHelm from '../../assets/images/technologies/helm.png'
import imgHpeAlm from '../../assets/images/technologies/hpeAlm.png'
import imgIntellijIdea from '../../assets/images/technologies/intellijIdea.png'
import imgIstio from '../../assets/images/technologies/istio.png'
import imgJava from '../../assets/images/technologies/java.png'
import imgJavaScript from '../../assets/images/technologies/javascript.png'
import imgJenkins from '../../assets/images/technologies/jenkins.png'
import imgJira from '../../assets/images/technologies/jira.png'
import imgJquery from '../../assets/images/technologies/jquery.png'
import imgJunit from '../../assets/images/technologies/junit.png'
import imgKafka from '../../assets/images/technologies/kafka.png'
import imgKibana from '../../assets/images/technologies/kibana.png'
import imgKubernetes from '../../assets/images/technologies/kubernetes.png'
import imgLeetcode from '../../assets/images/technologies/leetcode.png'
import imgLeetcodeLight from '../../assets/images/technologies/leetcode-light.png'
import imgLombok from '../../assets/images/technologies/lombok.png'
import imgMariaDb from '../../assets/images/technologies/mariadb.png'
import imgMaven from '../../assets/images/technologies/maven.png'
import imgMongoDb from '../../assets/images/technologies/mongodb.png'
import imgMsSql from '../../assets/images/technologies/mssql.png'
import imgMySql from '../../assets/images/technologies/mysql.png'
import imgNetBeans from '../../assets/images/technologies/netBeans.png'
import imgNpm from '../../assets/images/technologies/npm.png'
import imgOpa from '../../assets/images/technologies/opa.png'
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
import imgSnyk from '../../assets/images/technologies/snyk.png'
import imgSpring from '../../assets/images/technologies/spring.png'
import imgStackOverflow from '../../assets/images/technologies/stackoverflow.png'
import imgSuperUser from '../../assets/images/technologies/superuser.png'
import imgSvn from '../../assets/images/technologies/svn.png'
import imgTeamCity from '../../assets/images/technologies/teamCity.png'
import imgTerraform from '../../assets/images/technologies/terraform.png'
import imgTomcat from '../../assets/images/technologies/tomcat.png'
import imgTravis from '../../assets/images/technologies/travis-ci.png'
import imgTypeScript from '../../assets/images/technologies/typescript.png'
import imgVBulletin from '../../assets/images/technologies/vBulletin.png'
import imgVisualStudio from '../../assets/images/technologies/visualStudio.png'
import imgVsCode from '../../assets/images/technologies/vsCode.png'
import imgWebpack from '../../assets/images/technologies/webpack.png'
import imgWindowsForms from '../../assets/images/technologies/windowsForms.png'
import imgXamarin from '../../assets/images/technologies/xamarin.png'

import type { Technology, TechnologyProvider } from './types'

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
