module.exports = {
  plugins: ['flowtype'],
  rules: {

    // eslint-plugin-flowtype
    // https://github.com/gajus/eslint-plugin-flowtype#configuration

    // marks Flow type identifiers as defined
    'flowtype/define-flow-type': 2,
    // requires that all function parameters have type annotations
    'flowtype/require-parameter-type': 0,
    // requires that functions have return type annotation
    'flowtype/require-return-type': 0,
    // makes sure that files have a valid @flow annotation
    'flowtype/require-valid-file-annotation': 2,
    // enforces consistent spacing after the type annotation colon
    'flowtype/space-after-type-colon': [2, 'always'],
    // enforces consistent spacing before the type annotation colon
    'flowtype/space-before-type-colon': [2, 'never'],
    // enforces a consistent naming pattern for type aliases
    'flowtype/type-id-match': 0,
    // marks Flow type alias declarations as used
    'flowtype/use-flow-type': 2,
    // checks for simple Flow syntax errors
    'flowtype/valid-syntax': 2
  }
}
