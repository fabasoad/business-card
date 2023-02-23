import TechnologyProviderDefault
  from '../../../scripts/technologies/TechnologyProviderDefault';
import {Technology} from '../../../scripts/technologies/types';

describe('TechnologyProviderDefault', () => {
  let expected

  beforeAll(() => {
    expected = [
      ['algorithms', 'Algorithms', false],
      ['angular', 'Angular', false],
      ['aws', 'AWS', true],
      ['bitrise', 'Bitrise', false],
      ['bootstrap', 'Bootstrap', true],
      ['codeigniter', 'CodeIgniter', false],
      ['concourseCI', 'Concourse CI', true],
      ['csharp', 'C#', true],
      ['docker', 'Docker', true],
      ['dotNetCore', '.NET Core', true],
      ['elasticsearch', 'Elasticsearch', false],
      ['fluentBit', 'fluent-bit', false],
      ['fluentD', 'FluentD', false],
      ['git', 'Git', true],
      ['gitHub', 'GitHub', true],
      ['gitHubActions', 'GitHub Actions', true],
      ['gitlab', 'GitLab', true],
      ['gitlabCi', 'GitLab CI', true],
      ['grafana', 'Grafana', false],
      ['helm', 'Helm', false],
      ['hpeAlm', 'HPE ALM', false],
      ['intellijIdea', 'Intellij IDEA', false],
      ['jQuery', 'jQuery', false],
      ['java', 'Java', true],
      ['javaScript', 'JavaScript', true],
      ['jenkins', 'Jenkins', false],
      ['jira', 'Jira', false],
      ['junit', 'jUnit', false],
      ['kafka', 'Kafka', false],
      ['kibana', 'Kibana', false],
      ['kubernetes', 'Kubernetes', true],
      ['leetcode', 'Leetcode', false],
      ['lombok', 'Lombok', false],
      ['mariaDb', 'Maria DB', false],
      ['maven', 'Maven', true],
      ['mongodb', 'MongoDB', true],
      ['mssql', 'MS-SQL', false],
      ['mysql', 'MySQL', false],
      ['netBeans', 'NetBeans', false],
      ['npm', 'npm', false],
      ['oracle', 'Oracle', false],
      ['oxidEShop', 'Oxid E-Shop', false],
      ['php', 'PHP', false],
      ['prism', 'Prism', false],
      ['prometheus', 'Prometheus', false],
      ['python', 'Python', true],
      ['quarkus', 'Quarkus', true],
      ['react', 'React', true],
      ['redis', 'Redis', false],
      ['redmine', 'Redmine', false],
      ['silverlight', 'Silverlight', false],
      ['smarty', 'Smarty', false],
      ['spring', 'Spring', false],
      ['stackoverflow', 'StackOverflow', false],
      ['svn', 'SVN', false],
      ['teamCity', 'Team City', false],
      ['terraform', 'Terraform', true],
      ['tomcat', 'Tomcat', false],
      ['travis', 'Travis CI', true],
      ['typeScript', 'TypeScript', true],
      ['vBulletin', 'vBulletin', false],
      ['visualStudio', 'Visual Studio', false],
      ['vsCode', 'VS Code', false],
      ['webpack', 'Webpack', false],
      ['windowsForms', 'Windows Forms', false],
      ['xamarin', 'Xamarin', false]
    ]
  })

  test('should have correct name and title', () => {
    expect(TechnologyProviderDefault.items.size).toEqual(66)
    let ind = 0
    for (const [name, tech] of TechnologyProviderDefault.items) {
      expect(name).toEqual(expected[ind][0])
      expect(tech.name).toEqual(expected[ind][0])
      expect(tech.title).toEqual(expected[ind][1])
      if (expected[ind][2]) {
        expect(tech.isSkill).toBeTruthy()
      } else {
        expect(tech.isSkill).toBeFalsy()
      }
      expect(tech.img).toEqual({ default: 'test-file-stub' })
      ind++
    }
  })
})