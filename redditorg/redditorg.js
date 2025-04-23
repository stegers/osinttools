javascript:(function() {
  var url = window.location.href;
  url = url.replace(/\?tl=[a-z]{2}/, '');
  window.location.href = url;
})();