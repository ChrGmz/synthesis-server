const fs = require('fs');
const { readdir } = require('fs/promises');
const path = require('path');

const BASE_PATH = path.join(__dirname, '../samples');

const samples = sampleFinder();

async function getSampleNames(ctx) {
  try {
    const _samples = await samples;
    ctx.body = _samples;
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.status = 500;
  }
}

async function getSampleByName(ctx) {
  try {
    const { category, name } = ctx.params;
    const _path = path.join(`${BASE_PATH}/${category}/${name}`);
    console.log(_path);
    const buffer = await fs.createReadStream(_path);
    ctx.body = buffer;
    ctx.status = 200;
  } catch (error) {
    console.log(error);
    ctx.status = 500;
  }
}

module.exports = {
  getSampleNames,
  getSampleByName,
};

async function sampleFinder() {
  const folders = await readdir(BASE_PATH);
  const samples = {};
  const regex = /^[^.].*$/;

  for (folder of folders) {
    if (!regex.test(folder)) continue;

    samples[folder] = [];
    const FOLDER_PATH = path.join(BASE_PATH, `${folder}`);
    const _samples = await readdir(FOLDER_PATH);

    _samples.forEach((sample) => {
      if (!regex.test(sample)) return;
      else
        samples[folder].push({
          category: 'sampler',
          subCategory: folder,
          instrument: sample,
        });
    });
  }
  return samples;
}
