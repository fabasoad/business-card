export function testFooterContacts(div: HTMLDivElement): void {
  expect(div).toHaveClass('footer-contacts')
  const divFooters = div.querySelectorAll('div.col')
  expect(divFooters).toHaveLength(2)
  testFooterLocation(divFooters[0] as HTMLDivElement)
  testFooterEmail(divFooters[1] as HTMLDivElement)
}

export function testFooterEmail(div: HTMLDivElement): void {
  expect(div).toHaveAttribute('class', 'col')
  const i = div.querySelector('i')
  for (const c of ['fa', 'fa-envelope', 'fa-2x']) {
    expect(i).toHaveClass(c)
  }
  expect(div.querySelector('p')).toHaveTextContent('fabasoad@gmail.com')
}

export function testFooterInfo(div: HTMLDivElement): void {
  expect(div).toHaveClass('footer-info')
  const ul = div.querySelector('ul')
  expect(ul).toHaveAttribute('class', 'icon-list')
  const liElements = ul.querySelectorAll('li')
  expect(liElements).toHaveLength(3)
  let a = false
  let b = false
  let c = false
  for (const li of liElements) {
    if (a) {
      const img = li.querySelector('img')
      if (img != null) {
        expect(img).toHaveAttribute('src', 'https://img.shields.io/static/v1?label=made%20by&amp;message=fabasoad&amp;color=2c3e50&amp;style=for-the-badge&amp;logo=github')
        expect(img).toHaveAttribute('alt', 'Made by fabasoad')
        a = false
        continue
      } else if (!b && !c) {
        throw new Error(`Expected img inside li element. Actual: ${li.innerHTML}`)
      }
    }
    if (b) {
      const a = li.querySelector('a')
      if (a != null) {
        expect(a).toHaveAttribute('target', '_blank')
        expect(a).toHaveAttribute('rel', 'noopener noreferrer')
        expect(a).toHaveAttribute('href', 'https://www.bitcoinqrcodemaker.com/?style=bitcoin&address=145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH&prefix=on')
        const img = a.querySelector('img')
        expect(img).toHaveAttribute('src', 'https://img.shields.io/static/v1?label=bitcoin&amp;message=donate&amp;color=f7931a&amp;style=for-the-badge&amp;logo=bitcoin')
        expect(img).toHaveAttribute('alt', 'Donate with Bitcoin')
        b = false
        continue
      } else if (!a && !c) {
        throw new Error(`Expected a inside li element. Actual: ${li.innerHTML}`)
      }
    }
    if (c) {
      const span = li.querySelector('span')
      if (span != null) {
        expect(span).toHaveAttribute('class', 'badge rounded-pill bg-secondary')
        expect(span).toHaveTextContent('version')
        c = false
      } else if (!a && !b) {
        throw new Error(`Expected span inside li element. Actual: ${li.innerHTML}`)
      }
    }
  }
  expect(a || b || c).toEqual(false)
}

export function testFooterLocation(div: HTMLDivElement): void {
  expect(div).toHaveAttribute('class', 'col')
  const i = div.querySelector('i')
  for (const c of ['fa', 'fa-map-marker-alt', 'fa-2x']) {
    expect(i).toHaveClass(c)
  }
  expect(div.querySelector('p')).toHaveTextContent('contacts.location')
}

export function testFooterMain(div: HTMLDivElement) {
  expect(div).not.toBeNull()
  const divContact = div.querySelector('div#contacts')
  expect(divContact).toHaveClass('container')
  expect(divContact).toHaveClass('text-center')
  const divTitle = divContact.querySelector('div.section-title.center')
  expect(divTitle).not.toBeNull()
  expect(divTitle.querySelector('h2')).toHaveTextContent('contacts.title')
  expect(divTitle.querySelector('hr')).not.toBeNull()
  testFooterContacts(divContact.querySelector('div.footer-contacts'))
  testFooterSocial(divContact.querySelector('div.footer-social'))
  testFooterInfo(divContact.querySelector('div.footer-info'))
}

export function testFooterSocial(div: HTMLDivElement): void {
  const fixture = new Map<string, string>([
    ['https://twitter.com/fabasoad', 'fab fa-x-twitter fa-2x'],
    ['https://github.com/fabasoad', 'fab fa-github fa-2x'],
    ['https://www.linkedin.com/in/yevhenfabizhevskyi/', 'fab fa-linkedin fa-2x'],
    ['https://stackoverflow.com/users/470214/fabasoad', 'fab fa-stack-overflow fa-2x'],
    ['https://dev.to/fabasoad', 'fab fa-dev fa-2x']
  ])
  expect(div).toHaveClass('footer-social')
  const ul = div.querySelector('ul.icon-list')
  expect(ul).not.toBeNull()
  const liElements = ul.querySelectorAll('li')
  expect(liElements).toHaveLength(5)
  for (const li of liElements) {
    const a = li.querySelector('a')
    expect(a).not.toBeNull()
    expect(a).toHaveAttribute('class', 'btn')
    expect(a).toHaveAttribute('target', '_blank')
    expect(a).toHaveAttribute('rel', 'noopener noreferrer')
    const href = a.getAttribute('href')
    expect(fixture.has(href)).toEqual(true)
    const i = a.querySelector('i')
    expect(i).toHaveAttribute('class', fixture.get(href))
    fixture.delete(href)
  }
}
