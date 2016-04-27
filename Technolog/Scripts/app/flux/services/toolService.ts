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

    public static saveTool(componentId: string, tool: ITool) {
        ToolActions.savePending(componentId);
        const type = tool.id == 0 ? "PUT" : "POST";

        $.ajax({
            url: location.origin + '/api/tools',
            dataType: 'json',
            type: type,
            data: {
                id: tool.id,
                name: tool.name,
                price: tool.price,
                __RequestVerificationToken: antiForgeryToken
            },
            success: function (savedTool) {
                ToolActions.saveSucceed(componentId, savedTool);
            },
            error: function (xhr, status, err) {
                ToolActions.saveFailed(componentId, err);
            }.bind(this)
        });
    }

    public static deleteTools(componentId: string, deletingTools: Array<ITool>) {
        ToolActions.deletePending(componentId);

        $.ajax({
            url: location.origin + '/api/tools/',
            dataType: 'json',
            type: 'DELETE',
            data: {
                tools: deletingTools,
                __RequestVerificationToken: antiForgeryToken
            },
            success: function () {
                ToolActions.deleteSucceed(componentId);
            },
            error: function (xhr, status, err) {
                ToolActions.deleteFailed(componentId, err);
            }
        });
    }
}
