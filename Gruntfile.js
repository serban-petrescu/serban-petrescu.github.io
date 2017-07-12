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
            dist: {
                files: [{
                    expand: true,
                    cwd: "src",
                    dest: "stage",
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
                    expand: true,
                    cwd: "dist/common/i18n",
                    src: "*.properties",
                    dest: "dist/print/i18n"
                }, {
                    expand: true,
                    cwd: "dist/common/i18n",
                    src: "*.properties",
                    dest: "dist/old/i18n"
                }]
            }
        },
        watch: {
            src: {
                files: ["src/**/*"],
                tasks: ["default"],
                options: {
                    livereload: true,
                    spawn: false
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
    grunt.loadNpmTasks("grunt-openui5");
    grunt.loadNpmTasks("grunt-babel");

    grunt.registerTask("default", ["clean", "babel", "uglify", "copy:dist", "copy:common", "openui5_preload",
        "copy:dbg", "clean:stage"
    ]);
    grunt.registerTask("start", ["default", "connect", "watch"]);
}
