# Simple FE Project Setup
A step by step tutorial on how to create and setup a simple frontend project. Only simple, basic and necessary stuff will be covered here, and the project itself can later be expanded and explored in more detail. Before starting with guidelines, create a project directory for your project on your machine.
## Guidelines
### npm
#### About:
Node Package manager, or **npm**, is an online repository used by developers for publishing open-source Node.js projects. Node modules/libraries are grouped together into one package, which can be used by other packages or in other individual projects. For others to make use of those packages, **npm** also assists in package installation and version and dependency management. 
To be able to use **npm**, Node needs to be installed first (https://nodejs.org/en/download/).

#### Actions:
First we want to create package.json file, since we will be using existing packages in our project. Open up the terminal, go to the project directory (root directory), run the command ```npm init```, and answer the questions in command line. If you want to skip those questions, run instead ```npm init -y``` or ```npm init --yes```. After that our package.json file will get created and we will see our metadata there. Metadata properties are:
- **name (mandatory)** - name of our project,
- **version (mandatory)** - current version of our project,
- **licence** - licence for our project; MIT, ISC, GPL-3.0 are mostly used,
- **description** - Short synopsis of our project,
- **keywords** - for identifying our project,
- **main** - entry point to our application,
- **repository** - source of our application, with type (most often git or svn) and url to that repository,
- **scripts** - key-value pairs, where key is name of the task and value contains command which will be executed; scripst are invoked when running command ```npm run <key>```,
- **dependencies** - packages our project depends on; required to run our application,
- **devDependencies** - same as dependencies, but needed only during development.

We will keep a closer look on scripts, dependencies and devDependencies during this setup.

### Git
#### About:
After creating our package.json, the next best thing to do is include git. It is the most famous version control system in the world, and will really make our work easier.
#### Actions:
Run command in root of our project directory ```git init```. Now we are able to use git commands (https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html).
Sometimes we don't want to track changes in all files. To tell git what files it should ignore when commiting, we need to create a **.gitignore** file. Do that with command ```touch .gitignore```. Inside of that file, add patterns (row by row) for files which should be ignored (for ex. *node_modules*, *\*.txt*, etc.) and then save changes. There is also a possibility to add global **.gitignore** file.
### Babel
#### About:
We want our code to be able to run in many different browsers, and some of those don't support newer version of our javascript code. So for us to be able to use newer javascript but still run the application in older browsers we should install **Babel**. Babel is a monorepo, which means that it includes multiple plugins which are NPM libraries on their own, so to use those libraries they must be installed as well. For our purposes we will need **@babel/preset-env** plugin, which will act like transpiler for our javascript code.
#### Actions:
First we need to install babel: ```npm install --save-dev @babel/core @babel/cli```. With ```--save-dev``` command we are placing our babel packages into devDependencies in our package.json. After babel install we also need to install our plugin: ```npm install --save-dev @babel/preset-env```.
### uglification and minification
bla
