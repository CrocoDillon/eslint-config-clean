module.exports = {
  plugins: ['react'],
  rules: {

    // ESLint-plugin-React
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules

    // prevent missing displayName in a React component definition
    'react/display-name': [2, { ignoreTranspilerName: true }],
    // forbid certain props on Components
    'react/forbid-component-props': 0,
    // forbid certain propTypes
    'react/forbid-prop-types': 0,
    // prevent usage of dangerous JSX properties
    'react/no-danger': 0,
    // prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 0,
    // prevent usage of deprecated methods
    'react/no-deprecated': 2,
    // prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 2,
    // prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 2,
    // prevent direct mutation of this.state
    'react/no-direct-mutation-state': 2,
    // prevent usage of findDOMNode
    'react/no-find-dom-node': 2,
    // prevent usage of isMounted
    'react/no-is-mounted': 2,
    // prevent multiple component definition per file
    'react/no-multi-comp': 2,
    // prevent usage of the return value of React.render
    'react/no-render-return-value': 2,
    // prevent usage of setState
    'react/no-set-state': 0,
    // prevent using string references in ref attribute
    'react/no-string-refs': 2,
    // prevent usage of unknown DOM property
    'react/no-unknown-property': 2,
    // enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': 2,
    // enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': 0,
    // prevent missing props validation in a React component definition
    'react/prop-types': 2,
    // prevent missing React when using JSX
    'react/react-in-jsx-scope': 2,
    // restrict file extensions that may be required
    'react/require-extension': 0,
    // enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 0,
    // enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 2,
    // prevent extra closing tags for components without children
    'react/self-closing-comp': 2,
    // enforce component methods order
    'react/sort-comp': 2,
    // enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': 0,

    // ESLint-plugin-React JSX
    // https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules

    // enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': [2, 'never'],
    // validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': 2,
    // enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': [2, 'always'],
    // enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': [2, 'never'],
    // restrict file extensions that may contain JSX
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    // enforce position of the first prop in JSX
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    // enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 0,
    // validate JSX indentation
    'react/jsx-indent': [2, 2],
    // validate props indentation in JSX
    'react/jsx-indent-props': [2, 2],
    // validate JSX has key prop when in array or iterator
    'react/jsx-key': 2,
    // limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': 0,
    // prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': 2,
    // prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 2,
    // prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 2,
    // prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 0,
    // prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 0,
    // disallow undeclared variables in JSX
    'react/jsx-no-undef': 2,
    // enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 2,
    // enforce props alphabetical sorting
    'react/jsx-sort-props': 0,
    // validate spacing before closing bracket in JSX
    'react/jsx-space-before-closing': 2,
    // prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,
    // prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,
    // prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': 2
  }
}
