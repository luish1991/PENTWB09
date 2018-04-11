webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var rutas = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["c" /* HomeComponent */] },
    { path: 'registrar', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["d" /* RegistroComponent */] },
    { path: 'verUsuarios', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["e" /* VerUsuariosComponent */] },
    { path: 'buscarUsuario', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["b" /* BuscarUsuarioComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(rutas)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RegistroComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VerUsuariosComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BuscarUsuarioComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_datos_service__ = __webpack_require__("../../../../../src/app/app.datos-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var usuariosBD = [
    { nombre: 'Luis Ponce', edad: '25', correo: 'luis.ponce@softtek.com' },
    { nombre: 'Ana Morales', edad: '28', correo: 'anam.morales@softtek.com' },
    { nombre: 'Ramon Lopez', edad: '27', correo: 'ramonl.lopez@softtek.com' },
    { nombre: 'Viridiana Hernandez', edad: '26', correo: 'viridiana.hernandez@softtek.com' }
];
//Definicion de HomeComponent
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: ""
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//Definicion de RegistroComponent
var RegistroComponent = (function () {
    function RegistroComponent(datosService, router) {
        this.datosService = datosService;
        this.router = router;
        this.nombre = "";
        this.edad = 0;
        this.correo = "";
    }
    RegistroComponent.prototype.ngOnInit = function () { };
    RegistroComponent.prototype.registrar = function () {
        var user = { nombre: this.nombre, edad: this.edad, correo: this.correo };
        this.datosService.getQueue().push(user);
        alert("El usuario ha sido registrado");
        this.router.navigate(['index']);
    };
    return RegistroComponent;
}());
RegistroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registro',
        template: __webpack_require__("../../../../../src/app/formRegistro.html"),
        styles: [__webpack_require__("../../../../../src/app/styles.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_datos_service__["a" /* DatosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_datos_service__["a" /* DatosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], RegistroComponent);

//Definicion de VerUsuariosComponent
var VerUsuariosComponent = (function () {
    function VerUsuariosComponent(datosService) {
        this.datosService = datosService;
        this.usuarios = [];
    }
    VerUsuariosComponent.prototype.ngOnInit = function () {
        var aux = usuariosBD.slice(0, usuariosBD.length);
        var queue = this.datosService.getQueue();
        if (queue.length > 0) {
            for (var i = 0; i < queue.length; i++) {
                aux.push(queue[i]);
            }
        }
        console.log(aux);
        console.log(usuariosBD);
        this.usuarios = aux;
    };
    return VerUsuariosComponent;
}());
VerUsuariosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ver-usuarios',
        template: __webpack_require__("../../../../../src/app/verUsuarios.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__app_datos_service__["a" /* DatosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_datos_service__["a" /* DatosService */]) === "function" && _c || Object])
], VerUsuariosComponent);

//Definicion de BuscarUsuarioComponent
var BuscarUsuarioComponent = (function () {
    function BuscarUsuarioComponent(datosService) {
        this.datosService = datosService;
        this.usuarios = [];
    }
    BuscarUsuarioComponent.prototype.ngOnInit = function () {
        var aux = usuariosBD.slice(0, usuariosBD.length);
        console.log(aux);
        var queue = this.datosService.getQueue();
        if (queue.length > 0) {
            for (var i = 0; i < queue.length; i++) {
                aux.push(queue[i]);
            }
        }
        this.usuarios = aux;
    };
    return BuscarUsuarioComponent;
}());
BuscarUsuarioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-buscar-usuario',
        template: __webpack_require__("../../../../../src/app/buscarUsuario.html")
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__app_datos_service__["a" /* DatosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_datos_service__["a" /* DatosService */]) === "function" && _d || Object])
], BuscarUsuarioComponent);

//Definicion de AppComponent
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/home.html"),
        styles: [__webpack_require__("../../../../../src/app/styles.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.datos-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatosService = (function () {
    function DatosService() {
        this.queue = [];
    }
    DatosService.prototype.setQueue = function (lista) {
        this.queue = lista;
    };
    DatosService.prototype.getQueue = function () {
        return this.queue;
    };
    return DatosService;
}());
DatosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], DatosService);

//# sourceMappingURL=app.datos-service.js.map

/***/ }),

