///<reference path="../app/person.ts" />
///<reference path="../typings/jasmine/jasmine.d.ts" />
import Person from "../app/person"

describe("Person FullName", () => {

    var person: Person;

    beforeEach(() => {
        person = new Person();
        person.setFirstName("Joe");
        person.setLastName("Smith");
    });

    it("should concatenate first and last names", () => {
        expect(person.getFullName()).toBe("Joe, Smith");
    });

    it("should concatenate first and last names - incorrect", () => {
        expect(person.getFullName()).not.toBe("Joe, Doe");
    });

    it("should concatenate lastname first", () => {
        expect(person.getFullName(true)).toBe("Smith, Joe");
    });

    it("should not concatinate firstname first", () => {
        expect(person.getFullName(true)).not.toBe("Joe, Smith");
    });
});