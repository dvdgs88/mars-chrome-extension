function attachEvents() {
  addMenu();
  eventJQuery();
  eventCaptureScreenshot();
  eventMartianize();
}

function addMenu() {
  $('body').prepend(
    '<div class="mars-bar">' +
    '<a href="javascript: void(0);" class="countImages">Execute jQuery Code</a>' +
    '<a href="javascript: void(0);" class="takeScreenshot">Capture screenshot</a>' +
    '<a href="javascript: void(0);" class="martianize">Martianize</a>' +
    '</div>'
  );
}

function eventMartianize() {
  $('.martianize').on('click', () => {
    $('.ctr-p').addClass('martianized');
  })
}

function eventCaptureScreenshot() {
  $('.takeScreenshot').on('click', function () {
    html2canvas($('body')[0]).then(canvas => {
      var img = canvas.toDataURL();
      $('body').append('<img class="screenshot" src="' + img + '">')
    });
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    window.scrollTo(0, 0);
  })
}

function eventJQuery() {
  $('.countImages').on('click', function () {
    alert('Images: ' + $('img').length);
  });
}

attachEvents();
console.log('TEST')