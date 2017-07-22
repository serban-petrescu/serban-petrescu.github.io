module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            dist: ["dist"],
            stage: ["stage"]
        },
        openui5_preload: {
            dist: {
                options: {
                    resources: {
                        cwd: "dist",
                        prefix: "portfolio"
                    },
                    dest: "dist"
                },
                components: true
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ["env"],
                plugins: ["spet-ui5-jsx-rm"]
            },
            stage: {
                files: [{
                    expand: true,
                    cwd: "src",
                    dest: "stage",
                    src: "**/*.js"
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "src",
                    dest: "dist",
                    src: "**/*.js"
                }]
            }
        },
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: "stage",
                    src: "**/*.js",
                    dest: "dist"
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "src",
                    src: ["**", "!**/*.js"],
                    dest: "dist/"
                }, {
                    src: "README.md",
                    dest: "dist/README.md"
                }, {
                    src: "LICENSE",
                    dest: "dist/LICENSE"
                }, {
                    expand: true,
                    cwd: "node_modules/font-awesome/fonts",
                    src: "*.*",
                    dest: "dist/bulma/fonts"
                }]
            },
            dbg: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "stage",
                    src: "**/*.js",
                    dest: "dist/",
                    rename: function (dest, src) {
                        return dest + src.replace(".js", "-dbg.js");
                    }
                }, {
                    src: "stage/common/model/data.js",
                    dest: "dist/print/model/data-dbg.js"
                }, {
                    src: "stage/common/model/data.js",
                    dest: "dist/old/model/data-dbg.js",
                }, {
                    src: "stage/common/model/data.js",
                    dest: "dist/bulma/model/data-dbg.js",
                }]
            },
            common: {
                files: [{
                    src: "dist/common/model/data.js",
                    dest: "dist/print/model/data.js"
                }, {
                    src: "dist/common/model/data.js",
                    dest: "dist/old/model/data.js"
                }, {
                    src: "dist/common/model/data.js",
                    dest: "dist/bulma/model/data.js"
                }, {
                    expand: true,
                    cwd: "dist/common/i18n",
                    src: "*.properties",
                    dest: "dist/print/i18n"
                }, {
                    expand: true,
                    cwd: "dist/common/i18n",
                    src: "*.properties",
                    dest: "dist/old/i18n"
                }, {
                    expand: true,
                    cwd: "dist/common/i18n",
                    src: "*.properties",
                    dest: "dist/bulma/i18n"
                }]
            }
        },
        watch: {
            src: {
                files: ["src/**/*"],
                tasks: ["dev"],
                options: {
                    livereload: true,
                    spawn: false
                }
            }
        },
        sass: {
            stage: {
                files: {
                    "stage/bulma/css/style.css": "src/bulma/sass/style.sass"
                }
            },
            dist: {
                files: {
                    "dist/bulma/css/style.css": "src/bulma/sass/style.sass"
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    "dist/bulma/css/style.css": "stage/bulma/css/style.css"
                }
            }
        },
        connect: {
            dist: {
                options: {
                    livereload: true,
                    base: "dist",
                    hostname: "localhost",
                    port: 5000
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-openui5");
    grunt.loadNpmTasks("grunt-babel");

    grunt.registerTask("default", ["clean", "babel:stage", "uglify", "copy:dist", "copy:common", "openui5_preload",
        "sass:stage", "cssmin", "copy:dbg", "clean:stage"]);
    grunt.registerTask("dev", ["clean:dist", "babel:dist", "copy:dist", "copy:common", "sass:dist"]);
    grunt.registerTask("start", ["dev", "connect", "watch"]);
}
