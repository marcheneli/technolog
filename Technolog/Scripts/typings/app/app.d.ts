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

interface IToolUsage {
    toolId: number;
    tool: ITool;
    quantity: number;
}

interface ITechStep {
    id: number;
    description: string;
    toolUsages: Array<IToolUsage>;
}

interface ITechOperation {
    id: number;
    name: string;
}

interface ITechProcess {
    id: number;
    name: string;
}

declare class Tool implements ITool {
    public id: number;
    public name: string;
    public price: number;
}

declare var antiForgeryToken: string;