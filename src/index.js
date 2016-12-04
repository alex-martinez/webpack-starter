'use strict';

require('./styles/app.scss');

import Greet from './js/greet';

const greet = new Greet('#greet', 'Alex');

greet.render();
