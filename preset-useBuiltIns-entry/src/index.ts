import 'core-js/stable';
import 'regenerator-runtime/runtime';

import loopList from './loopList';

(async () => {
  await loopList(['a', 'b', 'c']);
})();
