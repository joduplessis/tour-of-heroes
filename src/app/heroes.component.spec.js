"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var heroes_component_1 = require("./heroes.component");
describe('HeroesComponent (inline template)', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [heroes_component_1.HeroesComponent],
        });
        fixture = testing_1.TestBed.createComponent(heroes_component_1.HeroesComponent);
        comp = fixture.componentInstance;
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('h2'));
        el = de.nativeElement;
    });
});
//# sourceMappingURL=heroes.component.spec.js.map