import { Schema, arrayOf } from 'normalizr';
import techOperationSchema from './techOperationSchema';

const techProcessSchema = new Schema('techProcesses', { idAttribute: 'id' });

techProcessSchema.define({
    techOperations: arrayOf(techOperationSchema)
});

export default techProcessSchema;