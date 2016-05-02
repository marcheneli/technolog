import { Schema, arrayOf } from 'normalizr';
import techOperationSchema from './techOperationSchema';

const techProcessSchema = new Schema('techProcess', null);

techProcessSchema.define({
    techOperations: arrayOf(techOperationSchema)
});

export default techProcessSchema;