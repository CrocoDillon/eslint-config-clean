module.exports = {
  plugins: ['flowtype'],
  rules: {

    // eslint-plugin-flowtype
    // https://github.com/gajus/eslint-plugin-flowtype##eslint-plugin-flowtype-rules

    // enforces a particular style for boolean type annotations
    'flowtype/boolean-style': [2, 'boolean'],
    // marks Flow type identifiers as defined
    'flowtype/define-flow-type': 2,
    // enforces consistent use of trailing commas in Object and Tuple annotations
    'flowtype/delimiter-dangle': [2, 'never'],
    // enforces consistent spacing within generic type annotation parameters
    'flowtype/generic-spacing': [2, 'never'],
    // checks for duplicate properties in Object annotations
    'flowtype/no-dupe-keys': 2,
    // disallows use of primitive constructors as types
    'flowtype/no-primitive-constructor-types': 2,
    // warns against weak type annotations any, Object and Function
    'flowtype/no-weak-types': 0,
    // enforces consistent separators between properties in Flow object types
    'flowtype/object-type-delimiter': [2, 'comma'],
    // requires that all function parameters have type annotations
    'flowtype/require-parameter-type': 0,
    // requires that functions have return type annotation
    'flowtype/require-return-type': 0,
    // makes sure that files have a valid @flow annotation
    'flowtype/require-valid-file-annotation': 0,
    // requires that all variable declarators have type annotations
    'flowtype/require-variable-type': 0,
    // enforces consistent use of semicolons after type aliases
    'flowtype/semi': [2, 'never'],
    // enforces sorting of Object annotations
    'flowtype/sort-keys': 0,
    // enforces consistent spacing after the type annotation colon
    'flowtype/space-after-type-colon': [2, 'always'],
    // enforces consistent spacing before the type annotation colon
    'flowtype/space-before-generic-bracket': [2, 'never'],
    // enforces consistent spacing before the type annotation colon
    'flowtype/space-before-type-colon': [2, 'never'],
    // enforces a consistent naming pattern for type aliases
    'flowtype/type-id-match': 0,
    // enforces consistent spacing around union and intersection type separators (| and &)
    'flowtype/union-intersection-spacing': [2, 'always'],
    // marks Flow type alias declarations as used
    'flowtype/use-flow-type': 2,
    // checks for simple Flow syntax errors
    'flowtype/valid-syntax': 2
  }
}
