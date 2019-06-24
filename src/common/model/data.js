sap.ui.define([
    "sap/ui/core/format/DateFormat",
    "jquery.sap.global"
], function (DateFormat, jQuery) {
    "use strict";

    const oRaw = {
        "name": "Șerban Petrescu",
        "phone": "+40 744 865 132",
        "location": "Cluj-Napoca, Romania",
        "website": "https://serban-petrescu.github.io/",
        "site": {
            "repository": "https://github.com/serban-petrescu/serban-petrescu.github.io",
            "print": jQuery.sap.getModulePath("portfolio.print") + "/index.html",
            "libraries": [{
                "name": "OpenUI5",
                "url": "https://github.com/SAP/openui5"
            }, {
                "name": "Bulma",
                "url": "https://github.com/jgthms/bulma"
            }, {
                "name": "GruntJS",
                "url": "https://github.com/gruntjs/"
            }, {
                "name": "Babel",
                "url": "https://github.com/babel/babel"
            }]
        },
        "images": {
            "profile": "path>/images/profile-image-square.png"
        },
        "roles": [{
            "text": "i18n>roleEmployee"
        }],
        "birthday": "date>19930907",
        "occupation": "i18n>roleOccupation",
        "downloads": [{
            "title": "i18n>downloadEnglish",
            "url": "path>/downloads/Serban_Petrescu.pdf"
        }],
        "experience": {
            "work": [{
                "period": {
                    "_text": "i18n>dateInterval",
                    "_params": ["date>20190301", "i18n>datePresent"]
                },
                "title": "i18n>msgWork4Title",
                "body": "i18n>msgWork4Body",
                "filter": "i18n>filterWork",
                "icon": "sap-icon://business-card",
                "fa-icon": "address-card-o",
                "showInCv": true
            }, {
                "period": {
                    "_text": "i18n>dateInterval",
                    "_params": ["date>20181001", "i18n>datePresent"]
                },
                "title": "i18n>kickItTitle",
                "body": "i18n>kickItBody",
                "filter": "i18n>filterWork",
                "icon": "sap-icon://customer-briefing",
                "fa-icon": "briefcase",
                "showInCv": true
            }, {
                "period": {
                    "_text": "i18n>dateInterval",
                    "_params": ["date>20190201", "i18n>datePresent"]
                },
                "title": "i18n>utcnTaTitle",
                "body": "i18n>utcnTaBody",
                "filter": "i18n>filterWork",
                "icon": "sap-icon://education",
                "fa-icon": "graduation-cap",
                "showInCv": true
            }, {
                "period": {
                    "_text": "i18n>dateInterval",
                    "_params": ["date>20170301", "date>20190301"]
                },
                "title": "i18n>msgWork3Title",
                "body": "i18n>msgWork3Body",
                "filter": "i18n>filterWork",
                "icon": "sap-icon://business-card",
                "fa-icon": "address-card-o",
                "showInCv": true
            }, {
                "period": {
                    "_text": "i18n>dateInterval",
                    "_params": ["date>20160201", "date>20170301"]
                },
                "title": "i18n>msgWork2Title",
                "body": "i18n>msgWork2Body",
                "filter": "i18n>filterWork",
                "icon": "sap-icon://business-card",
                "fa-icon": "address-card-o",
                "showInCv": true
            }, {
                "period": {
                    "_text": "i18n>dateInterval",
                    "_params": ["date>20140804", "date>20160201"]
                },
                "title": "i18n>msgWorkTitle",
                "body": "i18n>msgWorkBody",
                "filter": "i18n>filterWork",
                "icon": "sap-icon://business-card",
                "fa-icon": "address-card-o",
                "showInCv": true
            }, {
                "period": {
                    "_text": "i18n>dateInterval",
                    "_params": ["date>20140301", "date>20140601"]
                },
                "title": "i18n>msgInternshipTitle",
                "body": "i18n>msgInternshipBody",
                "filter": "i18n>filterWork",
                "icon": "sap-icon://business-card",
                "fa-icon": "address-card-o",
                "showInCv": false
            }],
            "academic": [{
                "period": {
                    "_text": "i18n>dateInterval",
                    "_params": ["date>20171001", "i18n>datePresent"]
                },
                "title": "i18n>masterTitle",
                "body": "i18n>masterBody",
                "filter": "i18n>filterAcademic",
                "icon": "sap-icon://education",
                "fa-icon": "graduation-cap",
                "showInCv": true
            }, {
                "period": {
                    "_text": "i18n>dateInterval",
                    "_params": ["date>20131001", "date>20140115"]
                },
                "title": "i18n>msgCourseTitle",
                "body": "i18n>msgCourseBody",
                "filter": "i18n>filterAcademic",
                "icon": "sap-icon://education",
                "fa-icon": "university",
                "showInCv": false
            }, {
                "period": {
                    "_text": "i18n>dateInterval",
                    "_params": ["date>20121001", "date>20160701"]
                },
                "title": "i18n>collegeTitle",
                "body": "i18n>collegeBody",
                "filter": "i18n>filterAcademic",
                "icon": "sap-icon://study-leave",
                "fa-icon": "graduation-cap",
                "showInCv": true
            }, {
                "period": {
                    "_text": "i18n>dateInterval",
                    "_params": ["date>20110901", "date>20111015"]
                },
                "title": "i18n>leonardoTitle",
                "body": "i18n>leonardoBody",
                "filter": "i18n>filterAcademic",
                "icon": "sap-icon://education",
                "fa-icon": "university",
                "showInCv": false
            }, {
                "period": {
                    "_text": "i18n>dateInterval",
                    "_params": ["date>20080915", "date>20120615"]
                },
                "title": "i18n>highSchoolTitle",
                "body": "i18n>highSchoolBody",
                "filter": "i18n>filterAcademic",
                "icon": "sap-icon://education",
                "fa-icon": "university",
                "showInCv": false
            }]
        },
        "skills": {
            "programming": {
                "name": "i18n>groupProgramming",
                "order": 0,
                "items": [{
                    "title": "i18n>skillC",
                    "lt": 3,
                    "level": "i18n>levelBasic"
                }, {
                    "title": "i18n>skillJava",
                    "lt": 1,
                    "level": "i18n>levelAdvanced"
                }, {
                    "title": "i18n>skillJS",
                    "lt": 1,
                    "level": "i18n>levelAdvanced"
                }, {
                    "title": "i18n>skillABAP",
                    "lt": 1,
                    "level": "i18n>levelAdvanced"
                }, {
                    "title": "i18n>skillBasic",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }, {
                    "title": "i18n>skillPHP",
                    "lt": 3,
                    "level": "i18n>levelBasic"
                }, {
                    "title": "i18n>skillHTML",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }, {
                    "title": "i18n>skillSQL",
                    "lt": 1,
                    "level": "i18n>levelMedium"
                }, {
                    "title": "i18n>skillSQLScript",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }, {
                    "title": "i18n>skillAssembly",
                    "lt": 3,
                    "level": "i18n>levelBasic"
                }, {
                    "title": "i18n>skillCsharp",
                    "lt": 3,
                    "level": "i18n>levelBasic"
                }, {
                    "title": "i18n>skillTypescript",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }]
            },
            "technologies": {
                "name": "i18n>groupTechnologies",
                "order": 1,
                "items": [{
                    "title": "i18n>skillUI5",
                    "lt": 1,
                    "level": "i18n>levelAdvanced"
                }, {
                    "title": "i18n>skillAS",
                    "lt": 1,
                    "level": "i18n>levelAdvanced"
                }, {
                    "title": "i18n>skillNW",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }, {
                    "title": "i18n>skillJEE",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }, {
                    "title": "i18n>skillRest",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }, {
                    "title": "i18n>skillPAL",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }, {
                    "title": "i18n>skillFiori",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }, {
                    "title": "i18n>skillCDS",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }, {
                    "title": "i18n>skillXSC",
                    "lt": 1,
                    "level": "i18n>levelAdvanced"
                }, {
                    "title": "i18n>skillSpring",
                    "lt": 1,
                    "level": "i18n>levelAdvanced"
                }, {
                    "title": "i18n>skillAngular",
                    "lt": 3,
                    "level": "i18n>levelBasic"
                }, {
                    "title": "i18n>skillAndroid",
                    "lt": 3,
                    "level": "i18n>levelBasic"
                }, {
                    "title": "i18n>skillNodeJS",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }, {
                    "title": "i18n>skillBabelJS",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }, {
                    "title": "i18n>skillGrunt",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }, {
                    "title": "i18n>skillReact",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }]
            },
            "languages": {
                "name": "i18n>groupLanguages",
                "order": 3,
                "items": [{
                    "title": "i18n>skillRomanian",
                    "lt": 0,
                    "level": "i18n>levelMotherLang"
                }, {
                    "title": "i18n>skillEnglish",
                    "lt": 1,
                    "level": "i18n>levelAdvanced"
                }, {
                    "title": "i18n>skillGerman",
                    "lt": 3,
                    "level": "i18n>levelBasic"
                }]
            },
            "databases": {
                "name": "i18n>groupDB",
                "order": 2,
                "items": [{
                    "title": "i18n>skillMysql",
                    "lt": 1,
                    "level": "i18n>levelAdvanced"
                }, {
                    "title": "i18n>skillHANADB",
                    "lt": 1,
                    "level": "i18n>levelAdvanced"
                }, {
                    "title": "i18n>skillAdrb",
                    "lt": 3,
                    "level": "i18n>levelBasic"
                }, {
                    "title": "i18n>skillH2DB",
                    "lt": 1,
                    "level": "i18n>levelAdvanced"
                }, {
                    "title": "i18n>skillPostgre",
                    "lt": 2,
                    "level": "i18n>levelMedium"
                }]
            }
        },
        "emails": {
            "yahoo": "serban.petr@yahoo.com",
            "outlook": "Serban.Petrescu@outlook.com"
        },
        "accounts": {
            "scn": "Serban.Petrescu",
            "linkedin": "Serban-Petrescu",
            "github": "Serban-Petrescu",
            "bitbucket": "SerbanPetrescu",
            "stackoverflow": "Serban-Petrescu"
        },
        "icons": [{
            "src": "path>/icons/scn.ico",
            "href": "http://scn.sap.com/people/serban.petrescu"
        }, {
            "src": "path>/icons/linkedin.ico",
            "href": "https://ro.linkedin.com/in/serban-petrescu-12b7a3a7"
        }, {
            "src": "path>/icons/github.ico",
            "href": "https://github.com/serban-petrescu/"
        }, {
            "src": "path>/icons/stackoverflow.ico",
            "href": "http://stackoverflow.com/users/7612556/serban-petrescu?tab=profile"
        }, {
            "src": "path>/icons/twitter.ico",
            "href": "https://twitter.com/petrescu_serban"
        }],
        "href": {
            "linkedin": "https://ro.linkedin.com/in/serban-petrescu-12b7a3a7",
            "scn": "http://scn.sap.com/people/serban.petrescu",
            "bitbucket": "https://bitbucket.org/serbanpetrescu/",
            "github": "https://github.com/serban-petrescu/",
            "stackoverflow": "http://stackoverflow.com/users/7612556/serban-petrescu?tab=profile"
        },
        "projects": {
            "personal": [{
                "name": "i18n>prjKickIt",
                "complexity": "i18n>complexityHigh",
                "status": "Error",
                "description": "i18n>prjKickItDesc",
                "technologies": [{
                    "name": "i18n>prjTechJava"
                }, {
                    "name": "i18n>prjTechSpring"
                }, {
                    "name": "i18n>prjTechPostgres"
                }, {
                    "name": "i18n>prjTechReact"
                }],
                "images": [{
                    "path": "path>/images/KICK1.PNG",
                    "description": "i18n>prjKICK1"
                }, {
                    "path": "path>/images/KICK2.PNG",
                    "description": "i18n>prjKICK2"
                }, {
                    "path": "path>/images/KICK3.PNG",
                    "description": "i18n>prjKICK3"
                }],
                "showInCv": true,
                "period": "i18n>current",
                "link": "https://kickit.ro",
                "linkTitle": "i18n>prjLinkSite"
            }, {
                "name": "i18n>prjSbwo",
                "complexity": "i18n>complexityHigh",
                "status": "Error",
                "description": "i18n>prjSbwoDesc",
                "technologies": [{
                    "name": "i18n>prjTechJava"
                }, {
                    "name": "i18n>prjTechJPA"
                }, {
                    "name": "i18n>prjTechOlingo"
                }, {
                    "name": "i18n>prjTechJetty"
                }, {
                    "name": "i18n>prjTechPicoContainer"
                }, {
                    "name": "i18n>prjTechH2"
                }, {
                    "name": "i18n>prjTechUI5"
                }, {
                    "name": "i18n>prjTechJS"
                }],
                "showInCv": true,
                "period": "2016 - 2018",
                "link": "https://github.com/serban-petrescu/sbwo",
                "linkTitle": "i18n>prjLinkGitHub"
            }, {
                "name": "i18n>prjUi5Jsx",
                "complexity": "i18n>complexityMedium",
                "status": "Warning",
                "description": "i18n>prjUi5JsxDesc",
                "technologies": [{
                    "name": "i18n>prjTechUI5"
                }, {
                    "name": "i18n>prjTechJS"
                }, {
                    "name": "i18n>prjTechJSX"
                }, {
                    "name": "i18n>prjTechBabel"
                }],
                "showInCv": true,
                "period": "2017",
                "link": "https://github.com/serban-petrescu/ui5-jsx-rm",
                "linkTitle": "i18n>prjLinkGitHub"
            }, {
                "name": "i18n>prjUi5Auth",
                "complexity": "i18n>complexityMedium",
                "status": "Warning",
                "description": "i18n>prjUi5AuthDesc",
                "technologies": [{
                    "name": "i18n>prjTechUI5"
                }, {
                    "name": "i18n>prjTechJS"
                }],
                "showInCv": false,
                "period": "2017",
                "link": "https://github.com/serban-petrescu/ui5-auth",
                "linkTitle": "i18n>prjLinkGitHub"
            }, {
                "name": "i18n>prjUi5Viz",
                "complexity": "i18n>complexityLow",
                "status": "Success",
                "description": "i18n>prjUi5VizDesc",
                "technologies": [{
                    "name": "i18n>prjTechUI5"
                }, {
                    "name": "i18n>prjTechJS"
                }, {
                    "name": "i18n>prjTechD3"
                }],
                "showInCv": false,
                "period": "2017",
                "link": "https://github.com/serban-petrescu/ui5-viz",
                "linkTitle": "i18n>prjLinkGitHub"
            }, {
                "name": "i18n>prjEpmWebsockets",
                "complexity": "i18n>complexityMedium",
                "status": "Warning",
                "description": "i18n>prjEpmWebsocketsDesc",
                "technologies": [{
                    "name": "i18n>prjTechABAP"
                }, {
                    "name": "i18n>prjTechGateway"
                }, {
                    "name": "i18n>prjTechJava"
                }, {
                    "name": "i18n>prjTechJPA"
                }, {
                    "name": "i18n>prjTechOlingo"
                }, {
                    "name": "i18n>prjTechUI5"
                }, {
                    "name": "i18n>prjTechWebSocket"
                }],
                "showInCv": false,
                "period": "2015",
                "link": "http://scn.sap.com/community/abap/connectivity/blog/2015/07/02/hcp-abap-and-websocket-part-1",
                "linkTitle": "i18n>prjLinkSCN"
            }, {
                "name": "i18n>prjWebPaint",
                "complexity": "i18n>complexityLow",
                "status": "Success",
                "description": "i18n>prjWebPaintDescr",
                "technologies": [{
                    "name": "i18n>prjTechHTML5"
                }, {
                    "name": "i18n>prjTechUI5"
                }, {
                    "name": "i18n>prjTechJS"
                }, {
                    "name": "i18n>prjTechFabric"
                }],
                "period": "2015",
                "images": [{
                    "path": "path>/images/webpaint1.PNG",
                    "description": "i18n>prjWebPaintS1"
                }],
                "showInCv": false,
                "link": "https://webpaint-p1940442392trial.dispatcher.hanatrial.ondemand.com/?hc_reset",
                "linkTitle": "i18n>prjLinkApp"
            }, {
                "name": "i18n>prjGDE",
                "complexity": "i18n>complexityMedium",
                "status": "Warning",
                "description": "i18n>prjGDEDescr",
                "technologies": [{
                    "name": "i18n>prjTechJava"
                }, {
                    "name": "i18n>prjTechHTML5"
                }, {
                    "name": "i18n>prjTechUI5"
                }, {
                    "name": "i18n>prjTechJS"
                }, {
                    "name": "i18n>prjTechFabric"
                }],
                "showInCv": false,
                "period": "2015",
                "images": [{
                    "path": "path>/images/GDE1.PNG",
                    "description": "i18n>prjGDES1"
                }, {
                    "path": "path>/images/GDE2.PNG",
                    "description": "i18n>prjGDES2"
                }, {
                    "path": "path>/images/GDE3.PNG",
                    "description": "i18n>prjGDES3"
                }]
            }, {
                "name": "i18n>prjEvid",
                "complexity": "i18n>complexityHigh",
                "status": "Error",
                "description": "i18n>prjEvidDescr",
                "technologies": [{
                    "name": "i18n>prjTechMySQL"
                }, {
                    "name": "i18n>prjTechPHP"
                }, {
                    "name": "i18n>prjTechHTML"
                }, {
                    "name": "i18n>prjTechJS"
                }],
                "period": "2014",
                "images": [{
                    "path": "path>/images/Evidenta1.PNG",
                    "description": "i18n>prjEvidS1"
                }, {
                    "path": "path>/images/Evidenta2.PNG",
                    "description": "i18n>prjEvidS2"
                }, {
                    "path": "path>/images/Evidenta3.PNG",
                    "description": "i18n>prjEvidS3"
                }, {
                    "path": "path>/images/Evidenta4.PNG",
                    "description": "i18n>prjEvidS4"
                }, {
                    "path": "path>/images/Evidenta5.PNG",
                    "description": "i18n>prjEvidS5"
                }],
                "showInCv": false
            }, {
                "name": "i18n>prjFact",
                "complexity": "i18n>complexityMedium",
                "status": "Warning",
                "description": "i18n>prjFactDescr",
                "technologies": [{
                    "name": "i18n>prjTechBasic"
                }, {
                    "name": "i18n>prjTechOOAPI"
                }],
                "period": "2013 - 2014",
                "images": [{
                    "path": "path>/images/Factura1.PNG",
                    "description": "i18n>prjFactS1"
                }, {
                    "path": "path>/images/Factura2.PNG",
                    "description": "i18n>prjFactS2"
                }, {
                    "path": "path>/images/Factura3.PNG",
                    "description": "i18n>prjFactS3"
                }, {
                    "path": "path>/images/Factura4.PNG",
                    "description": "i18n>prjFactS4"
                }],
                "showInCv": false
            }, {
                "name": "i18n>prjChit",
                "complexity": "i18n>complexityLow",
                "status": "Success",
                "description": "i18n>prjChitDescr",
                "technologies": [{
                    "name": "i18n>prjTechBasic"
                }, {
                    "name": "i18n>prjTechOOAPI"
                }],
                "period": "2013 - 2014",
                "images": [{
                    "path": "path>/images/Chitanta1.PNG",
                    "description": "i18n>prjChitS1"
                }, {
                    "path": "path>/images/Chitanta2.PNG",
                    "description": "i18n>prjChitS2"
                }],
                "showInCv": false
            }, {
                "name": "i18n>prjForm",
                "complexity": "i18n>complexityHigh",
                "status": "Error",
                "description": "i18n>prjFormDescr",
                "technologies": [{
                    "name": "i18n>prjTechBasic"
                }, {
                    "name": "i18n>prjTechOOAPI"
                }, {
                    "name": "i18n>prjTechCCpp"
                }],
                "period": "2012 - 2014",
                "images": [{
                    "path": "path>/images/Form1.PNG",
                    "description": "i18n>prjFormS1"
                }, {
                    "path": "path>/images/Form2.PNG",
                    "description": "i18n>prjFormS2"
                }, {
                    "path": "path>/images/Form3.PNG",
                    "description": "i18n>prjFormS3"
                }],
                "showInCv": false
            }, {
                "name": "i18n>prjSrv",
                "complexity": "i18n>complexityLow",
                "status": "Success",
                "description": "i18n>prjSrvDescr",
                "technologies": [{
                    "name": "i18n>prjTechCSharp"
                }, {
                    "name": "i18n>prjTechWinForms"
                }],
                "period": "2011",
                "images": [{
                    "path": "path>/images/Manager1.PNG",
                    "description": "i18n>prjSrvS1"
                }, {
                    "path": "path>/images/Manager2.PNG",
                    "description": "i18n>prjSrvS2"
                }, {
                    "path": "path>/images/Manager3.PNG",
                    "description": "i18n>prjSrvS3"
                }, {
                    "path": "path>/images/Manager4.PNG",
                    "description": "i18n>prjSrvS4"
                }],
                "showInCv": false
            }, {
                "name": "i18n>prjSwa",
                "complexity": "i18n>complexityHigh",
                "status": "Error",
                "description": "i18n>prjSwaDescr",
                "technologies": [{
                    "name": "i18n>prjTechMySQL"
                }, {
                    "name": "i18n>prjTechPython"
                }, {
                    "name": "i18n>prjTechAssembly"
                }, {
                    "name": "i18n>prjTechCCpp"
                }, {
                    "name": "i18n>prjTechPHP"
                }, {
                    "name": "i18n>prjTechHTML"
                }, {
                    "name": "i18n>prjTechJS"
                }],
                "period": "2010 - 2011",
                "showInCv": false
            }],
            "work": [{
                "name": "i18n>prjWorkDipko",
                "complexity": "i18n>complexityHigh",
                "status": "Error",
                "description": "i18n>prjWorkDipkoDesc",
                "technologies": [{
                    "name": "i18n>prjTechNode"
                }, {
                    "name": "i18n>prjTechAngular"
                }, {
                    "name": "i18n>prjTechPostgres"
                }, {
                    "name": "i18n>prjTechAWS"
                }, {
                    "name": "i18n>prjTechDocker"
                }],
                "period": "current",
                "showInCv": true
            }, {
                "name": "i18n>prjWorkGsa",
                "complexity": "i18n>complexityHigh",
                "status": "Error",
                "description": "i18n>prjWorkGsaDesc",
                "technologies": [{
                    "name": "i18n>prjTechJava"
                }, {
                    "name": "i18n>prjTechSpring"
                }, {
                    "name": "i18n>prjTechHANA"
                }, {
                    "name": "i18n>prjTechJPA"
                }, {
                    "name": "i18n>prjTechSCP"
                }],
                "period": "2017 - 2018",
                "showInCv": true
            }, {
                "name": "i18n>prjWorkMsgCM",
                "complexity": "i18n>complexityLow",
                "status": "Success",
                "description": "i18n>prjWorkMsgCMDesc",
                "technologies": [{
                    "name": "i18n>prjTechJava"
                }, {
                    "name": "i18n>prjTechSpring"
                }, {
                    "name": "i18n>prjTechMySQL"
                }, {
                    "name": "i18n>prjTechReact"
                }, {
                    "name": "i18n>prjTechRedux"
                }],
                "period": "i18n>current",
                "link": "https://github.com/serban-petrescu/candidate-management",
                "linkTitle": "i18n>prjLinkGitHub",
                "showInCv": false
            }, {
                "name": "i18n>prjWorkDiias",
                "complexity": "i18n>complexityMedium",
                "status": "Warning",
                "description": "i18n>prjWorkDiiasDesc",
                "technologies": [{
                    "name": "i18n>prjTechNode"
                }, {
                    "name": "i18n>prjTechExpress"
                }, {
                    "name": "i18n>prjTechMongoDB"
                }, {
                    "name": "i18n>prjTechMongoose"
                }, {
                    "name": "i18n>prjTechAngular"
                }, {
                    "name": "i18n>prjTechTypeScript"
                }],
                "period": "2017",
                "link": "https://www.minnosphere.com/nguw",
                "linkTitle": "i18n>prjLinkSite",
                "showInCv": false
            }, {
                "name": "i18n>prjWorkNguw",
                "complexity": "i18n>complexityHigh",
                "status": "Error",
                "description": "i18n>prjWorkNguwDesc",
                "technologies": [{
                    "name": "i18n>prjTechJava"
                }, {
                    "name": "i18n>prjTechR"
                }, {
                    "name": "i18n>prjTechMySQL"
                }, {
                    "name": "i18n>prjTechOlingo"
                }, {
                    "name": "i18n>prjTechJaxRs"
                }, {
                    "name": "i18n>prjTechJS"
                }, {
                    "name": "i18n>prjTechUI5"
                }],
                "period": "2016 - 2017",
                "link": "https://www.minnosphere.com/nguw",
                "linkTitle": "i18n>prjLinkSite",
                "showInCv": true
            }, {
                "name": "i18n>prjWorkGenRe",
                "complexity": "i18n>complexityMedium",
                "status": "Warning",
                "description": "i18n>prjWorkGenReDesc",
                "technologies": [{
                    "name": "i18n>prjTechABAP"
                }, {
                    "name": "i18n>prjTechABAPCDS"
                }, {
                    "name": "i18n>prjTechGateway"
                }, {
                    "name": "i18n>prjTechUI5"
                }],
                "period": "2016",
                "showInCv": false
            }, {
                "name": "i18n>prjWorkTaxoengine",
                "complexity": "i18n>complexityHigh",
                "status": "Error",
                "description": "i18n>prjWorkTaxoengineDesc",
                "technologies": [{
                    "name": "i18n>prjTechHANAXS"
                }, {
                    "name": "i18n>prjTechSQLScript"
                }, {
                    "name": "i18n>prjTechHANAPAL"
                }, {
                    "name": "i18n>prjTechHANATA"
                }, {
                    "name": "i18n>prjTechUI5"
                }, {
                    "name": "i18n>prjTechFiori"
                }],
                "period": "2015 - 2016",
                "images": [{
                    "path": "path>/images/taxo1.PNG",
                    "description": "i18n>prjWorkTaxoengine1"
                }, {
                    "path": "path>/images/taxo2.PNG",
                    "description": "i18n>prjWorkTaxoengine2"
                }],
                "showInCv": true
            }, {
                "name": "i18n>prjWorkLrm",
                "complexity": "i18n>complexityHigh",
                "status": "Error",
                "description": "i18n>prjWorkLrmDesc",
                "technologies": [{
                    "name": "i18n>prjTechABAP"
                }],
                "period": "2014 - 2016",
                "link": "https://www.msg-global.com/reinsurance",
                "linkTitle": "i18n>prjLinkSite",
                "showInCv": true
            }, {
                "name": "i18n>prjWorkHCP",
                "complexity": "i18n>complexityLow",
                "status": "Success",
                "description": "i18n>prjWorkHCPDesc",
                "technologies": [{
                    "name": "i18n>prjTechJava"
                }, {
                    "name": "i18n>prjTechJPA"
                }, {
                    "name": "i18n>prjTechCMIS"
                }, {
                    "name": "i18n>prjTechABAP"
                }, {
                    "name": "i18n>prjTechGateway"
                }, {
                    "name": "i18n>prjTechUI5"
                }],
                "period": "2015",
                "showInCv": false
            }, {
                "name": "i18n>prjWorkFsPm",
                "complexity": "i18n>complexityLow",
                "status": "Success",
                "description": "i18n>prjWorkFsPmDesc",
                "technologies": [{
                    "name": "i18n>prjTechABAP"
                }],
                "period": "2015",
                "link": "https://www.msg-global.com/insurance",
                "linkTitle": "i18n>prjLinkSite",
                "showInCv": false
            }, {
                "name": "i18n>prjWorkInternship",
                "complexity": "i18n>complexityLow",
                "status": "Success",
                "description": "i18n>prjWorkInternshipDescr",
                "images": [{
                    "path": "path>/images/internshipBill1.PNG",
                    "description": "i18n>prjWorkInternship1"
                }, {
                    "path": "path>/images/internshipBill2.PNG",
                    "description": "i18n>prjWorkInternship2"
                }, {
                    "path": "path>/images/internshipBill3.PNG",
                    "description": "i18n>prjWorkInternship3"
                }],
                "technologies": [{
                    "name": "i18n>prjTechABAP"
                }, {
                    "name": "i18n>prjTechGateway"
                }, {
                    "name": "i18n>prjTechUI5"
                }, {
                    "name": "i18n>prjTechFiori"
                }],
                "period": "2014",
                "showInCv": false
            }],
            "academic": [{
                "name": "i18n>prjBachelor",
                "complexity": "i18n>complexityHigh",
                "status": "Error",
                "description": "i18n>prjBachelorDesc",
                "technologies": [{
                    "name": "i18n>prjTechJava"
                }, {
                    "name": "i18n>prjTechHANAXS"
                }, {
                    "name": "i18n>prjTechSQLScript"
                }, {
                    "name": "i18n>prjTechHANAPAL"
                }, {
                    "name": "i18n>prjTechAndroid"
                }, {
                    "name": "i18n>prjTechArduino"
                }, {
                    "name": "i18n>prjTechCSharp"
                }, {
                    "name": "i18n>prjTechUI5"
                }],
                "images": [{
                    "path": "path>/images/bachelor1.png",
                    "description": "i18n>prjBachelor1"
                }, {
                    "path": "path>/images/backelor2.png",
                    "description": "i18n>prjBachelor2"
                }, {
                    "path": "path>/images/backelor3.png",
                    "description": "i18n>prjBachelor3"
                }, {
                    "path": "path>/images/backelor4.png",
                    "description": "i18n>prjBachelor4"
                }],
                "period": "2015 - 2016",
                "link": "https://github.com/serban-petrescu/diploma-public",
                "linkTitle": "i18n>prjLinkGitHub",
                "showInCv": true
            }, {
                "name": "i18n>prjSdDocumentGenerator",
                "complexity": "i18n>complexityMedium",
                "status": "Warning",
                "description": "i18n>prjSdDocumentGeneratorDesc",
                "technologies": [{
                    "name": "i18n>prjTechJava"
                }, {
                    "name": "i18n>prjTechJDBC"
                }, {
                    "name": "i18n>prjTechMongoDB"
                }, {
                    "name": "i18n>prjTechOOAPI"
                }, {
                    "name": "i18n>prjTechUI5"
                }],
                "images": [{
                    "path": "path>/images/documentGen0.PNG",
                    "description": "i18n>prjSdDocumentGenerator0"
                }, {
                    "path": "path>/images/documentGen1.PNG",
                    "description": "i18n>prjSdDocumentGenerator1"
                }],
                "period": "2015",
                "showInCv": false
            }, {
                "name": "i18n>prjSdHospital",
                "complexity": "i18n>complexityMedium",
                "status": "Warning",
                "description": "i18n>prjSdHospitalDesc",
                "technologies": [{
                    "name": "i18n>prjTechJava"
                }, {
                    "name": "i18n>prjTechJPA"
                }, {
                    "name": "i18n>prjTechWebSocket"
                }, {
                    "name": "i18n>prjTechUI5"
                }],
                "images": [{
                    "path": "path>/images/hospital1.PNG",
                    "description": "i18n>prjSdHospital1"
                }, {
                    "path": "path>/images/hospital2.PNG",
                    "description": "i18n>prjSdHospital2"
                }, {
                    "path": "path>/images/hospital3.PNG",
                    "description": "i18n>prjSdHospital3"
                }],
                "period": "2015",
                "showInCv": false
            }, {
                "name": "i18n>prjSdBank",
                "complexity": "i18n>complexityLow",
                "status": "Success",
                "description": "i18n>prjSdBankDesc",
                "technologies": [{
                    "name": "i18n>prjTechJava"
                }, {
                    "name": "i18n>prjTechJDBC"
                }, {
                    "name": "i18n>prjTechUI5"
                }, {
                    "name": "i18n>prjTechHibernate"
                }, {
                    "name": "i18n>prjTechSpring"
                }, {
                    "name": "i18n>prjTechAngular"
                }],
                "images": [{
                    "path": "path>/images/bank1.PNG",
                    "description": "i18n>prjSdBank1"
                }, {
                    "path": "path>/images/bank2.PNG",
                    "description": "i18n>prjSdBank2"
                }, {
                    "path": "path>/images/bank3.PNG",
                    "description": "i18n>prjSdBank3"
                }, {
                    "path": "path>/images/bank4.png",
                    "description": "i18n>prjSdBank4"
                }, {
                    "path": "path>/images/bank5.png",
                    "description": "i18n>prjSdBank5"
                }],
                "period": "2014 - 2015",
                "showInCv": false
            }, {
                "name": "i18n>prjTicket",
                "complexity": "i18n>complexityLow",
                "status": "Success",
                "description": "i18n>prjTicketDesc",
                "technologies": [{
                    "name": "i18n>prjTechUI5"
                }],
                "images": [{
                    "path": "path>/images/ticket1.PNG",
                    "description": "i18n>prjTicket1"
                }, {
                    "path": "path>/images/ticket2.PNG",
                    "description": "i18n>prjTicket2"
                }, {
                    "path": "path>/images/ticket3.PNG",
                    "description": "i18n>prjTicket3"
                }],
                "period": "2015",
                "link": "https://uidproject-p1940442392trial.dispatcher.hanatrial.ondemand.com/webapp/index.html?hc_reset",
                "linkTitle": "i18n>prjLinkApp",
                "showInCv": false
            }, {
                "name": "i18n>prjSdBookstore",
                "complexity": "i18n>complexityLow",
                "status": "Success",
                "description": "i18n>prjSdBookstoreDesc",
                "technologies": [{
                    "name": "i18n>prjTechJava"
                }, {
                    "name": "i18n>prjTechCMIS"
                }, {
                    "name": "i18n>prjTechUI5"
                }],
                "images": [{
                    "path": "path>/images/book1.PNG",
                    "description": "i18n>prjSdBookstore1"
                }],
                "period": "2014",
                "showInCv": false
            }, {
                "name": "i18n>prjAlp",
                "complexity": "i18n>complexityLow",
                "status": "Success",
                "description": "i18n>prjAlpDesc",
                "technologies": [{
                    "name": "i18n>prjTechAssembly"
                }],
                "images": [{
                    "path": "path>/images/asm1.png",
                    "description": "i18n>prjAlp1"
                }, {
                    "path": "path>/images/asm2.png",
                    "description": "i18n>prjAlp2"
                }],
                "period": "2013",
                "showInCv": false
            }]
        }
    };

    /**
     * Calculate the age of a person based on the birthday.
     * @param	{Date}	oBirthday	The person's birthday.
     * @returns {int}	The age (in years).
     */
    const fnCalculateAge = oBirthday => {
        const iDiff = Date.now() - oBirthday.getTime();
        const oAgeDate = new Date(iDiff);
        return Math.abs(oAgeDate.getUTCFullYear() - 1970);
    };

    const nTagFactor = 4;

    const fnCalculateSize = (aProjects) => {
        const fnSumTagLength = (s, tag) => s + tag.name.length;
        const fnComputeRaw = oProject => oProject.description.length +
            oProject.technologies.reduce(fnSumTagLength, 0) * nTagFactor +
            oProject.complexity.length * nTagFactor;
        aProjects.forEach(oProject => oProject.size = fnComputeRaw(oProject));
        const nMax = Math.max(...aProjects.map(p => p.size));
        aProjects.forEach(oProject => oProject.size = Math.max(3, Math.ceil(oProject.size * 8 / nMax)));
    };

    const fnCalculateSizeForAll = (mProjects) => {
        const aDeep = jQuery.map(mProjects, t => t);
        fnCalculateSize(aDeep.reduce((a, b) => a.concat(b), []));
    };

    /**
     * Obtains the processed model data.
     * @param   {ResourceBundle}    i18n    Translatable text bundle.
     * @returns {object} The processed model data.
     */
    return function (i18n) {
        let oBirthday = new Date(1993, 8, 7),
            iAge = fnCalculateAge(oBirthday),
            oInternalFormat = DateFormat.getDateInstance({
                pattern: "yyyyMMdd"
            }),
            oExternalFormat = DateFormat.getDateInstance({
                style: "medium"
            }),
            sBase = jQuery.sap.getModulePath("portfolio.assets"),
            fnReplacei18n = (oObject) => {
                let sKey,
                    oResult;
                if (typeof oObject === "string") {
                    if (oObject.indexOf("i18n>") === 0) {
                        return i18n.getText(oObject.substring(5));
                    }
                    if (oObject.indexOf("path>") === 0) {
                        return sBase + oObject.substring(5);
                    }
                    if (oObject.indexOf("date>") === 0) {
                        return oExternalFormat.format(oInternalFormat.parse(oObject.substring(5)));
                    }
                    return oObject;
                }
                if (oObject instanceof Array) {
                    oResult = [];
                    for (sKey = 0; sKey < oObject.length; ++sKey) {
                        oResult.push(fnReplacei18n(oObject[sKey]));
                    }
                    return oResult;
                }
                if (typeof oObject === "object") {
                    if (oObject.hasOwnProperty("_text")) {
                        return jQuery.sap.formatMessage(fnReplacei18n(oObject._text),
                            fnReplacei18n(oObject._params));
                    } else {
                        oResult = {};
                        for (sKey in oObject) {
                            oResult[sKey] = fnReplacei18n(oObject[sKey]);
                        }
                        return oResult;
                    }
                }
                return oObject;
            };

        let oDat = fnReplacei18n(oRaw);
        oDat.age = i18n.getText("ageYears", [iAge]);
        fnCalculateSizeForAll(oDat.projects);
        return oDat;
    }

});
