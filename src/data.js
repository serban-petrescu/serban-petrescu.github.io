const fs = require('fs')
const path = require('path')

const projects = {
    "eswvpis": {
        "name": "InsideSales: PlayBooks",
        "type": "work",
        "description": `
            A recently acquired Sales Engagement platform with a micro-service architecture, written in a heterogenous
            mix of <strong>Golang</strong>, <strong>Rust</strong>, <strong>NodeJS</strong> and <strong>PHP</strong>, with
            a <strong>React</strong> UI and running on <strong>AWS</strong>. 
            <br />
            <br />
            I have been coordinating multiple parallel tracks including: replacing parts of the system with SaaS offerings, 
            lifting and shifting some of the servers from their data center to AWS, fixing high priority defects, stabilizing 
            and monitoring the product, etc.  
        `,
        "technologies": [
            {
                "name": "AWS"
            },
            {
                "name": "MySQL"
            },
            {
                "name": "PHP"
            },
            {
                "name": "NodeJS"
            },
            {
                "name": "Go"
            },
            {
                "name": "Rust"
            },
            {
                "name": "ECS"
            },
            {
                "name": "Docker"
            },
            {
                "name": "Lambda"
            },
            {
                "name": "Twilio"
            }
        ],
        "link": "https://www.insidesales.com/playbooks/",
        "youtube": "https://www.youtube.com/watch?v=-sgE3UUVX3c",
        "tags": ["architect", "lead"],
        "period": "current"
    },
    "eswp1": {
        "name": "Architecture Spec Work",
        "type": "work",
        "description": `
            My main responsibility is to write detailed technical architecture specifications for a portfolio 200+ products. 
            I write about three specs per week, each requiring up to a few hundred man-days to implement.
            <br />
            <br />
            Most specs extensively use <strong>AWS</strong> (AppSync, Lambda, DynamoDB, Cognito, etc.) but sometimes we 
            also tackle changes to legacy, monolithic, on-premise products.
        `,
        "technologies": [
            {
                "name": "AWS"
            },
            {
                "name": "DynamoDB"
            },
            {
                "name": "AppSync"
            },
            {
                "name": "API Gateway"
            },
            {
                "name": "Cognito"
            },
            {
                "name": "SQS"
            },
            {
                "name": "Lambda"
            },
            {
                "name": "Step Functions"
            }
        ],
        "tags": ["architect"],
        "period": "2020 - 2021"
    },
    "eswfi": {
        "name": "Financial Insights",
        "type": "work",
        "description": `
            We've set up and consumed the <strong>AWS Cost and Usage</strong> reports to break down and scrutinize the cost structure
            for an AWS organization generating over 20M USD in yearly costs.
            <br />
            <br />
            The insights that we found were then implemented as automation and pushed into <strong>QuickSight</strong> and 
            <strong>Google Sheets</strong> to be consumed by top executives.
        `,
        "technologies": [
            {
                "name": "AWS"
            },
            {
                "name": "Python"
            },
            {
                "name": "Lambda"
            },
            {
                "name": "Step Functions"
            },
            {
                "name": "Athena"
            },
            {
                "name": "QuickSight"
            },
            {
                "name": "Google APIs"
            }
        ],
        "tags": ["architect"],
        "period": "2020"
    },
    "eswco": {
        "name": "Cost Optimization",
        "type": "work",
        "description": `
            I've performed extensive analysis on more than 500 AWS accounts to find 
            <strong>cost reduction</strong> opportunities.
            <br />
            <br />
            This involved writing a suite of <strong>Lambdas</strong> that periodically queried the target accounts for 
            metrics and even executed some strategies (resource deletion, installing agents, etc.). 
        `,
        "technologies": [
            {
                "name": "AWS"
            },
            {
                "name": "Python"
            },
            {
                "name": "Lambda"
            },
            {
                "name": "Step Functions"
            },
            {
                "name": "CloudWatch"
            },
            {
                "name": "Systems Manager"
            }
        ],
        "tags": ["architect"],
        "period": "2020 - 2021"
    },
    "practicaldevguide": {
        "name": "Practical Dev Guide",
        "type": "personal",
        "description": `
            A YouTube series dedicated to teaching basic web application programming for students.
            <br />
            <br />
            I am showcasing step-by-step how to build a typical <strong>Spring Boot</strong> application, backed by
            an embedded <strong>H2</strong> database and fronted by a <strong>React</strong> user interface.
        `,
        "technologies": [
            {
                "name": "Spring"
            },
            {
                "name": "H2"
            },
            {
                "name": "React"
            }
        ],
        "tags": ["teaching"],
        "youtube": "https://www.youtube.com/playlist?list=PLFVVA9FdSLI2XOmDEgu3noePIWlZRi0xI",
        "github": "https://github.com/serban-petrescu/practical-dev-guide",
        "period": "2020"
    },
    "msgcheckin": {
        "name": "msg.Check-In",
        "type": "work",
        "description": `
            A <strong>Spring Boot</strong> application with a <strong>Semantic UI React</strong> frontend for managing
            which colleagues are coming at the office in which days and in which room / place. 
            <br /> <br />
            Currently, this product is being sold using a <strong>SaaS</strong> model, with the option of on-premise deployment on request.
            The SaaS version runs on <strong>AWS</strong> (CloudFront, Load Balancer, ECS, RDS).
        `,
        "technologies": [
            {
                "name": "Spring"
            },
            {
                "name": "PostgreSQL"
            },
            {
                "name": "React"
            },
            {
                "name": "Semantic UI"
            },
            {
                "name": "JSX"
            },
            {
                "name": "AWS"
            }
        ],
        "images": [
            {
                "path": "../media/checkin1.PNG",
                "description": "The login, which was backed by the corporate LDAP."
            },
            {
                "path": "../media/checkin2.PNG",
                "description": "The dashboard, which shows my team and my check-ins."
            },
            {
                "path": "../media/checkin3.PNG",
                "description": "The map of a floor in one of our buildings."
            },
            {
                "path": "../media/checkin4.PNG",
                "description": "The checkin view of a room with the photos of the colleagues working there."
            }
        ],
        "tags": ["architect"],
        "link": "https://www.msgcheckin.com",
        "youtube": "https://www.youtube.com/watch?v=vtY28vn6w9k",
        "period": "current"
    },
    "portfolio": {
        "name": "My Portfolio",
        "type": "personal",
        "description": `
            This very website, which is meant to showcase my experience and projects.
            <br />
            <br />
            Initially built with vanilla <strong>UI5</strong>, then re-built with custom
            controls using <strong>JSX</strong>, finally re-built again using <strong>React</strong>. 
        `,
        "technologies": [
            {
                "name": "SAP UI5"
            },
            {
                "name": "Bulma"
            },
            {
                "name": "JSX"
            },
            {
                "name": "React"
            },
            {
                "name": "Semantic UI"
            }
        ],
        "images": [
            {
                "path": "../media/portfolio0.PNG",
                "description": "The first UI5 version of the site."
            },
            {
                "path": "../media/portfolio1.PNG",
                "description": "The later re-write using JSX and Bulma."
            },
            {
                "path": "../media/portfolio2.PNG",
                "description": "The current version of the website."
            }
        ],
        "period": "2016 - 2019"
    },
    "msgtrainings": {
        "name": "msg Contiguous Learning",
        "type": "work",
        "description": `
            A series of technical <strong>trainings</strong> primarily for entry level developers and colleagues 
            that wanted to shift technologies. The target technologies were: <strong>Spring Boot</strong>, 
            <strong>NodeJS</strong>, <strong>React</strong>, and <strong>Angular</strong>.
            <br />
            <br />
            I was responsible for preparing the training materials, presenting them, doing live demos, regularly 
            checking in with the trainees and finally reviewing their work.
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "Spring"
            },
            {
                "name": "NodeJS"
            },
            {
                "name": "React"
            },
            {
                "name": "Angular"
            }
        ],
        "tags": ["teaching"],
        "period": "2017 - 2020",
        "github": "https://github.com/ro-msg-spring-training/resources/blob/1d329f42439773bccbb0f44e83591e78f25aa9c4/README.md"
    },
    "msgcareer": {
        "name": "msg Career Start",
        "type": "work",
        "description": `
            msg.CareerStart is the de-facto flagship internship programme of the company's local branch. 
            It was primarily based on an idea of mine.
            <br />
            <br />
            I was the main organizer, a technical mentor and an interviewer for the first edition. 
            We mentored eight students that built a three tier application using <strong>ABAP</strong>, 
            <strong>Spring Boot</strong>, and <strong>Angular</strong>. Afterward, most of these students were 
            offered permanent positions at the company.  
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "Spring"
            },
            {
                "name": "Angular"
            },
            {
                "name": "ABAP"
            }
        ],
        "tags": ["teaching"],
        "period": "2019 - 2020",
        "facebook": "https://www.facebook.com/msg.systems.romania/photos/a.405982052747843/2353226104690085/",
        "link": "https://www.msg-systems.ro/oportunitati-studenti"
    },
    "msgtex": {
        "name": "Travel Expenses",
        "type": "work",
        "description": `
            A project for our internal finance department to help them manage travel expense reports, 
            calculate allowances and track business trips for our colleagues.
            <br />
            <br />
            I acted as technical mentor and product owner for the fairly large team of developers
            assigned to this project.
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "MongoDB"
            },
            {
                "name": "PostgreSQL"
            },
            {
                "name": "Spring"
            },
            {
                "name": "SAP UI5"
            },
            {
                "name": "Docker"
            }
        ],
        "images": [
            {
                "path": "../media/tex0.PNG",
                "description": "The application provides several functionalities and also a configuration UI."
            },
            {
                "path": "../media/tex1.PNG",
                "description": "Most of the functionalities revolve around the employees, whose data may be imported from the HCM system."
            },
            {
                "path": "../media/tex3.PNG",
                "description": "Trip details may be added and viewed."
            },
            {
                "path": "../media/tex2.PNG",
                "description": "At the end of a trip, expenses may be reported and a settlement document is generated."
            }
        ],
        "tags": ["teaching"],
        "period": "2018"
    },
    "awstrouble": {
        "name": "Troubleshooting Service",
        "type": "work",
        "description": `
            A small integration project on <strong>AWS</strong> for parsing XML exports from a legacy system.
            It consisted of a <strong>micro-service</strong> and a <strong>Lambda</strong> triggered by the 
            <strong>S3</strong> events.
            <br />
            <br />
            I played the role of solution architect, designing and aligning the interfaces of the components,
            whilst the implementation itself was tackled by other developers.
        `,
        "technologies": [
            {
                "name": "AWS"
            },
            {
                "name": "Lambda"
            },
            {
                "name": "S3"
            },
            {
                "name": "DynamoDB"
            },
            {
                "name": "Docker"
            }
        ],
        "images": [
            {
                "path": "../media/trouble0.png",
                "description": "The architecture of the setup including the lambda and the micro-service."
            }
        ],
        "tags": ["architect", "lead"],
        "period": "2018 - 2019"
    },
    "awsgdpr": {
        "name": "GDPR Integration",
        "type": "work",
        "description": `
            A small integration project on <strong>AWS</strong> for handling newsletter subscription
            and un-subscription actions to conform to GDPR.
            <br />
            <br />
            I designed and fully implemented this solution directly on the customer's AWS account.
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "AWS"
            },
            {
                "name": "Lambda"
            },
            {
                "name": "Kinesis"
            }
        ],
        "images": [
            {
                "path": "../media/gdprInt0.png",
                "description": "The architecture of the setup including the lambdas and queues for handling failures."
            }
        ],
        "tags": ["architect", "lead"],
        "period": "2018"
    },
    "soaqanda": {
        "name": "Simple Q&A",
        "type": "academic",
        "description": `
            A <strong>micro-service</strong> architecture web application built for the <em>Service oriented 
            architecture</em> master course. 
            <br />
            <br />
            It consisted of several <strong>NodeJS</strong> micro-services,
            a <strong>Zuul</strong> API Gateway, a simplified <strong>OAuth 2.0</strong> authorization
            server and a <strong>React</strong> user interface.
        `,
        "technologies": [
            {
                "name": "NodeJS"
            },
            {
                "name": "Express"
            },
            {
                "name": "React"
            },
            {
                "name": "Spring"
            },
            {
                "name": "OAuth"
            },
            {
                "name": "Docker"
            }
        ],
        "images": [
            {
                "path": "../media/qAndA0.PNG",
                "description": "The list of questions."
            },
            {
                "path": "../media/qAndA1.PNG",
                "description": "A form for asking a new question."
            },
            {
                "path": "../media/qAndA2.PNG",
                "description": "The detail view for a question, showing the votes and the answers."
            },
            {
                "path": "../media/qAndA3.PNG",
                "description": "The user is able to get notifications via email or via Web Push."
            }
        ],
        "period": "2019",
        "github": "https://github.com/serban-petrescu/ubb-soa-qanda"
    },
    "dissgame": {
        "name": "Kindergarten Game",
        "type": "academic",
        "description": `
            A simple story-like game for kindergarten children based on the "La Polul Nord" story by Marin Sorescu.
            <br />
            <br />
            I built it for the <em>Design of interactive software systems</em> master course, the challenge being 
            that the UI must be suitable for usage by four-year-olds.
        `,
        "technologies": [
            {
                "name": "NodeJS"
            },
            {
                "name": "MelonJS"
            },
            {
                "name": "Electron"
            },
            {
                "name": "Grunt"
            }
        ],
        "images": [
            {
                "path": "../media/diss1.PNG",
                "description": "A level of the game where you must collect clothing items."
            }
        ],
        "period": "2018",
        "github": "https://github.com/serban-petrescu/diss-kindergarden-game",
        "link": "https://serban-petrescu.github.io/diss-kindergarden-game/"
    },
    "sapim": {
        "name": "SAPIM",
        "type": "personal",
        "description": `
            <strong>SAP API Manager</strong> command line interface which can be used to deploy, create
            and remove API Proxies.
            <br />
            <br />
            I built this CLI in my spare time to help the development process in <strong>SCP</strong> projects.
        `,
        "technologies": [
            {
                "name": "NodeJS"
            },
            {
                "name": "SAP API Manager"
            }
        ],
        "period": "2018",
        "github": "https://github.com/serban-petrescu/sapim",
        "blog": "https://blogs.sap.com/2018/02/03/sap-api-management-cli/"
    },
    "kickit": {
        "name": "KickIT",
        "type": "personal",
        "description": `
            Co-founder for a Romanian startup, <em>KickIT</em>, targeting the amateur soccer scene.
            <br />
            <br /> 
            I was responsible for architecture, design, implementation and operations for the <strong>cloud-native</strong>
            solution, consisting of a <strong>Spring Boot</strong> backend, <strong>Lambdas</strong> and a <strong>React PWA</strong> 
            deployed on AWS.
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "Spring"
            },
            {
                "name": "PostgreSQL"
            },
            {
                "name": "React"
            },
            {
                "name": "AWS"
            },
            {
                "name": "Lambda"
            },
            {
                "name": "Docker"
            },
            {
                "name": "Bulma"
            }
        ],
        "images": [
            {
                "path": "../media/KICK1.PNG",
                "description": "The home page of the application, showing the feed, PWA install prompt and upcoming events."
            },
            {
                "path": "../media/KICK2.PNG",
                "description": "The screen for organizing a new match, showing the proposed time, the weather and how many people are coming."
            },
            {
                "path": "../media/KICK3.PNG",
                "description": "The application can be used to organize soccer competitions (championships, tournaments, etc.)."
            }
        ],
        "tags": ["architect"],
        "period": "2018 - 2019",
        "facebook": "https://www.facebook.com/kickit.ro"
    },
    "sbwo": {
        "name": "SBWO",
        "type": "personal",
        "description": `
            A <strong>Java</strong> standalone application, with an embedded web server and embedded database. 
            The application aims to help small business to store, manage and use their business data. 
            <br />
            <br />
            I have built this project as an exercise in implementing various mechanisms from scratch 
            (user authentication, session management, scheduling, etc.) to enhance my skills.
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "EclipseLink"
            },
            {
                "name": "Olingo"
            },
            {
                "name": "Jetty"
            },
            {
                "name": "PicoContainer"
            },
            {
                "name": "H2"
            },
            {
                "name": "SAP UI5"
            },
            {
                "name": "JavaScript"
            }
        ],
        "period": "2016 - 2017",
        "github": "https://github.com/serban-petrescu/sbwo"
    },
    "ui5jsx": {
        "name": "UI5 JSX",
        "type": "personal",
        "description": `
            Babel plugin for transpiling inline <strong>JSX</strong> into <strong>UI5</strong> render functions. 
            It enables very easy custom control creation by simplifying the render process.
        `,
        "technologies": [
            {
                "name": "SAP UI5"
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "JSX"
            },
            {
                "name": "BabelJS"
            }
        ],
        "period": "2017",
        "github": "https://github.com/serban-petrescu/ui5-jsx-rm",
        "blog": "https://blogs.sap.com/2017/07/15/bringing-jsx-to-ui5-controls/"
    },
    "ui5auth": {
        "name": "UI5 Auth",
        "type": "personal",
        "description": `
            Lightweight open-source <strong>UI5</strong> library which enables developers to build 
            user interfaces which adapt at runtime to user roles. 
            <br />
            <br />
            The main goal of this library was to decouple the responsibilities of regular UI5 applications: 
            role-based adaptation should be done declaratively and centrally for each app.
        `,
        "technologies": [
            {
                "name": "SAP UI5"
            },
            {
                "name": "JavaScript"
            }
        ],
        "period": "2017",
        "github": "https://github.com/serban-petrescu/ui5-auth",
        "blog": "https://blogs.sap.com/2017/03/27/ui5-authorization-adaptation-library/"
    },
    "ui5viz": {
        "name": "UI5 Viz",
        "type": "personal",
        "description": `
            A simple open-source <strong>UI5</strong> library for displaying graph data. 
            I built it using a <em>D3 force graph</em> layout.
        `,
        "technologies": [
            {
                "name": "SAP UI5"
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "D3.js"
            }
        ],
        "images": [
            {
                "path": "../media/ui5viz0.png",
                "description": "A graph derived from the metadata of an OData service."
            },
            {
                "path": "../media/ui5viz1.png",
                "description": "A graph showing the data of the same OData service."
            }
        ],
        "period": "2017",
        "github": "https://github.com/serban-petrescu/ui5-viz",
        "blog": "https://blogs.sap.com/2017/06/29/graph-data-visualisation-in-ui5/"
    },
    "epmws": {
        "name": "EPM WebSocket",
        "type": "personal",
        "description": `
            A small personal project which realized real-time communication between an <strong>ABAP</strong> 
            based user interface (classic Dynpro), a <strong>UI5</strong> interface hosted on the ABAP system 
            and another UI5 interface hosted on <strong>SAP Cloud Platform</strong>.
        `,
        "technologies": [
            {
                "name": "ABAP"
            },
            {
                "name": "SAP Gateway"
            },
            {
                "name": "Java"
            },
            {
                "name": "EclipseLink"
            },
            {
                "name": "Olingo"
            },
            {
                "name": "SAP UI5"
            },
            {
                "name": "WebSocket"
            }
        ],
        "images": [
            {
                "path": "../media/epmws0.jpg",
                "description": "A side-by-side comparison of the Dynpro and UI5 user interfaces."
            }
        ],
        "period": "2015",
        "github": "https://github.com/serban-petrescu/epm-websockets",
        "blog": "http://scn.sap.com/community/abap/connectivity/blog/2015/07/02/hcp-abap-and-websocket-part-1"
    },
    "webpaint": {
        "name": "Web Paint",
        "type": "academic",
        "description": `
            A <strong>UI5</strong> app which uses <strong>FabricJS</strong> to allow the user to draw by  
            drag-and-dropping shapes and import external pictures. The user can also resize, move and change
            the colors of the shapes, use undo-redo functionality, save or load drawing files and also to export to PNG.
        `,
        "technologies": [
            {
                "name": "HTML"
            },
            {
                "name": "SAP UI5"
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "FabricJS"
            }
        ],
        "period": "2015",
        "images": [
            {
                "path": "../media/webpaint1.PNG",
                "description": "The main drawing area of the application, with the shape palette on the top and the objects' properties on the left."
            }
        ]
    },
    "gde": {
        "name": "Graphical IDE",
        "type": "personal",
        "description": `
            An application which can be used to write imperative <strong>Java</strong> code by dragging and dropping 
            functional blocks. The generated code can also be displayed inside the application, compiled and run. 
            The front-end is done in <strong>UI5</strong> and the back-end is built in <strong>Java</strong>.
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "HTML"
            },
            {
                "name": "SAP UI5"
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "FabricJS"
            }
        ],
        "period": "2015",
        "images": [
            {
                "path": "../media/GDE1.PNG",
                "description": "The drag-and-drop area of the application. The functional blocks can be dragged from the menu strip on the right and properties of each block can be set using the Properties toolbox. Blocks can be moved and their contents explored."
            },
            {
                "path": "../media/GDE2.PNG",
                "description": "The generated code area (corresponding to the previous schematic)."
            },
            {
                "path": "../media/GDE3.PNG",
                "description": "The console area after compiling and running the Java schematic (can be done using either buttons or console commands)."
            }
        ]
    },
    "jreg": {
        "name": "Job Registry",
        "type": "personal",
        "description": `
            This project was built in my spare time for a land surveyor. Using it, one can keep 
            track of all jobs and related court terms. It offers a calendar for seeing court 
            dates and automatically reads data from the <em>Ministry of Justice Web API</em> 
            and the <em>National Agency for Cadaster</em> website to update the data.
        `,
        "technologies": [
            {
                "name": "MySQL"
            },
            {
                "name": "PHP"
            },
            {
                "name": "HTML"
            },
            {
                "name": "JavaScript"
            }
        ],
        "period": "2014",
        "images": [
            {
                "path": "../media/Evidenta1.PNG",
                "description": "The job registry. Each line represents a job. The user can search through the jobs, add a new one, sort them, edit, delete or expand a job to see further attributes."
            },
            {
                "path": "../media/Evidenta2.PNG",
                "description": "An expanded job, showing the data retrieved from the Agency's website (the last row)."
            },
            {
                "path": "../media/Evidenta3.PNG",
                "description": "A fast entry screen, which can be used to enter the inquiry number for a job (after it was given to the Agency)."
            },
            {
                "path": "../media/Evidenta4.PNG",
                "description": "A fast entry screen, which can be used to change the status of a job."
            },
            {
                "path": "../media/Evidenta5.PNG",
                "description": "The court terms calendar."
            }
        ]
    },
    "docgen": {
        "name": "Invoice Generator (II)",
        "type": "academic",
        "description": `
            A <strong>micro-service</strong> architecture web application built for the <em>Service oriented 
            architecture</em> master course. 
            <br />
            <br />
            It is a re-implementation of the older invoice generator it using <strong>Spring</strong>, 
            <strong>Mithril</strong>, <strong>NodeJS</strong> and <strong>Docker</strong>.
        `,
        "technologies": [
            {
                "name": "Spring"
            },
            {
                "name": "Hibernate"
            },
            {
                "name": "MithrilJS"
            },
            {
                "name": "NodeJS"
            },
            {
                "name": "Docker"
            },
            {
                "name": "Semantic UI"
            }
        ],
        "period": "2019",
        "images": [
            {
                "path": "../media/docGen1.PNG",
                "description": "The list of companies managed by the application."
            },
            {
                "path": "../media/docGen2.PNG",
                "description": "A list of invoices for a selected company."
            },
            {
                "path": "../media/docGen3.PNG",
                "description": "The form for creating a new invoice."
            }
        ],
        "github": "https://github.com/serban-petrescu/ubb-soa-docgen"
    },
    "invoice": {
        "name": "Invoice Generator",
        "type": "personal",
        "description": `
            This is an application built on top of <strong>OpenOffice</strong> which can be used to manage invoices 
            for a small company. It allows the user to define multiple profiles, it keeps track of customer data 
            and generates OpenOffice invoices using a user-defined template. Receipts may also be generated from
            an existing invoice.
        `,
        "technologies": [
            {
                "name": "Basic"
            },
            {
                "name": "OpenOffice API"
            }
        ],
        "period": "2013 - 2014",
        "images": [
            {
                "path": "../media/Factura1.PNG",
                "description": "The profile creation / modification screen."
            },
            {
                "path": "../media/Factura2.PNG",
                "description": "The main screen. Allows the user to enter various data related to the invoice, to save, restore, print or even create a receipt for the invoice (opens a separate application). A summary of all invoices can also be generated."
            },
            {
                "path": "../media/Factura3.PNG",
                "description": "A demo invoice generated by the program."
            },
            {
                "path": "../media/Factura4.PNG",
                "description": "A demo invoice summary also generated by the program."
            },
            {
                "path": "../media/Chitanta1.PNG",
                "description": "The receipt data entry screen (fields are auto-filled if the receipt is derived from an invoice)."
            },
            {
                "path": "../media/Chitanta2.PNG",
                "description": "A demo receipt generated by the program."
            }
        ]
    },
    "gdg": {
        "name": "Document Generator",
        "type": "personal",
        "description": `
            A application for land surveyors built on top of <strong>OpenOffice</strong>, which takes input 
            values from the user and optionally an XML data file and generates documents using user specified 
            templates. The values given by the user or read from the XML are either filled directly in the 
            templates or are used to build tables and hide / show sections.
        `,
        "technologies": [
            {
                "name": "Basic"
            },
            {
                "name": "OpenOffice API"
            },
            {
                "name": "C / C++"
            }
        ],
        "period": "2012 - 2014",
        "images": [
            {
                "path": "../media/Form1.PNG",
                "description": "The static input fields of the generator."
            },
            {
                "path": "../media/Form2.PNG",
                "description": "The file selection, template selection and the input field for the optional XML file."
            },
            {
                "path": "../media/Form3.PNG",
                "description": "The output of the generator."
            }
        ]
    },
    "serverman": {
        "name": "Server Manager",
        "type": "personal",
        "description": `
            A program specifically designed to manage dedicated servers for 
            <a href="https://www.taleworlds.com/en/Games/Warband">Mount and Blade: Warband</a>. 
            It allowed the simultaneous management of several servers, checking the logs, creating reports, 
            scheduling start, stop or restart actions.
        `,
        "technologies": [
            {
                "name": "C#"
            },
            {
                "name": "Windows Forms"
            }
        ],
        "period": "2011",
        "images": [
            {
                "path": "../media/Manager1.PNG",
                "description": "The first screen of the program. Allows the user to add or remove servers, to view the current status or to edit configurations."
            },
            {
                "path": "../media/Manager2.PNG",
                "description": "The redirected console of the selected server (both input and output)."
            },
            {
                "path": "../media/Manager3.PNG",
                "description": "The event scheduler for the selected server."
            },
            {
                "path": "../media/Manager4.PNG",
                "description": "The event log for a server."
            }
        ]
    },
    "cloudnativefeedback": {
        "name": "Conference Feedback",
        "type": "personal",
        "description": `
            A small application for submitting feedback after or during the <em>IT Conference on SAP 
            Technologies Cluj</em>.
            <br />
            <br />
            Later on, I have also hosted a small training about <strong>cloud native</strong> development
            using this application as an example.
        `,
        "period": "2018",
        "technologies": [
            {
                "name": "HANA"
            },
            {
                "name": "Spring"
            },
            {
                "name": "UI5"
            }
        ],
        "images": [
            {
                "path": "../media/nativefeedback0.png",
                "description": "During the conference, the feedback was automatically analyzed and displayed on a TV."
            }
        ],
        "youtube": "https://www.youtube.com/playlist?list=PLFVVA9FdSLI3jpwuu0BbbmuYMA5ogORzF",
        "blog": "https://blogs.sap.com/2018/10/17/it-conference-on-sap-technologies-cluj-recap/"
    },
    "utcnsd2019": {
        "name": "Software Design Lab",
        "type": "academic",
        "description": `
            I've hosted the <em>Software Design</em> laboratory for a group of students at T.U. Cluj Napoca.
            <br />
            <br />
            I prepared my own learning resources and recorded our sessions in which we explored various
            architectural styles, design patterns and technologies (mostly <strong>Spring</strong> and 
            <strong>React</strong>).
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "Spring"
            },
            {
                "name": "Hibernate"
            },
            {
                "name": "React"
            },
            {
                "name": "WebSocket"
            }
        ],
        "tags": ["teaching"],
        "period": "2019",
        "github": "https://github.com/serban-petrescu/utcn-sd-resources/",
        "youtube": "https://www.youtube.com/playlist?list=PLFVVA9FdSLI3GzulGsej25e-JzOZK8DGo"
    },
    "swadia": {
        "name": "Swadian Roleplay Mod",
        "type": "personal",
        "description": `
            A <a href="https://www.taleworlds.com/en/Games/Warband">Mount and Blade: Warband</a> mod which 
            aimed to completely change the 
            game concept without forcing players to download anything. For this project, I was the 
            sole developer. It consisted of modified <strong>Python</strong> scripts which were run 
            by the server, <strong>PHP</strong> sites, <strong>C / C++</strong> 
            log parsers.
        `,
        "technologies": [
            {
                "name": "MySQL"
            },
            {
                "name": "Python"
            },
            {
                "name": "Assembly"
            },
            {
                "name": "C / C++"
            },
            {
                "name": "PHP"
            },
            {
                "name": "HTML"
            },
            {
                "name": "JavaScript"
            }
        ],
        "period": "2010 - 2011"
    },
    "dipko": {
        "name": "DIPKO",
        "type": "work",
        "description": `
            I was initially the architect and lead developer for building a cloud-based, multi-tenant 
            <strong>SaaS platform</strong> for managing municipal services. In 2021, I served as an 
            occasional consultant for the team.
            <br />
            <br />
            We implemented a modular <strong>NodeJS</strong> core, communicating with several 
            <strong>serverless micro-services</strong> and a monolithic <strong>Angular</strong> frontend application.
        `,
        "technologies": [
            {
                "name": "NodeJS"
            },
            {
                "name": "Express"
            },
            {
                "name": "GraphQL"
            },
            {
                "name": "Angular"
            },
            {
                "name": "PostgreSQL"
            },
            {
                "name": "AWS"
            },
            {
                "name": "DynamoDB"
            },
            {
                "name": "Terraform"
            },
            {
                "name": "Cognito"
            },
            {
                "name": "Lambda"
            },
            {
                "name": "S3"
            },
            {
                "name": "SQS"
            }
        ],
        "images": [
            {
                "path": "../media/dipko1.png",
                "description": "The fully-customizable landing page of a tenant."
            },
            {
                "path": "../media/dipko2.PNG",
                "description": "The list of bath houses enrolled in the tenant's account."
            },
            {
                "path": "../media/dipko3.PNG",
                "description": "The administration view allowing tenant admins to customize each module of the site."
            },
            {
                "path": "../media/dipko4.PNG",
                "description": "The checkout page which was integrated with several German payment providers."
            }
        ],
        "tags": ["architect", "lead"],
        "period": "2019 - 2021",
        "link": "https://www.dipko.de/",
        "youtube": "https://www.youtube.com/watch?v=hglkZizds-w"
    },
    "gsa": {
        "name": "GSA: Common Services",
        "type": "work",
        "description": `
            Architect and lead developer for building a suite of reusable <strong>micro-services</strong> supporting 
            business applications for a market-leading manufacturing company. 
            <br />
            <br />
            I've had a major role in guiding our customer through various architectural decisions, 
            whilst also implementing the most technically challenging components.
        `,
        "technologies": [
            {
                "name": "Spring"
            },
            {
                "name": "HANA"
            },
            {
                "name": "Hibernate"
            },
            {
                "name": "Cloud Foundry"
            },
            {
                "name": "SAP API Manager"
            },
            {
                "name": "Bamboo"
            },
            {
                "name": "OAuth"
            }
        ],
        "images": [
            {
                "path": "../media/gsa.png",
                "description": "The architecture of the micro-services and surrounding components (components managed by our team in blue)."
            }
        ],
        "tags": ["architect", "lead"],
        "period": "2017 - 2019"
    },
    "msg.cm": {
        "name": "Candidate Management",
        "type": "work",
        "description": `
            An internal project for managing our entry-level job candidates. The project was built using 
            <strong>Spring Boot</strong> and a <strong>PostgreSQL</strong> database, with <strong>React</strong> 
            on the front-end. 
            <br />
            <br />
            My role was that of a technical mentor, organizer and product owner.
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "Spring"
            },
            {
                "name": "PostgreSQL"
            },
            {
                "name": "React"
            },
            {
                "name": "Redux"
            },
            {
                "name": "Docker"
            }
        ],
        "tags": ["teaching"],
        "period": "2016 - 2018",
        "github": "https://github.com/serban-petrescu/candidate-management"
    },
    "msg.insas": {
        "name": "Insurance as a service",
        "type": "work",
        "description": `
            A continuation of the "Next Generation Underwriting" project, but focused more towards 
            <strong>cloud enablement</strong>. The project consists of several smaller prototypes or 
            showcases that aim to be deployed on a cloud platform (e.g. AWS). 
            <br />
            <br />
            I had mostly development-related tasks related to building a <strong>MEAN</strong> stack solution.
        `,
        "technologies": [
            {
                "name": "NodeJS"
            },
            {
                "name": "Express"
            },
            {
                "name": "MongoDB"
            },
            {
                "name": "Mongoose"
            },
            {
                "name": "Angular"
            },
            {
                "name": "TypeScript"
            }
        ],
        "period": "2017",
        "link": "https://www.minnosphere.com"
    },
    "nguw": {
        "name": "Next Generation Underwriting",
        "type": "work",
        "description": `
            Project focused on aiding underwriters in their work through <em>predictive analytics</em> 
            and pre-built business rules. 
            <br />
            <br />
            My role in this project was a combination of a solutions architect, development lead and full stack developer. 
            <br />
            <br />
            We were a relatively small team of five developers and we built a series of <strong>Java</strong> and <strong>UI5</strong> 
            MVPs over the span of a year.
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "R"
            },
            {
                "name": "MySQL"
            },
            {
                "name": "Olingo"
            },
            {
                "name": "JAX-RS"
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "SAP UI5"
            },
            {
                "name": "D3.js"
            }
        ],
        "images": [
            {
                "path": "../media/nguw0.png",
                "description": "The user could define questions to build an underwriting questionnaire."
            },
            {
                "path": "../media/nguw2.png",
                "description": "The answers from the questions would be used to compute further attributes using formulas."
            },
            {
                "path": "../media/nguw1.png",
                "description": "All these results would be fed into a ML algorithm during the underwriting process."
            }
        ],
        "tags": ["architect", "lead"],
        "period": "2016 - 2017",
        "link": "https://www.minnosphere.com"
    },
    "gtfe": {
        "name": "GTFE Analysis Reports",
        "type": "work",
        "description": `
            A customer add-on to FS-RI (Financial Services - Reinsurance) for the General Reinsurance Company. 
            <br />
            <br />
            The add-on consisted of several <strong>UI5</strong> applications which pulled various performance 
            indicators calculated by <strong>ABAP CDS</strong> views and exposed through <strong>SAP Gateway</strong>
            OData services.
        `,
        "technologies": [
            {
                "name": "ABAP"
            },
            {
                "name": "SAP Gateway"
            },
            {
                "name": "SAP UI5"
            }
        ],
        "tags": ["lead"],
        "period": "2016"
    },
    "msg.taxo": {
        "name": "Taxonomic Engine",
        "type": "work",
        "description": `
            A <strong>SCP</strong>, <strong>HANA</strong>, <strong>UI5</strong> project for the human resources industry. 
            The main goal of the project was to automatically parse and classify candidates based on their CVs.
            <br />
            <br />
            We had a small development team in which I was the technical lead under the guidance of a senior software architect. 
        `,
        "technologies": [
            {
                "name": "HANA"
            },
            {
                "name": "SQL"
            },
            {
                "name": "SAP UI5"
            },
            {
                "name": "D3.js"
            }
        ],
        "period": "2015 - 2016",
        "images": [
            {
                "path": "../media/taxo1.PNG",
                "description": "The result obtained after parsing and analyzing the contents of my own CV."
            },
            {
                "path": "../media/taxo2.PNG",
                "description": "The same results, but compared against the typical profile of a Java Developer (as deduced by the engine)."
            }
        ]
    },
    "msg.lrm": {
        "name": "msg.LRM",
        "type": "work",
        "description": `
            Various customer development projects centered on the Life Reinsurance Module. 
            <br />
            <br />
            I was part of the product development team for a few months to get acquainted to the module and the underlying framework. 
            Afterwards, I worked on customization projects for large enterprise customers.
        `,
        "technologies": [
            {
                "name": "ABAP"
            }
        ],
        "period": "2014 - 2015",
        "link": "https://www.msg-global.com/reinsurance"
    },
    "fs-pm": {
        "name": "SAP FS-PM add-on",
        "type": "work",
        "description": `
            A small customer addition to the Financial Services - Policy Management SAP module.
        `,
        "technologies": [
            {
                "name": "ABAP"
            }
        ],
        "period": "2014 - 2015",
        "link": "https://www.msg-global.com/insurance"
    },
    "internship": {
        "name": "Internship Apps",
        "type": "work",
        "description": `
            Several primary insurance small <strong>UI5</strong> applications. All of them had 
            <strong>SAP Gateway</strong> backend services, which exposed RFCs from standard modules. 
            Most of the applications targeted the transport insurance segment and two of them targeted 
            small goods primary insurance.
        `,
        "images": [
            {
                "path": "../media/internshipBill1.PNG",
                "description": "Using the bill creation application, the user can add several items to a new bill."
            },
            {
                "path": "../media/internshipBill2.PNG",
                "description": "Then the user must either search for the customer (business partner) or create a new one."
            },
            {
                "path": "../media/internshipBill3.PNG",
                "description": "At the end, the user must agree to the terms and conditions. A PDF receipt is created afterwards."
            }
        ],
        "technologies": [
            {
                "name": "ABAP"
            },
            {
                "name": "SAP Gateway"
            },
            {
                "name": "SAP UI5"
            }
        ],
        "period": "2014"
    },
    "smta": {
        "name": "SMTA",
        "type": "academic",
        "description": `
            A shipment tracking application targeted at the transport insurance industry branch, consisting of two 
            tracking device prototypes (<em>Android, Arduino</em>) which communicate with <strong>cloud services</strong>,
            which store the data, send out notifications and process the collected figures to expose analytical scenarios.

            <br />
            <br />

            As this was my bachelor degree project, I've built it completely from scratch by myself.
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "HANA"
            },
            {
                "name": "SQL"
            },
            {
                "name": "Android"
            },
            {
                "name": "Arduino"
            },
            {
                "name": "C#"
            },
            {
                "name": "SAP UI5"
            }
        ],
        "images": [
            {
                "path": "../media/bachelor1.png",
                "description": "The sensor maintenance application."
            },
            {
                "path": "../media/backelor2.png",
                "description": "The real-time tracking application with a transport being currently selected."
            },
            {
                "path": "../media/backelor3.png",
                "description": "The transport evolution comparison application (the user has selected to align the starts of the data series)."
            },
            {
                "path": "../media/backelor4.png",
                "description": "The overall statistics application output."
            }
        ],
        "period": "2015 - 2016",
        "github": "https://github.com/serban-petrescu/diploma-public",
        "blog": "https://blogs.sap.com/2017/06/20/the-story-of-a-scp-based-tracking-solution/"
    },
    "docgenre": {
        "name": "Document Generator (Remake)",
        "type": "academic",
        "description": `
            A remake of an older project, with <strong>MongoDB</strong> for storing the document 
            templates, <strong>Apache Derby + JDBC</strong> for storing the various user, template and field 
            configurations and an <strong>UI5</strong> interface. The <strong>OpenOffice</strong> API was called 
            directly from Java to generate the documents.
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "JDBC"
            },
            {
                "name": "MongoDB"
            },
            {
                "name": "OpenOffice API"
            },
            {
                "name": "SAP UI5"
            }
        ],
        "images": [
            {
                "path": "../media/documentGen0.PNG",
                "description": "The field configuration view (allows the users to define custom field validations)."
            },
            {
                "path": "../media/documentGen1.PNG",
                "description": "The document generation view. The users must fill in all defined fields with valid values."
            }
        ],
        "period": "2015"
    },
    "hospital": {
        "name": "Hospital",
        "type": "academic",
        "description": `
            Hospital appointment management <strong>cloud application</strong> realized with <strong>JPA</strong> 
            and <strong>UI5</strong>. Real-time notifications were supported by using <strong>WebSocket</strong> 
            communication between the clients and the cloud.
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "EclipseLink"
            },
            {
                "name": "WebSocket"
            },
            {
                "name": "SAP UI5"
            }
        ],
        "images": [
            {
                "path": "../media/hospital1.PNG",
                "description": "The appointment list as seen by a doctor."
            },
            {
                "path": "../media/hospital2.PNG",
                "description": "The patients list as seen by a nurse or secretary. The opened dialog can be used to make a new appointment."
            },
            {
                "path": "../media/hospital3.PNG",
                "description": "A real-time notification received by the doctor when one of his patients has arrived at the hospital."
            }
        ],
        "period": "2015"
    },
    "bank": {
        "name": "Bank",
        "type": "academic",
        "description": `
            A small bank application on the cloud. Persistency was done with plain <strong>JDBC</strong> and the 
            user interface with <strong>UI5</strong>. This application was later remade by using 
            <strong>Hibernate</strong>, <strong>Spring</strong> and <strong>AngularJS</strong>.
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "JDBC"
            },
            {
                "name": "SAP UI5"
            },
            {
                "name": "Hibernate"
            },
            {
                "name": "Spring"
            },
            {
                "name": "Angular"
            }
        ],
        "images": [
            {
                "path": "../media/bank1.PNG",
                "description": "The home page of admin users."
            },
            {
                "path": "../media/bank2.PNG",
                "description": "The customer details page with the account list at the bottom."
            },
            {
                "path": "../media/bank3.PNG",
                "description": "The activity log of a user."
            },
            {
                "path": "../media/bank4.png",
                "description": "The account list (remake)."
            },
            {
                "path": "../media/bank5.png",
                "description": "The detail page for an account (remake)."
            }
        ],
        "period": "2014 - 2015"
    },
    "ticketsmock": {
        "name": "Ticket System",
        "type": "academic",
        "description": `
            A UI-only application for an online, web-based ticketing system. It has three types of users: 
            customers which may open support tickets, employees which must solve the tickets and managers 
            which can oversee the performance of the employees and must solve any customer complaints.
        `,
        "technologies": [
            {
                "name": "SAP UI5"
            }
        ],
        "images": [
            {
                "path": "../media/ticket1.PNG",
                "description": "The view which displays a customer's previously opened tickets."
            },
            {
                "path": "../media/ticket2.PNG",
                "description": "The view which shows an employee's unsolved tickets."
            },
            {
                "path": "../media/ticket3.PNG",
                "description": "The employee performance statistics application for managers."
            }
        ],
        "period": "2015",
        "link": "https://uidproject-p1940442392trial.dispatcher.hanatrial.ondemand.com/webapp/index.html?hc_reset"
    },
    "bookstore": {
        "name": "Bookstore",
        "type": "academic",
        "description": `
            A small bookstore on the cloud. Is very similar to the bank applications, but the persistency was 
            done in XML files (stored in a Cloud Document Store) and the user also has the possibility of 
            generating reports in various formats (TXT, XML, CSV).
        `,
        "technologies": [
            {
                "name": "Java"
            },
            {
                "name": "CMIS"
            },
            {
                "name": "SAP UI5"
            }
        ],
        "images": [
            {
                "path": "../media/book1.PNG",
                "description": "The home page of an admin user (notice the tiles for generating reports)."
            }
        ],
        "period": "2014"
    },
    "asmgraph": {
        "name": "Assembly Graph Plotter",
        "type": "academic",
        "description": `
            A mathematical functions graph plotting application entirely written in <strong>assembly</strong>. 
            The user is able to enter the mathematical formula in the console and then the program plots the 
            function's graph.
        `,
        "technologies": [
            {
                "name": "Assembly"
            }
        ],
        "images": [
            {
                "path": "../media/asm1.png",
                "description": "The formula entry console prompt sequence."
            },
            {
                "path": "../media/asm2.png",
                "description": "The resulting graph plot."
            }
        ],
        "period": "2013"
    }
};


const highlights = {
    "projects": [projects.eswvpis, projects.msgcheckin, projects.dipko]
};

const data = {
    projects,
    highlights
}

for (const key of Object.keys(projects)) {
    fs.writeFileSync(
        path.join('.', 'content', 'project', key + '.json'), 
        JSON.stringify({
            ...projects[key], 
            highlighted: highlights.projects.includes(projects[key]),
            description: projects[key].description.trim()
        }, null, 4), 
        {encoding: 'utf-8'
    });
}
