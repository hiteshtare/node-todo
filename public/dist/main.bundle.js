webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.mat-icon {\n      margin: 0 4px 3px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"_globalService.showHeaderAndFooter\">\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <a class=\"docs-navbar-hide-small docs-button mat-button ng-star-inserted\" mat-button=\"\" tabindex=\"0\" aria-disabled=\"false\"\n        routerLink=\"/add\">\n        <mat-icon>add</mat-icon>\n        <span class=\"mat-button-wrapper\">Add</span>\n        <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n      </a>\n      <a class=\"docs-navbar-hide-small docs-button mat-button ng-star-inserted\" mat-button=\"\" tabindex=\"0\" aria-disabled=\"false\"\n        routerLink=\"/list\">\n        <mat-icon>list</mat-icon>\n        <span class=\"mat-button-wrapper\">List</span>\n        <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n      </a>\n      <span class=\"example-spacer\"></span>\n      <span>{{title}}</span>\n\n    </mat-toolbar-row>\n  </mat-toolbar>\n</ng-container>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_global_service__ = __webpack_require__("../../../../../src/app/shared/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_todo_service__ = __webpack_require__("../../../../../src/app/shared/services/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(todoService, _globalService) {
        this.todoService = todoService;
        this._globalService = _globalService;
        this.title = 'Todo - MEAN App';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    AppComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos().then(function (todos) {
            _this.todos = todos;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_todo_service__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_0__shared_services_global_service__["a" /* GlobalService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_global_service__ = __webpack_require__("../../../../../src/app/shared/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_custom_toast_service__ = __webpack_require__("../../../../../src/app/shared/services/custom-toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_todo_service__ = __webpack_require__("../../../../../src/app/shared/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_routes_app_routing__ = __webpack_require__("../../../../../src/app/shared/routes/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_todo_add_todo_add_todo_component__ = __webpack_require__("../../../../../src/app/modules/todo/add-todo/add-todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_todo_list_todo_list_todo_component__ = __webpack_require__("../../../../../src/app/modules/todo/list-todo/list-todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_todo_edit_todo_edit_todo_component__ = __webpack_require__("../../../../../src/app/modules/todo/edit-todo/edit-todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_error_error_module__ = __webpack_require__("../../../../../src/app/shared/error/error.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_error_errors_routing_errors_routing__ = __webpack_require__("../../../../../src/app/shared/error/errors-routing/errors-routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__modules_todo_add_todo_add_todo_component__["a" /* AddTodoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__modules_todo_list_todo_list_todo_component__["a" /* ListTodoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__modules_todo_edit_todo_edit_todo_component__["c" /* EditTodoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__modules_todo_edit_todo_edit_todo_component__["a" /* DialogDeleteAttachment */], __WEBPACK_IMPORTED_MODULE_11__modules_todo_edit_todo_edit_todo_component__["b" /* DialogDeleteTodo */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__shared_routes_app_routing__["b" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["f" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["e" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material__["k" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_25_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_26__shared_error_error_module__["a" /* ErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_27__shared_error_errors_routing_errors_routing__["a" /* errorRouting */] // ERROR HANDLING
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__modules_todo_edit_todo_edit_todo_component__["a" /* DialogDeleteAttachment */], __WEBPACK_IMPORTED_MODULE_11__modules_todo_edit_todo_edit_todo_component__["b" /* DialogDeleteTodo */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__shared_routes_app_routing__["a" /* appRoutingProviders */], __WEBPACK_IMPORTED_MODULE_7__shared_services_todo_service__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_custom_toast_service__["a" /* CustomToastService */], __WEBPACK_IMPORTED_MODULE_0__shared_services_global_service__["a" /* GlobalService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/todo/add-todo/add-todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 5px;\n}\n\n.mat-form-field{\n    width: 100%;\n}\n\nmat-grid-tile {\n  /* background: lightblue; */\n}\n\n.mat-grid-tile .mat-figure{\n    display: block !important;\n}\n\n.form-buttons{\n    text-align: center;\n}\n\n.mat-card{\n    background: rgba(0,0,0,.02);\n}\n\n.mat-toolbar{\n    \n    background: rgba(0,0,0,.04);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/todo/add-todo/add-todo.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"700px\">\n  <mat-grid-tile [colspan]=\"1\">\n    &nbsp;\n  </mat-grid-tile>\n\n  <mat-grid-tile [colspan]=\"2\">\n    <mat-card>\n      <mat-toolbar>Add a new Todo</mat-toolbar>\n      <div class=\"example-container\">\n        <form class=\"example-container\" [formGroup]=\"addTodoForm\">\n          <div>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Name\" [formControl]=\"addTodoForm.controls['name']\" type=\"text\" name=\"name\">\n              <mat-error *ngIf=\"addTodoForm.controls['name'].invalid\">You must enter a value</mat-error>\n            </mat-form-field>\n          </div>\n          <br>\n          <div>\n            <label>Complete: </label>\n            <mat-radio-group class=\"example-radio-group\" [formControl]=\"addTodoForm.controls['isDone']\">\n              <mat-radio-button class=\"example-radio-button\" [value]=\"true\">\n                Yes\n              </mat-radio-button>\n              <mat-radio-button class=\"example-radio-button\" [value]=\"false\">\n                No\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <br>\n          <div>\n            <label>Upload: </label>\n            <!-- <button mat-mini-fab type=\"button\">\n              <label for=\"fileToUpload\">\n                <mat-icon>add</mat-icon>\n              </label>\n            </button> -->\n            <input #inputFileUpload type=\"file\" class=\"form-control\" name=\"fileToUpload\" ng2FileSelect [uploader]=\"uploader\" />\n          </div>\n          <br>\n          <div class=\"col-md-8\">\n            <h3>File Upload</h3>\n            Queue length: {{ uploader?.queue?.length }}\n\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th width=\"50%\">Name</th>\n                  <th>Size</th>\n                  <th>Progress</th>\n                  <th>Status</th>\n                  <th>Actions</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                  <td>\n                    <strong>{{ item.file.name }}</strong>\n                  </td>\n                  <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n                  <td>\n                    <div class=\"progress\" style=\"margin-bottom: 0;\">\n                      <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                    </div>\n                  </td>\n                  <td class=\"text-center\">\n                    <span *ngIf=\"item.isSuccess\">\n                      <mat-icon>done</mat-icon>\n                    </span>\n                    <span *ngIf=\"item.isCancel\">\n                      <mat-icon>cancel</mat-icon>\n                    </span>\n                    <span *ngIf=\"item.isError\">\n                      <mat-icon>error</mat-icon>\n                    </span>\n                  </td>\n                  <td nowrap>\n                    <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                      <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                    </button>\n                    <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                      <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                    </button>\n                    <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\n                      <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div>\n            <div>\n              Queue progress:\n              <div class=\"progress\" style=\"\">\n                <mat-progress-bar mode=\"determinate\" value=\"{{uploader.progress}}\"></mat-progress-bar>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-buttons\">\n            <mat-grid-list cols=\"4\">\n              <mat-grid-tile [colspan]=\"2\">\n                <button color=\"accent\" type=\"button\" mat-raised-button (click)=\"onAdd(addTodoForm.value)\" [disabled]=\"!addTodoForm.valid\">Add</button>\n              </mat-grid-tile>\n              <mat-grid-tile [colspan]=\"2\">\n                <button type=\"button\" mat-raised-button (click)=\"onClear()\">Clear</button>\n              </mat-grid-tile>\n            </mat-grid-list>\n          </div>\n        </form>\n      </div>\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"1\">\n    &nbsp;\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/modules/todo/add-todo/add-todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_todo_service__ = __webpack_require__("../../../../../src/app/shared/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_custom_toast_service__ = __webpack_require__("../../../../../src/app/shared/services/custom-toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddTodoComponent = (function () {
    function AddTodoComponent(formBuilder, todoService, customToastService) {
        this.formBuilder = formBuilder;
        this.todoService = todoService;
        this.customToastService = customToastService;
        this.uploadedResp = [];
        this.createForm();
    }
    AddTodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Initialize the uploader plugin
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({ url: this.todoService.todosUploadUrl });
        this.uploader.onErrorItem = function (item, response, status, headers) { return _this.onErrorItem(item, response, status, headers); };
        this.uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
    };
    AddTodoComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        var data = JSON.parse(response); //success server response
        this.uploadedResp.push(data);
    };
    AddTodoComponent.prototype.onErrorItem = function (item, response, status, headers) {
        var error = JSON.parse(response); //error server response
    };
    AddTodoComponent.prototype.createForm = function () {
        this.addTodoForm = this.formBuilder.group({ 'name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required])], 'isDone': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required])] });
    };
    AddTodoComponent.prototype.onAdd = function (todo) {
        var _this = this;
        if (this.uploadedResp.length > 0) {
            todo.hasAttachment = true;
            this.uploadedResp.forEach(function (resp) {
                if (resp.success) {
                    var payload = resp.payload;
                    todo.hasAttachment = true;
                    if (!todo.files)
                        todo.files = [{ name: payload.originalname, savedName: payload.filename, fileType: payload.mimetype, size: payload.size }];
                    else
                        todo.files.push({ name: payload.originalname, savedName: payload.filename, fileType: payload.mimetype, size: payload.size });
                }
            });
        }
        else {
            todo.hasAttachment = false;
        }
        this.todoService.addOrUpdateTodo(todo).then(function (result) {
            if (result._body === "Added") {
                _this.customToastService.toastMessage("Todo added to the list.", "");
                _this.clearFields();
            }
        });
    };
    AddTodoComponent.prototype.onClear = function () {
        this.clearFields();
    };
    AddTodoComponent.prototype.clearFields = function () {
        this.addTodoForm.reset();
        this.uploadedResp = [];
        this.uploader.clearQueue();
        this.inputFileUpload.nativeElement.value = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('inputFileUpload'),
        __metadata("design:type", Object)
    ], AddTodoComponent.prototype, "inputFileUpload", void 0);
    AddTodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-add-todo',
            template: __webpack_require__("../../../../../src/app/modules/todo/add-todo/add-todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/todo/add-todo/add-todo.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__shared_services_todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_custom_toast_service__["a" /* CustomToastService */]])
    ], AddTodoComponent);
    return AddTodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/todo/edit-todo/dialog-delete-attachement.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete Attachment</h1>\n<div mat-dialog-content>\n  <p>\n    <b>{{data.file.name}}</b>\n  </p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No</button>\n  <button mat-button cdkFocusInitial (click)=\"onYesClick()\">Yes</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/todo/edit-todo/dialog-delete-todo.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete Todo</h1>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No</button>\n  <button mat-button cdkFocusInitial (click)=\"onYesClick()\">Yes</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/todo/edit-todo/edit-todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.example-container>* {\n  width: 100%;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form>* {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 5px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\nmat-grid-tile {\n  /* background: lightblue; */\n}\n\n.mat-grid-tile .mat-figure {\n  display: block !important;\n}\n\n.form-buttons {\n  text-align: center;\n}\n\n.mat-card {\n  background: rgba(0, 0, 0, .02);\n}\n\n.mat-toolbar {\n  background: rgba(0, 0, 0, .04);\n}\n\n.mat-card-image {\n  width: 100px !important;\n}\n\n.mat-list-item-content {\n  margin-top: 15px !important;\n}\n\n.btn-delete {\n  padding-left: 50px;\n}\n\n.mat-dialog-content {\n  padding: 0 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/todo/edit-todo/edit-todo.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"700px\">\n  <mat-grid-tile [colspan]=\"1\">\n    &nbsp;\n  </mat-grid-tile>\n\n  <mat-grid-tile [colspan]=\"2\">\n    <mat-card>\n      <mat-toolbar>Edit an existing Todo</mat-toolbar>\n      <div class=\"example-container\">\n        <form class=\"example-container\" [formGroup]=\"editTodoForm\">\n          <div>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Name\" [(ngModel)]=\"existingTodo.name\" type=\"text\" name=\"name\" [formControl]=\"editTodoForm.controls['name']\">\n              <mat-error *ngIf=\"editTodoForm.controls['name'].invalid\">You must enter a value</mat-error>\n            </mat-form-field>\n          </div>\n          <br>\n          <div>\n            <label>Complete: </label>\n            <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"existingTodo.isDone\" [formControl]=\"editTodoForm.controls['isDone']\">\n              <mat-radio-button class=\"example-radio-button\" [value]=\"true\">\n                Yes\n              </mat-radio-button>\n              <mat-radio-button class=\"example-radio-button\" [value]=\"false\">\n                No\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <br>\n          <div *ngIf=\"existingTodo.files\">\n            <!-- <label>\n              <mat-icon>attach_file</mat-icon>Attachment: </label> -->\n            <mat-list>\n              <mat-list-item *ngFor=\"let file of existingTodo.files\">\n                <img mat-card-image src=\"http://localhost:5000/api/todos/upload/{{file.savedName}}\" [alt]=\"file.savedName\" matTooltip=\"{{file.name}}\">\n                <button class=\"btn-delete\" mat-icon-button (click)=\"openDeleteAttachmentDialog(file)\">\n                  <mat-icon matTooltip=\"Delete attachment\">delete</mat-icon>\n                </button>\n              </mat-list-item>\n            </mat-list>\n          </div>\n          <br>\n          <div class=\"form-buttons\">\n            <mat-grid-list cols=\"4\">\n              <mat-grid-tile [colspan]=\"2\">\n                <button color=\"accent\" mat-raised-button type=\"button\" [disabled]=\"!editTodoForm.valid\" (click)=\"onUpdate(editTodoForm.value)\">Update</button>\n              </mat-grid-tile>\n              <mat-grid-tile [colspan]=\"2\">\n                <button color=\"warn\" type=\"button\" mat-raised-button (click)=\"openDeleteTodoDialog()\">Remove</button>\n              </mat-grid-tile>\n            </mat-grid-list>\n          </div>\n        </form>\n      </div>\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"1\">\n    &nbsp;\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/modules/todo/edit-todo/edit-todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EditTodoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDeleteAttachment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogDeleteTodo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_custom_toast_service__ = __webpack_require__("../../../../../src/app/shared/services/custom-toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_todo_model__ = __webpack_require__("../../../../../src/app/shared/models/todo.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_todo_service__ = __webpack_require__("../../../../../src/app/shared/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var EditTodoComponent = (function () {
    function EditTodoComponent(formBuilder, route, router, todoService, customToastService, dialog) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.todoService = todoService;
        this.customToastService = customToastService;
        this.dialog = dialog;
        this.existingTodo = new __WEBPACK_IMPORTED_MODULE_1__shared_models_todo_model__["a" /* Todo */]();
        this.createForm();
    }
    EditTodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (inbuiltId) {
            if (inbuiltId) {
                _this.loadTodoById(inbuiltId);
            }
            else {
                alert("Empty id!");
            }
        });
    };
    EditTodoComponent.prototype.loadTodoById = function (inbuiltId) {
        var _this = this;
        this.todoService.getTodoByInbuiltId(inbuiltId).then(function (todo) {
            if (todo)
                _this.existingTodo = todo;
            else
                alert("Empty Object!");
        });
    };
    EditTodoComponent.prototype.createForm = function () {
        this.editTodoForm = this.formBuilder.group({ 'name': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required])], 'isDone': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required])] });
    };
    EditTodoComponent.prototype.onUpdate = function (formValue) {
        var _this = this;
        this.todoService.addOrUpdateTodo(this.existingTodo).then(function (result) {
            if (result._body === "Updated") {
                _this.customToastService.toastMessage("Todo updated in the list.", "");
                _this.router.navigate(['/list']);
            }
        });
    };
    EditTodoComponent.prototype.onRemove = function () {
        var _this = this;
        var inbuiltId = this.existingTodo._id;
        this.todoService.removeTodo(inbuiltId).then(function (result) {
            if (result._body === "Deleted") {
                _this.customToastService.toastMessage("Todo removed!", "");
                _this.router.navigate(['/list']);
            }
        });
    };
    EditTodoComponent.prototype.openDeleteAttachmentDialog = function (file) {
        var _this = this;
        var dialogDeleteAttachmentRef = this.dialog.open(DialogDeleteAttachment, {
            width: '250px',
            data: {
                file: file,
                inbuiltId: this.existingTodo._id
            }
        });
        dialogDeleteAttachmentRef.afterClosed().subscribe(function (result) {
            _this.loadTodoById(_this.existingTodo._id);
        });
    };
    EditTodoComponent.prototype.openDeleteTodoDialog = function () {
        var dialogDeleteTodoRef = this.dialog.open(DialogDeleteTodo, {
            width: '250px',
            data: {
                inbuiltId: this.existingTodo._id
            }
        });
    };
    EditTodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-edit-todo',
            template: __webpack_require__("../../../../../src/app/modules/todo/edit-todo/edit-todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/todo/edit-todo/edit-todo.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_services_todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_custom_toast_service__["a" /* CustomToastService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatDialog */]])
    ], EditTodoComponent);
    return EditTodoComponent;
}());

var DialogDeleteAttachment = (function () {
    function DialogDeleteAttachment(dialogRef, data, todoService, customToastService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.todoService = todoService;
        this.customToastService = customToastService;
    }
    DialogDeleteAttachment.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogDeleteAttachment.prototype.onYesClick = function () {
        var _this = this;
        var inbuiltId = this.data.inbuiltId;
        var fileName = this.data.file.savedName;
        this.todoService.removeTodoAttachment(inbuiltId, fileName).then(function (result) {
            if (result._body === "Deleted") {
                _this.dialogRef.close();
                _this.customToastService.toastMessage("Attachment removed!", "");
            }
        });
    };
    DialogDeleteAttachment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'dialog-delete-attachement',
            template: __webpack_require__("../../../../../src/app/modules/todo/edit-todo/dialog-delete-attachement.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__shared_services_todo_service__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_0__shared_services_custom_toast_service__["a" /* CustomToastService */]])
    ], DialogDeleteAttachment);
    return DialogDeleteAttachment;
}());

