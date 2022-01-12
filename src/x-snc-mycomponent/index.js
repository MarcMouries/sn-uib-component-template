import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';

import {TASK_LIST} from './sample_data';

createCustomElement('x-snc-mycomponent', {
	renderer: { type: snabbdom, view },
	view,
	styles,
	properties: {
		data: {default: TASK_LIST}
	}
 });