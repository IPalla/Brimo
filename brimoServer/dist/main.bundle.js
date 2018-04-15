webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices_devices_component__ = __webpack_require__("./src/app/devices/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__camera_camera_camera_component__ = __webpack_require__("./src/app/camera/camera/camera.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'devices_menu', component: __WEBPACK_IMPORTED_MODULE_2__devices_devices_devices_component__["a" /* DevicesComponent */] },
    { path: 'cam', component: __WEBPACK_IMPORTED_MODULE_3__camera_camera_camera_component__["a" /* CameraComponent */] },
    { path: '', redirectTo: '/devices_menu', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"logged; else login_required\">\n  <app-menu class=\"content\" (login_emitter)=\"login($event)\" [is_logged]=\"true\"></app-menu >\n  <router-outlet ></router-outlet>\n  <app-footer class = \"footer\"></app-footer>\n</div>\n<ng-template #login_required>\n    <app-menu   (login_emitter)=\"login($event)\" [is_logged]=\"false\" ></app-menu>\n    <div class=\"content\">\n        <div class=\" alert alert-danger \">\n            <strong>Log In necessary</strong> Welcome to BRIMO. Log In is necessary to manage devices and rooms.\n            <br> If is the first time you acess check manual for default user and password.\n          </div>\n    </div>\n    <app-footer class = \"footer\"></app-footer>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(login_service) {
        this.login_service = login_service;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.logged = false;
    };
    AppComponent.prototype.logout = function () {
        this.logged = false;
    };
    AppComponent.prototype.login = function (logged) {
        if (!logged) {
            this.login_service.logout().then(console.log).catch(console.log);
        }
        this.logged = logged;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__devices_devices_module__ = __webpack_require__("./src/app/devices/devices.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__camera_camera_module__ = __webpack_require__("./src/app/camera/camera.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__devices_devices_module__["a" /* DevicesModule */],
                __WEBPACK_IMPORTED_MODULE_6__camera_camera_module__["a" /* CameraModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/camera/camera.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_camera_component__ = __webpack_require__("./src/app/camera/camera/camera.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CameraModule = /** @class */ (function () {
    function CameraModule() {
    }
    CameraModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__camera_camera_component__["a" /* CameraComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__camera_camera_component__["a" /* CameraComponent */]]
        })
    ], CameraModule);
    return CameraModule;
}());



/***/ }),

