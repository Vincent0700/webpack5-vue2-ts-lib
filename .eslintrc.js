module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      extends: [
        'plugin:vue/recommended',
        'plugin:prettier/recommended'
      ]
    },
    {
      files: ['*.ts', '*.js'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ]
    }
  ],
  rules: {
    'prettier/prettier': 'error'
  }
};
