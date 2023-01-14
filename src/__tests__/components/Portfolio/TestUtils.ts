export function testPortfolioItem(
  div: HTMLDivElement,
  url: string,
  name: string,
  title: string,
  subtitle: string,
  img: string
) {
  expect(div).toHaveClass('col-sm-6')
  expect(div).toHaveClass('col-md-3')
  expect(div).toHaveClass('col-lg-3')
  const divPortfolioItem = div.querySelector('div.portfolio-item')
  expect(divPortfolioItem).not.toBeNull()
  const divCenter = divPortfolioItem.querySelector('div.hover-bg.text-center')
  expect(divCenter).not.toBeNull()
  const a = divCenter.querySelector('a')
  expect(a).toHaveAttribute('href', url)
  expect(a).toHaveAttribute('title', name)
  expect(a).toHaveAttribute('rel', 'noopener noreferrer')
  expect(a).toHaveAttribute('target', '_blank')
  const divHoverText = a.querySelector('div.hover-text')
  expect(divHoverText).not.toBeNull()
  expect(divHoverText.querySelector('h4')).toHaveTextContent(title)
  expect(divHoverText.querySelector('small')).toHaveTextContent(subtitle)
  expect(divHoverText.querySelector('i.fa.fa-search')).not.toBeNull()
  const imgElement = a.querySelector('img')
  expect(imgElement).toHaveClass('img-thumbnail')
  expect(imgElement).toHaveAttribute('src', img)
  expect(imgElement).toHaveAttribute('alt', name)
}

type PortfolioMainFixture = {
  url: string
  title: string
  subtitle: string
}

export function testPortfolioMain(div: HTMLDivElement) {
  const fixture = new Map<string, PortfolioMainFixture>([
    ['Markets', {
      url: 'https://markets.bitcoin.com/',
      title: 'business-card-portfolio-markets-title',
      subtitle: 'business-card-portfolio-markets-subtitle'
    }],
    ['Games', {
      url: 'https://games.bitcoin.com/',
      title: 'business-card-portfolio-casino-web-app-title',
      subtitle: 'business-card-portfolio-casino-web-app-subtitle'
    }],
    ['Games Admin', {
      url: 'https://games.bitcoin.com/',
      title: 'business-card-portfolio-casino-admin-web-app-title',
      subtitle: 'business-card-portfolio-casino-admin-web-app-subtitle'
    }],
    ['Games Android', {
      url: 'https://games.bitcoin.com/android',
      title: 'business-card-portfolio-casino-android-app-title',
      subtitle: 'business-card-portfolio-casino-android-app-subtitle'
    }],
    ['Earnin', {
      url: 'https://www.earnin.com/',
      title: 'business-card-portfolio-earnin-title',
      subtitle: 'business-card-portfolio-earnin-subtitle'
    }],
    ['Prysm iPhone App', {
      url: 'https://www.prysm.com/software/iphone-app/',
      title: 'business-card-portfolio-prysm-title',
      subtitle: 'business-card-portfolio-prysm-subtitle'
    }],
    ['Southern Marine Agency Website', {
      url: 'https://drive.google.com/drive/folders/163jhUuVrBCEYQ503sa1Y1M7KG--1gwaj?usp=sharing',
      title: 'business-card-portfolio-sma-title',
      subtitle: 'business-card-portfolio-sma-subtitle'
    }],
    ['ALM Robot', {
      url: 'https://admhelp.microfocus.com/alm/en/12.60/online_help/Content/Admin/sa_robot_toc.htm',
      title: 'business-card-portfolio-alm-robot-title',
      subtitle: 'business-card-portfolio-alm-robot-subtitle'
    }],
    ['ALM', {
      url: 'https://www.microfocus.com/en-us/products/application-lifecycle-management/overview',
      title: 'business-card-portfolio-alm-title',
      subtitle: 'business-card-portfolio-alm-subtitle'
    }],
    ['Lab Management', {
      url: 'https://admhelp.microfocus.com/alm/en/12.60/online_help/Content/lm_ag.htm',
      title: 'business-card-portfolio-alm-lab-management-title',
      subtitle: 'business-card-portfolio-alm-lab-management-subtitle'
    }],
    ['Invebstor', {
      url: 'https://youtu.be/8wTcyZEtQx8',
      title: 'business-card-portfolio-invebstor-title',
      subtitle: 'business-card-portfolio-invebstor-subtitle'
    }],
    ['Work+', {
      url: 'https://youtu.be/eRxTKZ0knsg',
      title: 'business-card-portfolio-work-plus-title',
      subtitle: 'business-card-portfolio-work-plus-subtitle'
    }],
    ['ARKA Website', {
      url: 'https://www.arka-media.de/',
      title: 'business-card-portfolio-arka-title',
      subtitle: 'business-card-portfolio-arka-subtitle'
    }],
    ['Deutsche Lieferadresse Website', {
      url: 'https://www.deutsche-lieferadresse.com/',
      title: 'business-card-portfolio-deutsche-lieferadresse-title',
      subtitle: 'business-card-portfolio-deutsche-lieferadresse-subtitle'
    }],
    ['Medisport Website', {
      url: 'http://medisport-garmisch.de/',
      title: 'business-card-portfolio-medisport-title',
      subtitle: 'business-card-portfolio-medisport-subtitle'
    }],
    ['Print & Post Website', {
      url: '#portfolio',
      title: 'business-card-portfolio-print-and-post-title',
      subtitle: 'business-card-portfolio-print-and-post-subtitle'
    }],
    ['Zakupki Website', {
      url: 'https://zakupki-de.com.ua/',
      title: 'business-card-portfolio-zakupki-title',
      subtitle: 'business-card-portfolio-zakupki-subtitle'
    }]
  ])
  expect(div).not.toBeNull()
  const divContainer = div.querySelector('div.container')
  expect(divContainer).not.toBeNull()
  const divSectionTitle = divContainer.querySelector('div.section-title')
  expect(divSectionTitle).toHaveClass('text-center')
  expect(divSectionTitle).toHaveClass('center')
  expect(divSectionTitle.querySelector('h2'))
  .toHaveTextContent('business-card-portfolio-title')
  expect(divSectionTitle.querySelector('hr')).not.toBeNull()
  const divRow = divContainer.querySelector('div.row')
  expect(divRow).not.toBeNull()
  const divPortfolioItems = divRow.querySelectorAll('div.col-sm-6.col-md-3.col-lg-3')
  expect(divPortfolioItems).toHaveLength(17)
  for (let i = 0; i < divPortfolioItems.length; i++) {
    const divPortfolioItem = divPortfolioItems.item(i)
    const a = divPortfolioItem.querySelector('a')
    const name = a.getAttribute('title')
    expect(fixture.has(name)).toEqual(true)
    const { url, title, subtitle } = fixture.get(name)
    testPortfolioItem(
      divPortfolioItem as HTMLDivElement, url, name, title, subtitle, '[object Object]'
    )
    fixture.delete(name)
  }
  expect(fixture.size).toEqual(0)
}
