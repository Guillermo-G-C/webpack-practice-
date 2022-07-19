const fs = require('file-system');

fs.writeFileSync('./.env', `API=${process.env.API}\n`);