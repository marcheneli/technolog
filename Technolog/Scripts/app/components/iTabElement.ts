import ComponentType from "./componentType";

interface ITabElement {
    id: number;
    name: string;
    linkName: string;
    mode: string;
    type: ComponentType;
}

export default ITabElement;