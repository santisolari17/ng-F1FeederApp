System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "js:*": "js/*",
    "node_modules:*": "node_modules/*"
  },
  map: {

    "app":              "js:apps/app",
    "controller":       "js:controllers/controllers",
    "services":         "js:services/services",

    "angular":          "node_modules:angular/angular.min",
    "angular-animate":  "node_modules:angular-animate/angular-animate.min",
    "angular-aria":     "node_modules:angular-aria/angular-aria.min",
    "angular-messages": "node_modules:angular-messages/angular-messages.min",
    "angular-route":    "node_modules:angular-route/angular-route.min",
    "angular-material": "node_modules:angular-material/angular-material.min",
    "traceur":          "node_modules:traceur/bin/traceur",
    "traceur-runtime":  "node_modules:traceur/bin/traceur-runtime"

  }

});
