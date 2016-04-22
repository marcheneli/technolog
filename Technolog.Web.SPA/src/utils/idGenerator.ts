let nextPanelId = 0;
let nextToolListId = 0;
let nextToolEditFormId = 0;
let nextPartListId = 0;
let nextPartEditFormId = 0;
let nextTechStepListId = 0;
let nextTechStepEditFormId = 0;
let nextTechOperationListId = 0;
let nextTechOperationEditFormId = 0;
let nextTechProcessListId = 0;
let nextTechProcessEditFormId = 0;

export function getPanelId() {
    return nextPanelId++;
}

export function getToolListId() {
    return nextToolListId++;
}

export function getToolEditFormId() {
    return nextToolEditFormId++;
}

export function getPartListId() {
    return nextPartListId++;
}

export function getPartEditFormId() {
    return nextPartEditFormId++;
}

export function getTechStepListId() {
    return nextTechStepListId++;
}

export function getTechStepEditFormId() {
    return nextTechStepEditFormId++;
}

export function getTechOperationListId() {
    return nextTechOperationListId++;
}

export function getTechOperationEditFormId() {
    return nextTechOperationEditFormId++;
}

export function getTechProcessListId() {
    return nextTechProcessListId++;
}

export function getTechProcessEditFormId() {
    return nextTechProcessEditFormId++;
}