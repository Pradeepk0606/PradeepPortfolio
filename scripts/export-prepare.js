const fs = require('fs');
const path = require('path');

const apiDir = path.join(process.cwd(), 'app', 'api');
const disabledDir = path.join(process.cwd(), 'app', '__api_disabled__');

try {
  if (fs.existsSync(apiDir)) {
    // Ensure target doesn't already exist
    if (fs.existsSync(disabledDir)) {
      fs.rmSync(disabledDir, { recursive: true, force: true });
    }
    fs.renameSync(apiDir, disabledDir);
    console.log('Temporarily disabled app/api for static export.');
  } else {
    console.log('No app/api directory to disable.');
  }
} catch (err) {
  console.error('Failed to prepare export by disabling app/api:', err);
  process.exit(0);
}
