// it begins here
import Leap from 'leapjs';

export const init = () => {
  try {
    Leap.loop({

      hand: hand => {
        console.log(hand);
        debugger;
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
