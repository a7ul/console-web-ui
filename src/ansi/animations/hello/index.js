/* eslint-disable no-await-in-loop */
const style = require('ansi-styles');
const symbols = require('../../symbols');

const delay = async (milliseconds = 0) => new Promise((resolve) => {
  setTimeout(() => resolve(), milliseconds);
});

const hello = (text = '') => `
${symbols.PAGE_BREAK} 
Hi ${text}
${style.green.open}Hello Green!${style.green.close}
${style.red.open}Hello Red!${style.red.close}
\n`;


const animateHello = async (stream) => {
  for (let i = 0; i < 20; i += 1) {
    stream.push(hello(`its ${new Date()}`));
    await delay(1000);
  }
  stream.push(null);
};

module.exports = {
  hello,
  animateHello,
};
