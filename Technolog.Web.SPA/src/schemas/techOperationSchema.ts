import { Schema, arrayOf } from 'normalizr';
import techStepSchema from './techStepSchema';

const techOperationSchema = new Schema('techOperations', { idAttribute: 'id' });

techOperationSchema.define({
    techSteps: arrayOf(techStepSchema)
});

export default techOperationSchema;