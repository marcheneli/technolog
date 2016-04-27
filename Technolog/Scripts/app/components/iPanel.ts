import ComponentType from "./componentType";

interface IPanel {
    id: string;
    type: ComponentType;
    params?: any;
}

export default IPanel;