'use strict';
const util = require('util');
const fs = require('fs');
const { exec } = require('child_process');

const debug = util.debuglog('node-openssl');

function openssl() {
  const opts = arguments[0];
  var { verb, flags, tail } = opts;
  debug(`> openssl`);
  debug(`Found ${Object.keys(opts).length} properties.`);
  return new Promise(function execPromiseHandler(resolve, reject) {
    if (typeof flags !== 'string' || Array.isArray(flags)) {
      reject(
        new Error(
          `'flags' option must be an array or string of openssl ${verb} command flags.`,
        ),
      );
    }

    if (Array.isArray(flags)) {
      flags = flags.join(' ');
    }

    if (
      typeof tail !== 'undefined' &&
      typeof tail !== 'string' &&
      typeof tail !== 'number'
    ) {
      reject(new Error(`'tail' option must be a string or number argument.`));
      if (typeof tail === 'number') {
        tail = tail.toString();
      }
    }

    var stdout = '';
    var stderr = '';
    const command = `openssl ${verb} ${flags} ${tail}`;
    debug(`Executing: ${command}`);
    const cp = exec(command);
    cp.stdout.on('data', (data) => {
      stdout += data;
    });

    cp.stderr.on('data', (data) => {
      stderr += data;
    });

    cp.on('close', (code) => {
      debug(`< openssl`);
      resolve({ cwd: process.cwd(), stdout, stderr });
    });
    cp.on('error', (err) => {
      reject(err);
    });
  });
}

module.exports = openssl;
