import * as React from 'react'
import SocialIcon from '../Controls/SocialIcon'

export default function FooterSocial() {
  return (
    <div className="d-flex justify-content-center">
      <ul className="icon-list">
        <li><SocialIcon url="https://twitter.com/fabasoad" icon="fa-x-twitter" label="X (Twitter)" /></li>
        <li><SocialIcon url="https://github.com/fabasoad" icon="fa-github" label="GitHub" /></li>
        <li><SocialIcon url="https://www.linkedin.com/in/yevhenfabizhevskyi/" icon="fa-linkedin" label="LinkedIn" /></li>
        <li><SocialIcon url="https://stackoverflow.com/users/470214/fabasoad" icon="fa-stack-overflow" label="Stack Overflow" /></li>
        <li><SocialIcon url="https://dev.to/fabasoad" icon="fa-dev" label="DEV" /></li>
      </ul>
    </div>
  )
}
