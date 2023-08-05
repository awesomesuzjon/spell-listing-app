import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'no-console': 'warn',
    'no-alert': 'error',
    'no-unused-vars': 'error',
  },
};

export default config;
