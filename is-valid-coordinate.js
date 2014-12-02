(function(){

  function isValidCoordinate(v) {
    if (!v) return false;
    var re = /^(\-?(([0-9]{1}?[0-9]{1})|([1]{1}[0-8]{1}[0-9]{1})|([1]{1}[9]{1}[0]{1}))+(\.\d+)?)$/;
    return re.test(v);
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = isValidCoordinate;
  } else {
    window.isValidCoordinate = isValidCoordinate;
  }

})();
