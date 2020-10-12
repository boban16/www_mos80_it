const fs = require('fs');
const ora = require('ora');
const path = require('path');
const rimraf = require('rimraf');

const { copyFiles, mapThemeNameToDirectory, mapThemeNameToFile } = require('./utils');

const createProjectDirectory = directory => {
  if (fs.existsSync(directory)) {
    throw new Error(`Directory ${directory} already exists.`);
  }

  const spinner = ora('Creating project directory').start();
  fs.mkdirSync(directory);
  spinner.succeed('Creating project directory');
};

const copyNextJSFiles = async directory => {
  const spinner = ora('Copying Next.JS files').start();

  await copyFiles(
    path.resolve(__dirname, '..', 'pagerland-next'),
    path.resolve(process.cwd(), directory),
    /pagerland-next\/(node_modules|\.next)/,
  );

  spinner.succeed('Copying Next.JS files');
};

const copyGatsbyFiles = async directory => {
  const spinner = ora('Copying Gatsby files').start();

  await copyFiles(
    path.resolve(__dirname, '..', 'pagerland-gatsby'),
    path.resolve(process.cwd(), directory),
    /pagerland-gatsby\/(node_modules|\.cache|public)/,
  );

  spinner.succeed('Copying Gatsby files');
};

const copyAdditionalPackages = async directory => {
  const spinner = ora('Copying additional packages').start();
  await Promise.all(
    ['common', 'icons'].map(async subdir => {
      await copyFiles(
        path.resolve(__dirname, '..', subdir),
        path.resolve(process.cwd(), directory, 'packages', subdir),
        /packages\/.*\/(node_modules)/,
      );
    }),
  );

  spinner.succeed('Copying additional packages');
};

const copyThemeFiles = async (directory, themeName) => {
  const themeDirectory = mapThemeNameToDirectory(themeName);

  const spinner = ora('Copying theme files').start();

  await copyFiles(
    path.resolve(__dirname, '..', 'themes'),
    path.resolve(process.cwd(), directory, 'packages', 'themes'),
    /packages\/themes\/(node_modules|src)/,
  );

  await copyFiles(
    path.resolve(__dirname, '..', 'themes', 'src', themeDirectory),
    path.resolve(process.cwd(), directory, 'packages', 'themes', 'src', themeDirectory),
    /packages\/themes\/(node_modules)/,
  );

  spinner.succeed('Copying theme files');
};

const adjustPackageJsonConfig = async directory => {
  const spinner = ora('Adjusting package.json config').start();
  const packageJsonFile = path.resolve(process.cwd(), directory, 'package.json');

  const data = fs.readFileSync(packageJsonFile, 'utf-8');

  const newData = {
    ...JSON.parse(data),
    workspaces: ['packages/*'],
  };

  fs.writeFileSync(packageJsonFile, JSON.stringify(newData, null, '  '));

  spinner.succeed('Adjusting package.json config');
};

const clearPages = async (directory, themeName) => {
  const themeFile = mapThemeNameToFile(themeName);

  const spinner = ora('Removing unnecessary files').start();

  await new Promise(resolve => {
    rimraf(
      path.resolve(process.cwd(), directory, 'src', 'pages', `!(_document.jsx|${themeFile}.jsx)`),
      () => {
        resolve(true);
      },
    );
  });

  fs.renameSync(
    path.resolve(process.cwd(), directory, 'src', 'pages', `${themeFile}.jsx`),
    path.resolve(process.cwd(), directory, 'src', 'pages', `index.jsx`),
  );

  spinner.succeed('Removing unnecessary files');
};

module.exports = {
  createProjectDirectory,
  copyNextJSFiles,
  copyGatsbyFiles,
  copyAdditionalPackages,
  copyThemeFiles,
  adjustPackageJsonConfig,
  clearPages,
};
