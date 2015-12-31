(require 'cljs.build.api)

(cljs.build.api/build "src"
  {:main 'nlr_web.update
   :foreign-libs [{:file "https://raw.githubusercontent.com/nimaai/nlr-core/master/dist/main.js"
                   :provides ["nlrcore"]}]
   :output-to "out/main.js"})
