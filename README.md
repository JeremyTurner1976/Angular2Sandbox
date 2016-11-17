# Angular 2 Sandbox

## The API
- Clone the Git Repository via VS 2015 and download to local repo
- Install the Adventure Works 2014 DB into SQL Express. [Samples](https://msdn.microsoft.com/en-us/library/mt710790.aspx)
	 ```sh
		RESTORE FILELISTONLY
		FROM DISK = 'C:\Users\JeremyT\Downloads\Adventure Works 2014 Full Database Backup\AdventureWorks2014.bak'
		GO
		
		--AdventureWorks2014_Data
		--AdventureWorks2014_Log

		RESTORE DATABASE AdventureWorks
		FROM DISK = 'C:\Users\JeremyT\Downloads\Adventure Works 2014 Full Database Backup\AdventureWorks2014.bak'
		WITH MOVE 'AdventureWorks2014_Data' TO 'c:\AdventureWorks\AdventureWorks.mdf',
		MOVE 'AdventureWorks2014_Log' TO 'c:\AdventureWorks\AdventureWorks.ldf'
	```
- Load the AngularBase.sln found in the Github Repo, set the AngularBase.Api project as the startup project
- Set the Properties -> Web of the API project to start at a specific page which should be 'Help'
- Start the API Project in VS 2015 and confirm that you are able to hit an expected endpoint [Test Api Call](http://localhost:51493/api/v0.0.0/Products)
- At this point you should see both Help functionality and the returned products call for your API. Adventure works will allow for any UI test case in this sandbox, and allowing VS to create controllers for you via the Data Project will ensure that code is consistent accross all controllers.
- Cors is enabled in this WebApi via [Asp.Net WebApi.Cors](https://www.asp.net/web-api/overview/security/enabling-cross-origin-requests-in-web-api#enable-cors)
- I will be porting over features from my previous Angular 1.4 and Ember 1.8 Applications to flesh out the back end in the future, starting with paged loading only 10 records per request

## The Front End
- Install [Visual Studio Code](https://code.visualstudio.com/)

  > I recommend in the install process that you alter one default set. Select Additional Tasks -> Open with Code -> Select yes for both options. This allows you to open a project directly from its folder in File Explorer.
  
- Goto your directory for the Angular 2 Sandbox, right click on the folder AngularBase.Ui and select Open With Code.
- Goto the File tab and select Auto Save, this will make a full file save on change every second 
- Now Install some extensions, you open this by selecting the box icon on the bottom left. I recommend:
	- Git History
	- Debugger for Chrome
	- Bootstrap 3 Snippets
	- Instant Markdown
	- Install Recommended extensions by using the ... menu item. Skip the Mono extension it is for Linux and OSX.
	- Show popular extensions as well in the same menu and take a look at the top 20

### Angular 2 Cli to generate code, build, deploy, and test
- Install the [Prerequisites](https://github.com/angular/angular-cli#prerequisites) for Angular CLI. You can see what is installed by typing 'node -v' or 'npm -v' in a command prompt.
	- [Node and Npm MSI](https://nodejs.org/en/)
- In VS Code, in your open solution, right click the folder source and select 'Open in Command Prompt', then go up one level via'cd ..'
- Now at this root app level, enter the following commands, disregard any warnings they are libraries for other Operating Systems and expected:
	- npm install -g angular-cli@latest
	- npm install
	- ng serve
- You should now be serving up the front end of our Web Api 2.2 Angular 2 solution. [Try It](http://localhost:4200)
	> Note, you must have the below described Express Server or the WebApi server ready to pass data in order to load pages with data, such as Products.
		
- You can close any console window Node Service by entering Ctrl-C twice and selecting yes.
- This is also a work in progress as this is just a place to learn

### The Express Server Api
- In order to allow for Automated testing against a set of mock data, and Test Driven Development in parrallel with API work I brought in an Express Server
	- To use this, simply right click the directory AngularBase.Ui/express-mocks and choose to 'Open in Command Prompt'. Then enter 'node app.js'.
	- The preferred method at this point is to have two command prompts open, one running Angular and the other running the express server
	- I have just started working on this, and have not resolved single product loads, and paged loading only 10 records per request
	- I expect to expand upon this in the future to match Ember-Cli's structure, I miss you 'ember g http-mock posts'
	- I used [this](https://javascriptrocks.wordpress.com/2016/06/04/express-with-angular-cli-in-5-minutes/) resource to create this simplest possible version

## Additional Resources

- PluralSight Tutorials: 
	- [John Papas RXjs sample](https://www.pluralsight.com/courses/play-by-play-angular-2-rxjs-http-restful-services-john-papa-dan-wahlin)
		> Windows needed some help to get [MongoDb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) up for this
	
    - [Angular 2: Getting Started](https://www.pluralsight.com/courses/angular-2-getting-started)
	

- All the style is from a [WrapBootstrap](https://wrapbootstrap.com/) Theme:
	- [Smarty](http://theme.stepofweb.com/Smarty/v1.1.4/HTML/index.html)


## Angular Cli

This project was generated with[angular - cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

### Development server
Run `ng serve` for a dev server.Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component.You can also use `ng generate directive/pipe/service/class`.

### Build

Run `ng build` to build the project.The build artifacts will be stored in the `dist/` directory.Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via[Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the[Angular - CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