/***/ "./src/app/camera/camera/camera.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\n  padding-top: 3%;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.img-fluid{\n  height: 25rem;\n}\n@media (min-height: 600px) {\n  .row{\n    padding-top: 5%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/camera/camera/camera.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row justify-content-center\">\n  <ng-container >\n    <img class=\"img-fluid\" [src]=\"img_src\" alt=\"webcam\" width=\"auto\" height=\"auto\"/>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/camera/camera/camera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CameraComponent = /** @class */ (function () {
    function CameraComponent() {
        this.img_src = 'http://brimo.ddns.net:8081/images/pic.jpg';
    }
    CameraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.img_src = 'http://brimo.ddns.net:8081/images/pic.jpg?' + new Date().getTime();
            console.log('updated photo');
        }, 100);
    };
    CameraComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    CameraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-camera',
            template: __webpack_require__("./src/app/camera/camera/camera.component.html"),
            styles: [__webpack_require__("./src/app/camera/camera/camera.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CameraComponent);
    return CameraComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__ = __webpack_require__("./src/app/core/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("./src/app/core/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__menu_menu_component__["a" /* MenuComponent */], __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__["a" /* MenuComponent */], __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "\n*{\n  font-family: 'Courier New', Courier, monospace;\n  font-style: italic;\n  border: 1px;\n  background-color: #221f2e;\n  color: grey;\n}\n@media only screen and (max-width: 700px){\n  footer div:first-child{\n    display: none;\n  }\n}\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"page-footer font-small blue pt-4 mt-4\">\n\n    <div class=\"container-fluid text-center text-md-left\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                <h5 class=\"text-uppercase\">BRIMO</h5>\n                <p>By Ignacio Pallarés Jiménez, Universidad Autónoma de Madrid.</p>\n            </div>\n        </div>\n    </div>\n    <!--Copyright-->\n    <div class=\"footer-copyright py-3 text-center\">\n        © 2018:\n        <a href=\"/about\"> Ignacio Pallarés Jiménez </a>\n    </div>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/core/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = "\nnav{\n  background-color:#221f2e;\n}\nul{\n  text-align: center;\n}\nnav img{\n  width:150px;\n}\ninput{\n  width: 70%;\n}\n.container{\n  padding-top: 1%;\n  padding-bottom: 3%;\n}\n.oculto2{\n  display: none; /*Oculto 2 es para todos los tamaños a diferencia de oculto*/\n}\np input{\n  font-family: 'Courier New', Courier, monospace;\n  font-style: italic;\n}\n@media only screen and (max-width: 1225px){\n  .content\n  {\n      min-height: 90%;\n      min-height: calc(100% - 200px);\n  }\n}\n@media only screen and (max-width: 1225px){\n  .content\n  {\n      min-height: 80%;\n      min-height: calc(100% - 175px);\n  }\n}\n@media only screen and (max-width: 700px){\n  nav img{\n   width: 100px;\n  }\n  .container .card-header{\n    display: none;\n  }\n  .content\n  {\n      min-height: 90%;\n      min-height: calc(100% - 100px);\n  }\n}\n@media only screen and (max-width: 620px){\n  nav img{\n    display: none;\n  }\n}\n@media only screen and (max-width: 575px){\n\n  .oculto{\n    display: none;\n  }\n  ul{\n    width: 100%;\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  nav {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n}\n"

/***/ }),

/***/ "./src/app/core/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark\">\n  <a class=\"navbar-brand\" href=\"#\" routerLinkActive=\"active\" routerLink=\"\">\n    <img src=\"./assets/logoBrimo.png\" alt=\"logo\" class=\"rounded\">\n  </a>\n  <button class=\"navbar-toggler navbar-toggler-right\" [ngClass]=\"claseBoton\" type=\"button\" (click)=\"botonMenu()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <!-- Links -->\n  <ul class=\"navbar-nav\" [ngClass]=\"claseUl\">\n    <li class=\"nav-item\">\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"botonMenu()\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"devices_menu\">Devices\n        <i class=\"fa fa-thermometer-half\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"cam\">Cam\n        <i class=\"fa fa-camera\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"\">Settings\n        <i class=\"fa fa-cog\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"\">About </a>\n    </li>\n    <li class=\"nav-item\" [ngClass]=\"logOutButtonClass\">\n        <button class=\"btn btn-warning my-2 my-sm-0\" (click)=\"logout()\" type=\"button\">Log Out\n          <i class=\"fa fa-sign-out\"></i>\n        </button>\n    </li>\n    <li class=\"nav-item\" [ngClass]=\"logInButtonClass\" (click)=\"botonLogin()\">\n      <a class=\"btn btn-success my-2 my-sm-0 nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"\" >Log In\n        <i class=\"fa fa-sign-in\"></i></a>\n    </li>\n  </ul>\n</nav>\n\n<div class=\"container\" [ngClass]=\"loginFormClass\">\n  <div class=\"row\">\n    <div class=\"card  text-white bg-success col-lg-3 col-md-5 offset-md-7 offset-lg-9\">\n      <div class=\"card-body\">\n          <p>\n            <label for=\"username\">User:</label>\n          </p>\n          <p>\n            <input type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"username\">\n          </p>\n          <p>\n            <label for=\"pwd\">Password:</label>\n          </p>\n          <p>\n            <input type=\"password\" id=\"pwd\" name=\"pwd\" [(ngModel)]=\"password\">\n          </p>\n          <p>\n            <button class=\"btn btn-primary\" (click)=\"login()\">Log In\n              <i class=\"fa fa-sign-in\" ></i>\n            </button>\n          </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/core/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_authentication_model__ = __webpack_require__("./src/app/models/authentication.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(login_service) {
        this.login_service = login_service;
        this.login_emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.estado = false;
        this.claseUl = ' oculto';
        this.claseBoton = '';
        this.username = '';
        this.password = '';
        if (this.is_logged) {
            this.logInButtonClass = 'oculto2';
            this.logOutButtonClass = '';
        }
        else {
            this.logOutButtonClass = 'oculto2';
            this.logInButtonClass = '';
        }
        this.loginFormClass = 'oculto2';
    };
    MenuComponent.prototype.botonMenu = function () {
        this.estado = !this.estado;
        if (this.estado) {
            this.claseUl = ' ';
            this.claseBoton = ' oculto';
        }
        if (!this.estado) {
            this.claseUl = ' oculto';
            this.claseBoton = ' ';
        }
    };
    MenuComponent.prototype.botonLogin = function () {
        if (this.is_logged) {
            return;
        }
        (this.loginFormClass === 'oculto2') ? this.loginFormClass = '' : this.loginFormClass = 'oculto2';
    };
    MenuComponent.prototype.login = function () {
        var _this = this;
        if (this.username === '' || this.password === '') {
            return;
        }
        var auth_object = new __WEBPACK_IMPORTED_MODULE_2__models_authentication_model__["a" /* AuthenticationModel */](this.username, this.password);
        this.login_service.login(auth_object).then(function (res) {
            console.log(res);
            if (res === true) {
                _this.login_emitter.emit(true);
            }
        }).catch(console.log);
    };
    MenuComponent.prototype.logout = function () {
        this.login_emitter.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MenuComponent.prototype, "is_logged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MenuComponent.prototype, "login_emitter", void 0);
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/core/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/core/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/devices/device/device.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\n  cursor: pointer;\n}\n.offline{\n  color: red;\n}\n.online{\n  color: green;\n  animation-name: parpadeo;\n  animation-duration: 1.8s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n\n  -webkit-animation-name:parpadeo;\n  -webkit-animation-duration: 1.8s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n\n}\n@-webkit-keyframes parpadeo {\n  50% { opacity: 0.0; }\n   100% { opacity: 1.0; }\n}\n@keyframes parpadeo {\n   50% { opacity: 0.0; }\n  100% { opacity: 1.0; }\n}\n.oculto{\n  display: none;\n}\n.container-fluid{\n  max-width: 760px;\n}\nul {\n  padding-top: 22px;\n}\nul li{\n  margin:10px;\n  background-color: #6b47e1;\n  border-radius: 5px;\n}\n.card{\n  background-color: #d7d1ea;\n}\nlabel i{\n  cursor: pointer;\n  color: blue;\n}\n.command-buttons{\n  padding-top: 7px;\n}\n.command-buttons button{\n  margin-left: 5%;\n}\n.card-footer button{\n  margin-left: 5%;\n}\nli .col-1{\n  cursor: pointer;\n}\n.oculto{\n  display: none;\n}\n@media only screen and (max-width: 660px){\n  *{\n    font-size: 12px;\n  }\n  .card-footer button span{\n    visibility: hidden; display: none;\n    display: none;\n  }\n}\n"

/***/ }),

/***/ "./src/app/devices/device/device.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\" (click)=\"setContent()\">\n    <div class=\"col-1\" >\n        <i [className]=\"this.arrowClass\" ></i>\n    </div>\n    <div class=\"col-md-4\" >\n      Name: {{oDevice.name}}\n    </div>\n    <div class=\"col-md-4\" >\n      Location: {{oDevice.location}}\n    </div>\n    <div class=\"col-md-3\">\n      Status: <i class=\"fa fa-circle\" [ngClass]=\"getStatus()\"></i>\n    </div>\n  </div>\n  <div class=\"card\" [ngClass]=\"contentClass\">\n    <div class=\"card-header\">INFO: {{oDevice.info}}</div>\n    <div class=\"card-body\" >\n      <div class=\"row\" [ngClass]='editClass'>\n          <div class=\"col-sm-3\">\n            <label for=\"command\">Commands <i alt=\"as\"(click)=\"showInstructions()\" class=\"fa fa-question-circle\"></i></label>\n          </div>\n          <div class=\"col-sm-7\">\n            <input type=\"text\" class=\"form-control\" name=\"command\" id=\"command\" placeholder=\"\">\n          </div>\n          <div class=\"col-sm-2 col-6\">\n            <button type=\"button\" class=\"btn btn-primary\">SEND</button>\n          </div>\n      </div>\n      <div class=\"row command-buttons\"  [ngClass]='editClass'>\n        <button type=\"button\" class=\"btn btn-success col-2\">ON</button>\n        <button type=\"button\" class=\"btn btn-danger col-2\">OFF</button>\n        <button type=\"button\" class=\"btn btn-warning col-2\">+</button>\n        <button type=\"button\" class=\"btn btn-warning col-2\">-</button>\n      </div>\n      <div class=\"card-body\">\n          <div class=\"row\" [ngClass]='editClass2'>\n              <div class=\"col-sm-5\">\n                <label for=\"command\">New name: </label>\n              </div>\n              <div class=\"col-sm-7 \">\n                <input type=\"text\" class=\"form-control\" name=\"new_name\" placeholder=\"\" [(ngModel)] = \"new_name\">\n              </div>\n          </div>\n          <div class=\"row\" [ngClass]='editClass2'>\n              <div class=\"col-sm-5\">\n                <label for=\"command\">New location: </label>\n              </div>\n              <div class=\"col-sm-7 \">\n                <input type=\"text\" class=\"form-control\" name=\"new_location\" placeholder=\"\" [(ngModel)] = \"new_location\">\n              </div>\n          </div>\n      </div>\n    </div>\n\n    <div class=\"card-footer\" >\n      <div class=\"row\">\n        <button type=\"button\" class=\"btn btn-secondary col-2\" [ngClass]='editClass' (click)=\"editDevice()\"><i class=\"fa fa-pencil\"></i> <span class=\"txtBtn\"  >EDIT</span> </button>\n        <button type=\"button\" class=\"btn btn-secondary col-2\" [ngClass]='editClass2' (click)=\"editDeviceSave()\"><i class=\"fa fa-save\"></i> <span class=\"txtBtn\"  >SAVE</span> </button>\n        <button type=\"button\" class=\"btn btn-secondary col-2\" [ngClass]='editClass2' (click)=\"editDevice()\"><i class=\"fa fa-times-circle\"></i> <span class=\"txtBtn\"  >CANCEL</span> </button>\n        <button type=\"button\" class=\"btn btn-secondary col-2\" (click)=\"deleteDevice()\"><i class=\"fa fa-trash\"></i>  <span class=\"txtBtn\">DELETE</span></button>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/devices/device/device.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_devices_model__ = __webpack_require__("./src/app/models/devices.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_devices_service__ = __webpack_require__("./src/app/services/devices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceComponent = /** @class */ (function () {
    function DeviceComponent(devices_service) {
        this.devices_service = devices_service;
        this.deleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.arrowClass = 'fa fa-sort-down';
        this.shown = false;
        this.contentClass = 'oculto';
        this.editClass = '';
        this.editClass2 = 'oculto';
    }
    DeviceComponent.prototype.ngOnInit = function () {
    };
    DeviceComponent.prototype.showInstructions = function () {
        alert('Different commands are avalaible depending on your device type. Check instructions to know more.');
    };
    DeviceComponent.prototype.getStatus = function () {
        var lastupdate = Math.round(Number(new Date(this.oDevice.lastupdate)) / 1000); // Seconds of lastupdate
        var now = Math.round(Number(new Date()) / 1000); // Actual seconds
        var update_frequency = Math.round(Number(this.oDevice.freq)); // Update Frequency on seconds
        if (now - lastupdate <= update_frequency) {
            return 'online';
        }
        return 'offline';
    };
    DeviceComponent.prototype.setContent = function () {
        this.shown = !this.shown;
        (this.shown) ? this.arrowClass = 'fa fa-sort-up' : this.arrowClass = 'fa fa-sort-down';
        (this.shown) ? this.contentClass = '' : this.contentClass = 'oculto';
    };
    DeviceComponent.prototype.deleteDevice = function () {
        this.deleted.emit(this.oDevice);
        this.devices_service.deleteDevice(this.oDevice).then(function () {
            console.log('borrado');
        });
    };
    DeviceComponent.prototype.editDevice = function () {
        if (this.editClass === '') {
            this.editClass = 'oculto';
            this.editClass2 = '';
            this.new_name = this.oDevice.name;
            this.new_location = this.oDevice.location;
        }
        else {
            this.editClass = '';
            this.editClass2 = 'oculto';
        }
    };
    DeviceComponent.prototype.editDeviceSave = function () {
        if (this.new_location === '') {
            this.new_location = this.oDevice.location;
        }
        if (this.new_name === '') {
            this.new_name = this.oDevice.name;
        }
        this.editClass = '';
        this.editClass2 = 'oculto';
        this.oDevice.name = this.new_name;
        this.oDevice.location = this.new_location;
        this.devices_service.editDevice(this.oDevice).then(function () {
            console.log('editado');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_devices_model__["a" /* Device */])
    ], DeviceComponent.prototype, "oDevice", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], DeviceComponent.prototype, "deleted", void 0);
    DeviceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-device',
            template: __webpack_require__("./src/app/devices/device/device.component.html"),
            styles: [__webpack_require__("./src/app/devices/device/device.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_devices_service__["a" /* DevicesService */]])
    ], DeviceComponent);
    return DeviceComponent;
}());



