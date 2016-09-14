SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "jspm0.17-seed/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.14"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "jspm0.17-seed": {
      "main": "jspm0.17-seed.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {},
  packages: {}
});
