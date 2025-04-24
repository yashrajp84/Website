module.exports = {
  // ... existing config ...
  globals: {
    useThree: 'readonly',
    useFrame: 'readonly',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};