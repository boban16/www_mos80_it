#!/usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');
const path = require('path');

const {
  createProjectDirectory,
  copyNextJSFiles,
  copyGatsbyFiles,
  copyAdditionalPackages,
  copyThemeFiles,
  adjustPackageJsonConfig,
  clearPages,
} = require('./steps');

console.log(chalk`{bold Hi, welcome to Pagerland CLI}

{magenta Pagerland is offers a great, smooth looking and fast landing page templates built on Gatsby and React.}
{magenta With this CLI you can create a new project with preconfigured single theme based on Gatsby or Next.JS}
`);

const questions = [
  {
    type: 'input',
    name: 'directory',
    message: 'What is a name of you project?',
    default: 'pagerland',
  },
  {
    type: 'list',
    name: 'platform',
    message: 'Which platform would you like to use?',
    choices: ['Next.JS', 'Gatsby'],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'list',
    name: 'theme',
    message: 'Which theme would you like to use?',
    choices: ['Mobile App', 'Mobile App 2'],
  },
];

inquirer.prompt(questions).then(async options => {
  try {
    console.log(`
      Please wait, we're creating your project
    `);

    createProjectDirectory(options.directory);

    if (options.platform === 'next.js') {
      await copyNextJSFiles(options.directory);
    } else {
      await copyGatsbyFiles(options.directory);
    }

    await copyAdditionalPackages(options.directory);
    await copyThemeFiles(options.directory, options.theme);
    await adjustPackageJsonConfig(options.directory);
    await clearPages(options.directory, options.theme);

    console.log(chalk`
Success! Created new project with theme {bold ${options.theme}} at {bold ${path.resolve(
      process.cwd(),
      options.directory,
    )}}
Now you can go to this directory and install dependencies:

  {cyan cd ${options.directory}}
  {cyan yarn install}
  
Inside that directory, you can run several commands:

  {cyan yarn dev}
    Starts the development server.

  {cyan yarn build}
    Bundles the app into static files for production.

  {cyan yarn start}
    Starting production environment.`);
  } catch (error) {
    console.log(chalk.red(`Error, process stopped. ${error}`));
  }
});