var DialogDeleteTodo = (function () {
    function DialogDeleteTodo(dialogRef, data, todoService, customToastService, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.todoService = todoService;
        this.customToastService = customToastService;
        this.router = router;
    }
    DialogDeleteTodo.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogDeleteTodo.prototype.onYesClick = function () {
        var _this = this;
        var inbuiltId = this.data.inbuiltId;
        this.todoService.removeTodo(inbuiltId).then(function (result) {
            if (result._body === "Deleted") {
                _this.dialogRef.close();
                _this.customToastService.toastMessage("Todo removed!", "");
                _this.router.navigate(['/list']);
            }
        });
    };
    DialogDeleteTodo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'dialog-delete-todo',
            template: __webpack_require__("../../../../../src/app/modules/todo/edit-todo/dialog-delete-todo.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__shared_services_todo_service__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_0__shared_services_custom_toast_service__["a" /* CustomToastService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], DialogDeleteTodo);
    return DialogDeleteTodo;
}());



/***/ }),

/***/ "../../../../../src/app/modules/todo/list-todo/list-todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.docs-primary-header h1 {\n  font-size: 30px;\n  font-weight: 300;\n  margin: 0;\n  padding: 28px 8px;\n  font-size: 20px;\n}\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.example-container>* {\n  width: 100%;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form>* {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 5px;\n}\n\n.mat-form-field {\n  width: 85%;\n}\n\nmat-grid-tile {\n  /* background: lightblue; */\n}\n\n.form-buttons {\n  text-align: center;\n}\n\n.mat-card {\n  background: rgba(0, 0, 0, .02);\n}\n\n.mat-toolbar {\n  background: rgba(0, 0, 0, .04);\n}\n\n/* Structure */\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mat-grid-tile .mat-figure {\n  display: block !important;\n}\n\n.mat-card-image {\n  margin: 5px 0px 0px 5px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/todo/list-todo/list-todo.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"5\" rowHeight=\"1000px\">\n  <mat-grid-tile [colspan]=\"1\">\n    &nbsp;\n  </mat-grid-tile>\n\n  <mat-grid-tile [colspan]=\"2\">\n    <mat-card>\n      <mat-toolbar>List of Todos</mat-toolbar>\n      <div *ngIf=\"todos\" class=\"example-container mat-elevation-z8\">\n        <div class=\"example-header\">\n          <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n          </mat-form-field>\n        </div>\n\n        <mat-table [dataSource]=\"sortedData\" matSort (matSortChange)=\"sortData($event)\">\n\n          <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n          <!-- Position Column -->\n          <ng-container matColumnDef=\"avatar\">\n            <mat-header-cell *matHeaderCellDef> Avatar </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <ng-container *ngIf=\"element.files.length\">\n                <img mat-card-image matTooltip=\"{{element.files[0].name}}\" src=\"http://localhost:5000/api/todos/upload/{{element.files[0].savedName}}\"\n                  [alt]=\"element.files[0].savedName\">\n              </ng-container>\n              <ng-container *ngIf=\"!element.files.length\">\n                No avatar uploaded\n              </ng-container>\n\n            </mat-cell>\n\n\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n          </ng-container>\n\n          <!-- Has Attachment Column -->\n          <ng-container matColumnDef=\"Attachment\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Has Attachment</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.Attachment}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Attach_Count\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Count</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.Attach_Count}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Done\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Done</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.Done}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef> Actions</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n\n              <button mat-icon-button routerLink=\"/edit/{{element._id}}\">\n                <mat-icon matTooltip=\"Edit todo\">edit</mat-icon>\n              </button>\n\n              <!-- <button color=\"accent\" mat-raised-button routerLink=\"/edit/{{element._id}}\">Edit</button> -->\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n\n        <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[10, 25, 50]\" [showFirstLastButtons]=\"true\">\n        </mat-paginator>\n      </div>\n      <div *ngIf=\"!todos\" class=\"example-container mat-elevation-z8\">\n        <h5>No records found</h5>\n      </div>\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"1\">\n    &nbsp;\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/modules/todo/list-todo/list-todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListTodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_todo_service__ = __webpack_require__("../../../../../src/app/shared/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_global_service__ = __webpack_require__("../../../../../src/app/shared/services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListTodoComponent = (function () {
    function ListTodoComponent(todoService, _globalService) {
        this.todoService = todoService;
        this._globalService = _globalService;
        this.displayedColumns = ['avatar', 'name', 'Attachment', 'Attach_Count', 'Done', "actions"];
        this._globalService.showHeaderAndFooter = true;
    }
    ListTodoComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    ListTodoComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos().then(function (todos) {
            _this.todos = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatTableDataSource */](todos);
            _this.sortedData = _this.todos.filteredData; //To extract data from todos
        });
    };
    ListTodoComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.todos.filter = filterValue;
    };
    ListTodoComponent.prototype.sortData = function (sort) {
        var _this = this;
        var data = this.sortedData.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'name': return _this.compare(a.name, b.name, isAsc);
                case 'Attachment': return _this.compare(a.Attachment, b.Attachment, isAsc);
                case 'Done': return _this.compare(a.Done, b.Done, isAsc);
                default: return 0;
            }
        });
    };
    ListTodoComponent.prototype.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSort */])
    ], ListTodoComponent.prototype, "sort", void 0);
    ListTodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-list-todo',
            template: __webpack_require__("../../../../../src/app/modules/todo/list-todo/list-todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/todo/list-todo/list-todo.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_services_todo_service__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_global_service__["a" /* GlobalService */]])
    ], ListTodoComponent);
    return ListTodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/error/error.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errors_component_errors_component__ = __webpack_require__("../../../../../src/app/shared/error/errors-component/errors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__errors_service_errors_service__ = __webpack_require__("../../../../../src/app/shared/error/errors-service/errors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__errors_handler_errors_handler__ = __webpack_require__("../../../../../src/app/shared/error/errors-handler/errors-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__server_errors_interceptor_server_errors_interceptor__ = __webpack_require__("../../../../../src/app/shared/error/server-errors-interceptor/server-errors.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ErrorsModule = (function () {
    function ErrorsModule() {
    }
    ErrorsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__errors_component_errors_component__["a" /* ErrorsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__errors_service_errors_service__["a" /* ErrorsService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"],
                    useClass: __WEBPACK_IMPORTED_MODULE_6__errors_handler_errors_handler__["a" /* ErrorsHandler */],
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_7__server_errors_interceptor_server_errors_interceptor__["a" /* ServerErrorsInterceptor */],
                    multi: true
                },
            ]
        })
    ], ErrorsModule);
    return ErrorsModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/error/errors-component/errors.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h5 {\n  color: blue;\n  font-size: 25px;\n  background-color: floralwhite;\n}\n\n.error-container {\n  text-align: center;\n}\n\nh3 {\n  font-size: 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/error/errors-component/errors.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"error-container\">\n\n  <div *ngIf=\"data?.error\">\n    <h1>ERROR {{ data?.error}}</h1>\n    <h5 *ngIf=\"data?.error === 404\">Not found :(</h5>\n    <a [routerLink]=\"'/list'\">\n      <h5>Go Home</h5>\n    </a>\n  </div>\n\n  <div *ngIf=\"routeParams.message\">\n    <h1 *ngIf=\"routeParams?.status\"> ERROR {{ routeParams?.status }}</h1>\n    <br/>\n    <h3 *ngIf=\"routeParams?.message\">{{ routeParams?.message }}</h3>\n    <br/>\n    <h1 *ngIf=\"routeParams?.url && routeParams?.url !== '/'\">Error in {{ routeParams?.url | uppercase }} page, Sorry {{ routeParams?.user }} :(</h1>\n    <h4 *ngIf=\"routeParams?.id\">This error has been reported to the Administrator with the ID:\n      <br> {{ routeParams?.id}}</h4>\n    <br>\n    <a [routerLink]=\"routeParams?.url\" *ngIf=\"routeParams?.url && routeParams.status !== '404'\">\n      <h5>Click here to Retry</h5>\n    </a>\n    <br>\n    <a routerLink=\"/\" *ngIf=\"!routeParams.url || routeParams.status === '404'\">\n      <h5>Go Back to home</h5>\n    </a>\n  </div>\n\n  <div *ngIf=\"!routeParams && !data\">\n    <h1>Unknown error, sorry :(</h1>\n    <a [routerLink]=\"'/trayview'\">\n      <h5>Go Home</h5>\n    </a>\n  </div>\n</div>\n\n<div class=\"pre-container\" *ngIf=\"routeParams?.message\">\n  <p>Error sent to the server</p>\n  <pre>\n    {{ this.routeParams | json }}\n  </pre>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/error/errors-component/errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_service__ = __webpack_require__("../../../../../src/app/shared/services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorsComponent = (function () {
    function ErrorsComponent(activatedRoute, _globalService) {
        this.activatedRoute = activatedRoute;
        this._globalService = _globalService;
        this._globalService.showHeaderAndFooter = false;
    }
    ErrorsComponent.prototype.ngOnInit = function () {
        this.routeParams = this.activatedRoute.snapshot.queryParams;
        this.data = this.activatedRoute.snapshot.data;
    };
    ErrorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cm-error',
            template: __webpack_require__("../../../../../src/app/shared/error/errors-component/errors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/error/errors-component/errors.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */]])
    ], ErrorsComponent);
    return ErrorsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/error/errors-handler/errors-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors_service_errors_service__ = __webpack_require__("../../../../../src/app/shared/error/errors-service/errors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custom_toast_service__ = __webpack_require__("../../../../../src/app/shared/services/custom-toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErrorsHandler = (function () {
    function ErrorsHandler(injector) {
        this.injector = injector;
    }
    ErrorsHandler.prototype.handleError = function (error) {
        var customToastService = this.injector.get(__WEBPACK_IMPORTED_MODULE_4__services_custom_toast_service__["a" /* CustomToastService */]);
        var errorsService = this.injector.get(__WEBPACK_IMPORTED_MODULE_3__errors_service_errors_service__["a" /* ErrorsService */]);
        var router = this.injector.get(__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]);
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
            // Server error happened
            if (!navigator.onLine) {
                // No Internet connection
                return customToastService.toastMessage('No Internet Connection', '');
            }
            // Http Error
            // Send the error to the server
            errorsService.log(error).subscribe();
            // Show notification to the user
            return customToastService.toastMessage("HttpError Occured : " + error.status + " - " + error.message, '');
        }
        else if (error instanceof TypeError) {
            //  TypeError
            // Create custom Error Object and log the error
            var errObj = {
                message: error.message,
                stack: error.stack
            };
            errorsService
                .log(errObj)
                .subscribe(function (errorWithContextInfo) {
                router.navigate(['error'], { queryParams: errorWithContextInfo });
            });
        }
        else {
            // Client Error Happend
            // Send the error to the server and then
            // redirect the user to the page with all the info
            var errObj = {
                message: error.message,
                stack: error.stack
            };
            errorsService
                .log(errObj)
                .subscribe(function (errorWithContextInfo) {
                router.navigate(['error'], { queryParams: errorWithContextInfo });
            });
        }
    };
    ErrorsHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], ErrorsHandler);
    return ErrorsHandler;
}());



