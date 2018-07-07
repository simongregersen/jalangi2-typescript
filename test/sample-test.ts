import 'mocha';
import * as assert from 'assert';
import * as fs from 'fs';
import * as jalangi from 'jalangi2/src/js/utils/api.js';

const PROGRAMS_DIR = 'test/programs/';
const TMP_DIR = 'build/programs/';

const analyses = [
  './node_modules/jalangi2/src/js/sample_analyses/ChainedAnalyses.js',
  './node_modules/jalangi2/src/js/runtime/SMemory.js',
  './build/src/SampleAnalysis.js'
];

const testPrograms =
  fs.readdirSync(PROGRAMS_DIR).filter(p => !p.startsWith('.'));

const instrOptions = {
  outputDir: TMP_DIR,
  inputFiles: testPrograms.map(p => PROGRAMS_DIR + p),
  inlineIID: true
};

function stripTmpDir(path) {
  return path.substring(path.lastIndexOf('/') + 1, path.length);
}

describe('SampleAnalysis', () => {

  before(async () => {
    await jalangi.instrumentDir(instrOptions);
  });

  describe('programs from folder', () => {
    testPrograms.map(p => TMP_DIR + p).forEach((program) => {
      it(stripTmpDir(program), async () => {
        const res = await jalangi.analyze(program, analyses);
        console.log("Analysis result: " + JSON.stringify(res));
        assert.equal(1 === 1, true);
      });
    });
  });

});
