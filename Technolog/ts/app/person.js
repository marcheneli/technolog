define(["require", "exports"], function (require, exports) {
    "use strict";
    var Person = (function () {
        function Person() {
        }
        Person.prototype.setFirstName = function (value) {
            this.firstName = value;
        };
        Person.prototype.setLastName = function (value) {
            this.lastName = value;
        };
        Person.prototype.getFullName = function (lastNameFirst) {
            if (lastNameFirst === void 0) { lastNameFirst = false; }
            if (lastNameFirst) {
                return this.lastName + ", " + this.firstName;
            }
            return this.firstName + ", " + this.lastName;
        };
        return Person;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Person;
});
//# sourceMappingURL=person.js.map