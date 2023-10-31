const core = require('@actions/core');

async function run() {
  try {
    const issueContent = process.env.GITHUB_EVENT.issue.body;
    const labelsToAdd = [];

    if (issueContent.includes('bug')) {
      labelsToAdd.push('bug');
    }

    if (issueContent.includes('feature')) {
      labelsToAdd.push('feature');
    }

    // Add labels to the issue
    core.setOutput('labels', labelsToAdd.join(','));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
