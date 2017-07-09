module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            dist: ["dist"]
        },
        openui5_preload: {
            dist: {
                options: {
                    resources: {
                        cwd: "src",
                        prefix: "portfolio"
                    },
                    dest: "dist"
                },
                components: true
            }
        },
		uglify: {
			dist: {
				files: [{
					expand: true,
					cwd: "src",
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
					src: "**",
                    dest: "dist/",
                    rename: function(dest, src) {
                        if (src.endsWith(".js")) {
                            return dest + src.replace(".js","-dbg.js");
                        } else {
                            return dest + src;
                        }
                    }
                }, {
                    src: "README.md",
                    dest: "dist/README.md"
                }, {
                    src: "LICENSE",
                    dest: "dist/LICENSE"
                }]
            }
        }
    });

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-openui5");

	grunt.registerTask("default", ["clean", "openui5_preload", "uglify", "copy"]);
}
