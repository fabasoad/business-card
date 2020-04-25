const mock = {
  t: jest.fn((key, options) => key)
};

export const useTranslation = () => mock;