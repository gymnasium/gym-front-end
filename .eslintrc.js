module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'airbnb',
    'react-app',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-underscore-dangle': [0],
    'react/prop-types': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': [0],
    'react/jsx-props-no-spreading': [
      { html: 'ignore', exceptions: ['StaticQuery'] },
    ],
  },
};
