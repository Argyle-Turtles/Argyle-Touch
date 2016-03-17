const Screen = function (x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  // Map values to pixel coordinates
  this.xMap = width;
  this.yMap = height;

  this.mapTouch = (xTouch, yTouch) =>
    ({
      x: xTouch / this.width * this.xMap,
      y: yTouch / this.height * this.yMap,
    });
};

export default Screen;
