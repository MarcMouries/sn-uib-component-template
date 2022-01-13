
import {TASK_LIST} from './sample_data';

export default {
		items: {
			required: true,
			schema: {type: 'array'},
			default: TASK_LIST,
		}
	}
