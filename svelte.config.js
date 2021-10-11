export default config = {
  kit: {
    target: '#svelte',
    vite: {
      define: { __TESTING__: JSON.stringify('testing') },
    },
  },
};
