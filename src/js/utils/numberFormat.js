var numberFormat = num => {
  var decimal = 0;
  var separator = " ";
  var decpoint = ".";

  var r = parseFloat(num);

  var exp10 = Math.pow(10, decimal);
  r = Math.round(r * exp10) / exp10;

  var rr = Number(r)
    .toFixed(decimal)
    .toString()
    .split(".");

  var b = rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "$1" + separator);

  r = rr[1] ? b + decpoint + rr[1] : b;
  return r;
};

export default numberFormat;
