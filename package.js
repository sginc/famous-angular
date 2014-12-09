Package.describe({
  name: 'sgi:famous-angular',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('sgi:famous-angular.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sgi:famous-angular');
  api.addFiles('sgi:famous-angular-tests.js');
});
