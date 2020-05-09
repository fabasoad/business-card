import * as React from 'react'
import Iframe from 'react-iframe'

export default function FooterExtra() {
  return (
    <div className="d-flex justify-content-center">
      <Iframe
        url={'https://www.worldcommunitygrid.org/getDynamicImage.do?memberName=fabasoad&mnOn=true&stat=3&imageNum=1&rankOn=false&projectsOn=false&special=false&link=1&memberId=1103124'}
        frameBorder={0}
        name="di"
        scrolling="no"
        width="405px"
        height="145px"
      />
    </div>
  )
}
