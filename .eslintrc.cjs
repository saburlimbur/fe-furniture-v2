module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    './tailwind.config.js',
    './postcss.config.js',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    // ✅ General JavaScript Rules
    'no-debugger': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // ✅ Formatting & Style
    'linebreak-style': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': ['warn', 'as-needed'],

    // ✅ React Rules
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/react-in-jsx-scope': 'off', // fix untuk React 17+
    'react/jsx-no-useless-fragment': 'warn',
    'react/button-has-type': 'warn',

    'no-console': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/require-default-props': 'off',

    // ✅ Import Rules
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/order': 'off',

    // ✅ Custom Plugins
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^react', '^@?\\w'],
          ['^(@|components|utils|lib|styles)(/.*|$)'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.?(css|scss|sass)$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'warn',

    // ✅ React Refresh Plugin (Vite + Fast Refresh)
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
  },
};
