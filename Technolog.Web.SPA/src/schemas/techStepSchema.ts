import { Schema, arrayOf } from 'normalizr';
import toolSchema from './toolSchema';
import partSchema from './partSchema';

const generateToolUsageId = (toolUsage) => toolUsage.toolId + "" + toolUsage.techStepId;

const toolUsageSchema = new Schema('toolUsages', { idAttribute: generateToolUsageId });

toolUsageSchema.define({
    tool: toolSchema
});

const generatePartUsageId = (partUsage) => partUsage.partId + "" + partUsage.techStepId;

const partUsageSchema = new Schema('partUsages', { idAttribute: generatePartUsageId });

partUsageSchema.define({
    part: partSchema
});

const techStepSchema = new Schema('techSteps', { idAttribute: 'id' });

techStepSchema.define({
    toolUsages: arrayOf(toolUsageSchema),
    partUsages: arrayOf(partUsageSchema)
});

export default techStepSchema;