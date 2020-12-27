const { alert, notice, info, success, error } = require('@pnotify/core');

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

export { myError, newError };