/***/ }),

/***/ "../../../../../src/app/shared/error/errors-routing/errors-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutingProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errorRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors_component_errors_component__ = __webpack_require__("../../../../../src/app/shared/error/errors-component/errors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");


var errorRoutes = [
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_0__errors_component_errors_component__["a" /* ErrorsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__errors_component_errors_component__["a" /* ErrorsComponent */], data: { error: 404 } },
];
var appRoutingProviders = [];
var errorRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(errorRoutes, { useHash: true });


/***/ }),

/***/ "../../../../../src/app/shared/error/errors-service/errors.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_error_stack_parser__ = __webpack_require__("../../../../error-stack-parser/error-stack-parser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_error_stack_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_error_stack_parser__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ErrorsService = (function () {
    function ErrorsService(injector, router) {
        var _this = this;
        this.injector = injector;
        this.router = router;
        // Subscribe to the NavigationError
        this.router
            .events
            .subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationError */]) {
                // Redirect to the ErrorComponent
                _this.log(event.error)
                    .subscribe(function (errorWithContext) {
                    _this.router.navigate(['error'], { queryParams: errorWithContext });
                });
            }
        });
    }
    ErrorsService.prototype.log = function (error) {
        // Log the error to the console
        console.error(error);
        // Send error to server
        var errorToSend = this.addContextInfo(error);
        return fakeHttpService.post(errorToSend);
    };
    ErrorsService.prototype.addContextInfo = function (error) {
        // You can include context details here (usually coming from other services: UserService...)
        var name = error.name || null;
        var appId = 'Node - Todo App';
        //const user = `${this._globalService.actor.first_name} ${this._globalService.actor.last_name}`;
        var user = "Hitesh Tare";
        var time = new Date().getTime();
        var id = appId + "-" + user + "-" + time;
        var location = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_common__["LocationStrategy"]);
        // const url = location instanceof PathLocationStrategy ? location.path() : '';
        var url = this.router.url;
        var status = error.status || null;
        var message = error.message || error.toString();
        var stack = error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpErrorResponse */] ? null : __WEBPACK_IMPORTED_MODULE_6_error_stack_parser__["parse"](error);
        var errorWithContext = { name: name, appId: appId, user: user, time: time, id: id, url: url, status: status, message: message, stack: stack };
        return errorWithContext;
    };
    ErrorsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], ErrorsService);
    return ErrorsService;
}());

