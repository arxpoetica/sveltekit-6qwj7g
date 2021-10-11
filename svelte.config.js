export default {
  kit: {
    target: '#svelte',
    vite: {
      define: { __TESTING__: JSON.stringify('testing') },
    },
  },
};
