(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fullPage {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fullPage\">\r\n\r\n  <app-header></app-header>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <app-footer></app-footer>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _routers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routers/routing.module */ "./src/app/routers/routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _intropage_intropage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./intropage/intropage.component */ "./src/app/intropage/intropage.component.ts");
/* harmony import */ var _intro_content_intro_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./intro-content/intro-content.component */ "./src/app/intro-content/intro-content.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _user_info_display_user_info_display_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-info-display/user-info-display.component */ "./src/app/user-info-display/user-info-display.component.ts");
/* harmony import */ var _services_blocked_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/blocked.service */ "./src/app/services/blocked.service.ts");
/* harmony import */ var _services_matches_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/matches.service */ "./src/app/services/matches.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import {AuthGuard} from "./guards/auth.guard";



// import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator.directive';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__["LoginFormComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _intropage_intropage_component__WEBPACK_IMPORTED_MODULE_11__["IntropageComponent"],
                _intro_content_intro_content_component__WEBPACK_IMPORTED_MODULE_12__["IntroContentComponent"],
                _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_13__["NewUserComponent"],
                _user_info_display_user_info_display_component__WEBPACK_IMPORTED_MODULE_15__["UserInfoDisplayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _routers_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"], _services_user_auth_service__WEBPACK_IMPORTED_MODULE_14__["UserAuthService"], _services_blocked_service__WEBPACK_IMPORTED_MODULE_16__["BlockedService"], _services_matches_service__WEBPACK_IMPORTED_MODULE_17__["MatchesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-holder{\r\n  padding-top: 70px;\r\n}\r\n\r\nheader{\r\n  text-align: center;\r\n  padding: 20px 0;\r\n  font-size: 30px;\r\n  border-bottom: 2px solid #eee;\r\n  position: fixed;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  background-color: black;\r\n  color: white;\r\n  left:0;\r\n  top: 0;\r\n  height: 40px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  div {\r\n    width: 400px;\r\n    border: 25px solid purple;\r\n    padding: 25px;\r\n    margin: 25px;\r\n  }\r\n</style>\r\n\r\n<app-header></app-header>\r\n<div>\r\n<p class=\"info-holder\">\r\n\r\n\r\n  <app-user-info-display></app-user-info-display>\r\n  <button\r\n    (click)=\"socketChat()\"\r\n  class=\"btn-primary\">Socket Chat</button>\r\n  <br>\r\n  <a routerLink=\"/\"\r\n  class=\"btn-primary\">Go Back</a>\r\n</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(user) {
        this.user = user;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.socketChat = function () {
        window.open("http://localhost:3000/");
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/domain/auth-user.ts":
/*!*************************************!*\
  !*** ./src/app/domain/auth-user.ts ***!
  \*************************************/
/*! exports provided: AuthUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthUser", function() { return AuthUser; });
var AuthUser = /** @class */ (function () {
    function AuthUser(id, username, password, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }
    return AuthUser;
}());



/***/ }),