/***/ }),

/***/ "./src/app/devices/devices.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices_component__ = __webpack_require__("./src/app/devices/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_devices_service__ = __webpack_require__("./src/app/services/devices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_device_component__ = __webpack_require__("./src/app/devices/device/device.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DevicesModule = /** @class */ (function () {
    function DevicesModule() {
    }
    DevicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__devices_devices_component__["a" /* DevicesComponent */], __WEBPACK_IMPORTED_MODULE_4__device_device_component__["a" /* DeviceComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__devices_devices_component__["a" /* DevicesComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_devices_service__["a" /* DevicesService */]
            ]
        })
    ], DevicesModule);
    return DevicesModule;
}());



/***/ }),

/***/ "./src/app/devices/devices/devices.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n.container-fluid{\n  max-width: 760px;\n}\nul {\n  padding-top: 22px;\n}\nul li{\n  margin:10px;\n  background-color: #6b47e1;\n  border-radius: 5px;\n}\n.card{\n  background-color: #d7d1ea;\n}\nlabel i{\n  cursor: pointer;\n  color: blue;\n}\n.command-buttons{\n  padding-top: 7px;\n}\n.command-buttons button{\n  margin-left: 5%;\n}\n.card-footer button{\n  margin-left: 5%;\n}\nli .col-1{\n  cursor: pointer;\n}\n.oculto{\n  display: none;\n}\n@media only screen and (max-width: 660px){\n  *{\n    font-size: 12px;\n  }\n  .card-footer button span{\n    visibility: hidden; display: none;\n    display: none;\n  }\n}\nul .offline{\n  background-color:#727272;\n}\n"

