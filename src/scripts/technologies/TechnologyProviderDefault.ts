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

import Technology from "./Technology"
import TechnologyProvider from "./TechnologyProvider"

export default class TechnologyProviderDefault implements TechnologyProvider {

  _items: Map<string, Technology>

  get items(): Map<string, Technology> {
    if (this._items == null) {
      this._items = new Map<string, Technology>()
      this._items.set('angular', new Technology('angular', imgAngular))
      this._items.set('bitrise', new Technology('bitrise', imgBitrise))
      this._items.set('bootstrap', new Technology('bootstrap', imgBootstrap, true))
      this._items.set('codeigniter', new Technology('codeigniter', imgCodeIgniter))
      this._items.set('csharp', new Technology('csharp', imgCSharp, true))
      this._items.set('docker', new Technology('docker', imgDocker, true))
      this._items.set('dotNetCore', new Technology('dotNetCore', imgDotNetCore, true))
      this._items.set('elasticsearch', new Technology('elasticsearch', imgElasticsearch))
      this._items.set('fluentBit', new Technology('fluentBit', imgFluentBit))
      this._items.set('fluentD', new Technology('fluentD', imgFluentD))
      this._items.set('git', new Technology('git', imgGit))
      this._items.set('gitHub', new Technology('gitHub', imgGitHub, true))
      this._items.set('gitHubActions', new Technology('gitHubActions', imgGitHubActions, true))
      this._items.set('grafana', new Technology('grafana', imgGrafana))
      this._items.set('helm', new Technology('helm', imgHelm))
      this._items.set('hpeAlm', new Technology('hpeAlm', imgHpeAlm))
      this._items.set('java', new Technology('java', imgJava, true))
      this._items.set('javaScript', new Technology('javaScript', imgJavaScript, true))
      this._items.set('jenkins', new Technology('jenkins', imgJenkins))
      this._items.set('jira', new Technology('jira', imgJira))
      this._items.set('jQuery', new Technology('jQuery', imgJquery))
      this._items.set('junit', new Technology('junit', imgJunit))
      this._items.set('intellijIdea', new Technology('intellijIdea', imgIntellijIdea))
      this._items.set('kafka', new Technology('kafka', imgKafka, true))
      this._items.set('kibana', new Technology('kibana', imgKibana))
      this._items.set('kubernetes', new Technology('kubernetes', imgKubernetes, true))
      this._items.set('lombok', new Technology('lombok', imgLombok))
      this._items.set('mariaDb', new Technology('mariaDb', imgMariaDb))
      this._items.set('maven', new Technology('maven', imgMaven, true))
      this._items.set('mssql', new Technology('mssql', imgMsSql))
      this._items.set('mysql', new Technology('mysql', imgMySql))
      this._items.set('netBeans', new Technology('netBeans', imgNetBeans))
      this._items.set('npm', new Technology('npm', imgNpm, true))
      this._items.set('oracle', new Technology('oracle', imgOracle))
      this._items.set('oxidEShop', new Technology('oxidEShop', imgOxidEShop))
      this._items.set('php', new Technology('php', imgPhp))
      this._items.set('prism', new Technology('prism', imgPrism))
      this._items.set('prometheus', new Technology('prometheus', imgPrometheus))
      this._items.set('python', new Technology('python', imgPython, true))
      this._items.set('react', new Technology('react', imgReact, true))
      this._items.set('redis', new Technology('redis', imgRedis, true))
      this._items.set('redmine', new Technology('redmine', imgRedmine))
      this._items.set('silverlight', new Technology('silverlight', imgSilverlight))
      this._items.set('smarty', new Technology('smarty', imgSmarty))
      this._items.set('spring', new Technology('spring', imgSpring))
      this._items.set('svn', new Technology('svn', imgSvn))
      this._items.set('teamCity', new Technology('teamCity', imgTeamCity))
      this._items.set('tomcat', new Technology('tomcat', imgTomcat))
      this._items.set('travis', new Technology('travis', imgTravis, true))
      this._items.set('typeScript', new Technology('typeScript', imgTypeScript, true))
      this._items.set('vBulletin', new Technology('vBulletin', imgVBulletin))
      this._items.set('visualStudio', new Technology('visualStudio', imgVisualStudio))
      this._items.set('vsCode', new Technology('vsCode', imgVsCode))
      this._items.set('webpack', new Technology('webpack', imgWebpack, true))
      this._items.set('windowsForms', new Technology('windowsForms', imgWindowsForms))
      this._items.set('xamarin', new Technology('xamarin', imgXamarin, true))
    }
    return this._items
  }
}