interface ITabElement {
    id: number,
    name: string,
    linkName: string
}

interface ITool {
    id: number,
    name: string,
    price: number
}

interface AppPayload {
    actionType: number;
    actionSource: number;
    currentPage?: number;
    pageSize?: number;
    searchText?: string,
    id?: number,
    tool?: ITool,
    errorMessage?: string
}

declare class Tool implements ITool {
    public id: number;
    public name: string;
    public price: number;
}

declare var antiForgeryToken: string;