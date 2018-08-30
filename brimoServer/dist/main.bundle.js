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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'devices-menu', component: __WEBPACK_IMPORTED_MODULE_2__devices_devices_devices_component__["a" /* DevicesComponent */] },
    { path: 'cam', component: __WEBPACK_IMPORTED_MODULE_3__camera_camera_camera_component__["a" /* CameraComponent */] },
    { path: 'login-page', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: '', redirectTo: '/devices-menu', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
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

module.exports = "<div *ngIf=\"logged; else login_required\">\n  <app-menu (login_emitter)=\"login($event)\" [is_logged]=\"true\"></app-menu>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n  <app-footer class=\"footer\"></app-footer>\n</div>\n<ng-template #login_required>\n  <router-outlet></router-outlet>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function AppComponent(login_service, router) {
        this.login_service = login_service;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.navigate(['login-page']);
        this.login_service.isLogged().then(function (res) {
            _this.logged = res;
            if (!res) {
                _this.router.navigate(['login-page']);
            }
            else {
                _this.router.navigate(['']);
            }
        }).catch(function () {
            _this.logged = false;
            _this.router.navigate(['']);
        });
    };
    AppComponent.prototype.logout = function () {
        this.logged = false;
        this.router.navigate(['login-page']);
    };
    AppComponent.prototype.login = function (logged) {
        if (!logged) {
            this.login_service.logout();
        }
        this.logged = logged;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__devices_devices_module__["a" /* DevicesModule */],
                __WEBPACK_IMPORTED_MODULE_6__camera_camera_module__["a" /* CameraModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
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

module.exports = "nav {\n  background-color: #221f2e;\n}\n\nul {\n  text-align: center;\n}\n\nnav img {\n  width: 150px;\n}\n\ninput[type=text],\ninput[type=password],\ninput[type=email],\ninput[type=date] {\n\n  font-family: 'Courier New', Courier, monospace;\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  padding: 2rem;\n}\n\n.modal-content {\n  background-color: #fefefe;\n  border: 1px solid #888;\n  width: 100%;\n}\n\n.animate {\n  -webkit-animation: animatezoom 0.6s;\n  animation: animatezoom 0.6s\n}\n\n.container {\n  padding-top: 1%;\n  padding-bottom: 3%;\n}\n\n.oculto2 {\n  display: none;\n  /*Oculto 2 es para todos los tamaños a diferencia de oculto*/\n}\n\n@media only screen and (max-width: 1225px) {\n  .content {\n    min-height: 90%;\n    min-height: calc(100% - 200px);\n  }\n}\n\n@media only screen and (max-width: 1225px) {\n  .content {\n    min-height: 80%;\n    min-height: calc(100% - 175px);\n  }\n}\n\n@media only screen and (max-width: 700px) {\n  nav img {\n    width: 100px;\n  }\n  .container .card-header {\n    display: none;\n  }\n  .content {\n    min-height: 90%;\n    min-height: calc(100% - 100px);\n  }\n}\n\n@media only screen and (max-width: 620px) {\n  nav img {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .oculto {\n    display: none;\n  }\n  ul {\n    width: 100%;\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n  nav {\n    -ms-flex-line-pack: center;\n        align-content: center;\n  }\n}\n"

/***/ }),

/***/ "./src/app/core/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark\">\n  <a class=\"navbar-brand\" href=\"#\" routerLinkActive=\"active\" routerLink=\"\">\n    <img src=\"./assets/logoBrimo.png\" alt=\"logo\" class=\"rounded\">\n  </a>\n  <button class=\"navbar-toggler navbar-toggler-right\" [ngClass]=\"claseBoton\" type=\"button\" (click)=\"botonMenu()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <!-- Links -->\n  <ul class=\"navbar-nav\" [ngClass]=\"claseUl\">\n    <li class=\"nav-item\">\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"botonMenu()\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"devices_menu\">Devices\n        <i class=\"fa fa-thermometer-half\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"cam\">Cam\n        <i class=\"fa fa-camera\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"\">Settings\n        <i class=\"fa fa-cog\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"\">About </a>\n    </li>\n    <li class=\"nav-item\" [ngClass]=\"logOutButtonClass\">\n      <button class=\"btn btn-warning my-2 my-sm-0\" (click)=\"logout()\" type=\"button\">Log Out\n        <i class=\"fa fa-sign-out\"></i>\n      </button>\n    </li>\n    <li class=\"nav-item\" [ngClass]=\"logInButtonClass\" (click)=\"botonLogin()\">\n      <a class=\"btn btn-success my-2 my-sm-0 nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"\">Log In\n        <i class=\"fa fa-sign-in\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n<div id=\"evento_pop_up\" class=\"modal animate\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <span (click)=\"hide()\" class=\"close\" title=\"Cerrar\">\n          <i class='fa fa-times'></i>\n        </span>\n        <div class=\"container\">\n          <label for=\"user\">\n            <b>User</b>\n          </label>\n          <input type=\"text\" placeholder=\"User\" name=\"user\" required [(ngModel)]=\"this.username\">\n          <label for=\"psw\">\n            <b>Password</b>\n          </label>\n          <input type=\"password\" placeholder=\"Contraseña\" name=\"psw\" required [(ngModel)]=\"this.password\">\n          <div class=\"alert alert-danger\" [ngClass]=\"errClass\" role=\"alert\">\n            <strong>Error!</strong> {{this.errMsg}}\n          </div>\n          <button class=\"btn btn-primary\" (click)=\"login()\">Entrar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
        this.errClass = 'oculto2';
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
        (this.loginFormClass === 'oculto2') ? this.show(1) : this.show(0);
    };
    MenuComponent.prototype.login = function () {
        var _this = this;
        if (this.username === '' || this.password === '') {
            this.errMsg = 'Complete all fields.';
            this.errClass = '';
            return;
        }
        var auth_object = new __WEBPACK_IMPORTED_MODULE_2__models_authentication_model__["a" /* AuthenticationModel */](this.username, this.password);
        this.login_service.login(auth_object).then(function (res) {
            if (res === true) {
                _this.login_emitter.emit(true);
            }
        }).catch(function (err) {
            _this.errClass = '';
            _this.errMsg = 'Incorrect credentials. Try again.';
        });
    };
    MenuComponent.prototype.logout = function () {
        this.login_emitter.emit(false);
        this.login_service.logout();
    };
    MenuComponent.prototype.show = function (id) {
        this.errClass = 'oculto2';
        var login = document.getElementById('evento_pop_up');
        if (id === 1) {
            login.style.display = 'block';
        }
        else {
            login.style.display = 'none';
        }
    };
    MenuComponent.prototype.hide = function (id) {
        this.errClass = 'oculto2';
        var login = document.getElementById('evento_pop_up');
        login.style.display = 'none';
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

module.exports = "<div class=\"row\" (click)=\"setContent()\">\n  <div class=\"col-sm-5\">\n      <i [className]=\"this.arrowClass\"></i>\n    Name: {{oDevice.name}}\n  </div>\n  <div class=\"col-sm-4\">\n    Location: {{oDevice.location}}\n  </div>\n  <div class=\"col-sm-3\">\n    Status:\n    <i class=\"fa fa-circle\" [ngClass]=\"getStatus()\"></i>\n  </div>\n</div>\n<div class=\"card\" [ngClass]=\"contentClass\">\n  <div class=\"card-header\">INFO: {{oDevice.info}}</div>\n  <div class=\"card-body\">\n    <div class=\"row\" [ngClass]='editClass'>\n      <div class=\"col-sm-3\">\n        <label for=\"command\">Commands\n          <i alt=\"as\" (click)=\"showInstructions()\" class=\"fa fa-question-circle\"></i>\n        </label>\n      </div>\n      <div *ngIf=\"this.oDevice.commands == 'NNN';\" class=\"col-sm-9\">\n        <p>This device does not accept commands.</p>\n      </div>\n      <div *ngIf=\"(this.oDevice.commands[2] == 'Y' && this.oDevice.commands != 'NNN');\" class=\"col-sm-9\">\n        <div class=\"col-sm-7\">\n          <input type=\"text\" class=\"form-control\" name=\"command\" id=\"command\" placeholder=\"\" [(value)]=\"commandText\">\n        </div>\n        <div class=\"col-sm-2 col-6\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"sendCommandDevice(commandText)\">SEND</button>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row \" [ngClass]='editClass'>\n      <div *ngIf=\"this.oDevice.commands[0] == 'Y';\" class=\"command-buttons col-6\">\n        <button type=\"button\" class=\"btn btn-success col-4\" (click)=\"sendCommandDevice('ON')\">ON</button>\n        <button type=\"button\" class=\"btn btn-danger col-4\" (click)=\"sendCommandDevice('OFF')\">OFF</button>\n      </div>\n      <div *ngIf=\"this.oDevice.commands[1] == 'Y';\"  class=\"command-buttons col-6\">\n        <button type=\"button\" class=\"btn btn-warning col-4\" (click)=\"sendCommandDevice('+')\">+</button>\n        <button type=\"button\" class=\"btn btn-warning col-4\" (click)=\"sendCommandDevice('-')\">-</button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\" [ngClass]='editClass2'>\n        <div class=\"col-sm-5\">\n          <label for=\"command\">New name: </label>\n        </div>\n        <div class=\"col-sm-7 \">\n          <input type=\"text\" class=\"form-control\" name=\"new_name\" placeholder=\"\" [(ngModel)]=\"new_name\">\n        </div>\n      </div>\n      <div class=\"row\" [ngClass]='editClass2'>\n        <div class=\"col-sm-5\">\n          <label for=\"command\">New location: </label>\n        </div>\n        <div class=\"col-sm-7 \">\n          <input type=\"text\" class=\"form-control\" name=\"new_location\" placeholder=\"\" [(ngModel)]=\"new_location\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-footer\">\n    <div class=\"row\">\n      <button type=\"button\" class=\"btn btn-secondary col-2\" [ngClass]='editClass' (click)=\"editDevice()\">\n        <i class=\"fa fa-pencil\"></i>\n        <span class=\"txtBtn\">EDIT</span>\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary col-2\" [ngClass]='editClass2' (click)=\"editDeviceSave()\">\n        <i class=\"fa fa-save\"></i>\n        <span class=\"txtBtn\">SAVE</span>\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary col-2\" [ngClass]='editClass2' (click)=\"editDevice()\">\n        <i class=\"fa fa-times-circle\"></i>\n        <span class=\"txtBtn\">CANCEL</span>\n      </button>\n      <button type=\"button\" class=\"btn btn-secondary col-2\" (click)=\"deleteDevice()\">\n        <i class=\"fa fa-trash\"></i>\n        <span class=\"txtBtn\">DELETE</span>\n      </button>\n      <div *ngIf=\"this.oDevice.camera;\" class=\"col-2\" [ngClass]='editClass'>\n        <button type=\"button\" class=\"btn btn-primary\">\n          <i class=\"fa fa-camera\"></i>\n          <span class=\"txtBtn\">VIEW CAM</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
        this.commandText = '';
    }
    DeviceComponent.prototype.ngOnInit = function () {
    };
    DeviceComponent.prototype.showInstructions = function () {
        console.log('cam' + this.oDevice.commands);
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
        })
            .catch(function (err) {
            if (err === -1) {
                console.error('Log In necessary');
                return -1;
            }
            alert('Error while sending command: ' + err);
            console.log(err);
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
        })
            .catch(function (err) {
            if (err === -1) {
                console.error('Log In necessary');
                return -1;
            }
            alert('Error while sending command: ' + err);
            console.log(err);
        });
    };
    DeviceComponent.prototype.sendCommandDevice = function (command) {
        console.log(command);
        this.devices_service.sendCommandDevice(this.oDevice, command).then(function () {
            console.log('Command sent');
        }).catch(function (err) {
            if (err === -1) {
                console.error('Log In necessary');
                return -1;
            }
            alert('Error while sending command: ' + err);
            console.log(err);
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

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"aRooms.length > 0\" class=\"row\" >\n    <div class=\"col-sm-5\">\n      <label for=\"sel1\">Filter by room:</label>\n    </div>\n    <div class=\"col-sm-7 \">\n      <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"filtered_room\">\n            <option>None</option>\n          <ng-container *ngFor=\"let item of aRooms; index as i;\">\n              <option>{{item}}</option>\n          </ng-container>\n      </select>\n    </div>\n</div>\n  <ul class=\"list-group row\">\n    <div *ngIf=\"filtered_room == 'None'; else filtered\">\n      <ng-container *ngFor=\"let item of aDevices; index as i;\">\n          <li class=\"list-group-item row\" [ngClass]=\"getStatus(item)\" >\n              <app-device class=\"col-10\" [oDevice]=\"item\"  (deleted)=\"deleteDevice($event)\"></app-device>\n          </li>\n      </ng-container>\n    </div>\n\n  </ul>\n</div>\n<ng-template #filtered>\n  <ng-container *ngFor=\"let item of aDevices; index as i;\">\n      <li *ngIf=\"item.location === filtered_room\" class=\"list-group-item row\" [ngClass]=\"getStatus(item)\" >\n          <app-device class=\"col-10\"  [oDevice]=\"item\"  (deleted)=\"deleteDevice($event)\"></app-device>\n      </li>\n  </ng-container>\n</ng-template>\n"

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
        }).catch(function (err) {
            if (err === -1) {
                console.error('Log In necessary');
                return -1;
            }
            console.log(err);
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
            }).catch(function (err) {
                if (err === -1) {
                    console.error('Log In necessary');
                    return -1;
                }
                console.log(err);
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

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%;\n}\n\n.align {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.grid {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 20rem;\n  width: 90%;\n}\n\n.hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.icons {\n  display: none;\n}\n\n.icon {\n  display: inline-block;\n  fill: #606468;\n  font-size: 1rem;\n  height: 1em;\n  vertical-align: middle;\n  width: 1em;\n}\n\n* {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 100%;\n}\n\nbody {\n  background-color: #221f2e;\n  color: #606468;\n  height: 100%;\n  margin: 0;\n  min-height: 100vh;\n}\n\na {\n  color: #eee;\n  outline: 0;\n  text-decoration: none;\n}\n\na:focus,\na:hover {\n  text-decoration: underline;\n}\n\n:root {\n  --formFieldMargin: 0.875rem;\n}\n\ninput {\n  background-image: none;\n  border: 0;\n  color: inherit;\n  font: inherit;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s;\n}\n\ninput[type='button'] {\n  cursor: pointer;\n}\n\n.form {\n  margin: calc(0.875rem * -1);\n}\n\n.form input[type='password'],\n.form input[type='text'],\n.form input[type='button'] {\n  width: 100%;\n}\n\n.form__field {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0.875rem;\n}\n\n.form__input {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.login {\n  color: #eee;\n}\n\n.login label,\n.login input[type='text'],\n.login input[type='password'],\n.login input[type='button'] {\n  border-radius: 0.25rem;\n  padding: 1rem;\n}\n\n.login label {\n  background-color: #363b41;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n  margin-bottom: 0px;\n}\n\n.login input[type='password'],\n.login input[type='text'] {\n  background-color: #3b4148;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.login input[type='password']:focus,\n.login input[type='password']:hover,\n.login input[type='text']:focus,\n.login input[type='text']:hover {\n  background-color: #434a52;\n}\n\n.login input[type='button'] {\n  background-color: #ea4c88;\n  color: #eee;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.login input[type='button']:focus,\n.login input[type='button']:hover {\n  background-color: #d44179;\n}\n\np {\n  margin-bottom: 1.5rem;\n  margin-top: 1.5rem;\n}\n\n.text--center {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"align\">\n\n  <div class=\"grid\">\n    <img class=\"login_image\" src=\"./assets/logoBrimo.png\" alt=\"logo\" class=\"rounded\">\n    <form class=\"form login\">\n\n      <div class=\"form__field\">\n        <label for=\"login__username\">\n          <i class=\"fa fa-user\"></i>\n          <span class=\"hidden\">Username</span>\n        </label>\n        <input id=\"login__username\" type=\"text\" name=\"username\" class=\"form__input\" placeholder=\"Username\" required [(ngModel)]=\"this.username\">\n      </div>\n\n      <div class=\"form__field\">\n        <label for=\"login__password\">\n          <i class=\"fa fa-lock\"></i>\n          <span class=\"hidden\">Password</span>\n        </label>\n        <input id=\"login__password\" type=\"password\" name=\"password\" class=\"form__input\" placeholder=\"Password\" required [(ngModel)]=\"this.password\">\n      </div>\n\n      <div class=\"form__field\">\n        <input type=\"button\" value=\"Sign In\" (click)=\"login()\">\n      </div>\n\n    </form>\n\n    <p class=\"text--center\">Need help?\n      <a href=\"#\">Help page</a>\n      <svg class=\"icon\">\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#arrow-right\"></use>\n      </svg>\n    </p>\n\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_authentication_model__ = __webpack_require__("./src/app/models/authentication.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(login_service, router) {
        this.login_service = login_service;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.username = '';
        this.password = '';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.username === '' || this.password === '') {
            this.errMsg = 'Complete all fields.';
            this.errClass = '';
            return;
        }
        var auth_object = new __WEBPACK_IMPORTED_MODULE_2__models_authentication_model__["a" /* AuthenticationModel */](this.username, this.password);
        this.login_service.login(auth_object).then(function (res) {
            if (res === true) {
                _this.router.navigate(['']);
            }
        }).catch(function (err) {
            _this.errClass = '';
            _this.errMsg = 'Incorrect credentials. Try again.';
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
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
    function Device(id, name, freq, info, commands, location, lastupdate, camera, ip) {
        this.id = id;
        this.name = name;
        this.freq = freq;
        this.info = info;
        this.commands = commands;
        this.location = location;
        this.lastupdate = lastupdate;
        this.camera = camera;
        this.ip = ip;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var token_key = 'tknBrM';
var URLAPI = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlApi; // 'http://localhost:8080'; // window.location.origin;
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.url = URLAPI;
    }
    AuthenticationService.prototype.login = function (auth_object) {
        var url_login = this.url + '/login';
        return this.http.post(url_login, auth_object).toPromise().then(function (response) {
            localStorage.setItem(token_key, response.tkn_auth);
            return true;
        }).catch(function () { return false; });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem(token_key);
    };
    AuthenticationService.prototype.isLogged = function () {
        var urlget = this.url + '/devices';
        var headers = this.getHeaders();
        if (!headers) {
            throw -1;
        }
        return this.http.get(urlget, headers).toPromise().then(function (response) {
            if (response.status === 401) {
                return false;
            }
            return true;
        }).catch(function () { return false; });
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem(token_key);
    };
    AuthenticationService.prototype.getHeaders = function () {
        var token = this.getToken();
        if (!token) {
            return undefined;
        }
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': token,
            })
        };
        return httpOptions;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
var URLAPI = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].urlApi;
var token_key = 'tknBrM';
var DevicesService = /** @class */ (function () {
    function DevicesService(http) {
        this.http = http;
        this.aDevices = [];
        this.url = URLAPI;
    }
    DevicesService.prototype.getDevices = function () {
        var _this = this;
        var urlget = this.url + '/devices';
        var headers = this.getHeaders();
        if (!headers) {
            throw -1;
        }
        return this.http.get(urlget, headers).toPromise().then(function (response) {
            _this.aDevices = Object.values(response);
            return _this.aDevices;
        }).catch(function () { location.reload(); return _this.aDevices; });
    };
    DevicesService.prototype.deleteDevice = function (oDevice) {
        var urldelete = this.url + '/device/' + oDevice.id;
        var headers = this.getHeaders();
        if (!headers) {
            location.reload();
            throw -1;
        }
        return this.http.delete(urldelete, headers).toPromise().catch(function () { location.reload(); });
    };
    DevicesService.prototype.editDevice = function (oDevice) {
        var urledit = this.url + '/device/' + oDevice.id;
        var editObject = new __WEBPACK_IMPORTED_MODULE_2__models_devices_model__["b" /* DeviceEdit */](oDevice.name, oDevice.location);
        var headers = this.getHeaders();
        if (!headers) {
            location.reload();
            throw -1;
        }
        return this.http.put(urledit, JSON.stringify(editObject), headers).toPromise().catch(function () { location.reload(); });
    };
    DevicesService.prototype.updateDevice = function (oDevice) {
        var _this = this;
        var urlget = this.url + '/device/' + oDevice.id;
        var headers = this.getHeaders();
        if (!headers) {
            location.reload();
            throw -1;
        }
        return this.http.get(urlget, headers).toPromise().then(function (response) {
            _this.aDevices = Object.values(response);
            return _this.aDevices;
        }).catch(function () { location.reload(); });
    };
    DevicesService.prototype.sendCommandDevice = function (oDevice, command) {
        var urlDevice = 'http://' + oDevice.ip;
        var commandOBject = {
            id: oDevice.id,
            Action: command,
        };
        var headers = this.getHeaders();
        if (!headers) {
            location.reload();
            throw -1;
        }
        return this.http.put(urlDevice, JSON.stringify(commandOBject), headers).toPromise().catch(function () { location.reload(); });
    };
    DevicesService.prototype.getHeaders = function () {
        var token = localStorage.getItem(token_key);
        if (!token) {
            return undefined;
        }
        var httopts = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': token,
                'CORS': 'Access-Control-Allow-Origin',
            })
        };
        return httopts;
    };
    DevicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DevicesService);
    return DevicesService;
}());

/*
ip_actuador/
{
    "id" : "33",
    "Action" : "ON", "OFF", "+", "-", "texto"
}*/


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
    production: false,
    urlApi: 'http://localhost:8080'
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