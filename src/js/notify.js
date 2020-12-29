// const { alert, notice, info, success, error } = require('@pnotify/core');
import {
  error,
  success,
  info,
  defaults,
  defaultModules,
  Stack,
} from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

function myError() {
  error({
    title: 'Your query must contain more than one character!',
    sticker: false,
  });
}

function newError() {
  error({
    title: 'Oops!',
    text: 'Something wrong, try reinput!',
  });
}

const personalStack = new Stack({
  dir1: 'right',
  dir2: 'up',
  firstpos1: 100,
  firstpos2: 50,
  push: 'top',
  maxStrategy: 'close',
});

defaultModules.set(PNotifyMobile, {});
defaults.stack = personalStack;

export { error, success, info };