/***/ }),

/***/ "./src/app/devices/devices/devices.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"aRooms.length > 0\" class=\"row\" >\n    <div class=\"col-sm-5\">\n      <label for=\"sel1\">Filter by room:</label>\n    </div>\n    <div class=\"col-sm-7 \">\n      <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"filtered_room\">\n            <option>None</option>\n          <ng-container *ngFor=\"let item of aRooms; index as i;\">\n              <option>{{item}}</option>\n          </ng-container>\n      </select>\n    </div>\n</div>\n  <ul class=\"list-group row\">\n    <div *ngIf=\"filtered_room == 'None'; else filtered\">\n      <ng-container *ngFor=\"let item of aDevices; index as i;\">\n          <li class=\"list-group-item container-fluid row\" [ngClass]=\"getStatus(item)\" >\n              <app-device class=\"col-10\" [oDevice]=\"item\"  (deleted)=\"deleteDevice($event)\"></app-device>\n          </li>\n      </ng-container>\n    </div>\n\n  </ul>\n</div>\n<ng-template #filtered>\n  <ng-container *ngFor=\"let item of aDevices; index as i;\">\n      <li *ngIf=\"item.location === filtered_room\" class=\"list-group-item container-fluid row\" [ngClass]=\"getStatus(item)\" >\n          <app-device class=\"col-10\"  [oDevice]=\"item\"  (deleted)=\"deleteDevice($event)\"></app-device>\n      </li>\n  </ng-container>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/devices/devices/devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_devices_service__ = __webpack_require__("./src/app/services/devices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(devicesService) {
        this.devicesService = devicesService;
        this.aDevices = [];
        this.aRooms = [];
        this.filtered_room = 'None';
    }
    DevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.devicesService.getDevices().then(function (response) {
            _this.aDevices = response;
            _this.getRooms();
        });
        this.timer = setInterval(function () {
            _this.devicesService.getDevices().then(function (response) {
                if (JSON.stringify(_this.aDevices) !== JSON.stringify(response)) {
                    if (_this.aDevices.length !== response.length) {
                        _this.aDevices = response;
                        return;
                    }
                    response.forEach(function (item) {
                        _this.aDevices.forEach(function (item2) {
                            var flag = 0;
                            if (Number(item.id).valueOf() === Number(item2.id).valueOf()) {
                                flag = 1;
                                _this.aDevices[_this.aDevices.indexOf(item2)].info = item.info;
                                _this.aDevices[_this.aDevices.indexOf(item2)].name = item.name;
                                _this.aDevices[_this.aDevices.indexOf(item2)].freq = item.freq;
                                _this.aDevices[_this.aDevices.indexOf(item2)].lastupdate = item.lastupdate;
                                _this.aDevices[_this.aDevices.indexOf(item2)].location = item.location;
                            }
                            if (flag === 0) {
                                if (_this.aDevices.indexOf(item) < 0) {
                                    console.log(item);
                                    _this.aDevices.push(item);
                                }
                            }
                        });
                    });
                }
            });
        }, 5000);
    };
    // tslint:disable-next-line:use-life-cycle-interface
    DevicesComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    DevicesComponent.prototype.showInstructions = function () {
        alert('Different commands are avalaible depending on your device type. Check instructions to know more.');
    };
    DevicesComponent.prototype.fadeContent = function (id) {
    };
    DevicesComponent.prototype.getStatus = function (aDevice) {
        var lastupdate = Math.round(Number(new Date(aDevice.lastupdate)) / 1000); // Seconds of lastupdate
        var now = Math.round(Number(new Date()) / 1000); // Actual seconds
        var update_frequency = Math.round(Number(aDevice.freq)); // Update Frequency on seconds
        if (now - lastupdate <= update_frequency) {
            return 'online';
        }
        return 'offline';
    };
    DevicesComponent.prototype.updateContent = function () {
        var _this = this;
        this.devicesService.getDevices().then(function (response) { return _this.aDevices = response; });
    };
    DevicesComponent.prototype.deleteDevice = function (deleted) {
        var index = this.aDevices.indexOf(deleted);
        if (index > -1) {
            this.aDevices.splice(index, 1);
        }
    };
    DevicesComponent.prototype.getRooms = function () {
        var _this = this;
        this.aDevices.forEach(function (item) {
            if (_this.aRooms.indexOf(item.location) === -1) {
                _this.aRooms.push(item.location);
                console.log(item.location);
            }
        });
    };
    DevicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-devices',
            template: __webpack_require__("./src/app/devices/devices/devices.component.html"),
            styles: [__webpack_require__("./src/app/devices/devices/devices.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_devices_service__["a" /* DevicesService */]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/app/models/authentication.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModel; });
var AuthenticationModel = /** @class */ (function () {
    function AuthenticationModel(username, password) {
        this.username = username;
        this.password = password;
    }
    return AuthenticationModel;
}());



/***/ }),

