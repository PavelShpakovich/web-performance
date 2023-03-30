module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          esmodules: false,
        },
      },
    ],
  ],
};
