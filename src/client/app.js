// it begins here
import Leap from 'leapjs';
import { find, propEq } from 'ramda';

const getIndexFinger = find(propEq('type', 1));

export const init = () => {
  try {
    Leap.loop({

      hand: ({ fingers }) => {
        if (getIndexFinger(fingers).extended) console.log('yes');
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
