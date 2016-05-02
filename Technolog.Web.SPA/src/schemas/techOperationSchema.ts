import { Schema, arrayOf } from 'normalizr';
import techStepSchema from './techStepSchema';

const techOperationSchema = new Schema('techOperation', null);

techOperationSchema.define({
    techSteps: arrayOf(techStepSchema)
});

export default techOperationSchema;