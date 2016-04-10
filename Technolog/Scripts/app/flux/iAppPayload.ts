import ComponentType from "../components/componentType";

interface AppPayload {
    actionType: number;
    actionSource: number;
    currentPage?: number;
    pageSize?: number;
    searchText?: string;
    totalAmount?: number;
    id?: number;
    tool?: ITool;
    tools?: Array<ITool>;
    part?: IPart;
    techStep?: ITechStep;
    techOperation?: ITechOperation;
    techProcess?: ITechProcess;
    errorMessage?: string;
    callerPanelId?: string;
    panelType?: ComponentType;
    componentId?: string;
}

export default AppPayload;