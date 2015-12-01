"use strict";

var webpack = require('webpack');
module.exports = function (grunt) {
  grunt.initConfig({

    pkg:grunt.file.readJSON('package.json'),

    webpack:{
      build:{
        entry:'./client/app/app.js',

        output:{
          path:'public',
          filename:'bundle.js'
        },

        stats:{
          color:true,
          modules:true,
          reasons:true
        },

        module:{
          loaders:[
            {test:/\.js$/, loader:'babel?presets[]=es2015'},
            {test:/\.html$/, loader:'raw'},
            {test:/\.css$/, loader:'style!css'},
            {test:/\.sass$/, loader:'style!css!sass?indentedSyntax'},
            {test:/\.json$/, loader:'json'},
            {test: /\.(jpg|png|ttf|eot|svg|woff|woff2)$/, loader: "file?name=lib/[hash].[ext]" }
          ]
        },

        plugins:[
          new webpack.optimize.UglifyJsPlugin({minimize: true})
        ]
      },
    },

    "webpack-dev-server":{
      options:{
        webpack:{
          entry:'./client/app/app.js',

          output:{
            path:'public',
            filename:'bundle.js'
          },

          stats:{
            colors:true,
            modules:true,
            reasons:true
          },

          module:{
            loaders:[
              {test:/\.js$/, loader:'babel?presets[]=es2015'},
              {test:/\.html$/, loader:'raw'},
              {test:/\.css$/, loader:'style!css'},
              {test:/\.sass$/, loader:'style!css!sass?indentedSyntax'},
              {test:/\.json$/, loader:'json'},
              {test: /\.(jpg|png|ttf|eot|svg|woff|woff2)$/, loader: "file?name=lib/[hash].[ext]" }
            ]
          }
        }
      },

      dev:{
        webpack:{
          watch:true,
          devtool: "#inline-source-map",
        },
        contentBase: 'public',
      }

    },

    copy:{
      html:{
        expand:true,
        cwd:'client/',
        src:['index.html'],
        dest:'public/'
      }
    },

    watch:{
      html:{
        files:['client/index.html'],
        tasks:['copy:html']
      }
    },

    clean:{
      all:{
        src:['public/*']
      }
    }


  });

  grunt.registerTask('build',['clean','copy','webpack:build']);
  grunt.registerTask('default',['clean','copy','webpack-dev-server:dev','watch']);

  grunt.registerTask('hello','Description',function () {
    grunt.log.writeln('Hello');
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');
};
