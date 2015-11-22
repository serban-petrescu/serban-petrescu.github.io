jQuery.sap.declare("portfolio.Component");

sap.ui.core.UIComponent.extend("portfolio.Component", {
	metadata: {
		name: "Portfolio",
		version: "1.0",
		includes: [],
		dependencies: {
			libs: ["sap.m", "sap.ui.layout", "sap.suite.ui.commons"],
			components: []
		},

		rootView: "portfolio.view.App",

		config: {
			resourceBundle: "i18n/messageBundle.properties"
		},

		routing: {
			config: {
				viewType: "XML",
				viewPath: "portfolio.view",
				clearTarget: false,
				transition: "slide",
				targetAggregation: "pages",
				targetControl: "idAppControl"
			},
			routes: [{
				pattern: "",
				name: "main",
				view: "Main",
				viewLevel: 1
			}, {
				pattern: ":all*:",
				name: "catchall",
				view: "Main",
				viewLevel: 1
			}]
		}
	},

	init: function() {
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		var mConfig = this.getMetadata().getConfig();

		var oRootPath = jQuery.sap.getModulePath("portfolio");

		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: [oRootPath, mConfig.resourceBundle].join("/")
		});
		this.setModel(i18nModel, "i18n");

		var oDeviceModel = new sap.ui.model.json.JSONModel({
			isTouch: sap.ui.Device.support.touch,
			isNoTouch: !sap.ui.Device.support.touch,
			isPhone: sap.ui.Device.system.phone,
			isNoPhone: !sap.ui.Device.system.phone,
			listMode: sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
			listItemType: sap.ui.Device.system.phone ? "Active" : "Inactive"
		});
		oDeviceModel.setDefaultBindingMode("OneWay");
		this.setModel(oDeviceModel, "device");
		this.setModel(this.buildModel(i18nModel.getResourceBundle()));

		this.getRouter().initialize();
	},

	buildModel: function(i18n) {
		var age = this.calculateAge(new Date(1993, 9, 7));
		var data = {
			name: "Șerban Petrescu",
			phone: "+40744865132",
			location: "Cluj-Napoca, Romania",
			age: age,
			images: {
				profile: "images/profile.png"
			},
			roles: [{
				text: i18n.getText("roleStudent")
			}, {
				text: i18n.getText("roleEmployee")
			}],
			experience: [{
				period: i18n.getText("msgWorkPeriod"),
				title: i18n.getText("msgWorkTitle"),
				body: i18n.getText("msgWorkBody"),
				filter: i18n.getText("filterWork"),
				icon: "sap-icon://business-card"
			}, {
				period: i18n.getText("msgInternshipPeriod"),
				title: i18n.getText("msgInternshipTitle"),
				body: i18n.getText("msgInternshipBody"),
				filter: i18n.getText("filterWork"),
				icon: "sap-icon://business-card"
			}, {
				period: i18n.getText("msgCoursePeriod"),
				title: i18n.getText("msgCourseTitle"),
				body: i18n.getText("msgCourseBody"),
				filter: i18n.getText("filterAcademic"),
				icon: "sap-icon://education"
			}, {
				period: i18n.getText("collegePeriod"),
				title: i18n.getText("collegeTitle"),
				body: i18n.getText("collegeBody"),
				filter: i18n.getText("filterAcademic"),
				icon: "sap-icon://study-leave"
			}, {
				period: i18n.getText("leonardoPeriod"),
				title: i18n.getText("leonardoTitle"),
				body: i18n.getText("leonardoBody"),
				filter: i18n.getText("filterAcademic"),
				icon: "sap-icon://education"
			}, {
				period: i18n.getText("highSchoolPeriod"),
				title: i18n.getText("highSchoolTitle"),
				body: i18n.getText("highSchoolBody"),
				filter: i18n.getText("filterAcademic"),
				icon: "sap-icon://education"
			}],
			skills: [{
				title: i18n.getText("skillC"),
				lt: 1,
				level: i18n.getText("levelAdvanced"),
				group: i18n.getText("groupProgramming")
			}, {
				title: i18n.getText("skillJava"),
				lt: 1,
				level: i18n.getText("levelAdvanced"),
				group: i18n.getText("groupProgramming")
			}, {
				title: i18n.getText("skillJS"),
				lt: 1,
				level: i18n.getText("levelAdvanced"),
				group: i18n.getText("groupProgramming")
			}, {
				title: i18n.getText("skillABAP"),
				lt: 1,
				level: i18n.getText("levelAdvanced"),
				group: i18n.getText("groupProgramming")
			}, {
				title: i18n.getText("skillBasic"),
				lt: 2,
				level: i18n.getText("levelMedium"),
				group: i18n.getText("groupProgramming")
			}, {
				title: i18n.getText("skillPHP"),
				lt: 2,
				level: i18n.getText("levelMedium"),
				group: i18n.getText("groupProgramming")
			}, {
				title: i18n.getText("skillHTML"),
				lt: 2,
				level: i18n.getText("levelMedium"),
				group: i18n.getText("groupProgramming")
			}, {
				title: i18n.getText("skillSQL"),
				lt: 2,
				level: i18n.getText("levelMedium"),
				group: i18n.getText("groupProgramming")
			}, {
				title: i18n.getText("skillAssembly"),
				lt: 3,
				level: i18n.getText("levelBasic"),
				group: i18n.getText("groupProgramming")
			}, {
				title: i18n.getText("skillVHDL"),
				lt: 3,
				level: i18n.getText("levelBasic"),
				group: i18n.getText("groupProgramming")
			}, {
				title: i18n.getText("skillCsharp"),
				lt: 3,
				level: i18n.getText("levelBasic"),
				group: i18n.getText("groupProgramming")
			}, {
				title: i18n.getText("skillLisp"),
				lt: 3,
				level: i18n.getText("levelBasic"),
				group: i18n.getText("groupProgramming")
			}, {
				title: i18n.getText("skillProlog"),
				lt: 3,
				level: i18n.getText("levelBasic"),
				group: i18n.getText("groupProgramming")
			}, {
				title: i18n.getText("skillUI5"),
				lt: 1,
				level: i18n.getText("levelAdvanced"),
				group: i18n.getText("groupTechnologies")
			}, {
				title: i18n.getText("skillAS"),
				lt: 1,
				level: i18n.getText("levelAdvanced"),
				group: i18n.getText("groupTechnologies")
			}, {
				title: i18n.getText("skillNW"),
				lt: 2,
				level: i18n.getText("levelMedium"),
				group: i18n.getText("groupTechnologies")
			}, {
				title: i18n.getText("skillJEE"),
				lt: 2,
				level: i18n.getText("levelMedium"),
				group: i18n.getText("groupTechnologies")
			}, {
				title: i18n.getText("skillRest"),
				lt: 2,
				level: i18n.getText("levelMedium"),
				group: i18n.getText("groupTechnologies")
			}, {
				title: i18n.getText("skillXS"),
				lt: 2,
				level: i18n.getText("levelMedium"),
				group: i18n.getText("groupTechnologies")
			}, {
				title: i18n.getText("skillSpring"),
				lt: 3,
				level: i18n.getText("levelBasic"),
				group: i18n.getText("groupTechnologies")
			}, {
				title: i18n.getText("skillCMIS"),
				lt: 3,
				level: i18n.getText("levelBasic"),
				group: i18n.getText("groupTechnologies")
			}, {
				title: i18n.getText("skillRomanian"),
				lt: 0,
				level: i18n.getText("levelMotherLang"),
				group: i18n.getText("groupLanguages")
			}, {
				title: i18n.getText("skillEnglish"),
				lt: 1,
				level: i18n.getText("levelAdvanced"),
				group: i18n.getText("groupLanguages")
			}, {
				title: i18n.getText("skillGerman"),
				lt: 3,
				level: i18n.getText("levelBasic"),
				group: i18n.getText("groupLanguages")
			}, {
				title: i18n.getText("skillMysql"),
				lt: 1,
				level: i18n.getText("levelAdvanced"),
				group: i18n.getText("groupDB")
			}, {
				title: i18n.getText("skillHANADB"),
				lt: 2,
				level: i18n.getText("levelMedium"),
				group: i18n.getText("groupDB")
			}, {
				title: i18n.getText("skillAdrb"),
				lt: 2,
				level: i18n.getText("levelMedium"),
				group: i18n.getText("groupDB")
			}, {
				title: i18n.getText("skillMSQL"),
				lt: 3,
				level: i18n.getText("levelBasic"),
				group: i18n.getText("groupDB")
			}],
			emails: {
				yahoo: "serban.petr@yahoo.com",
				outlook: "Serban.Petrescu@outlook.com"
			},
			href: {
				linkedin: "https://ro.linkedin.com/in/serban-petrescu-12b7a3a7",
				scn: "http://scn.sap.com/people/serban.petrescu",
				bitbucket: "https://bitbucket.org/serbanpetrescu/"
			},
			projects: [{
				name: i18n.getText("prjWebPaint"),
				itemType: "Navigation",
				complexity: i18n.getText("complexityLow"),
				status: "Success",
				description: i18n.getText("prjWebPaintDescr"),
				language: i18n.getText("prjWebPaintLang"),
				period: "2015",
				images:[
					{ path: "images/webpaint1.PNG", description:  i18n.getText("prjWebPaintS1")}
				]
			},{
				name: i18n.getText("prjGDE"),
				itemType: "Navigation",
				complexity: i18n.getText("complexityMedium"),
				status: "Warning",
				description: i18n.getText("prjGDEDescr"),
				language: i18n.getText("prjGDELang"),
				period: "2015",
				images:[
					{ path: "images/GDE1.PNG", description:  i18n.getText("prjGDES1")},
					{ path: "images/GDE2.PNG", description:  i18n.getText("prjGDES2")},
					{ path: "images/GDE3.PNG", description:  i18n.getText("prjGDES3")}
				]
			},{
				name: i18n.getText("prjEvid"),
				itemType: "Navigation",
				complexity: i18n.getText("complexityHigh"),
				status: "Error",
				description: i18n.getText("prjEvidDescr"),
				language: i18n.getText("prjEvidLang"),
				period: "2014",
				images:[
					{ path: "images/Evidenta1.PNG", description:  i18n.getText("prjEvidS1")},
					{ path: "images/Evidenta2.PNG", description:  i18n.getText("prjEvidS2")},
					{ path: "images/Evidenta3.PNG", description:  i18n.getText("prjEvidS3")},
					{ path: "images/Evidenta4.PNG", description:  i18n.getText("prjEvidS4")},
					{ path: "images/Evidenta5.PNG", description:  i18n.getText("prjEvidS5")}
				]
			},{
				name: i18n.getText("prjFact"),
				itemType: "Navigation",
				complexity: i18n.getText("complexityMedium"),
				status: "Warning",
				description: i18n.getText("prjFactDescr"),
				language: i18n.getText("prjFactLang"),
				period: "2013 - 2014",
				images:[
					{ path: "images/Factura1.PNG", description:  i18n.getText("prjFactS1")},
					{ path: "images/Factura2.PNG", description:  i18n.getText("prjFactS2")},
					{ path: "images/Factura3.PNG", description:  i18n.getText("prjFactS3")},
					{ path: "images/Factura4.PNG", description:  i18n.getText("prjFactS4")}
				]
			},{
				name: i18n.getText("prjChit"),
				itemType: "Navigation",
				complexity: i18n.getText("complexityLow"),
				status: "Success",
				description: i18n.getText("prjChitDescr"),
				language: i18n.getText("prjChitLang"),
				period: "2013 - 2014",
				images:[
					{ path: "images/Chitanta1.PNG", description:  i18n.getText("prjChitS1")},
					{ path: "images/Chitanta2.PNG", description:  i18n.getText("prjChitS2")}
				]
			},{
				name: i18n.getText("prjForm"),
				itemType: "Navigation",
				complexity: i18n.getText("complexityHigh"),
				status: "Error",
				description: i18n.getText("prjFormDescr"),
				language: i18n.getText("prjFormLang"),
				period: "2012 - 2014",
				images:[
					{ path: "images/Form1.PNG", description:  i18n.getText("prjFormS1")},
					{ path: "images/Form2.PNG", description:  i18n.getText("prjFormS2")},
					{ path: "images/Form3.PNG", description:  i18n.getText("prjFormS3")}
				]
			},{
				name: i18n.getText("prjSrv"),
				itemType: "Navigation",
				complexity: i18n.getText("complexityLow"),
				status: "Success",
				description: i18n.getText("prjSrvDescr"),
				language: i18n.getText("prjSrvLang"),
				period: "2011",
				images:[
					{ path: "images/Manager1.PNG", description:  i18n.getText("prjSrvS1")},
					{ path: "images/Manager2.PNG", description:  i18n.getText("prjSrvS2")},
					{ path: "images/Manager3.PNG", description:  i18n.getText("prjSrvS3")},
					{ path: "images/Manager4.PNG", description:  i18n.getText("prjSrvS4")}
				]
			},{
				name: i18n.getText("prjSwa"),
				itemType: "Inactive",
				complexity: i18n.getText("complexityHigh"),
				status: "Error",
				description: i18n.getText("prjSwaDescr"),
				language: i18n.getText("prjSwaLang"),
				period: "2010 - 2011"
			}]
		};
		return new sap.ui.model.json.JSONModel(data);
	},

	calculateAge: function(birthday) {
		var ageDifMs = Date.now() - birthday.getTime();
		var ageDate = new Date(ageDifMs);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

});