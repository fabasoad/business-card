/// <reference types="jest" />
import * as React from 'react';
import { shallow } from 'enzyme';
import ExperienceMain from '../../../components/Experience/ExperienceMain';
import { useTranslation } from '../../__mocks__/react-i18next';

let tMock;

beforeEach(() => {
  tMock = useTranslation().t;
});

test('should render JobAchievements correctly', () => {
  const wrapper = shallow(<ExperienceMain />);
  expect(wrapper).toMatchSnapshot();
  [ "title",
    "job-bitcoin-com-2-title",
    "job-bitcoin-com-1-title",
    "job-lohika-3-title",
    "job-lohika-2-title",
    "job-lohika-1-title",
    "job-arka-title"
  ].forEach((t, i) => expect(tMock).toHaveBeenNthCalledWith(i + 1, `business-card-experience-${t}`));
});