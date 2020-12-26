const { alert, notice, info, success, error } = require('@pnotify/core');

function myError() {
  error({
    title: 'Your query must contain more than one character!',
    sticker: false,
  });
}

export default myError;
