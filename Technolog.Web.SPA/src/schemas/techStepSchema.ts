import { Schema, arrayOf } from 'normalizr';
import toolSchema from './toolSchema';
import partSchema from './partSchema';

const techStepSchema = new Schema('techStep', null);

techStepSchema.define({
    tools: arrayOf(toolSchema),
    parts: arrayOf(partSchema)
});

export default techStepSchema;