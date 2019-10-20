module.exports = function(grunt) {
// commonjs规范模块导出
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less:{
        development:{
          files:[{
            expand:true,
            cwd:'src/less',
            src:['*.less'],
            dest:'src/css',
            ext:'.css'
           }]
         }
        },
        cssmin:{
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        static_mappings:{
          files:[
              {
                expand:true,
                cwd:'src/css',
                src:'*.css',
                dest:'src/css/min',
                ext:'.min.css'
              }
          ]
        }
      },
       uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        static_mappings:{
          files:[
              {
                expand:true,
                cwd:'src/js',
                src:'*.js',
                dest:'src/js/min',
                ext:'.min.js'
              }
          ]
        }
      },
       concat:{
        distjs:{
          src:['src/js/min/*.js'],
          dest:'src/concat/all.js'
        },
        
        distcss:{
          src:['src/css/min/*.css'],
          dest:'src/concat/all.css'
        }
      },
      watch:{
        files:['src/**/*.*'],
        tasks:['less','cssmin','uglify','concat']
      }
    });
     
   
    // 加载包含 "less" 任务的插件,less编译成css。
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less','cssmin','uglify','concat','watch']);
  
  };