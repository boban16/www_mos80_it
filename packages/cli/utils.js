const cpr = require('cpr');

const copyFiles = async (source, destination, filters) => {
  return new Promise((resolve, reject) =>
    cpr(
      source,
      destination,
      {
        filter: filters,
      },
      err => {
        if (err) {
          reject(new Error(err));
        }
        resolve(true);
      },
    ),
  );
};

const mapThemeNameToDirectory = name => {
  switch (name) {
    case 'Mobile App':
    case 'Mobile App 2':
      return 'MobileApp';
    default:
      return '';
  }
};

const mapThemeNameToFile = name => {
  switch (name) {
    case 'Mobile App':
      return 'mobile-app';
    case 'Mobile App 2':
      return 'mobile-app-2';
    default:
      return '';
  }
};

module.exports = {
  copyFiles,
  mapThemeNameToDirectory,
  mapThemeNameToFile,
};
