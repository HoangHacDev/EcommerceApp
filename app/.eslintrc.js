module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 0,
  },
  overrides: [
    {
      files: ['*.js', '*.tsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off',
        'quotes' : 'off',
      },
    },
  ],
};
