// takes a license input from the user prompt and creates a license badge and url
function renderLicenseBadge(license) {
  let licenseInfo = {
    Apache: {
      badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
      url: 'https://opensource.org/licenses/Apache-2.0'
    }, 
    IBM: {
      badge: 'https://img.shields.io/badge/License-IPL_1.0-blue.svg',
      url: 'https://opensource.org/licenses/IPL-1.0'
    }, 
    BSD: {
      badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
      url: 'https://opensource.org/licenses/BSD-3-Clause'
    }, 
    MIT: {
      badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
      url: 'https://opensource.org/licenses/MIT'
    }
  }

  return licenseInfo[license]
}


// takes data from user prompt and generates a README markdown style response
function generateMarkdown(data) {
  let licenseInfo = renderLicenseBadge(data.license);
  return `# ${data.title}
  ![License](${licenseInfo.badge})

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#Tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

 
  This project is convered under the ${data.license} license. For more info, follow the link.
  Link to license info: ${licenseInfo.url}

  ## How to Contribute

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about this project feel free to reach out to me.

  Email: ${data.email}
  
  GitHub: github.com/${data.username}
`;
}

module.exports = generateMarkdown;


