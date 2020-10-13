var is = {
  touch:
    "ontouchstart" in window ||
    (window.documentTouch && d instanceof window.DocumentTouch),
  str: v => typeof v === "string",
  obj: v => v === Object(v),
  arr: v => v.constructor === Array,
  def: v => v !== undefined,
  und: v => v === undefined
};

export default is;
