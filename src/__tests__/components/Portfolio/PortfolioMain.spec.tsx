import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import PortfolioMain from '../../../components/Portfolio/PortfolioMain'
import { testPortfolioItem } from './TestUtils'

type Fixture = {
  url: string
  title: string
  subtitle: string
}

describe('PortfolioMain', () => {
  const fixture = new Map<string, Fixture>()

  function resetFixture() {
    fixture.clear()
    fixture.set('Markets', {
      url: 'https://markets.bitcoin.com/',
      title: 'business-card-portfolio-markets-title',
      subtitle: 'business-card-portfolio-markets-subtitle'
    })
    fixture.set('Games', {
      url: 'https://games.bitcoin.com/',
      title: 'business-card-portfolio-casino-web-app-title',
      subtitle: 'business-card-portfolio-casino-web-app-subtitle'
    })
    fixture.set('Games Admin', {
      url: 'https://games.bitcoin.com/',
      title: 'business-card-portfolio-casino-admin-web-app-title',
      subtitle: 'business-card-portfolio-casino-admin-web-app-subtitle'
    })
    fixture.set('Games Android', {
      url: 'https://games.bitcoin.com/android',
      title: 'business-card-portfolio-casino-android-app-title',
      subtitle: 'business-card-portfolio-casino-android-app-subtitle'
    })
    fixture.set('Earnin', {
      url: 'https://www.earnin.com/',
      title: 'business-card-portfolio-earnin-title',
      subtitle: 'business-card-portfolio-earnin-subtitle'
    })
    fixture.set('Prysm iPhone App', {
      url: 'https://www.prysm.com/software/iphone-app/',
      title: 'business-card-portfolio-prysm-title',
      subtitle: 'business-card-portfolio-prysm-subtitle'
    })
    fixture.set('Southern Marine Agency Website', {
      url: 'https://drive.google.com/drive/folders/163jhUuVrBCEYQ503sa1Y1M7KG--1gwaj?usp=sharing',
      title: 'business-card-portfolio-sma-title',
      subtitle: 'business-card-portfolio-sma-subtitle'
    })
    fixture.set('ALM Robot', {
      url: 'https://admhelp.microfocus.com/alm/en/12.60/online_help/Content/Admin/sa_robot_toc.htm',
      title: 'business-card-portfolio-alm-robot-title',
      subtitle: 'business-card-portfolio-alm-robot-subtitle'
    })
    fixture.set('ALM', {
      url: 'https://www.microfocus.com/en-us/products/application-lifecycle-management/overview',
      title: 'business-card-portfolio-alm-title',
      subtitle: 'business-card-portfolio-alm-subtitle'
    })
    fixture.set('Lab Management', {
      url: 'https://admhelp.microfocus.com/alm/en/12.60/online_help/Content/lm_ag.htm',
      title: 'business-card-portfolio-alm-lab-management-title',
      subtitle: 'business-card-portfolio-alm-lab-management-subtitle'
    })
    fixture.set('Invebstor', {
      url: 'https://youtu.be/8wTcyZEtQx8',
      title: 'business-card-portfolio-invebstor-title',
      subtitle: 'business-card-portfolio-invebstor-subtitle'
    })
    fixture.set('Work+', {
      url: 'https://youtu.be/eRxTKZ0knsg',
      title: 'business-card-portfolio-work-plus-title',
      subtitle: 'business-card-portfolio-work-plus-subtitle'
    })
    fixture.set('ARKA Website', {
      url: 'https://www.arka-media.de/',
      title: 'business-card-portfolio-arka-title',
      subtitle: 'business-card-portfolio-arka-subtitle'
    })
    fixture.set('Deutsche Lieferadresse Website', {
      url: 'https://www.deutsche-lieferadresse.com/',
      title: 'business-card-portfolio-deutsche-lieferadresse-title',
      subtitle: 'business-card-portfolio-deutsche-lieferadresse-subtitle'
    })
    fixture.set('Medisport Website', {
      url: 'http://medisport-garmisch.de/',
      title: 'business-card-portfolio-medisport-title',
      subtitle: 'business-card-portfolio-medisport-subtitle'
    })
    fixture.set('Print & Post Website', {
      url: '#portfolio',
      title: 'business-card-portfolio-print-and-post-title',
      subtitle: 'business-card-portfolio-print-and-post-subtitle'
    })
    fixture.set('Zakupki Website', {
      url: 'https://zakupki-de.com.ua/',
      title: 'business-card-portfolio-zakupki-title',
      subtitle: 'business-card-portfolio-zakupki-subtitle'
    })
  }

  beforeEach(resetFixture)

  test('should render PortfolioMain correctly', () => {
    const { container } = render(<PortfolioMain />)
    const div = container.querySelector('div#portfolio')
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
  })
})
