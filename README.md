# Simple FE Project Setup
A step by step tutorial on how to create and setup a simple frontend project. Only simple, basic and necessary stuff will be covered here, and the project itself can later be expanded and explored in more detail. Before starting with guidelines, create a new project directory on your machine.
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
- **scripts** - key-value pairs, where key is name of the task and value contains command which will be executed; scripts are invoked when running command ```npm run <key>```,
- **dependencies** - packages our project depends on; required to run our application,
- **devDependencies** - same as dependencies, but needed only during development.

We will keep a closer look on scripts, dependencies and devDependencies during this setup.

### Git
#### About:
After creating our package.json, the next best thing to do is include git. It is the most famous version control system in the world, and will really make our work easier.
#### Actions:
Run command in root of our project directory ```git init```. Now we are able to use git commands (https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html).
Sometimes we don't want to track changes in all files. To tell git what files it should ignore when commiting, we need to create a **.gitignore** file. Do that with command ```touch .gitignore```. Inside of that file, add patterns (row by row) for files which should be ignored (for ex. *node_modules*, *\*.txt*, etc.) and then save changes. There is also a possibility to add global **.gitignore** file.

### Node, npm scripts and npx
#### About:
Before continuing with other topics, we would need to write some test code for better understanding. Create a new source directory inside your project directory (name example **src**). Inside of that directory create a JavaScript file (name example **index.js**) and type some JavaScript code in it. To execute that code, run node from command line with path to that JavaScript file. In our example that command would be ```node ./src/index.js```.
Most of the times we will have some repetitive tasks and executing all of them in command line with node can get long and confusing. That is why npm scripts are used. Write an example npm script for executing code from our JavaScript file: ```"start": "node ./src/index.js"```. Also, npm scripts can be nested into other npm scripts and that way commands written in console get even shorter and easier to handle.
Additional thing to mention is **npx**. When we have packages which we want to execute, writing just their name in command line will fail if package isn't installed globally. That means we would need to provide local path to package which is installed locally. To be able to use only package name, **npx** should be added to a command as prefix. It will check for locally installed packages first and then move to global. If npm scripts are written, they don't need to use **npx** as prefix since they are linked to current project and locally installed packages would be checked first.
Optionally, create destination directory as well (name example **dist**), but it is not necessary since it will be generated by some of the upcoming commands.

### Babel
#### About:
We want our code to be able to run in many different browsers, and some of those don't support newer version of our JavaScript code. So for us to be able to use newer JavaScript but still run the application in older browsers we should install **Babel**. Babel is a monorepo, which means that it includes multiple plugins which are **npm** libraries on their own, so to use those libraries they must be installed as well. For our purposes we will need **@babel/preset-env** plugin, which will act like transpiler for our javascript code.
#### Actions:
First we need to install babel: ```npm install --save-dev @babel/core @babel/cli```. With ```--save-dev``` command we are placing our babel packages into devDependencies in our package.json. After babel install we also need to install our plugin: ```npm install --save-dev @babel/preset-env```. To test, execute ```npx babel ./src/index.js``` and check if transpiled code appeared in console. The error will appear and that is because babel needs to be told explicitly to use a certain plugin. To be able to use our plugin, add a configuration file to the project root called **.babelrc**, and inside of it add this code: ```{
    "presets": [
        "@babel/preset-env"
    ]
}```. Now our previous command should work. With this command our code gets transpiled but not saved, so we need to make sure it is saved in our **dist** folder. So use command ```npx babel src --out-dir dist```, or write a npm script. All files from **src** folder will be transpiled and saved into **dist** folder. If for some reason you don't want to have .babelrc file, you can alter previous command like this and it will still work: ```npx babel src --out-dir dist --presets=@babel/preset-env --no-babelrc```.

### uglification and minification
bla
