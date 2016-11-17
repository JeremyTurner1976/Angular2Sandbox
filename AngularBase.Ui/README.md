# Angular 2 Sandbox

[Github Resource](https://github.com/JeremyTurner1976/Angular2Sandbox)

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
  - Cors is enabled in this WebApi via [Asp.Net WebApi.Cors] (https://www.asp.net/web-api/overview/security/enabling-cross-origin-requests-in-web-api#enable-cors)
  - I will be porting over features from my previous Angular 1.4 and Ember 1.8 Applications to flesh out the back end in the future
  
## The Front End
  - Install [Visual Studio Code] (https://code.visualstudio.com/)
    > I recommend in the install process that you alter one default set. Select Additional Tasks -> Open with Code -> Select yes for both options. This allows you to open a project directly from its folder in File Explorer.
  - Goto your diretory for the Angular 2 Sandbox, right click on the folder AngularBase.Ui and select Open With Code.
  - Goto the File tab and select Auto Save, this will make a full file save every second 
  - Now Install some  extensions, you open this by selecting the box icon on the bottom left. I recommend:
    - Git History
	- Debugger for Chrome
    - Bootstrap 3 Snippets
    - Generally it is worthwhile to look at the top 20 or so extensions and choose any others you might like

### Angular 2 Cli to generate code, build, deploy, and test
  - Install the [Prerequisites](https://github.com/angular/angular-cli#prerequisites) for Angular CLI. You can see what is installed by typing 'node -v' or 'npm -v' in a command prompt.
    - [Node and Npm MSI](https://nodejs.org/en/)
  - In VS Code, in your open solution, right click the folder source and select 'Open in Command Prompt', then enter cd ..
  - Now at this root app level, enter the following commands:


# Angular Cli

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
