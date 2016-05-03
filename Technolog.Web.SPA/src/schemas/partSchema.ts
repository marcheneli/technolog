import { Schema } from 'normalizr';

const partSchema = new Schema('parts', { idAttribute: 'id' });

export default partSchema;