/***/ "./src/app/models/devices.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Device; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeviceEdit; });
var Device = /** @class */ (function () {
    function Device(id, name, freq, info, location, lastupdate) {
        this.id = id;
        this.name = name;
        this.freq = freq;
        this.info = info;
        this.location = location;
        this.lastupdate = lastupdate;
    }
    Device.prototype.getStatus = function () {
        return true;
    };
    return Device;
}());

var DeviceEdit = /** @class */ (function () {
    function DeviceEdit(new_name, new_location) {
        this.new_name = new_name;
        this.new_location = new_location;
    }
    return DeviceEdit;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var URLAPI = 'http://localhost:8080'; // window.location.origin;
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.url = URLAPI;
    }
    AuthenticationService.prototype.login = function (auth_object) {
        var url_login = this.url + '/login';
        return this.http.post(url_login, auth_object).toPromise().then(function (response) {
            return true;
        });
    };
    AuthenticationService.prototype.logout = function () {
        var url_logout = this.url + '/logout';
        return this.http.get(url_logout).toPromise().then(function (response) {
            console.log(response);
            console.log('logout');
            return response;
        });
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/devices.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_devices_model__ = __webpack_require__("./src/app/models/devices.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 *
 *
 * @export
 * @class DevicesSerive
 * Devices Service: this service manage data from the server's database. It gets, delete and update
 * device's data using httpclient methods (post, get and delete).
 *
 */
var URLAPI = window.location.origin;
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var DevicesService = /** @class */ (function () {
    function DevicesService(http) {
        this.http = http;
        this.aDevices = [];
        this.url = URLAPI;
    }
    DevicesService.prototype.getDevices = function () {
        var _this = this;
        var urlget = this.url + '/devices';
        return this.http.get(urlget).toPromise().then(function (response) {
            // It uses Object.values() instead of the response because of problems
            // on the server while implementing JSON function. It returns an __proto__ object
            // instead an array object.
            _this.aDevices = Object.values(response);
            return _this.aDevices;
        }).catch(function (res) {
            return _this.aDevices;
        });
    };
    DevicesService.prototype.deleteDevice = function (oDevice) {
        var urldelete = this.url + '/device/' + oDevice.id;
        return this.http.delete(urldelete).toPromise();
    };
    DevicesService.prototype.editDevice = function (oDevice) {
        var urledit = this.url + '/device/' + oDevice.id;
        var editObject = new __WEBPACK_IMPORTED_MODULE_2__models_devices_model__["b" /* DeviceEdit */](oDevice.name, oDevice.location);
        console.log(JSON.stringify(editObject));
        return this.http.put(urledit, JSON.stringify(editObject), httpOptions).toPromise();
    };
    DevicesService.prototype.updateDevice = function (oDevice) {
        var _this = this;
        var urlget = this.url + '/device/' + oDevice.id;
        return this.http.get(urlget).toPromise().then(function (response) {
            _this.aDevices = Object.values(response);
            return _this.aDevices;
        });
    };
    DevicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DevicesService);
    return DevicesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map