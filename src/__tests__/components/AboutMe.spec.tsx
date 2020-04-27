/// <reference types="jest" />
import * as React from 'react';
import { shallow } from 'enzyme';
import AboutMe from '../../components/AboutMe';
import SupportedLocales from '../../scripts/SupportedLocales';
import { useTranslation } from '../__mocks__/react-i18next';

let tMock;

beforeEach(() => {
  tMock = useTranslation().t;
});

test('should render AboutMe correctly', () => {
  const getLocaleMock = jest.fn(SupportedLocales.default);
  const wrapper = shallow(<AboutMe getLocale={getLocaleMock} />);
  expect(wrapper).toMatchSnapshot();
  expect(getLocaleMock).toBeCalledTimes(2);
  expect(tMock).toBeCalledTimes(7);

  expect(tMock).toHaveBeenCalledWith(
    expect.stringMatching(/^business-card-about-me-title$/)
  );
  expect(tMock).toHaveBeenCalledWith(
    expect.stringMatching(/^business-card-about-me-general-list-item-1$/),
    expect.objectContaining({
      totalExperience: '10 years',
      agileExperience: '9 years'
    })
  );
  for (let i = 2; i <= 6; i++) {
    expect(tMock).toHaveBeenCalledWith(
      expect.stringMatching(new RegExp(`^business-card-about-me-general-list-item-${i}$`))
    );
  }
});