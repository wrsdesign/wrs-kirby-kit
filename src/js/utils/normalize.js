var normalize = function(min, max, val) {
  if(val <= min) return 0
  if(val >= max) return 1
  return (val - min) / (max - min);
};

export default normalize
