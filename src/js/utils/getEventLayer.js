var getEventLayer = (e, rect) => {
  var touches = e.targetTouches;

  var position = {
    x: touches ? touches[0].pageX : e.clientX,
    y: touches ? touches[0].pageY : e.clientY
  };

  position.x -= rect.left;
  position.y -= rect.top;

  return position;
};

export default getEventLayer;
