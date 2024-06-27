import { configs as pluginJsConfigs } from '@eslint/eslintrc/dist/configs/recommended';
import { configs as pluginReactConfigs } from 'eslint-plugin-react/dist/configs/recommended';
import globals from 'globals';
import typescriptEslintConfigs from 'typescript-eslint/dist/configs/recommended';

export default {
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: globals.browser,
  extends: [pluginJsConfigs.recommended, typescriptEslintConfigs.recommended, pluginReactConfigs.recommended],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'newline-before-return': 'error',
  },
};
