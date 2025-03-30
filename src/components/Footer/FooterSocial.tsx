import * as React from 'react'
import SocialIcon from '../Controls/SocialIcon'

export default function FooterSocial() {
  return (
    <div className="d-flex justify-content-center">
      <ul className="icon-list">
        <li><SocialIcon url="https://twitter.com/fabasoad" icon="fa-x-twitter" /></li>
        <li><SocialIcon url="https://github.com/fabasoad" icon="fa-github" /></li>
        <li><SocialIcon url="https://www.linkedin.com/in/yevhenfabizhevskyi/" icon="fa-linkedin" /></li>
        <li><SocialIcon url="https://stackoverflow.com/users/470214/fabasoad" icon="fa-stack-overflow" /></li>
        <li><SocialIcon url="https://dev.to/fabasoad" icon="fa-dev" /></li>
      </ul>
    </div>
  )
}
