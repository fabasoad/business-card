import TechnologyStorage from '../technologies/TechnologyStorage'
import * as items from './items.json'
import type { Certificate, CertificateBase } from './types'
import * as imgCoursera from '../../assets/images/certificates/coursera.png'
import * as imgUdemy from '../../assets/images/certificates/udemy.png'
import * as imgOracle from '../../assets/images/certificates/oracle-java-8.png'
import * as imgHackerRank from '../../assets/images/certificates/hacker-rank.png'
import * as imgGitHubAdvancedSecurity from '../../assets/images/certificates/github-advanced-security.png'
import * as imgGitHubActions from '../../assets/images/certificates/github-actions.png'
import * as imgGitHubFoundations from '../../assets/images/certificates/github-foundations.png'
import * as imgGitHubAdmin from '../../assets/images/certificates/github-admin.png'
import * as imgPracticalDevSecOps from '../../assets/images/certificates/practical-devsecops-cdp.png'
import * as imgGitHubCopilot from '../../assets/images/certificates/github-copilot.png'
import * as imgHashicorpTerraform003 from '../../assets/images/certificates/hashicorp-terraform-003.png'

type CertificateJSON = CertificateBase & {
  date: string,
  technology: string
}

const map = new Map<string, any>([
  ['MWE43H8YDS', imgCoursera],
  ['W5AB2PBZQNPY', imgCoursera],
  ['UC-JGDVYKAQ', imgUdemy],
  ['689b9d7e-cae5-4e36-8a1f-c8c34f104249', imgOracle],
  ['F75CDD8ED9F0', imgHackerRank],
  ['24722d5e-1738-4cec-808b-b4b83a94a8ad', imgGitHubAdvancedSecurity],
  ['711c8e30-13e7-499e-aad6-5da9d468177a', imgGitHubActions],
  ['6f36f952-612a-4aa1-8a3d-adb29396c967', imgGitHubFoundations],
  ['a1c1ec77-29db-4139-8fcb-ac95408653e8', imgGitHubAdmin],
  ['9f12275d-a5b5-4d4d-9127-c975c555f0ab', imgPracticalDevSecOps],
  ['55ddd8bd-950d-45bb-ad25-d08269bc9ca1', imgGitHubCopilot],
  ['517b6607-def7-46e1-b007-493a15b5eeb2', imgHashicorpTerraform003]
])

class CertificatesStorage {
  private readonly _certificates: Certificate[]
  private readonly _technologyStorage: TechnologyStorage

  public constructor() {
    this._technologyStorage = new TechnologyStorage()
    this._certificates = items
      .sort((a: CertificateJSON, b: CertificateJSON) => {
        let res = a.date.localeCompare(b.date)
        if (res !== 0) {
          return -res
        }
        res = a.issuer.localeCompare(b.issuer)
        if (res !== 0) {
          return -res
        }
        return -b.id.localeCompare(a.id)
      })
      .map((json: CertificateJSON) => ({
        id: json.id,
        date: new Date(json.date),
        issuer: (json.issuer === 'github' ? 'GitHub' : json.issuer).replaceAll('-', ' '),
        technology: this._technologyStorage.findByName(json.technology),
        url: json.url,
        img: map.get(json.id)
      }))
  }

  public get certificates(): Certificate[] {
    return this._certificates
  }
}

const storage = new CertificatesStorage()
export default storage
