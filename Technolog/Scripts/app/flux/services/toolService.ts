/// <reference path="../../../typings/tsd.d.ts" />
import ToolActions from "../actions/toolActions";

export default class ToolService {
    public static loadTools(componentId: string,
        page: number, toolsPerPage: number, searchText: string): void {

        $.get(location.origin + "/api/tools?search="
            + searchText + "&page=" + page + "&pageSize="
            + toolsPerPage, function (toolListModel) {

                var totalToolAmount = toolListModel.toolAmount;

                var tools = toolListModel.tools;

                ToolActions.updateToolList(componentId, tools, totalToolAmount, toolsPerPage, page, searchText);
            });
    }
}
