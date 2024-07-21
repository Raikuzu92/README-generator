// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

/// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  fs.appendFile('README-testing.md')
  return `# ${data.title}/n
  ## Description/n
  ${data.description}/n
  ##Installation
  ${data.install}/n
  ##Usage/n
  ${data.usage}/
  ##Contributing/n
  ${data.contribute}/n
  ##Tests/n
  ${data.test}/n`,
  (err)=> err ? console.log(error) : console.log ("README successful")

;
}


module.exports = generateMarkdown;
