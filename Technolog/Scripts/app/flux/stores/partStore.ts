/// <reference path="../../../typings/tsd.d.ts" />

import * as $ from "jquery";
import AppDispatcher from "../dispatcher/appDispatcher";
import ActionSourceTypes from "../actions/actionSourceTypes";
import PartActionTypes from "../actions/partActionTypes";
import ErrorActions from "../actions/errorActions";
import PageConstants from "../../constants/pageConstants";
import NavigationManager from "../../managers/navigationManager";
import assign = require('object-assign');
import * as EventEmitter from "eventemitter3";
import AppPayload from "../iAppPayload";

let CHANGE_PARTS_EVENT = 'change_parts';
let CHANGE_EDITPART_EVENT = 'change_editpart';

let _parts: Array<IPart> = new Array<IPart>();
let _part: IPart;
let _partSearchText: string = "";
let _totalPartAmount: number = 0;
let _partsPerPage: number = PageConstants.ITEMS_PER_PAGE_INIT;
let _currentPartPage: number = 0;

function _loadParts(): void {
    $.get(location.origin + "/api/parts?search=" + _partSearchText + "&page=" + _currentPartPage + "&pageSize=" + _partsPerPage, function (partListModel) {

        _totalPartAmount = partListModel.partAmount;

        _parts = new Array<IPart>();

        partListModel.parts.forEach(function (part) {
            _parts[part.id] = part;
        });

        PartStore.emitChangeParts();
    });
}

function _loadPart(id: number): void {
    if (id == 0) {
        _part = { id: 0, name: "", price: 0 };
        PartStore.emitChangeEditPart();
        return;
    }
    if (_parts[id]) {
        _part = _parts[id];
        PartStore.emitChangeEditPart();
    } else {
        $.ajax({
            url: location.origin + "/api/parts/" + id,
            type: 'GET',
            success: function (part) {
                _part = part;
                PartStore.emitChangeEditPart();
            },
            error: function (data) {
                ErrorActions.received(data.responseJSON);
            }
        });
    }
}

function _addPart(part: IPart): void {
    $.ajax({
        url: location.origin + '/api/parts',
        dataType: 'json',
        type: 'PUT',
        data: {
            id: part.id,
            name: part.name,
            price: part.price,
            __RequestVerificationToken: antiForgeryToken
        },
        success: function (part) {
            _part = part;
            if (_parts[part.id]) {
                _parts[part.id] = assign({}, _parts[part.id], part);

                PartStore.emitChangeParts();
            }
            NavigationManager.openPartEditor(part.id);
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
}

function _deletePart(id: number) {
    $.ajax({
        url: location.origin + '/api/parts/' + id,
        dataType: 'json',
        type: 'DELETE',
        data: { __RequestVerificationToken: antiForgeryToken },
        success: function (id) {
            _loadParts();
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
}

function _updatePart(part: IPart) {
    $.ajax({
        url: location.origin + '/api/parts',
        dataType: 'json',
        type: 'POST',
        data: {
            id: part.id,
            name: part.name,
            price: part.price,
            __RequestVerificationToken: antiForgeryToken
        },
        success: function (part) {
            if (_parts[part.id]) {
                _parts[part.id] = assign({}, _parts[part.id], part);

                PartStore.emitChangeParts();
            }
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
}

function _init(currentPage: number, partsPerPage: number, searchText: string): void {
    _partsPerPage = partsPerPage;
    _currentPartPage = currentPage;
    _partSearchText = searchText;

    _loadParts();
}

class PartStoreStatic extends EventEmitter {

    public getAll(): Array<IPart> {
        return _parts;
    }

    public getPartAmount(): number {
        return _totalPartAmount;
    }

    public getPartsPerPage(): number {
        return _partsPerPage;
    }

    public getEditPart(): IPart {
        return _part;
    }

    public emitChangeParts(): void {
        this.emit(CHANGE_PARTS_EVENT);
    }

    public emitChangeEditPart(): void {
        this.emit(CHANGE_EDITPART_EVENT);
    }

    /**
     * @param {function} callback
     */
    public addChangeEditPartListener(callback: () => void): void {
        this.on(CHANGE_EDITPART_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeEditPartListener(callback: () => void) {
        this.removeListener(CHANGE_EDITPART_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public addChangePartsListener(callback: () => void): void {
        this.on(CHANGE_PARTS_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangePartsListener(callback: () => void) {
        this.removeListener(CHANGE_PARTS_EVENT, callback);
    }
}

let PartStore: PartStoreStatic = new PartStoreStatic();

AppDispatcher.register(function (payload: AppPayload) {

    if (payload.actionSource != ActionSourceTypes.PART) return;

    switch (payload.actionType) {
        case PartActionTypes.PART_INIT:
            _init(payload.currentPage, payload.pageSize, payload.searchText);
            break;

        case PartActionTypes.PART_LOAD_EDIT:
            _loadPart(payload.id);
            break;

        case PartActionTypes.PART_CREATE:
            _addPart(payload.part)
            break;

        case PartActionTypes.PART_UPDATE:
            _updatePart(payload.part);
            break;

        case PartActionTypes.PART_DELETE:
            _deletePart(payload.id);
            break;

        case PartActionTypes.PART_PAGE_CHANGE:
            _currentPartPage = payload.currentPage;
            _loadParts();
            break;

        case PartActionTypes.PARTS_PER_PAGE_CHANGE:
            _partsPerPage = payload.pageSize;
            _loadParts();
            break;

        case PartActionTypes.PART_SEARCH_TEXT_CHANGE:
            _partSearchText = payload.searchText;
            _loadParts();
            break;

        default:
    }
});

export default PartStore;
