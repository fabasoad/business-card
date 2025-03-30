import TechnologyProviderDefault
  from '../../../scripts/technologies/TechnologyProviderDefault';

describe('TechnologyProviderDefault', () => {
  let expected: [string, string, boolean][]

  beforeAll(() => {
    expected = [
      ['algorithms', 'Algorithms', false],
      ['angular', 'Angular', false],
      ['aws', 'AWS', true],
      ['azureAd', 'Azure AD', false],
      ['bash', 'Bash', true],
      ['bitrise', 'Bitrise', false],
      ['bootstrap', 'Bootstrap', true],
      ['codeigniter', 'CodeIgniter', false],
      ['codeql', 'CodeQL', true],
      ['concourseCI', 'Concourse CI', true],
      ['csharp', 'C#', true],
      ['docker', 'Docker', true],
      ['dotNetCore', '.NET Core', false],
      ['elasticsearch', 'Elasticsearch', false],
      ['fluentBit', 'fluent-bit', false],
      ['fluentD', 'FluentD', false],
      ['git', 'Git', true],
      ['gitHub', 'GitHub', true],
      ['gitHubActions', 'GitHub Actions', true],
      ['gitlab', 'GitLab', true],
      ['gitlabCi', 'GitLab CI', true],
      ['go', 'Go', true],
      ['grafana', 'Grafana', false],
      ['helm', 'Helm', false],
      ['hpeAlm', 'HPE ALM', false],
      ['intellijIdea', 'Intellij IDEA', false],
      ['istio', 'Istio', false],
      ['jQuery', 'jQuery', false],
      ['java', 'Java', true],
      ['javaScript', 'JavaScript', true],
      ['jenkins', 'Jenkins', false],
      ['jira', 'Jira', false],
      ['junit', 'jUnit', false],
      ['kafka', 'Kafka', false],
      ['kibana', 'Kibana', false],
      ['kubernetes', 'Kubernetes', false],
      ['leetcode', 'Leetcode', false],
      ['lombok', 'Lombok', false],
      ['mariaDb', 'Maria DB', false],
      ['maven', 'Maven', true],
      ['mongodb', 'MongoDB', false],
      ['mssql', 'MS-SQL', false],
      ['mysql', 'MySQL', false],
      ['netBeans', 'NetBeans', false],
      ['npm', 'npm', false],
      ['oracle', 'Oracle', false],
      ['opa', 'Open Policy Agent', false],
      ['oxidEShop', 'Oxid E-Shop', false],
      ['php', 'PHP', false],
      ['prism', 'Prism', false],
      ['prometheus', 'Prometheus', false],
      ['python', 'Python', true],
      ['quarkus', 'Quarkus', false],
      ['react', 'React', true],
      ['redis', 'Redis', false],
      ['redmine', 'Redmine', false],
      ['silverlight', 'Silverlight', false],
      ['smarty', 'Smarty', false],
      ['snyk', 'Snyk', true],
      ['spring', 'Spring', false],
      ['stackoverflow', 'StackOverflow', false],
      ['superuser', 'SuperUser', false],
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
    expect(TechnologyProviderDefault.items.size).toEqual(expected.length)
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
      expect(tech.imgLight).toEqual({ default: 'test-file-stub' })
      if (['aws', 'gitHub', 'leetcode'].includes(tech.name)) {
        expect(tech.imgDark).toEqual({ default: 'test-file-stub' })
      } else {
        expect(tech.imgDark).toBeUndefined()
      }
      ind++
    }
  })
})
