import ComponentType from "../components/componentType";

interface AppPayload {
    actionType: number;
    actionSource: number;
    currentPage?: number;
    pageSize?: number;
    searchText?: string;
    id?: number;
    tool?: ITool;
    part?: IPart;
    techStep?: ITechStep;
    techOperation?: ITechOperation;
    techProcess?: ITechProcess;
    errorMessage?: string;
    callerPanelId?: string;
    panelType?: ComponentType;
}

export default AppPayload;