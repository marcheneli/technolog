///<reference path="../app/components/toolEditForm.tsx" />
///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/react/react-addons-test-utils.d.ts" />
define(["require", "exports", "react-dom", "react-addons-test-utils", "../app/components/toolEditForm"], function (require, exports, ReactDOM, TestUtils, toolEditForm_1) {
    "use strict";
    describe('ToolEditForm', function () {
        it('should display the correct content', function () {
            expect(ReactDOM.findDOMNode(TestUtils.renderIntoDocument(React.createElement(toolEditForm_1.default, {params: '', componentId: ""}))).textContent).Any;
        });
        it('should display the correct content 2', function () {
            expect(ReactDOM.findDOMNode(TestUtils.renderIntoDocument(React.createElement(toolEditForm_1.default, {params: '', componentId: ""}))).textContent).Any;
        });
    });
});
//# sourceMappingURL=toolEditFormTest.js.map