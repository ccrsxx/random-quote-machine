module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      rules: {
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/semi': ['warn', 'always'],
        '@typescript-eslint/comma-dangle': ['error', 'never'],
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off'
      }
    }
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'no-console': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off'
  }
};