/***/ "./src/app/domain/user.ts":
/*!********************************!*\
  !*** ./src/app/domain/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(infoId, firstName, lastName, bio, photo, myers) {
        this.infoId = infoId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bio = bio;
        this.photo = photo;
        this.myers = myers;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n  text-align: center;\r\n  color: white;\r\n  padding: 10px 0px;\r\n  font-size: 15px;\r\n  border-bottom: 2px solid #eee;\r\n  position: fixed;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  background-color: black;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <footer class=\"border-top border border-info\" >We thank you for using our site. If you have any questions feel free to contact us at MyersFriends@friendly.net</footer>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\r\n  text-align: center;\r\n  padding: 20px 0;\r\n  font-size: 30px;\r\n  border-bottom: 2px solid #eee;\r\n  position: fixed;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  background-color: black;\r\n  color: white;\r\n  left:0;\r\n  top: 0;\r\n  height: 40px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  ul{\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n  }\r\n  li {\r\n    float: left;\r\n  }\r\n\r\n  li a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n\r\n  li a:hover {\r\n    background-color: #111;\r\n  }\r\n\r\n</style>\r\n<div>\r\n<ul>\r\n  <li><a class=\"active\" href=\"#home\">Home</a></li>\r\n</ul>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modal, userService) {
        this.modal = modal;
        this.userService = userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/intro-content/intro-content.component.css":
/*!***********************************************************!*\
  !*** ./src/app/intro-content/intro-content.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Cont{\r\n  padding-top: 70px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/intro-content/intro-content.component.html":
/*!************************************************************!*\
  !*** ./src/app/intro-content/intro-content.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n  section.content {\r\n\r\n    background-color: aquamarine;\r\n    width: 800px;\r\n    padding: 30px;\r\n    margin: 30px;\r\n    border-style: solid;\r\n    border-width: 10px;\r\n    border-color: indigo;\r\n    opacity: 0.5;\r\n    box-shadow: 10px 10px 5px grey;\r\n  }\r\n    h1 {\r\nfont-size: 40px;\r\n      font-weight: bold;\r\n      color: darkorchid;\r\n      text-decoration: underline;\r\n      text-transform: uppercase;\r\n      text-shadow: 2px 2px 4px #000000;\r\n\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n\r\n</style>\r\n<body>\r\n\r\n<h1>The Big Picture</h1>\r\n<section class = \"content\">\r\n  <h2>Myers Briggs Type Indicator</h2>\r\n  <p class=\"MBTI\">\r\n    MBTI was developed by Isabel Briggs Myers, and her mother, Katherine Briggs, based of Carol Jung personality analysis that focused on four aspects of human psychological function. These functions will be described in more detail below.\r\n  </p>\r\n\r\n</section>\r\n\r\n<section class=\"content shadow p-3 mb-5 bg-light rounded\">\r\n  <header><h2>Introversion vs Extroversion</h2></header>\r\n  <p class=\"IntroVsExtro\">\r\n    Favorite world: Do you prefer to focus on the outer world or on your own inner world?\r\n    This preference refers to where one tends to get their energy and motivation from; from people and social situations or from internally.\r\n  <div>\r\n    <b>Introversion</b>\r\n    Those who tend to be more introverted usually focus their energy inward towards concepts and ideas. They use their ‘me time’ to recharge their batteries after being outwardly engaged for durations of time. They usually try to get an understanding of the world, they think deeply about things and tend to internalize their thoughts and ideas. They need little external stimulation, they can be easily over-stimulated which is one reason why they might focus more on their inner world.\r\n  </div>\r\n  <div>\r\n    <b>Extraversion</b>\r\n    The energy of extraverts is outward, towards people and things. They get their motivation and ‘recharge their batteries’ from being with other people. They are often viewed as relaxed and confident in social situations. They tend to think first and act later.\r\n  </div>\r\n  <div>\r\n    <b>Ambivert</b>\r\n    Introversion and Extroversion are two extremes on a spectrum. While there are individuals who can and do associate heavily with one side and very little of the other. The majority of people actually fall somewhere near the median in terms of being introverted or extroverted in certain situations. So when you receive an E or I this is only saying that all else being equal you are more likely to act more introverted or extroverted\r\n  </div>\r\n\r\n</section>\r\n<section class=\"content shadow p-3 mb-5 bg-light rounded \">\r\n  <header>Intuition vs Sensing</header>\r\n  <p class =\"IntuVsSense\">\r\n    Information: Do you prefer to focus on the outer world or on your own inner world?\r\n    Sensing\r\n    <b>Sensors</b>  tend to focus on the present. They are “here and now” people. They lean heavily on their five senses for gathering information about the outside world. They tend to see things as they are because they are concrete and literal thinkers.\r\n    <b>Sensors</b> tend to be:\r\n  </p>\r\n  <ul style=\"list-style-type:disc\">\r\n    <li>Concrete</li>.\r\n    <li>Realistic</li>\r\n    <li>Lives in the present</li>\r\n    <li>Aware of surroundings</li>\r\n    <li>Notice of details</li>\r\n    <li>Practical</li>\r\n    <li>Goes by senses</li>\r\n    <li>Factual</li>\r\n  </ul>\r\n  <p>\r\n    <b>Intuitive</b>\r\n    Intuitive people tend to live in the future and are immersed in the world of possibilities. They process information through patterns and impressions. Intuitives people value inspiration and imagination. They gather their knowledge from the universe by reading between the lines. Their abstract nature attracts them toward deep ideas and concepts. They tend to see the “big picture”.\r\n    Intuitives tend to be:\r\n  <ul>\r\n    <li>Future-focused</li>\r\n    <li>Sees possibilities</li>\r\n    <li>Inventive</li>\r\n    <li>Imaginative</li>\r\n    <li>Deep</li>\r\n    <li>Abstract</li>\r\n    <li>Idealistic</li>\r\n    <li>Theoretical</li>\r\n  </ul>\r\n\r\n</section>\r\n<section class=\"content shadow p-3 mb-5 bg-light rounded\">\r\n  <header><h2>Feeling vs Thinking</h2> </header>\r\n  <p class = \"FeelVsThink\">\r\n    The original naming of these types is a little archaic in that thinking refers to more than merely thought, and feeling is not about being over-emotional or sensitive. They are more about how we make decisions; through logic or through considering people\r\n    <b>Thinking</b>\r\n    Thinkers make their decisions primarily on logic, and when they do so, they consider a decision to be made. They tend to see the world I black and white and dislike fuzziness or obscurity.\r\n    Decisions: When making decisions, do you prefer to first look at logic and consistency or first look at the people and special circumstances?\r\n    <b>Thinkers</b>  tend to be:\r\n  <ul>\r\n    <li>Brief and concise</li>\r\n    <li>Logical; have order to their thoughts</li>\r\n    <li>Intellectually critical and objective</li>\r\n    <li>Calm and reasonable</li>\r\n    <li>Don’t assume that feelings are unimportant; they give things their own logical value</li>\r\n    <li>Present feeling and emotions as additional facts to be weighed in a decision.</li>\r\n  </ul>\r\n  <p>\r\n    <b>Feeling</b>\r\n    Feelers decide based primarily through social considerations, listening to their heart and considering the feelings of others. They see life as a human existence and material things as being subservient to this. They value harmony and use tact in their interactions with others.\r\n    <b>Feelers</b> tend to /be:\r\n  <ul>\r\n    <li>Introduce themselves and get to know people; full acceptance may take a long time.</li>\r\n    <li>Be personable and friendly</li>\r\n    <li>Demonstrate empathy by showing areas of agreement first</li>\r\n    <li>Show how the idea will affect people what people’s reaction would be.</li>\r\n    <li>Aware that how you communicate is as important as what you’re communicating.</li>\r\n    <li>Accept decisions that may not be based on facts.</li>\r\n  </ul>\r\n\r\n</section>\r\n<section class =\"content shadow p-3 mb-5 bg-light rounded\">\r\n  <header><h2>Judging vs Perceiving</h2></header>\r\n  <p class = \"JudgeVsPerc\">\r\n    <b>Structure:</b> In dealing with the outside world, do you prefer to get things decided or do you prefer to stay open to new and options?\r\n    Judging\r\n    Judging people think sequentially. They value order and organization. Their lives are scheduled and structured. Judging people seek closure and enjoy completing tasks. They take deadlines seriously. They work then they play. Judging doesn’t necessarily mean judgmental, more so how a person deals with the day to day tasks.\r\n    <b>Judgers</b> tend to be:\r\n  <ul>Decisive\r\n    <li>Controlled</li>\r\n    <li>Good at finishing</li>\r\n    <li>Organized</li>\r\n    <li>Structured</li>\r\n    <li>Scheduled</li>\r\n    <li>Quick at tasks</li>\r\n    <li>Responsible</li>\r\n    <li>Likes closure</li>\r\n    <li>Makes plans</li>\r\n  </ul>\r\n  <p>\r\n  <h3>Perceiving</h3>\r\n  <p>Perceivers are adaptable and flexible. They are random thinkers who prefer to keep their options open. Perceivers thrive with the unexpected and are open to change. They are spontaneous and often juggle several projects at once. They enjoying starting a task better than finishing it. Deadlines are often merely suggestions. Perceivers play as they work.\r\n  </p>\r\n  <p><b>Perceivers</b> tend to be:</p>\r\n\r\n  <ul>\r\n\r\n    <li>Adaptable</li>\r\n    <li>Relaxed</li>\r\n    <li>Disorganized</li>\r\n    <li>Care-free</li>\r\n    <li>Spontaneous</li>\r\n    <li>Changes tracks midway</li>\r\n    <li>Keeps options open</li>\r\n    <li>Procrastinates</li>\r\n    <li>Dislikes routine</li>\r\n    <li>Flexible</li>\r\n  </ul>\r\n</section>\r\n<section class=\"content shadow p-3 mb-5 bg-light rounded \">\r\n  <p>After reading through this short synopsis of the Myers-Briggs Type Indicator. I hope we have peaked your curiosity about the inner workings of your mind and we genuinely hope our site will help you make amazing connections.</p>\r\n\r\n  <p><b>Please Enjoy!</b></p>\r\n</section>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/intro-content/intro-content.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/intro-content/intro-content.component.ts ***!
  \**********************************************************/
