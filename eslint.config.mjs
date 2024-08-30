import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      semi: 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
