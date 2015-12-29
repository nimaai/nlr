(require 'cljs.build.api)

(cljs.build.api/build "src"
  {:main 'nlr-web.update
   :output-to "out/main.js"})
