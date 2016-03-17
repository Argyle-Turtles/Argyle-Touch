// it begins here
import Leap from 'leapjs';
import { find, propEq, allPass } from 'ramda';

const getIndexFinger = find(propEq('type', 1));

const halfHeight = 139.7;
const halfWidth = 190.5;

const breakPlane = finger => (finger.extended && finger.dipPosition[2] < 0.5);
const xBound = x => (Math.abs(x) < halfWidth);
const yBound = y => (y < halfHeight * 2);

const inBounds = ({ dipPosition }) => (xBound(dipPosition[0]) && yBound(dipPosition[1]));

const isTouch = finger => {
  console.log(finger.dipPosition);
  return allPass([breakPlane, inBounds])(finger);
}

export const init = () => {
  try {
    Leap.loop({
      hand: ({ fingers }) => {
        // console.log('hi');
        console.log(isTouch(getIndexFinger(fingers)));
      },
    })
  }
  catch (e) {
    console.log(e);
  }
};

init();

export default {
  init,
};