/***/ "../../../../../src/app/app.filtro-buscar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusquedaUsuarioFiltro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// let usuario of usuarios | BusquedaUsuario: busqueda
var BusquedaUsuarioFiltro = (function () {
    function BusquedaUsuarioFiltro() {
    }
    BusquedaUsuarioFiltro.prototype.transform = function (usuarios, busqueda) {
        var filtro = [];
        if (!busqueda) {
            return usuarios;
        }
        for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
            var usuario = usuarios_1[_i];
            if (usuario.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) != -1) {
                filtro.push(usuario);
            }
        }
        return filtro;
    };
    return BusquedaUsuarioFiltro;
}());
BusquedaUsuarioFiltro = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'BusquedaUsuario' })
], BusquedaUsuarioFiltro);

//# sourceMappingURL=app.filtro-buscar.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_filtro_buscar__ = __webpack_require__("../../../../../src/app/app.filtro-buscar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_datos_service__ = __webpack_require__("../../../../../src/app/app.datos-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["d" /* RegistroComponent */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["c" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["e" /* VerUsuariosComponent */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["b" /* BuscarUsuarioComponent */],
            __WEBPACK_IMPORTED_MODULE_5__app_filtro_buscar__["a" /* BusquedaUsuarioFiltro */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__app_datos_service__["a" /* DatosService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/buscarUsuario.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n<strong>Buscar Usuario:</strong><input type=\"text\" [(ngModel)]=\"buscar\" class=\"form-control\" style=\"width:30%\"/>\r\n<br />\r\n<strong>Resultados Busqueda:</strong>\r\n<br />\r\n<table class=\"table\" style=\"width:50%\">\r\n    <tr>\r\n        <th>Nombre</th>\r\n        <th>Edad</th>\r\n        <th>Correo</th>\r\n    </tr>\r\n    <tr *ngFor=\"let usuario of usuarios | BusquedaUsuario: buscar\">\r\n        <td>{{usuario.nombre}}</td>\r\n        <td>{{usuario.edad}}</td>\r\n        <td>{{usuario.correo}}</td>\r\n    </tr>\r\n</table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/formRegistro.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n<form name=\"form\" novalidate>\r\n  <table>\r\n    <tr>\r\n      <td>Nombre:</td>\r\n      <td><input type=\"text\" name=\"nombreForm\" [(ngModel)]=\"nombre\" class=\"form-control\" #nombreForm=\"ngModel\" required/>\r\n          <div style = \"color:red\" *ngIf= \"nombreForm.invalid && (nombreForm.dirty || nombreForm.touched)\">\r\n               <div *ngIf=\"nombreForm.errors.required\">\r\n                 Se requiere el nombre.\r\n               </div>\r\n         </div>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>Edad:</td>\r\n      <td><input type=\"number\" name=\"edadForm\" [(ngModel)]=\"edad\" min=\"0\" max=\"99\" class=\"form-control\" #edadForm=\"ngModel\" required/>\r\n       <div style = \"color:red\" *ngIf = \"edadForm.invalid && edadForm.dirty\">\r\n          <div *ngIf=\"edadForm.errors.required\">\r\n            La edad es requerida.\r\n          </div>\r\n       </div>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>Correo:</td>\r\n      <td><input type=\"email\" name=\"correoForm\" [(ngModel)]=\"correo\" class=\"form-control\" #correoForm=\"ngModel\" required/>\r\n              <div style = \"color:red\" *ngIf=\"correoForm.invalid && (correoForm.dirty || correoForm.touched)\">\r\n                <div *ngIf=\"correoForm.errors.required\">\r\n                  El correo es requerido.\r\n                </div>\r\n              </div>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n <button  (click)=\"registrar()\" class=\"btn btn-primary\">Registrar</button>\r\n</form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item\"><a routerLink=\"index\">Home</a></li>\r\n        <li class=\"breadcrumb-item active\"><a routerLink=\"registrar\">Registrar Usuario</a></li>\r\n        <li class=\"breadcrumb-item active\"><a routerLink=\"verUsuarios\">Ver Usuarios</a></li>\r\n        <li class=\"breadcrumb-item active\"><a routerLink=\"buscarUsuario\">Buscar Usuario</a></li>\r\n    </ol>\r\n</nav>\r\n<br />\r\n<router-outlet id=\"container\"></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container{\r\n    margin-left: 30%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/verUsuarios.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n<p>Lista de Usuarios:</p>\r\n<table class=\"table\" style=\"width:50%\">\r\n    <tr>\r\n        <th>Nombre</th>\r\n        <th>Edad</th>\r\n        <th>Correo</th>\r\n    </tr>\r\n    <tr *ngFor=\"let usuario of usuarios\">\r\n        <td>{{usuario.nombre}}</td>\r\n        <td>{{usuario.edad}}</td>\r\n        <td>{{usuario.correo}}</td>\r\n    </tr>\r\n</table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map