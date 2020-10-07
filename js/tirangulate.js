'use strict';

const firstSys = document.getElementById('first-sys');
const secondSys = document.getElementById('second-sys');
const thirdSys = document.getElementById('third-sys');
const systems = [firstSys, secondSys, thirdSys];

const minRanges = document.getElementsByClassName('sys-min-dist');
const maxRanges = document.getElementsByClassName('sys-max-dist');

const candidates = document.getElementById('candidates');

// eslint-disable-next-line no-unused-vars
const edsmUrl = new URL('https://www.edsm.net/api-v1/sphere-systems');


// eslint-disable-next-line no-unused-vars
const submitForm = () => {
  event.preventDefault();
  const params = [];
  for(let i in systems) {
    const sysParam = {
      systemName: systems[i].value.replace(/\s/, '+'),
      minRadius: minRanges[i].value,
      radius: maxRanges[i].value
    };
    params.push(sysParam);
  }

  // eslint-disable-next-line no-undef
  getSysCandidates(params, candidates);
};

