module.exports = {
  name: 'enerest-web4',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/enerest-web4',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
