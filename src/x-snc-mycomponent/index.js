import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';

createCustomElement('x-snc-mycomponent', {
	renderer: { type: snabbdom, view },
	view,
	styles
});