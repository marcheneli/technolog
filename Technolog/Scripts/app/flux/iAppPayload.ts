import ComponentType from "../components/componentType";
import EntityType from "./actions/entityType";

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
    params?: any;
    entityType?: EntityType;
    entities?: any;
}

export default AppPayload;