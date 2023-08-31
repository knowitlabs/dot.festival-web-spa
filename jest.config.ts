const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|js)$': ['esbuild-jest']
  }
};

export default config;
