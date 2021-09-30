import { configure }         from '@storybook/react';
import { addParameters }     from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } });

configure(loadStories, module);
