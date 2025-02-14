// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   
    console.log(license);
    
    const licenseBadges = {
      'None': '',
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache-2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'BSD 2-Clause': '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
      'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
      'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
      'Creative Commons Zero v1.0 Universal': '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
      'Eclipse Public License 1.0': '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
      'GNU Affero General Public License v3.0': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
      'GNU General Public License v2.0': '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
      'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
      'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    };
  
    // Check if the license type exists in the mapping
    if (true) {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)','[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',  '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)','[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)', '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      
    } else {
      console.log(licenseBadges);
      return ''; // Return empty string if no valid license or badge is found
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
    // Add more license types and their corresponding links as needed
};

  return licenseLinks[license] || ''; // Return the license link if found, otherwise return an empty string


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSections = {
    'MIT': 'Licensed under the [MIT License](https://opensource.org/licenses/MIT).',
    'Apache-2.0': 'Licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).',
    // Add more license types and their corresponding sections as needed
};

return licenseSections[license] || ''; // Return the license section if found, otherwise return an empty string
}



  
  //fs.appendFile(license);


/// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { console.log(data);
  console.log("License value in data:", data.license);

  const licenseBadge = renderLicenseBadge(data.license);
  console.log("License Badge:", licenseBadge);

  const licenseLink = renderLicenseLink(data.license);
  console.log("License Link:", licenseLink);

  const licenseSection = renderLicenseSection(data.license);
  console.log("License Section:", licenseSection);


  const markdownContent = `# ${data.title}\n
## Description\n
${data.description}\n
## Installation\n
${data.install}\n
## Usage\n
${data.usage}\n
## Contributing\n
${data.contribute}\n
## Tests\n
${data.test}\n
${licenseBadge}\n
${licenseLink}\n
${licenseSection}`;

  return markdownContent;
}

module.exports = generateMarkdown;
