/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "jquery", "../dispatcher/appDispatcher", "../actions/actionSourceTypes", "../actions/partActionTypes", "../actions/errorActions", "../../constants/pageConstants", "../../managers/navigationManager", 'object-assign', "eventemitter3"], function (require, exports, $, appDispatcher_1, actionSourceTypes_1, partActionTypes_1, errorActions_1, pageConstants_1, navigationManager_1, assign, EventEmitter) {
    "use strict";
    var CHANGE_PARTS_EVENT = 'change_parts';
    var CHANGE_EDITPART_EVENT = 'change_editpart';
    var _parts = new Array();
    var _part;
    var _partSearchText = "";
    var _totalPartAmount = 0;
    var _partsPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
    var _currentPartPage = 0;
    function _loadParts() {
        $.get(location.origin + "/api/parts?search=" + _partSearchText + "&page=" + _currentPartPage + "&pageSize=" + _partsPerPage, function (partListModel) {
            _totalPartAmount = partListModel.partAmount;
            _parts = new Array();
            partListModel.parts.forEach(function (part) {
                _parts[part.id] = part;
            });
            PartStore.emitChangeParts();
        });
    }
    function _loadPart(id) {
        if (id == 0) {
            _part = { id: 0, name: "", price: 0 };
            PartStore.emitChangeEditPart();
            return;
        }
        if (_parts[id]) {
            _part = _parts[id];
            PartStore.emitChangeEditPart();
        }
        else {
            $.ajax({
                url: location.origin + "/api/parts/" + id,
                type: 'GET',
                success: function (part) {
                    _part = part;
                    PartStore.emitChangeEditPart();
                },
                error: function (data) {
                    errorActions_1.default.received(data.responseJSON);
                }
            });
        }
    }
    function _addPart(part) {
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
                navigationManager_1.default.openPartEditor(part.id);
            },
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    function _deletePart(id) {
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
    function _updatePart(part) {
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
    function _init(currentPage, partsPerPage, searchText) {
        _partsPerPage = partsPerPage;
        _currentPartPage = currentPage;
        _partSearchText = searchText;
        _loadParts();
    }
    var PartStoreStatic = (function (_super) {
        __extends(PartStoreStatic, _super);
        function PartStoreStatic() {
            _super.apply(this, arguments);
        }
        PartStoreStatic.prototype.getAll = function () {
            return _parts;
        };
        PartStoreStatic.prototype.getPartAmount = function () {
            return _totalPartAmount;
        };
        PartStoreStatic.prototype.getPartsPerPage = function () {
            return _partsPerPage;
        };
        PartStoreStatic.prototype.getEditPart = function () {
            return _part;
        };
        PartStoreStatic.prototype.emitChangeParts = function () {
            this.emit(CHANGE_PARTS_EVENT);
        };
        PartStoreStatic.prototype.emitChangeEditPart = function () {
            this.emit(CHANGE_EDITPART_EVENT);
        };
        /**
         * @param {function} callback
         */
        PartStoreStatic.prototype.addChangeEditPartListener = function (callback) {
            this.on(CHANGE_EDITPART_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        PartStoreStatic.prototype.removeChangeEditPartListener = function (callback) {
            this.removeListener(CHANGE_EDITPART_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        PartStoreStatic.prototype.addChangePartsListener = function (callback) {
            this.on(CHANGE_PARTS_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        PartStoreStatic.prototype.removeChangePartsListener = function (callback) {
            this.removeListener(CHANGE_PARTS_EVENT, callback);
        };
        return PartStoreStatic;
    }(EventEmitter));
    var PartStore = new PartStoreStatic();
    appDispatcher_1.default.register(function (payload) {
        if (payload.actionSource != actionSourceTypes_1.default.PART)
            return;
        switch (payload.actionType) {
            case partActionTypes_1.default.PART_INIT:
                _init(payload.currentPage, payload.pageSize, payload.searchText);
                break;
            case partActionTypes_1.default.PART_LOAD_EDIT:
                _loadPart(payload.id);
                break;
            case partActionTypes_1.default.PART_CREATE:
                _addPart(payload.part);
                break;
            case partActionTypes_1.default.PART_UPDATE:
                _updatePart(payload.part);
                break;
            case partActionTypes_1.default.PART_DELETE:
                _deletePart(payload.id);
                break;
            case partActionTypes_1.default.PART_PAGE_CHANGE:
                _currentPartPage = payload.currentPage;
                _loadParts();
                break;
            case partActionTypes_1.default.PARTS_PER_PAGE_CHANGE:
                _partsPerPage = payload.pageSize;
                _loadParts();
                break;
            case partActionTypes_1.default.PART_SEARCH_TEXT_CHANGE:
                _partSearchText = payload.searchText;
                _loadParts();
                break;
            default:
        }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PartStore;
});
//# sourceMappingURL=partStore.js.map