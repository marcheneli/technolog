﻿///<reference path="../app/components/toolEditForm.tsx" />
///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/react/react-addons-test-utils.d.ts" />

import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import ToolEditForm from "../app/components/toolEditForm";

describe('ToolEditForm', () => {
    it('should display the correct content', () => {
        expect(ReactDOM.findDOMNode(TestUtils.renderIntoDocument(<ToolEditForm params='' componentId=""/>) as Element).textContent).Any;
    });

    it('should display the correct content 2', () => {
        expect(ReactDOM.findDOMNode(TestUtils.renderIntoDocument(<ToolEditForm params='' componentId=""/>) as Element).textContent).Any;
    });
})