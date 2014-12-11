Package.describe({
  name: 'sgi:famous-angular',
  summary: 'Famous-Angular packaged for use with Meteor apps',
  version: '0.5.5',
  git: 'git@github.com:sginc/famous-angular.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('urigo:angular@0.5.7', 'client');
//  api.use('raix:famono@0.9.23');
  api.use('mjn:famous@0.3.1_2', 'client');
  api.addFiles('famous-angular.js', 'client');
  api.addFiles('famous-angular.css', 'client');
});
