import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';
import properties from './properties'


createCustomElement('x-snc-mycomponent', {
	renderer: { type: snabbdom },
	view,
	styles,
	properties
 });