// tslint:disable-next-line:class-name
var fakeHttpService = (function () {
    function fakeHttpService() {
    }
    fakeHttpService.post = function (error) {
        console.log('CM-Error sent to the server: ', error);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(error);
    };
    return fakeHttpService;
}());


/***/ }),

/***/ "../../../../../src/app/shared/error/server-errors-interceptor/server-errors.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerErrorsInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__errors_service_errors_service__ = __webpack_require__("../../../../../src/app/shared/error/errors-service/errors.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServerErrorsInterceptor = (function () {
    function ServerErrorsInterceptor(router, errorsService) {
        this.router = router;
        this.errorsService = errorsService;
    }
    ServerErrorsInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).retry(1);
    };
    ServerErrorsInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__errors_service_errors_service__["a" /* ErrorsService */]])
    ], ServerErrorsInterceptor);
    return ServerErrorsInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/todo.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ }),

/***/ "../../../../../src/app/shared/routes/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_todo_edit_todo_edit_todo_component__ = __webpack_require__("../../../../../src/app/modules/todo/edit-todo/edit-todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_todo_list_todo_list_todo_component__ = __webpack_require__("../../../../../src/app/modules/todo/list-todo/list-todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_todo_add_todo_add_todo_component__ = __webpack_require__("../../../../../src/app/modules/todo/add-todo/add-todo.component.ts");




var appRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_1__modules_todo_list_todo_list_todo_component__["a" /* ListTodoComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__modules_todo_add_todo_add_todo_component__["a" /* AddTodoComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_0__modules_todo_edit_todo_edit_todo_component__["c" /* EditTodoComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "../../../../../src/app/shared/services/custom-toast.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomToastService = (function () {
    function CustomToastService(snackBar) {
        this.snackBar = snackBar;
    }
    CustomToastService.prototype.toastMessage = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
        ;
    };
    CustomToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatSnackBar */]])
    ], CustomToastService);
    return CustomToastService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalService = (function () {
    function GlobalService() {
        this.showHeaderAndFooter = false;
    }
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        //Dev url >> 'http://localhost:5000/api/'
        this.todosApiUrl = 'http://localhost:5000/api';
        //Dev url >> 'http://localhost:5000/api/todos/upload'
        this.todosUploadUrl = 'http://localhost:5000/api/todos/upload'; // 
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    //Fetch all todos configured in DB
    TodoService.prototype.getTodos = function () {
        var url = this.todosApiUrl + "/todos";
        return this.http.get(url).toPromise().then(function (response) { return response.json(); });
    };
    //Fetch all todos configured with username passed as param
    TodoService.prototype.getTodosByUserName = function (username) {
        var url = this.todosApiUrl + "/todos/username/" + username;
        return this.http.get(url).toPromise().then(function (response) { return response.json(); });
    };
    //Fetch a todo with id(in-built) passed as param
    TodoService.prototype.getTodoByInbuiltId = function (inbuiltId) {
        var url = this.todosApiUrl + "/todos/id/" + inbuiltId;
        return this.http.get(url).toPromise().then(function (response) { return response.json(); });
    };
    //Create or Update a todo with id (in-built) passed as param
    TodoService.prototype.addOrUpdateTodo = function (todo) {
        var body = JSON.stringify(todo);
        var url = this.todosApiUrl + "/todos/";
        return this.http.post(url, body, { headers: this.headers }).toPromise().then(function (response) { console.log(response); return response; });
    };
    //Remove a todo with id (in-built) passed as param
    TodoService.prototype.removeTodo = function (inbuiltId) {
        var url = this.todosApiUrl + "/todos/" + inbuiltId;
        return this.http.delete(url).toPromise().then(function (response) { console.log(response); return response; });
    };
    //Remove an attachment with id (in-built) and filename passed as param
    TodoService.prototype.removeTodoAttachment = function (inbuiltId, fileName) {
        var url = this.todosApiUrl + "/todos/attachments/" + inbuiltId + "/" + fileName;
        return this.http.delete(url).toPromise().then(function (response) { console.log(response); return response; });
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map