/*! exports provided: IntroContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroContentComponent", function() { return IntroContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroContentComponent = /** @class */ (function () {
    function IntroContentComponent() {
    }
    IntroContentComponent.prototype.ngOnInit = function () {
    };
    IntroContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro-content',
            template: __webpack_require__(/*! ./intro-content.component.html */ "./src/app/intro-content/intro-content.component.html"),
            styles: [__webpack_require__(/*! ./intro-content.component.css */ "./src/app/intro-content/intro-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroContentComponent);
    return IntroContentComponent;
}());



/***/ }),

/***/ "./src/app/intropage/intropage.component.css":
/*!***************************************************!*\
  !*** ./src/app/intropage/intropage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/intropage/intropage.component.html":
/*!****************************************************!*\
  !*** ./src/app/intropage/intropage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-form></app-login-form>\r\n<app-intro-content></app-intro-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/intropage/intropage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/intropage/intropage.component.ts ***!
  \**************************************************/
/*! exports provided: IntropageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntropageComponent", function() { return IntropageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntropageComponent = /** @class */ (function () {
    function IntropageComponent() {
    }
    IntropageComponent.prototype.ngOnInit = function () {
    };
    IntropageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intropage',
            template: __webpack_require__(/*! ./intropage.component.html */ "./src/app/intropage/intropage.component.html"),
            styles: [__webpack_require__(/*! ./intropage.component.css */ "./src/app/intropage/intropage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntropageComponent);
    return IntropageComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  position: fixed;\r\n  left: 78%;\r\n  padding-top: 70px;\r\n}\r\n\r\ndiv.input {\r\n  position: relative;\r\n}\r\n\r\ndiv.input label {\r\n  position: absolute;\r\n  top: 0;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  left: 10px;\r\n  background: white;\r\n  padding: 5px 2px;\r\n}\r\n\r\ndiv.input input{\r\n  padding: 10px 20px;\r\n  font-size: 25px;\r\n  outline: 0;\r\n}\r\n\r\ndiv.input{\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"lgForm\" #f=\"ngForm\" novalidate>\r\n  <div class=\"input\">\r\n    <label>Username</label>\r\n    <input type=\"text\" name=\"username\" [ngModel] required>\r\n  </div>\r\n  <div class=\"input\">\r\n    <label>Password</label>\r\n    <input type=\"password\" name=\"password\" [ngModel] required>\r\n  </div>\r\n  <div class=\"input\">\r\n    <button\r\n      type=\"submit\"\r\n      class=\"btn btn-primary\"\r\n      [disabled]=\"!f.valid\"\r\n      (click)=\"loginClick(f.value, f.valid)\">Login</button>\r\n  </div>\r\n  <div class=\"input\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-primary\"\r\n      (click)=\"newUserClick()\">New User</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent.prototype.newUserClick = function () {
        this.router.navigate(['/newuser']);
    };
    LoginFormComponent.prototype.loginClick = function (data, valid) {
        if (valid) {
            if (this.service.checkUserAuth(data)
                .subscribe(function (userInfo) { return localStorage.setItem("userid", userInfo + ""); })) {
                console.log(localStorage.getItem("userid"));
                if (localStorage.getItem("userid") !== undefined ||
                    localStorage.getItem("userid") !== null) {
                    this.router.navigate(['/dashboard']);
                }
                else {
                    //todo Invalid user info
                }
            }
        }
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/new-user/new-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-user/new-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\ndiv.input {\r\n  position: relative;\r\n}\r\n\r\ndiv.input label {\r\n  position: absolute;\r\n  top: 0;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  left: 10px;\r\n  background: white;\r\n  padding: 5px 2px;\r\n}\r\n\r\ndiv.input input{\r\n  padding: 10px 20px;\r\n  font-size: 25px;\r\n  outline: 0;\r\n}\r\n\r\ndiv.input{\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/new-user/new-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-user/new-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"lgForm\" #f=\"ngForm\" novalidate>\r\n  <div class=\"input\">\r\n    <label>Username</label>\r\n    <input type=\"text\" name=\"username\" [ngModel] required>\r\n  </div>\r\n  <div class=\"input\">\r\n    <label>Password</label>\r\n    <input type=\"password\" name=\"password\" [ngModel] required>\r\n  </div>\r\n  <div class=\"input\">\r\n    <label>Confirm Password</label>\r\n    <input type=\"password\" name=\"cPassword\" [ngModel] required>\r\n  </div>\r\n  <!--<div class=\"input\" [class.has-error]=\"password.touched && password.required\">-->\r\n    <!--<label>Password</label>-->\r\n    <!--<input type=\"password\" name=\"password\" class=\"form-control\"-->\r\n           <!--[(ngModel)]=\"user.password\"#password required>-->\r\n    <!--<span class=\"help-block\" *ngIf=\"password.touched && password.errors?.required\">-->\r\n      <!--Password is required-->\r\n    <!--</span>-->\r\n  <!--</div>-->\r\n  <!--<div class=\"input\" [class.has-error]=\"pConfirm.touched && pConfirm.required\">-->\r\n    <!--<label>Confirm password</label>-->\r\n    <!--<input type=\"password\" name=\"pConfirm\" class=\"form-control\"-->\r\n           <!--[(ngModel)]=\"user.pConfirm\"#pConfirm required>-->\r\n    <!--<span class=\"help-block\" *ngIf=\"pConfirm.touched && pConfirm.errors?.required\">-->\r\n      <!--Password is required-->\r\n    <!--</span>-->\r\n  <!--</div>-->\r\n  <div class=\"input\">\r\n    <label>Email</label>\r\n    <input type=\"text\" name=\"email\" [ngModel] required>\r\n  </div>\r\n  <div class=\"input\">\r\n    <button\r\n      type=\"submit\"\r\n      [disabled]=\"!f.valid\"\r\n      (click)=\"registerUserClick(f.value)\">Login</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/new-user/new-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-user/new-user.component.ts ***!
  \************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
/* harmony import */ var _domain_auth_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/auth-user */ "./src/app/domain/auth-user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(router, service) {
        this.router = router;
        this.service = service;
        this.aUser = new _domain_auth_user__WEBPACK_IMPORTED_MODULE_2__["AuthUser"](0, "", "", "");
    }
    NewUserComponent.prototype.ngOnInit = function () {
    };
    NewUserComponent.prototype.registerUserClick = function (uAuth) {
        var _this = this;
        console.log(uAuth);
        this.aUser.username = uAuth.username;
        this.aUser.password = uAuth.password;
        this.aUser.email = uAuth.email;
        this.service.newUserAuth(this.aUser)
            .subscribe(function (isCreated) { return _this.isCreated = isCreated; });
        if (this.isCreated) {
            this.router.navigate(['']);
        }
        else {
        }
    };
    NewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.css */ "./src/app/new-user/new-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/routers/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routers/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _intropage_intropage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../intropage/intropage.component */ "./src/app/intropage/intropage.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {LoginFormComponent} from "../login-form/login-form.component";

// import {AuthGuard} from "../guards/auth.guard";


var routes = [
    { path: '', component: _intropage_intropage_component__WEBPACK_IMPORTED_MODULE_4__["IntropageComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'newuser', component: _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_5__["NewUserComponent"] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/blocked.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/blocked.service.ts ***!
  \*********************************************/
/*! exports provided: BlockedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockedService", function() { return BlockedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockedService = /** @class */ (function () {
    function BlockedService(http) {
        this.http = http;
    }
    BlockedService.prototype.getAllBlocked = function (blocked_id) {
        return this.http.get("http://localhost:8080/blocked-api/blocked/" + blocked_id);
    };
    BlockedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlockedService);
    return BlockedService;
}());



/***/ }),

/***/ "./src/app/services/matches.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/matches.service.ts ***!
  \*********************************************/
/*! exports provided: MatchesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesService", function() { return MatchesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MatchesService = /** @class */ (function () {
    function MatchesService(http) {
        this.http = http;
    }
    MatchesService.prototype.getAllMatches = function (myer_id) {
        return this.http.get("http://localhost:8080/matches-api/matches/" + myer_id);
    };
    MatchesService.prototype.getAllMyerTypes = function () {
        return this.http.get("http://localhost:8080/matches-api/myertypes");
    };
    MatchesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MatchesService);
    return MatchesService;
}());



/***/ }),

/***/ "./src/app/services/user-auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user-auth.service.ts ***!
  \***********************************************/
/*! exports provided: UserAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthService", function() { return UserAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAuthService = /** @class */ (function () {
    function UserAuthService(http) {
        this.http = http;
    }
    UserAuthService.prototype.checkUserAuth = function (UserLogin) {
        return this.http.post('http://localhost:8080/userlogin-api/auth', UserLogin);
    };
    UserAuthService.prototype.newUserAuth = function (UserLogin) {
        return this.http.post('http://localhost:8080/userlogin-api/userlogin', UserLogin);
    };
    UserAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserAuthService);
    return UserAuthService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function (id) {
        return this.http.get("http://localhost:8080/userinfo-api/userinfo/" + id);
    };
    UserService.prototype.getAllMatches = function (myer_id) {
        return this.http.get("http://localhost:8080/userinfo-api/userinfo/" + myer_id);
    };
    UserService.prototype.saveUserInfo = function (user) {
        return this.http.put('http://localhost:8080/userinfo-api/userinfo', user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user-info-display/user-info-display.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/user-info-display/user-info-display.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-info-display/user-info-display.component.html":
/*!********************************************************************!*\
  !*** ./src/app/user-info-display/user-info-display.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form class=\"lgForm\" #f=\"ngForm\" novalidate>\r\n    <div>\r\n      <div class=\"image\">\r\n        Photo = {{user.photo}}\r\n      </div>\r\n      <div class=\"image-edit-input\" *ngIf=\"canEdit\" [ngModel]>\r\n        <input type = \"file\" name = \"photo\" (change) = \"onSelectFile($event)\" [(ngModel)]=\"user.photo\" [ngModel]>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div>\r\n        <div class=\"first-name\">\r\n          First Name: {{user.firstName}}\r\n        </div>\r\n        <div class=\"first-name-input\" *ngIf=\"canEdit\">\r\n          <input type=\"text\" name=\"firstName\" [(ngModel)]=\"user.firstName\" [ngModel]>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"last-name\">\r\n          Last Name: {{user.lastName}}\r\n        </div>\r\n        <div class=\"last-name-input\" *ngIf=\"canEdit\">\r\n          <input type=\"text\" name=\"lastName\" [(ngModel)]=\"user.lastName\" [ngModel]>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"bio\">\r\n          Bio: {{user.bio}}\r\n        </div>\r\n        <div class=\"bio-input\" *ngIf=\"canEdit\">\r\n          <input type=\"text\" maxlength=\"255\" name=\"bio\" [(ngModel)]=\"user.bio\" [ngModel]>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"myers\">\r\n        </div>\r\n        <div class=\"myers-dropdown\" *ngIf=\"canEdit\">\r\n          <form [formGroup]=\"myer_form\">\r\n            <select formControlName=\"myer_control\" name=\"myers\" [ngModel] required>\r\n              <option *ngFor=\"let type of myer_types\" [value]=\"type\">\r\n                {{type}}\r\n              </option>\r\n            </select>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!canEdit\">\r\n      <button type=\"button\" (click)=\"canEditUserInfoClick()\">Edit profile information</button>\r\n    </div>\r\n    <div *ngIf=\"canEdit\">\r\n      <button type=\"button\"\r\n              [disabled]=\"!f.valid\"\r\n              (click)=\"updateUserInfoClick(f.value)\">\r\n        Update profile information</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-info-display/user-info-display.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user-info-display/user-info-display.component.ts ***!
  \******************************************************************/
/*! exports provided: UserInfoDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoDisplayComponent", function() { return UserInfoDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/user */ "./src/app/domain/user.ts");
/* harmony import */ var _routers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routers/routing.module */ "./src/app/routers/routing.module.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_matches_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/matches.service */ "./src/app/services/matches.service.ts");
/* harmony import */ var _services_blocked_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/blocked.service */ "./src/app/services/blocked.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserInfoDisplayComponent = /** @class */ (function () {
    function UserInfoDisplayComponent(router, uService, mService, bService, fb) {
        this.router = router;
        this.uService = uService;
        this.mService = mService;
        this.bService = bService;
        this.fb = fb;
        this.user = new _domain_user__WEBPACK_IMPORTED_MODULE_1__["User"](0, "", "", "", "", "");
        this.canEdit = false;
        this.file = null;
    }
    UserInfoDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uService.getUser(parseInt(localStorage.getItem("userid")))
            .subscribe(function (user) {
            console.log(user);
            if (user === null) {
                console.log('the user is null');
            }
            else {
                _this.user.photo = user.photo;
                _this.user.firstName = user.firstName;
                _this.user.lastName = user.lastName;
                _this.user.bio = user.bio;
                _this.user.myers = user.myers;
                _this.updateUserInfo();
            }
        });
        this.mService.getAllMyerTypes()
            .subscribe(function (myer_types) { return _this.myer_types = myer_types; });
    };
    UserInfoDisplayComponent.prototype.updateUserInfo = function () {
        var _this = this;
        this.mService.getAllMatches(this.user.myers)
            .subscribe(function (matches) { return _this.myer_Matches.MatchArray = matches; });
        this.bService.getAllBlocked(this.user.infoId)
            .subscribe(function (blocked) { return _this.blocked.BlockedArray = blocked; });
        this.uService.getAllMatches(this.user.myers)
            .subscribe(function (matched_Users) { return _this.matched_Users = matched_Users; });
        this.filterBlockedUsers();
    };
    UserInfoDisplayComponent.prototype.filterBlockedUsers = function () {
        var _this = this;
        this.matched_Users.forEach(function (user) {
            if (_this.blocked.BlockedArray.includes(user.infoId)) {
                _this.arrayindex = _this.matched_Users.indexOf(user);
                if (_this.arrayindex !== -1) {
                    _this.matched_Users.splice(_this.arrayindex, 1);
                }
            }
        });
    };
    UserInfoDisplayComponent.prototype.canEditUserInfoClick = function () {
        this.canEdit = true;
        this.myer_form = this.fb.group({
            myer_control: this.user.myers
        });
    };
    UserInfoDisplayComponent.prototype.updateUserInfoClick = function (userInfo) {
        this.user.firstName = userInfo.firstName;
        this.user.lastName = userInfo.lastName;
        this.user.bio = userInfo.bio;
        this.user.myers = userInfo.myers;
        this.user.photo = userInfo.photo;
        this.uService.saveUserInfo(this.user).subscribe();
        this.updateUserInfo();
        this.canEdit = false;
    };
    UserInfoDisplayComponent.prototype.onSelectFile = function (event) {
        event.preventDefault();
        //Setting this.file equal to the selected file
        this.file = event.target.files[0];
        if (this.file != null) {
            //Passing image file to UploadImage
            this.uploadImage(this.file);
        }
    }; //ends onSelectFile
    UserInfoDisplayComponent.prototype.uploadImage = function (file) {
        var _this = this;
        fetch('https://api.imgur.com/3/image', {
            method: 'POST',
            headers: {
                Authorization: 'Client-ID c95aaa064b20127',
            },
            body: file
        }).then(function (response) {
            console.log(response);
            if (response.ok) {
                alert('Image Uploaded Succesfully');
            }
            else {
                alert('Image Failed to upload');
            }
            return response.json();
        }).then(function (json) {
            console.log(json);
            var url = json.data.link;
            //alert(url);
            //let test = json.data.deletehash;
            _this.user.photo = url;
            window.open(url);
        });
    }; //ends uploadImage
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _domain_user__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], UserInfoDisplayComponent.prototype, "user", void 0);
    UserInfoDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info-display',
            template: __webpack_require__(/*! ./user-info-display.component.html */ "./src/app/user-info-display/user-info-display.component.html"),
            styles: [__webpack_require__(/*! ./user-info-display.component.css */ "./src/app/user-info-display/user-info-display.component.css")]
        }),
        __metadata("design:paramtypes", [_routers_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingModule"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_matches_service__WEBPACK_IMPORTED_MODULE_4__["MatchesService"], _services_blocked_service__WEBPACK_IMPORTED_MODULE_5__["BlockedService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], UserInfoDisplayComponent);
    return UserInfoDisplayComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Fatmata Bundu Conteh\Desktop\git_here\project2-myers\mvcs\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map