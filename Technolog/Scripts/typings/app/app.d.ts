interface ITabElement {
    id: number;
    name: string;
    linkName: string;
}

interface ITool {
    id: number;
    name: string;
    price: number;
}

interface IPart {
    id: number;
    name: string;
    price: number;
}

interface ITechStep {
    id: number;
    description: string;
}

interface ITechOperation {
    id: number;
    name: string;
}

interface ITechProcess {
    id: number;
    name: string;
}

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
}

declare class Tool implements ITool {
    public id: number;
    public name: string;
    public price: number;
}

declare var antiForgeryToken: string;