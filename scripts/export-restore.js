const fs = require('fs');
const path = require('path');

const apiDir = path.join(process.cwd(), 'app', 'api');
const disabledDir = path.join(process.cwd(), 'app', '__api_disabled__');

try {
  if (fs.existsSync(disabledDir)) {
    // If apiDir exists (somehow), remove it first
    if (fs.existsSync(apiDir)) {
      fs.rmSync(apiDir, { recursive: true, force: true });
    }
    fs.renameSync(disabledDir, apiDir);
    console.log('Restored app/api after static export.');
  } else {
    console.log('No disabled app/api directory to restore.');
  }
} catch (err) {
  console.error('Failed to restore app/api:', err);
  process.exit(0);
}
