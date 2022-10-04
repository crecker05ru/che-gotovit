module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   project: './tsconfig.json'
  // },
  parserOptions: {
    project: 'tsconfig.eslint.json',
    sourceType: 'module'
  },
  plugins: [
    'react', '@typescript-eslint'
  ],
  overrides: [
    // {
    //   files: ['*.ts', '*.tsx'], // Your TypeScript files extension

    //   // As mentioned in the comments, you should extend TypeScript plugins here,
    //   // instead of extending them outside the `overrides`.
    //   // If you don't want to extend any rules, you don't need an `extends` attribute.
    //   extends: [
    //     'plugin:@typescript-eslint/recommended',
    //     'plugin:@typescript-eslint/recommended-requiring-type-checking',
    //   ],
    //   parserOptions: {
    //     // project: ['./tsconfig.json'], // Specify it only for TypeScript files
    //     project: 'tsconfig.eslint.json',
    //     "ecmaVersion": 2020,
    //     "sourceType": "module"
    //   },
    // },
  ],

  rules: {
    semi: 'warn',
    'array-callback-return': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/triple-slash-reference': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn'
  }
}
