export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest', // Add this line to handle JSX and JS files
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageProvider: 'v8',
};
