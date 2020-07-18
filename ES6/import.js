//   ./   表示当前级  ../   表示上一级
import {sum as sum1,a} from './export.js'
console.log(a);
console.log(sum1(5,6));

import xx from './exportdefault.js'
console.log(a);
