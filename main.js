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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _smart_initialization_smart_launch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smart-initialization/smart-launch.component */ "./src/app/smart-initialization/smart-launch.component.ts");
/* harmony import */ var _smart_initialization_smart_token_reception_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart-initialization/smart-token-reception.component */ "./src/app/smart-initialization/smart-token-reception.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_entry_and_visualization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-entry-and-visualization.component */ "./src/app/routes/entry-and-visualization/variant-entry-and-visualization.component.ts");
/* harmony import */ var _routes_ehr_instructions_ehr_instructions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/ehr-instructions/ehr-instructions.component */ "./src/app/routes/ehr-instructions/ehr-instructions.component.ts");
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/home/home.component */ "./src/app/routes/home/home.component.ts");
/* harmony import */ var _routes_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/team/team.component */ "./src/app/routes/team/team.component.ts");
/* harmony import */ var _routes_db_analysis_db_analysis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/db-analysis/db-analysis.component */ "./src/app/routes/db-analysis/db-analysis.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "smart-launch", component: _smart_initialization_smart_launch_component__WEBPACK_IMPORTED_MODULE_2__["SMARTLaunchComponent"] },
    { path: "token-reception", component: _smart_initialization_smart_token_reception_component__WEBPACK_IMPORTED_MODULE_3__["SMARTTokenReceptionComponent"] },
    { path: "app", component: _routes_entry_and_visualization_variant_entry_and_visualization_component__WEBPACK_IMPORTED_MODULE_4__["VariantEntryAndVisualizationComponent"] },
    { path: "ehr-link", component: _routes_ehr_instructions_ehr_instructions_component__WEBPACK_IMPORTED_MODULE_5__["EHRInstructionsComponent"] },
    { path: "home", component: _routes_home_home_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"] },
    { path: "team", component: _routes_team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"] },
    { path: "db-analysis", component: _routes_db_analysis_db_analysis_component__WEBPACK_IMPORTED_MODULE_8__["DBAnalysisComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: "\n    <github-fork-us></github-fork-us>\n    <header></header>\n    <router-outlet></router-outlet>\n  ",
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular2_ui_switch_src__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/angular2-ui-switch/src */ "./node_modules/angular2-ui-switch/src/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_selector_variant_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-selector/variant-selector.component */ "./src/app/routes/entry-and-visualization/variant-selector/variant-selector.component.ts");
/* harmony import */ var _smart_initialization_smart_launch_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./smart-initialization/smart-launch.component */ "./src/app/smart-initialization/smart-launch.component.ts");
/* harmony import */ var _smart_initialization_smart_token_reception_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./smart-initialization/smart-token-reception.component */ "./src/app/smart-initialization/smart-token-reception.component.ts");
/* harmony import */ var _routes_entry_and_visualization_filterable_search_filterable_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/entry-and-visualization/filterable-search/filterable-search.component */ "./src/app/routes/entry-and-visualization/filterable-search/filterable-search.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_clinical_trials_clinical_trials_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.component */ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_drugs_drug_details_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/drugs/drug-details-modal.component */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug-details-modal.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_gene_gene_information_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/gene/gene-information.component */ "./src/app/routes/entry-and-visualization/variant-visualization/gene/gene-information.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_variant_variant_information_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/variant/variant-information.component */ "./src/app/routes/entry-and-visualization/variant-visualization/variant/variant-information.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_variant_visualization_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/variant-visualization.component */ "./src/app/routes/entry-and-visualization/variant-visualization/variant-visualization.component.ts");
/* harmony import */ var _routes_ehr_instructions_ehr_instructions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/ehr-instructions/ehr-instructions.component */ "./src/app/routes/ehr-instructions/ehr-instructions.component.ts");
/* harmony import */ var _routes_feedback_form_feedback_form_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes/feedback-form/feedback-form-modal.component */ "./src/app/routes/feedback-form/feedback-form-modal.component.ts");
/* harmony import */ var _universal_components_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./universal-components/header.component */ "./src/app/universal-components/header.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_variant_classifications_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/variant/classifications-modal.component */ "./src/app/routes/entry-and-visualization/variant-visualization/variant/classifications-modal.component.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_entry_and_visualization_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-entry-and-visualization.component */ "./src/app/routes/entry-and-visualization/variant-entry-and-visualization.component.ts");
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./routes/home/home.component */ "./src/app/routes/home/home.component.ts");
/* harmony import */ var _universal_components_github_fork_us_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./universal-components/github-fork-us.component */ "./src/app/universal-components/github-fork-us.component.ts");
/* harmony import */ var _routes_team_team_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./routes/team/team.component */ "./src/app/routes/team/team.component.ts");
/* harmony import */ var _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./smart-initialization/smart-reference.service */ "./src/app/smart-initialization/smart-reference.service.ts");
/* harmony import */ var _routes_entry_and_visualization_genomic_data_providers_myvariantinfo_search_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./routes/entry-and-visualization/genomic-data-providers/myvariantinfo-search.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/myvariantinfo-search.service.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_clinical_trials_clinical_trials_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.service */ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.service.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_selector_variant_selector_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-selector/variant-selector.service */ "./src/app/routes/entry-and-visualization/variant-selector/variant-selector.service.ts");
/* harmony import */ var _routes_entry_and_visualization_variant_visualization_drugs_drugs_search_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./routes/entry-and-visualization/variant-visualization/drugs/drugs-search.service */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drugs-search.service.ts");
/* harmony import */ var _routes_entry_and_visualization_genomic_data_providers_mygeneinfo_search_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./routes/entry-and-visualization/genomic-data-providers/mygeneinfo-search.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/mygeneinfo-search.service.ts");
/* harmony import */ var _routes_entry_and_visualization_genomic_data_providers_utilities_json_navigator_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service.ts");
/* harmony import */ var _routes_db_analysis_db_analysis_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./routes/db-analysis/db-analysis.component */ "./src/app/routes/db-analysis/db-analysis.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules








// Components


















// Services








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _node_modules_angular2_ui_switch_src__WEBPACK_IMPORTED_MODULE_7__["UiSwitchModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _universal_components_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                _routes_entry_and_visualization_variant_entry_and_visualization_component__WEBPACK_IMPORTED_MODULE_22__["VariantEntryAndVisualizationComponent"],
                _routes_entry_and_visualization_variant_visualization_variant_visualization_component__WEBPACK_IMPORTED_MODULE_17__["VariantVisualizationComponent"],
                _routes_entry_and_visualization_variant_selector_variant_selector_component__WEBPACK_IMPORTED_MODULE_9__["VariantSelectorComponent"],
                _smart_initialization_smart_launch_component__WEBPACK_IMPORTED_MODULE_10__["SMARTLaunchComponent"],
                _smart_initialization_smart_token_reception_component__WEBPACK_IMPORTED_MODULE_11__["SMARTTokenReceptionComponent"],
                _routes_entry_and_visualization_filterable_search_filterable_search_component__WEBPACK_IMPORTED_MODULE_12__["FilterableSearchComponent"],
                _routes_entry_and_visualization_variant_visualization_variant_variant_information_component__WEBPACK_IMPORTED_MODULE_16__["VariantInformationComponent"],
                _routes_entry_and_visualization_variant_visualization_clinical_trials_clinical_trials_component__WEBPACK_IMPORTED_MODULE_13__["ClinicalTrialsComponent"],
                _routes_entry_and_visualization_variant_visualization_gene_gene_information_component__WEBPACK_IMPORTED_MODULE_15__["GeneInformationComponent"],
                _routes_entry_and_visualization_variant_visualization_drugs_drug_details_modal_component__WEBPACK_IMPORTED_MODULE_14__["DrugDetailsModalComponent"],
                _routes_entry_and_visualization_variant_visualization_variant_classifications_modal_component__WEBPACK_IMPORTED_MODULE_21__["ClassificationsModalComponent"],
                _routes_ehr_instructions_ehr_instructions_component__WEBPACK_IMPORTED_MODULE_18__["EHRInstructionsComponent"],
                _routes_home_home_component__WEBPACK_IMPORTED_MODULE_23__["LandingPageComponent"],
                _universal_components_github_fork_us_component__WEBPACK_IMPORTED_MODULE_24__["GithubForkUsComponent"],
                _routes_feedback_form_feedback_form_modal_component__WEBPACK_IMPORTED_MODULE_19__["FeedbackFormModalComponent"],
                _routes_team_team_component__WEBPACK_IMPORTED_MODULE_25__["TeamComponent"],
                _routes_db_analysis_db_analysis_component__WEBPACK_IMPORTED_MODULE_33__["DBAnalysisComponent"]
            ],
            entryComponents: [
                _routes_entry_and_visualization_variant_visualization_drugs_drug_details_modal_component__WEBPACK_IMPORTED_MODULE_14__["DrugDetailsModalComponent"],
                _routes_entry_and_visualization_variant_visualization_variant_classifications_modal_component__WEBPACK_IMPORTED_MODULE_21__["ClassificationsModalComponent"],
                _routes_feedback_form_feedback_form_modal_component__WEBPACK_IMPORTED_MODULE_19__["FeedbackFormModalComponent"]
            ],
            providers: [
                _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_26__["SMARTReferenceService"],
                _routes_entry_and_visualization_variant_selector_variant_selector_service__WEBPACK_IMPORTED_MODULE_29__["VariantSelectorService"],
                _routes_entry_and_visualization_genomic_data_providers_myvariantinfo_search_service__WEBPACK_IMPORTED_MODULE_27__["MyVariantInfoSearchService"],
                _routes_entry_and_visualization_genomic_data_providers_mygeneinfo_search_service__WEBPACK_IMPORTED_MODULE_31__["MyGeneInfoSearchService"],
                _routes_entry_and_visualization_variant_visualization_clinical_trials_clinical_trials_service__WEBPACK_IMPORTED_MODULE_28__["ClinicalTrialsService"],
                _routes_entry_and_visualization_variant_visualization_drugs_drugs_search_service__WEBPACK_IMPORTED_MODULE_30__["DrugsSearchService"],
                _routes_entry_and_visualization_genomic_data_providers_utilities_json_navigator_service__WEBPACK_IMPORTED_MODULE_32__["JSONNavigatorService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/routes/db-analysis/db-analysis.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/routes/db-analysis/db-analysis.component.ts ***!
  \*************************************************************/
/*! exports provided: DBAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBAnalysisComponent", function() { return DBAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DBAnalysisComponent = /** @class */ (function () {
    function DBAnalysisComponent() {
    }
    DBAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "db-analysis",
            template: "\n    <div class=\"infoCard\">\n      <div class=\"cardContent\">\n        <div>\n          <h1 class=\"thinFont1\">Why Database Analysis?</h1>\n          <hr>\n          <p class=\"thinFont1\">A pressing issue currently in the research community is that of \"research parasites\": those who profit off of the research done by other labs without contributing anything meaningful and new.  By carrying out analysis on the each prominent oncology database, we hope to foster a symbiotic relationship between this app and its information sources.  </p>\n        </div>\n      </div>\n      <div class=\"cardImage\">\n        <div>\n          <img src=\"/assets/db-analysis/civic-oncokb-comparison.png\" class=\"dbAnalysisImage\">\n          <img src=\"/assets/db-analysis/civic-oncokb-comparison-2.png\" class=\"dbAnalysisImage\">\n          <img src=\"/assets/db-analysis/clinvar-civic-oncokb-comparison.png\" class=\"dbAnalysisImage\">\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .infoCard {\n      margin: 10px 5px;\n      overflow: hidden;\n    }\n\n    .cardContent {\n      float: left;\n      width: 100%;\n    }\n\n    .cardImage {\n      float: left;\n      width: 100%;\n      min-width: 150px;\n      max-width: 100%;\n    }\n\n    .cardImage>div, .cardContent>div {\n      float: left;\n      background-color: white;\n      box-shadow: 1px 3px #d5d5d5;\n      border: 1px solid #d1d1d1;\n      padding: 15px;\n      margin: 7px 3px;\n    }\n    \n    .dbAnalysisImage {\n      width: 33.333%;\n      height: auto;\n      float: left;\n    }\n  "]
        })
    ], DBAnalysisComponent);
    return DBAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/routes/ehr-instructions/ehr-instructions.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/ehr-instructions/ehr-instructions.component.ts ***!
  \***********************************************************************/
/*! exports provided: EHRInstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EHRInstructionsComponent", function() { return EHRInstructionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EHRInstructionsComponent = /** @class */ (function () {
    function EHRInstructionsComponent() {
    }
    EHRInstructionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ehr-instructions",
            template: "\n    <div id=\"wrapper\">\n      <div class=\"instructionBlock\">\n        <h2 class=\"display-2\" style=\"text-align: center;\">EHR Link Example</h2>\n      </div>\n      <hr>\n      <div class=\"instructionBlock\">\n        <h4 class=\"display-4 instructionHeading\">Linking the app to the sandbox</h4>\n        <p class=\"thinFont1\">Navigate to <a href=\"https://sandbox.hspconsortium.org\">the HSPC Sandbox</a>, and create a new account.</p>\n        <img style=\"width: 100%\" src=\"/assets/ehr-link/create-account.png\">\n        <br>\n        <p class=\"thinFont1\">Then, you will have to create a new sandbox.  Do so with the FHIR STU3 specification.</p>\n        <p class=\"thinFont1\">Following the sandbox creation, navigate to the \"Registered Apps\" section and click \"Register new app manually\".  Enter the following parameters: </p>\n        <img style=\"width: 70%\" src=\"/assets/ehr-link/registering-app.png\">\n      </div>\n      <br>\n      \n      <div class=\"instructionBlock\">\n        <h4 class=\"display-4 instructionHeading\">Building a launch scenario</h4>\n        <p class=\"thinFont1\">With your new registered app, create a new Practitioner Persona.  Then, create a new launch scenario for the app with any patient and practitioner persona you desire.</p>\n        <p style=\"color: red\">(NOTE: Ensure that you link the launch scenario to the SMART Cancer Navigator app registration you created in the previous step).  </p>\n        <img style=\"width: 40%\" src=\"/assets/ehr-link/launching-scenario.png\">\n      </div>\n      <br>\n      \n      <div class=\"instructionBlock\">\n        <h4 class=\"display-4 instructionHeading\">Launching the application</h4>\n        <p class=\"thinFont1\">First, take note of the Client ID for the application.  This long string is required for the application to access the sandbox data.</p>\n        <img style=\"width: 40%\" src=\"/assets/ehr-link/getting-client-id.png\">\n        <br>\n        <p class=\"thinFont1\">Now, click \"Launch\" on your launch scenario.  Upon beginning the app, you should be prompted for your client ID.  Paste in the one you obtained prior.</p>\n        <img style=\"width: 80%\" src=\"/assets/ehr-link/entering-info.png\">\n        <br>\n        <p>Congrats, you're done!</p>\n      </div>\n    </div>\n  ",
            styles: ["\n    #wrapper {\n      padding: 5px;\n      margin: 15px 50px;\n    }\n\n    .instructionBlock {\n      border: 1px solid #cecece;\n      box-shadow: 1px 3px #cfcfcf;\n      background-color: white;\n      padding: 10px;\n      text-align: center;\n    }\n\n    .instructionHeading {\n      text-align: center;\n    }\n\n    .instructionBlock p {\n      font-size: 20px;\n    }\n  "]
        })
    ], EHRInstructionsComponent);
    return EHRInstructionsComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/data-merging.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/data-merging.ts ***!
  \****************************************************************/
/*! exports provided: MergeProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeProperties", function() { return MergeProperties; });
var MergeProperties = function (property1, property2) {
    if (typeof property1 !== typeof property2) {
        console.log(property1 + " and " + property2 + " have a type mismatch, since " + typeof property1 + " is not " + typeof property2);
        return property1;
    }
    // Merge arrays.
    if (property1 instanceof Array) {
        var addToArray = function (toAdd) {
            for (var _i = 0, mergedArray_1 = mergedArray_2; _i < mergedArray_1.length; _i++) {
                var value = mergedArray_1[_i];
                if (value === toAdd) {
                    return;
                }
            }
            mergedArray_2.push(toAdd);
        };
        var mergedArray_2 = Array.from(property1);
        for (var _i = 0, property2_1 = property2; _i < property2_1.length; _i++) {
            var value = property2_1[_i];
            addToArray(value);
        }
    }
    if (property1) {
        if (property2) {
            if (property1 !== property1) {
                console.log("Conflicting values between " + property1 + " and " + property2);
            }
            return property1;
        }
        else {
            return property1;
        }
    }
    else {
        return property2;
    }
};


/***/ }),

/***/ "./src/app/routes/entry-and-visualization/filterable-search/filterable-search.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/filterable-search/filterable-search.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, FilterableSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterableSearchComponent", function() { return FilterableSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/**
 * Since the amount of data that one would have to parse through in a dropdown list while dealing
 * with genomic data is far too vast to be encompassed in a single select field, the filterable search
 * box is a vastly preferable alternative.  What"s nice about Angular is that - using Observables -
 * the options access can be delayed in asynchronous fashion.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Observable class extensions

// Observable operators







var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return FilterableSearchComponent; }),
    multi: true
};
var FilterableSearchComponent = /** @class */ (function () {
    function FilterableSearchComponent(myElement) {
        var _this = this;
        this.menuCurrentlyOpen = false; // Used to toggle between display and filter mode.
        this.searchTerms = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // The internal data model (for ngModel)
        this._currentlySelected = null;
        // Placeholders for the callbacks which are later providesd by the Control Value Accessor
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.recalculatePopupWidth = function () {
            _this.desiredPopupWidth = _this.popupToggle.nativeElement.offsetWidth;
        };
        this.clearField = function () {
            _this.currentlySelected = null;
        };
        this.elementRef = myElement;
    }
    Object.defineProperty(FilterableSearchComponent.prototype, "currentlySelected", {
        get: function () {
            return this._currentlySelected;
        },
        set: function (v) {
            if (v !== this.currentlySelected) {
                this._currentlySelected = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // From ControlValueAccessor interface
    FilterableSearchComponent.prototype.writeValue = function (value) {
        if (value !== this.currentlySelected) {
            this.currentlySelected = value;
        }
    };
    FilterableSearchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    FilterableSearchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // For when the user clicks outside of the dropdown.
    FilterableSearchComponent.prototype.handleClick = function (event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (inside) {
        }
        else {
            this.menuCurrentlyOpen = false;
        }
    };
    /**
     * Automatically resize the popup menu upon creating the menu or resizing the window.
     */
    FilterableSearchComponent.prototype.toggleMenu = function (newState) {
        var _this = this;
        if (newState && typeof newState === "boolean") {
            if (this.menuCurrentlyOpen === newState) {
                return;
            }
            this.menuCurrentlyOpen = newState;
        }
        else {
            this.menuCurrentlyOpen = !this.menuCurrentlyOpen;
        }
        if (!this.menuCurrentlyOpen) {
            return;
        }
        this.recalculatePopupWidth();
        // Doesn"t work without timeout...
        setTimeout(function () { return _this.searchBox.nativeElement.focus(); }, 50);
    };
    FilterableSearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Otherwise "Expression changed after checked error"
        setTimeout(function () { return _this.recalculatePopupWidth(); }, 50);
    };
    FilterableSearchComponent.prototype.onResize = function (event) {
        this.recalculatePopupWidth();
    };
    /**
     * Setting search services and the rest of the required components for this filterable search is important
     * to its functionality.
     */
    FilterableSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * Refer to https://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html.
         * This is essentially subscribing the options to the searchTerms.
         */
        this.options = this.searchTerms
            .debounceTime(100) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes (ternary operator)
            ? _this.searchService.search(term) // return the http search observable
            : rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of([]); }) // or the observable of empty options if there was no search term
            .catch(function (error) {
            // TODO: add real error handling
            console.log("Search Service Error", error);
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of([]);
        });
    };
    // Provide the component with a callback for when an option is selected.
    FilterableSearchComponent.prototype.onSelection = function (option) {
        this.currentlySelected = option;
        this.menuCurrentlyOpen = false;
        console.log("Got chosen", option);
    };
    // Push a search term into the observable stream.
    FilterableSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FilterableSearchComponent.prototype, "placeholderString", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterableSearchComponent.prototype, "searchService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("SearchBox"),
        __metadata("design:type", Object)
    ], FilterableSearchComponent.prototype, "searchBox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("PopupToggle"),
        __metadata("design:type", Object)
    ], FilterableSearchComponent.prototype, "popupToggle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("document:click", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FilterableSearchComponent.prototype, "handleClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FilterableSearchComponent.prototype, "onResize", null);
    FilterableSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "filterable-search",
            template: "\n    <div #PopupToggle class=\"filterToggle\" (click)=\"toggleMenu(true)\" [style.border-bottom]=\"menuCurrentlyOpen ? '0' : '1px solid #dadada'\">\n      <img src=\"/assets/entry-and-visualization/dropdown.svg\"/>\n      \n      <!-- Display selected option before click -->\n      <p *ngIf=\"currentlySelected !== undefined && currentlySelected !== null\" [hidden]=\"menuCurrentlyOpen\" style=\"font-style: normal; font-weight: bold;\">{{currentlySelected.optionName()}}</p>\n      <p *ngIf=\"currentlySelected === undefined || currentlySelected === null\" [hidden]=\"menuCurrentlyOpen\" style=\"font-style: italic; font-weight: normal;\">{{placeholderString}}</p>\n      \n      <!-- Switch from p to input on click -->\n      <input autocomplete=\"off\" #SearchBox [hidden]=\"!menuCurrentlyOpen\" (keyup)=\"search(SearchBox.value)\" placeholder=\"Search\" class=\"filterInput form-control\"/>\n    </div>\n\n    <!-- Suggestions for potential selections -->\n    <div #PopupPanel class=\"filterPanel\" [hidden]=\"!menuCurrentlyOpen\" [style.width.px]=\"desiredPopupWidth\" [style.height.px]=\"(options | async)?.length < 6 ? (options | async)?.length * 48 : 288\">\n      <table class=\"table table-hover\">\n        <tr *ngFor=\"let option of options | async\">\n          <td (click)=\"onSelection(option)\">{{option.optionName()}}</td>\n        </tr>\n      </table>\n    </div>\n  ",
            styles: ["\n    .filterToggle {\n      width: 100%;\n      height: 38px;\n\n      margin: 0;\n\n      font-size: 18px;\n      cursor: pointer;\n\n      border: 1px solid #dadada;\n      background-color: white;\n      overflow: hidden;\n    }\n\n    .filterToggle:hover {\n      background-color: #efefef;\n    }\n\n    .filterToggle p {\n      float: left;\n      width: calc(100% - 43px);\n      margin: 5px 5px 5px 10px;\n    }\n\n    .filterToggle img {\n      float: right;\n      width: 20px;\n      height: 20px;\n      margin-top: 9px;\n      margin-right: 5px;\n    }\n\n    .filterToggle input {\n      width: calc(100% - 28px);\n      height: 36px;\n      margin: 0;\n    }\n\n    .filterPanel {\n      display: block;\n      position: absolute;\n      z-index: 1000;\n\n      background-color: white;\n\n      border: 1px solid #dadada;\n      border-top: 0;\n      \n      height: 95px;\n\n      overflow: scroll;\n    }\n\n    .filterInput {\n      width: 100%;\n    }\n  "],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FilterableSearchComponent);
    return FilterableSearchComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/genomic-data-providers/mygeneinfo-search.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/genomic-data-providers/mygeneinfo-search.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: MyGeneInfoSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGeneInfoSearchService", function() { return MyGeneInfoSearchService; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _genomic_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../genomic-data */ "./src/app/routes/entry-and-visualization/genomic-data.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_json_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/json-navigator.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * MyVariant.info compiles variant database information from across the web and provides in an easy-to-query
 * online API.
 */





/**
 * Since the myvariant.info response JSON is MASSIVE and depends to a large extent on the query, these locations
 * map the keys of the JSON where values may be stored.
 */
var GENE_DATA_LOCATIONS = {
    "Aliases": [
        "alias[]"
    ]
};
var MyGeneInfoSearchService = /** @class */ (function () {
    function MyGeneInfoSearchService(http, jsonNavigator) {
        var _this = this;
        this.http = http;
        this.jsonNavigator = jsonNavigator;
        this.updateVariantOrigin = function (variant) {
            if (!variant.origin || !variant.origin.entrezID) {
                console.log("Resulting variant is ", variant);
                console.log("Required fields for a gene query were not provided, variant.origin is " + variant.origin + " and entrez ID is " + variant.origin.entrezID);
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].of(variant);
            }
            // Query for gene stuff.
            return _this.http.get("https://mygene.info/v3/gene/" + variant.origin.entrezID)
                .map(function (response) {
                console.log("Got for gene annotation ", response);
                if (response["name"]) {
                    variant.origin.name = response["name"];
                }
                if (response["alias"]) {
                    if (response["alias"] instanceof Array) {
                        variant.origin.aliases = response["alias"];
                    }
                    else {
                        variant.origin.aliases = [response["alias"]];
                    }
                }
                if (response["summary"]) {
                    variant.origin.description = response["summary"];
                }
                if (response["type_of_gene"]) {
                    variant.origin.type = response["type_of_gene"];
                }
                if (response["genomic_pos"]) {
                    variant.origin.chromosome = response["genomic_pos"].chr;
                    variant.origin.start = response["genomic_pos"].start;
                    variant.origin.end = response["genomic_pos"].end;
                    variant.origin.strand = response["genomic_pos"].strand;
                }
                if (response["pathway"] && response["pathway"].wikipathways) {
                    for (var _i = 0, _a = response["pathway"].wikipathways; _i < _a.length; _i++) {
                        var wikipathway = _a[_i];
                        variant.origin.pathways.push(new _genomic_data__WEBPACK_IMPORTED_MODULE_1__["Pathway"](wikipathway.id, wikipathway.name));
                    }
                }
                return variant;
            });
        };
    }
    MyGeneInfoSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _utilities_json_navigator_service__WEBPACK_IMPORTED_MODULE_4__["JSONNavigatorService"]])
    ], MyGeneInfoSearchService);
    return MyGeneInfoSearchService;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/genomic-data-providers/myvariantinfo-search.service.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/genomic-data-providers/myvariantinfo-search.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MyVariantInfoSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyVariantInfoSearchService", function() { return MyVariantInfoSearchService; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _genomic_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../genomic-data */ "./src/app/routes/entry-and-visualization/genomic-data.ts");
/* harmony import */ var _variant_visualization_drugs_drug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variant-visualization/drugs/drug */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_json_navigator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/json-navigator.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service.ts");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_observable_empty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/empty */ "./node_modules/rxjs-compat/_esm5/add/observable/empty.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * MyVariant.info compiles variant database information from across the web and provides in an easy-to-query
 * online API.
 */








/**
 * Since the myvariant.info response JSON is MASSIVE and depends to a large extent on the query, these locations
 * map the keys of the JSON where values may be stored.
 */
var MY_VARIANT_LOCATIONS = {
    "GeneHUGO": [
        "civic.entrez_name",
        "cadd.gene.genename",
        "cgi.gene",
        "docm.default_gene_name",
        "docm.gene_name",
        "snpeff.genename",
        "snpeff.gene_id",
        "clinvar.gene.symbol"
    ],
    "VariantName": [
        "civic.name",
        "dbnsfp.mutationtaster.AAE[0]",
        "dbnsfp.mutpred.aa_change" /*,
        "cgi.protein_change (of format BRAF:p.V600E)",
        "docm.aa_change (p. V600E)",
        "emv.egl_protein (p.Val600Glu | p.V600E)"
        */
    ],
    "EntrezID": [
        "civic.entrezID",
        "clinvar.gene.id"
    ],
    "Drug": [
        "cgi.drug",
        "cgi[].drug",
        "civic.evidence_items[].drugs[].name",
        "civic.evidence_items.drugs[].name"
    ],
    "Disease": [
        "civic.evidence_items.disease.display_name",
        "civic.evidence_items[].disease.display_name",
        "clinvar.rcv.conditions.name",
        "clinvar.rcv[].conditions.name",
        "clinvar.rcv[].conditions[].name",
        "clinvar.rcv.conditions[].name"
    ],
    "Description": [
        "civic.description"
    ],
    "Somatic": [
        "civic.evidence_items[0].variant_origin",
        "clinvar.rcv.origin"
    ],
    "ChromosomePos": [
        "chrom"
    ],
    "StartPos": [
        "vcf.position",
        "hg19.start"
    ],
    "EndPos": [
        "vcf.position",
        "hg19.end"
    ],
    "VariantTypes": [
        "civic.variant_types.display_name",
        "civic.variant_types[].display_name"
    ],
    "HGVSID": [
        "_id"
    ],
    "ClinicalSignificance": [
        "clinvar.rcv",
        "clinvar.rcv[]"
    ]
};
// Stores the keyword string and the purpose enum.
var VariantSearchKeyword = /** @class */ (function () {
    function VariantSearchKeyword(_keyword, _purpose) {
        this.keyword = _keyword;
        this.purpose = _purpose;
    }
    return VariantSearchKeyword;
}());
var MyVariantInfoSearchService = /** @class */ (function () {
    function MyVariantInfoSearchService(http, jsonNavigator) {
        var _this = this;
        this.http = http;
        this.jsonNavigator = jsonNavigator;
        // Create these in the constructor so that we don"t constantly re-create them.
        this.allFieldsIncludeString = "";
        this.referenceFieldsIncludeString = "";
        this.scrubbedLocations = {};
        this.queryEndpoint = "https://myvariant.info/v1/query?q=";
        this.currentKeywords = [];
        this.lastSuggestionSet = rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].of([]);
        /**
         * Works as follows:
         * 1. The keyword is dissected (split by spaces), and then test queries are sent to figure out the likely purpose of each
         * keyword (3 chars required before any predictions made).
         * 2. Based on the likelihood of each of the words made previously, a list of variants are compiled and sent back to the
         * filterable search component, where the user selects one from the list.
         * @param {string} searchTerm
         * @returns {Observable<Variant[]>}
         */
        this.searchByString = function (searchTerm) {
            // Get new keywords.
            var newKeywords = searchTerm.split(" ");
            // Prune out keywords which are less than 3 characters.
            for (var i = 0; i < newKeywords.length; i++) {
                if (newKeywords[i].length < 1) {
                    newKeywords.splice(i, 1);
                }
            }
            /**
             * Figure out conflicts.  This is done by looking through the keyword array for each keyword object.
             * If it is found, then the item is removed from the new keywords array.  Otherwise, the keyword is
             * removed from the current keywords array.
             */
            var managePotentialConflict = function (potentialConflict) {
                // Figure out conflicting keywords.
                for (var _i = 0, newKeywords_2 = newKeywords; _i < newKeywords_2.length; _i++) {
                    var newKeyword = newKeywords_2[_i];
                    if (newKeyword === potentialConflict.keyword) {
                        // Remove the potential conflict and its corresponding keyword.
                        newKeywords.splice(newKeywords.indexOf(potentialConflict.keyword), 1);
                        return;
                    }
                }
                // It must"ve not been found if we reach here.
                _this.currentKeywords.splice(_this.currentKeywords.indexOf(potentialConflict), 1);
                console.log(potentialConflict.keyword + " is a conflict.");
            };
            for (var _i = 0, _a = _this.currentKeywords; _i < _a.length; _i++) {
                var potentialConflict = _a[_i];
                // Wrapped in a method so that we can return if need be.
                managePotentialConflict(potentialConflict);
            }
            if (newKeywords.length === 0) {
                console.log("Returning last suggestion set", _this.lastSuggestionSet);
                return _this.lastSuggestionSet;
            }
            // Gets populated, forked, and then mapped.
            var checkObservables = [];
            var _loop_1 = function (newKeyword) {
                // Since all checks follow same format.
                var determineLikelihoodBasedOnQuery = function (queryString) {
                    return _this.http.get(queryString)
                        .map(function (result) {
                        return result["hits"].length;
                    });
                };
                var quickQuerySuffix = "&fields=_id&size=15";
                // Don"t create duplicate purposes.
                var purposeAlreadyExists = function (purpose) {
                    for (var _i = 0, _a = _this.currentKeywords; _i < _a.length; _i++) {
                        var keyword = _a[_i];
                        if (keyword.purpose === purpose) {
                            return true;
                        }
                    }
                    return false;
                };
                // Query for relative likelihoods.
                if (!isNaN(Number(newKeyword))) {
                    if (!purposeAlreadyExists(3 /* ENTREZ_ID */))
                        _this.currentKeywords.push(new VariantSearchKeyword(newKeyword, 3 /* ENTREZ_ID */));
                }
                else if (newKeyword.toLowerCase().indexOf("chr") >= 0 || newKeyword.toLowerCase().indexOf("civic") >= 0) {
                    if (!purposeAlreadyExists(2 /* HGVS_ID */))
                        _this.currentKeywords.push(new VariantSearchKeyword(newKeyword, 2 /* HGVS_ID */));
                }
                else {
                    var geneHUGOQuery = determineLikelihoodBasedOnQuery(_this.queryEndpoint + _this.constructORConcatenation(_this.scrubbedLocations.GeneHUGO, newKeyword, true) + quickQuerySuffix);
                    var variantNameQuery = determineLikelihoodBasedOnQuery(_this.queryEndpoint + _this.constructORConcatenation(_this.scrubbedLocations.VariantName, newKeyword, true) + quickQuerySuffix);
                    // Create large observable fork.
                    checkObservables.push(rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].forkJoin([geneHUGOQuery, variantNameQuery])
                        .map(function (results) {
                        console.log("Classification results were ", results);
                        // Figure out purpose of keyword.
                        if (results[0] > results[1]) {
                            if (!purposeAlreadyExists(0 /* Gene_HUGO_Symbol */))
                                _this.currentKeywords.push(new VariantSearchKeyword(newKeyword, 0 /* Gene_HUGO_Symbol */));
                        }
                        else if (results[0] < results[1]) {
                            if (!purposeAlreadyExists(1 /* Variant_Name */))
                                _this.currentKeywords.push(new VariantSearchKeyword(newKeyword, 1 /* Variant_Name */));
                        }
                        else {
                            // Results must be equal.
                            if (!purposeAlreadyExists(0 /* Gene_HUGO_Symbol */))
                                _this.currentKeywords.push(new VariantSearchKeyword(newKeyword, 0 /* Gene_HUGO_Symbol */));
                            else if (!purposeAlreadyExists(1 /* Variant_Name */))
                                _this.currentKeywords.push(new VariantSearchKeyword(newKeyword, 1 /* Variant_Name */));
                        }
                    }));
                }
            };
            // Now the array only has the conflict keywords, so we can classify the purposes of the other keywords.
            for (var _b = 0, newKeywords_1 = newKeywords; _b < newKeywords_1.length; _b++) {
                var newKeyword = newKeywords_1[_b];
                _loop_1(newKeyword);
            }
            var getVariantArrayObservable = function () {
                console.log("Creating final observable with keywords", _this.currentKeywords);
                // Apply keywords to query.
                var finalQuery = _this.queryEndpoint;
                var arrayToUse;
                if (_this.currentKeywords.length > 1) {
                    finalQuery = finalQuery + "(";
                }
                for (var i = 0; i < _this.currentKeywords.length; i++) {
                    switch (_this.currentKeywords[i].purpose) {
                        case 0 /* Gene_HUGO_Symbol */:
                            arrayToUse = _this.scrubbedLocations.GeneHUGO;
                            break;
                        case 1 /* Variant_Name */:
                            arrayToUse = _this.scrubbedLocations.VariantName;
                            break;
                        case 2 /* HGVS_ID */:
                            arrayToUse = _this.scrubbedLocations.HGVSID;
                            break;
                        case 3 /* ENTREZ_ID */:
                            arrayToUse = _this.scrubbedLocations.EntrezID;
                    }
                    finalQuery = finalQuery + _this.constructORConcatenation(arrayToUse, _this.currentKeywords[i].keyword, true);
                    // Add "AND" requirement
                    if (i < _this.currentKeywords.length - 1) {
                        finalQuery = finalQuery + ")%20AND%20(";
                    }
                }
                if (_this.currentKeywords.length > 1) {
                    finalQuery = finalQuery + ")";
                }
                // Add suffix.
                finalQuery = finalQuery + "&fields=" + _this.referenceFieldsIncludeString + "&size=15";
                return _this.http.get(finalQuery)
                    .map(function (result) {
                    console.log("Final Query result from " + finalQuery, result);
                    if (!result["hits"])
                        return [];
                    // Used to check whether a given property exists in the mapped JSON.
                    var variantResults = [];
                    // For every result.
                    for (var _i = 0, _a = result["hits"]; _i < _a.length; _i++) {
                        var hit = _a[_i];
                        // Since names, HUGO symbols, and such shouldn"t include spaces.
                        var ensureValidString = function (someString) {
                            return someString.indexOf(" ") >= 0 ? someString.substring(0, someString.indexOf(" ")) : someString;
                        };
                        // Gene construction.
                        var variantGene = new _genomic_data__WEBPACK_IMPORTED_MODULE_1__["GeneReference"](ensureValidString(_this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.GeneHUGO, false)[0]), Number(_this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.EntrezID, false)[0]));
                        // Variant construction
                        variantResults.push(new _genomic_data__WEBPACK_IMPORTED_MODULE_1__["VariantReference"](variantGene, ensureValidString(_this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.VariantName, false)[0]), hit._id));
                    }
                    return variantResults;
                });
            };
            if (checkObservables.length > 0) {
                // Map the keywords (has to be done this way based on how Observables work).
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].forkJoin(checkObservables)
                    // Merge map so that we wait for the forked observable to complete.
                    .mergeMap(function (results) {
                    _this.lastSuggestionSet = getVariantArrayObservable();
                    return _this.lastSuggestionSet;
                });
            }
            else { // If this is an entrez ID or an HGVS ID based on special circumstances.
                _this.lastSuggestionSet = getVariantArrayObservable();
                return _this.lastSuggestionSet;
            }
        };
        this.getByReference = function (reference) {
            console.log("Creating final observable with keywords", _this.currentKeywords);
            // Apply key fields to query.
            var queryConstruct = _this.queryEndpoint;
            var alreadyAdded = 0;
            var addORConstructToQuery = function (orConstruct) {
                if (alreadyAdded > 0) {
                    queryConstruct = queryConstruct + "%20OR%20(";
                }
                else {
                    queryConstruct = queryConstruct + "(";
                }
                queryConstruct = queryConstruct + orConstruct + ")";
                alreadyAdded++;
            };
            if (reference.origin) {
                if (reference.origin.hugoSymbol && reference.origin.hugoSymbol !== "") {
                    addORConstructToQuery(_this.constructORConcatenation(_this.scrubbedLocations.GeneHUGO, reference.origin.hugoSymbol, true));
                }
                if (reference.origin.entrezID && reference.origin.entrezID !== -1) {
                    addORConstructToQuery(_this.constructORConcatenation(_this.scrubbedLocations.EntrezID, reference.origin.entrezID.toString(), false));
                }
            }
            if (reference.hgvsID && reference.hgvsID !== "") {
                addORConstructToQuery(_this.constructORConcatenation(_this.scrubbedLocations.HGVSID, reference.hgvsID, false));
            }
            if (reference.variantName && reference.variantName !== "") {
                addORConstructToQuery(_this.constructORConcatenation(_this.scrubbedLocations.VariantName, reference.variantName, true));
            }
            // Add suffix.
            queryConstruct = queryConstruct + "&fields=" + _this.allFieldsIncludeString + "&size=15";
            return _this.http.get(queryConstruct)
                .map(function (result) {
                console.log("Final Query result from " + queryConstruct, result);
                if (!result["hits"])
                    return null;
                // For every result.
                if (!(result["hits"] && result["hits"].length > 0))
                    return null;
                var hit = result["hits"][0];
                // Since names, HUGO symbols, and such shouldn"t include spaces.
                var ensureValidString = function (someString) {
                    return someString.indexOf(" ") >= 0 ? someString.substring(0, someString.indexOf(" ")) : someString;
                };
                // Gene construction.
                console.log("Constructing from reference " + reference.toString());
                var newVariant = _genomic_data__WEBPACK_IMPORTED_MODULE_1__["Variant"].fromReference(reference);
                newVariant.description = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.Description, false)[0];
                newVariant.score = hit._score;
                newVariant.somatic = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.Somatic, false)[0].toLowerCase().indexOf("somatic") >= 0;
                newVariant.chromosome = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.ChromosomePos, false)[0]; // Can be "X" or "Y"
                newVariant.start = Number(_this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.StartPos, false)[0]);
                newVariant.end = Number(_this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.EndPos, false)[0]);
                newVariant.drugs = [];
                for (var _i = 0, _a = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.Drug, true); _i < _a.length; _i++) {
                    var drugName = _a[_i];
                    newVariant.drugs.push(new _variant_visualization_drugs_drug__WEBPACK_IMPORTED_MODULE_2__["DrugReference"](drugName));
                }
                newVariant.types = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.VariantTypes, true);
                newVariant.diseases = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.Disease, true);
                newVariant.classifications = [];
                var addClassification = function (classification) {
                    for (var _i = 0, _a = newVariant.classifications; _i < _a.length; _i++) {
                        var existentC = _a[_i];
                        if (existentC.name === classification.name) {
                            existentC.sources.push(classification.sources[0]);
                            return;
                        }
                    }
                    newVariant.classifications.push(classification);
                };
                for (var _b = 0, _c = _this.jsonNavigator.mergePathsData(hit, MY_VARIANT_LOCATIONS.ClinicalSignificance, true); _b < _c.length; _b++) {
                    var classification = _c[_b];
                    addClassification(new _genomic_data__WEBPACK_IMPORTED_MODULE_1__["Classification"](classification.clinical_significance, "ClinVar RCV Accession " + classification.accession));
                }
                return newVariant;
            });
        };
        // Scrub the locations of all bracket indicators.
        for (var _i = 0, _a = Object.keys(MY_VARIANT_LOCATIONS); _i < _a.length; _i++) {
            var key = _a[_i];
            var compilation = [];
            for (var i = 0; i < MY_VARIANT_LOCATIONS[key].length; i++) {
                var currentFocus = MY_VARIANT_LOCATIONS[key][i];
                if (currentFocus.indexOf("[") >= 0) {
                    // REGULAR EXPRESSIONS AHHHHH (test here: http://regexr.com/)
                    var scrubbedString = currentFocus.replace(/\[.*?\]/g, "");
                    console.log("Scrubbed " + currentFocus + " to " + scrubbedString);
                    compilation.push(scrubbedString);
                }
                else {
                    compilation.push(currentFocus);
                }
            }
            this.scrubbedLocations[key] = compilation;
        }
        // Add all values of the MY_VARIANT_LOCATIONS array to the include string.
        for (var _b = 0, _c = Object.keys(this.scrubbedLocations); _b < _c.length; _b++) {
            var key = _c[_b];
            for (var _d = 0, _e = this.scrubbedLocations[key]; _d < _e.length; _d++) {
                var location_1 = _e[_d];
                this.allFieldsIncludeString = this.allFieldsIncludeString + location_1 + ",";
            }
        }
        // Remove the final comma.
        this.allFieldsIncludeString = this.allFieldsIncludeString.substring(0, this.allFieldsIncludeString.length - 1);
        // Add fields required for references to reference include string.
        for (var _f = 0, _g = ["GeneHUGO", "VariantName", "EntrezID"]; _f < _g.length; _f++) {
            var key = _g[_f];
            for (var _h = 0, _j = this.scrubbedLocations[key]; _h < _j.length; _h++) {
                var location_2 = _j[_h];
                this.referenceFieldsIncludeString = this.referenceFieldsIncludeString + location_2 + ",";
            }
        }
        // Remove the final comma.
        this.referenceFieldsIncludeString = this.referenceFieldsIncludeString.substring(0, this.allFieldsIncludeString.length - 1);
    }
    /**
     * Utility method to query in accordance with myvariant.info API.
     * @param {string[]} stringArray
     * @param {string} desiredVal
     * @returns {string}
     */
    MyVariantInfoSearchService.prototype.constructORConcatenation = function (stringArray, desiredVal, include_prefixed_args) {
        desiredVal = desiredVal.replace(/[:]/g, "\\$&");
        // desiredVal = encodeURIComponent(desiredVal);
        var currentString = "";
        if (include_prefixed_args) {
            currentString = stringArray[0] + ":" + desiredVal + "*" + "%20OR%20" + stringArray[0] + ":" + desiredVal;
        }
        else {
            currentString = stringArray[0] + ":" + desiredVal;
        }
        for (var i = 1; i < stringArray.length; i++) {
            if (include_prefixed_args) {
                currentString = currentString + "%20OR%20" + stringArray[i] + ":" + desiredVal + "*";
            }
            currentString = currentString + "%20OR%20" + stringArray[i] + ":" + desiredVal;
        }
        return currentString;
    };
    MyVariantInfoSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _utilities_json_navigator_service__WEBPACK_IMPORTED_MODULE_5__["JSONNavigatorService"]])
    ], MyVariantInfoSearchService);
    return MyVariantInfoSearchService;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/genomic-data-providers/utilities/json-navigator.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: JSONNavigatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONNavigatorService", function() { return JSONNavigatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * TODO: This class should eventually take over for the myvariant.info querier's JSON searching, since that service should be
 * leverageable by all services which require it.
 */

var JSONNavigatorService = /** @class */ (function () {
    function JSONNavigatorService() {
    }
    /**
     * Navigates through a simple path "item.test.name", NOT "item.test[].name"
     * @param from  the JSON to search through.
     * @param {string} path  the path of the item in question.
     * @returns {any}  the sub JSON at that path.
     */
    JSONNavigatorService.prototype.navigateToPath = function (from, path) {
        var current = from;
        for (var _i = 0, _a = path.split("."); _i < _a.length; _i++) {
            var key = _a[_i];
            if (current instanceof Array) {
                return null;
            }
            if (!current.hasOwnProperty(key)) {
                return null;
            }
            current = current[key];
        }
        return current;
    };
    /**
     * Takes a path which may contain bracket notation and recursively parses it to a string or a string array (depending
     * on the data available at that path).
     * @param from
     * @param {string} path
     * @returns {string | string[]}
     */
    JSONNavigatorService.prototype.getPathData = function (from, path) {
        // Figure out whether the user added any [] in.
        if (path.indexOf("[") >= 0 && path.indexOf("]") >= 0) {
            // Figure out the array stuff.
            var prePath = path.substring(0, path.indexOf("["));
            // Navigate to prePath.
            var current = this.navigateToPath(from, prePath);
            if (!(current instanceof Array)) {
                return null;
            }
            // Post path.
            var index = Number(path[path.indexOf("[") + 1]);
            if (isNaN(index)) {
                index = -1;
            }
            var postPath = path.substring(path.indexOf("]") + 2);
            // User wrote civic.evidence_items[] not [0]
            if (index === -1) { // Will return array
                var compilation = [];
                for (var _i = 0, current_1 = current; _i < current_1.length; _i++) {
                    var subJSON = current_1[_i];
                    // Recursive call (in case more [] are included)
                    var subJSONValue = this.navigateToPath(subJSON, postPath);
                    if (subJSONValue === null) {
                        return null;
                    }
                    if (subJSONValue instanceof Array) {
                        for (var _a = 0, subJSONValue_1 = subJSONValue; _a < subJSONValue_1.length; _a++) {
                            var subJSONArrayValue = subJSONValue_1[_a];
                            compilation.push(subJSONArrayValue);
                        }
                    }
                    else {
                        compilation.push(subJSONValue);
                    }
                }
                compilation = compilation.filter(function (filterItem) {
                    return filterItem !== null && filterItem !== "";
                });
                return compilation;
            }
            else {
                return this.getPathData(current[index], postPath);
            }
        }
        else {
            return this.navigateToPath(from, path);
        }
    };
    /**
     * Calls getPathData on a bunch of paths and merges the resulting data.
     */
    JSONNavigatorService.prototype.mergePathsData = function (from, paths, searchAll) {
        var compilation = [];
        for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
            var potentialHeader = paths_1[_i];
            var potentialValue = this.getPathData(from, potentialHeader);
            if (potentialValue !== null) {
                if (potentialValue instanceof Array) {
                    for (var _a = 0, potentialValue_1 = potentialValue; _a < potentialValue_1.length; _a++) {
                        var subValue = potentialValue_1[_a];
                        compilation.push(subValue);
                    }
                }
                else {
                    compilation.push(potentialValue);
                }
                if (!searchAll) {
                    break;
                }
            }
        }
        // Don"t search for duplicates if there"s only one value!
        if (searchAll) {
            // Remove duplicates from array (thanks StackOverflow!)
            compilation = compilation.reduce(function (p, c, i, a) {
                if (p.indexOf(c) === -1) {
                    p.push(c);
                }
                else {
                    p.push("");
                }
                return p;
            }, []);
            // Remove all empty strings from array.
            compilation = compilation.filter(function (filterItem) {
                return filterItem !== "";
            });
        }
        if (compilation.length === 0 && !searchAll) {
            compilation.push(""); // Empty string so that errors aren"t thrown.
        }
        return compilation;
    };
    JSONNavigatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JSONNavigatorService);
    return JSONNavigatorService;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/genomic-data.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/genomic-data.ts ***!
  \****************************************************************/
/*! exports provided: GeneReference, Pathway, Gene, VariantReference, Classification, Variant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneReference", function() { return GeneReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pathway", function() { return Pathway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gene", function() { return Gene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantReference", function() { return VariantReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Classification", function() { return Classification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variant", function() { return Variant; });
/* harmony import */ var _data_merging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-merging */ "./src/app/routes/entry-and-visualization/data-merging.ts");

/**
 * The gene reference class includes only the base properties for a given gene; those which are required for merging
 * and such.
 */
var GeneReference = /** @class */ (function () {
    function GeneReference(_hugoSymbol, _entrezID) {
        var _this = this;
        // Merges another gene into this gene (overwriting properties if the property of one is undefined).
        this.mergeable = function (other) {
            if (!_this.hugoSymbol || _this.hugoSymbol === "")
                return false;
            return _this.hugoSymbol === other.hugoSymbol;
        };
        this.merge = function (other) {
            _this.entrezID = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.entrezID, other.entrezID);
        };
        this.toString = function () {
            return _this.hugoSymbol + " " + _this.entrezID;
        };
        this.hugoSymbol = _hugoSymbol;
        this.entrezID = _entrezID;
    }
    return GeneReference;
}());

/**
 * The gene class provides a quick and easy way to obtain gene names, various IDs, and so on from a
 * variety of databases.  Eventually this class will be made FHIR compliant to speed up FHIR bundle
 * conversion.
 */
var Pathway = /** @class */ (function () {
    function Pathway(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    return Pathway;
}());

/**
 * Contains additional data than the GeneReference.
 */
var Gene = /** @class */ (function () {
    function Gene(_hugoSymbol) {
        var _this = this;
        this.pathways = [];
        /**
         * Concatenates all genomic pathways for the variant in question.
         * @returns {string}
         */
        this.pathwaysString = function () {
            if (!_this.pathways || _this.pathways.length === 0)
                return "";
            var current = "The " + _this.pathways[0].name;
            for (var i = 1; i < _this.pathways.length; i++) {
                if (i < _this.pathways.length - 1) {
                    current = current + ", the " + _this.pathways[i].name;
                }
                else {
                    current = current + ", and the " + _this.pathways[i].name;
                }
            }
            return current;
        };
        // Merges another gene into this gene (overwriting properties if the property of one is undefined).
        this.mergeable = function (other) {
            if (!_this.hugoSymbol || _this.hugoSymbol === "")
                return false;
            return _this.hugoSymbol === other.hugoSymbol;
        };
        this.merge = function (other) {
            _this.entrezID = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.entrezID, other.entrezID);
            _this.name = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.name, other.name);
            _this.description = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.description, other.description);
            _this.type = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.type, other.type);
            _this.aliases = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.aliases, other.aliases);
        };
        this.hugoSymbol = _hugoSymbol;
    }
    Gene.fromReference = function (reference) {
        var newGene = new Gene(reference.hugoSymbol);
        newGene.entrezID = reference.entrezID;
        return newGene;
    };
    return Gene;
}());

/**
 * The variant reference is better way to get only the basic info required for a given variant.
 */
var VariantReference = /** @class */ (function () {
    function VariantReference(_origin, _variantName, _hgvsID) {
        var _this = this;
        this.optionName = function () {
            return _this.origin.hugoSymbol + " " + _this.variantName + " " + _this.origin.entrezID + " " + _this.hgvsID;
        };
        /**
         * Merging methods
         */
        this.mergeable = function (other) {
            return _this.variantName === other.variantName && _this.origin.mergeable(other.origin);
        };
        // Merges another variant reference into this variant reference (overwriting properties if the property of one is undefined).
        this.merge = function (other) {
            // Determine which HGVS ID to use since we don't want to mess this one up.
            if (other.hgvsID.indexOf("chr") !== -1)
                _this.hgvsID = other.hgvsID;
            else if (_this.hgvsID.indexOf("chr") !== -1)
                other.hgvsID = _this.hgvsID;
            // Merge both genes.
            _this.origin.merge(other.origin);
            console.log("Merged " + _this.toString() + " and " + other.toString());
        };
        this.toString = function () {
            return _this.origin.toString() + " " + _this.variantName + " " + _this.hgvsID;
        };
        this.origin = _origin;
        this.variantName = _variantName;
        this.hgvsID = _hgvsID;
    }
    return VariantReference;
}());

/**
 * Gene variants vary in their pathogenicity (danger to their host), and are important to consider
 * alongside the genes which they vary from.
 */
var Classification = /** @class */ (function () {
    function Classification(_name, _source) {
        this.name = _name;
        this.sources = [_source];
    }
    return Classification;
}());

/**
 * Contains the data required to display a variant.
 */
var Variant = /** @class */ (function () {
    function Variant(_origin, _variantName, _hgvsID) {
        var _this = this;
        this.score = 0;
        this.optionName = function () {
            return _this.origin.hugoSymbol + " " + _this.variantName + " " + _this.origin.entrezID + " " + _this.hgvsID;
        };
        this.getClassification = function () {
            var maxAgreements = 0;
            var verdict = "";
            for (var _i = 0, _a = _this.classifications; _i < _a.length; _i++) {
                var classification = _a[_i];
                if (maxAgreements < classification.sources.length) {
                    maxAgreements = classification.sources.length;
                    verdict = classification.name;
                }
            }
            return verdict;
        };
        /**
         * Merging methods
         */
        this.mergeable = function (other) {
            return _this.hgvsID === other.hgvsID && _this.origin.mergeable(other.origin);
        };
        // Merges another variant reference into this variant reference (overwriting properties if the property of one is undefined).
        this.merge = function (other) {
            _this.origin.merge(other.origin);
            _this.variantName = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.variantName, other.variantName);
            _this.hgvsID = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.hgvsID, other.hgvsID);
            _this.score = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.score, other.score);
            _this.description = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.description, other.description);
            _this.somatic = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.somatic, other.somatic);
            _this.types = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.types, other.types);
            _this.drugs = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.drugs, other.drugs);
            _this.diseases = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.drugs, other.drugs);
        };
        this.getLocation = function () {
            return _this.start === _this.end ? "Nucleotide " + _this.start : "Nucleotides " + _this.start + " to " + _this.end;
        };
        this.origin = _origin;
        this.variantName = _variantName;
        this.hgvsID = _hgvsID;
    }
    Variant.fromReference = function (reference) {
        return new Variant(Gene.fromReference(reference.origin), reference.variantName, reference.hgvsID);
    };
    return Variant;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-entry-and-visualization.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-entry-and-visualization.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: VariantEntryAndVisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantEntryAndVisualizationComponent", function() { return VariantEntryAndVisualizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smart-initialization/smart-reference.service */ "./src/app/smart-initialization/smart-reference.service.ts");
/* harmony import */ var _variant_selector_variant_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant-selector/variant-selector.service */ "./src/app/routes/entry-and-visualization/variant-selector/variant-selector.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _feedback_form_feedback_form_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feedback-form/feedback-form-modal.component */ "./src/app/routes/feedback-form/feedback-form-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VariantWrapper = /** @class */ (function () {
    function VariantWrapper(_index, _variant) {
        var _this = this;
        this.toggleDrawer = function () {
            _this.drawerState = _this.drawerState === "closed" ? "open" : "closed";
        };
        this.index = _index;
        this.variant = _variant;
        this.drawerState = "closed";
        this.saved = false;
    }
    return VariantWrapper;
}());
var VariantEntryAndVisualizationComponent = /** @class */ (function () {
    function VariantEntryAndVisualizationComponent(selectorService, router, modalService) {
        this.selectorService = selectorService;
        this.router = router;
        this.modalService = modalService;
        // This is what we're using to determine whether the user is worthy to rate our service (has interacted enough with the service).
        this.userInteractionPoints = 0;
        this.askForReview = true;
        this.variants = [];
        this.offerToLinkToEHRInstructions = true;
        this.patientExists = false;
        this.patientObject = null;
        this.patientAge = -1;
        this.patientConditions = [];
        // Toggled by the user depending on whether they want to sync to the EHR their changes right away (as soon as they make them)
        this.autosync = true;
    }
    VariantEntryAndVisualizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addRow();
        // As soon as the smart client is loaded from the SMART JS library, this creates the patient info header and populates the patient variants.
        _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_1__["SMARTClient"].subscribe(function (smartClient) {
            if (smartClient === null) {
                return;
            }
            _this.offerToLinkToEHRInstructions = false;
            // Get all patient information.
            smartClient.patient.read().then(function (p) {
                console.log("Patient read is ", p);
                _this.patientObject = p;
                if (p.birthDate && p.active) {
                    var birthDateValues = p.birthDate.split("-");
                    var timeDiff = Math.abs(Date.now() - new Date(parseInt(birthDateValues[0]), parseInt(birthDateValues[1]), parseInt(birthDateValues[2])).getTime());
                    // Used Math.floor instead of Math.ceil so 26 years and 140 days would be considered as 26, not 27.
                    _this.patientAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                }
                _this.patientExists = true;
            });
            // Get all genomic variants attached to this patient.
            smartClient.patient.api.search({ type: "Observation", query: { "category": "genomic-variant" }, count: 10 })
                .then(function (results) {
                console.log("Successfully got variants!", results);
                if (!results.data.entry) {
                    return;
                }
                if (results.data.entry.length > 0) {
                    _this.removeRow(0); // Start at the first index if we find other variants.
                }
                // For every variant.
                var resultIndex = 0;
                var _loop_1 = function (result) {
                    console.log("Will now add " + result.resource.code.text);
                    _this.selectorService.search(result.resource.code.text).subscribe(function (variants) {
                        if (variants.length === 0) {
                            console.log("NOT GOOD: Couldn't find any search results for " + result.resource.code.text);
                            return;
                        }
                        // Add the first search result to the list (the one with the correct HGVS ID).
                        console.log("Adding", variants[0]);
                        _this.selectorService.getByReference(variants[0])
                            .subscribe(function (variant) {
                            var newWrapper = new VariantWrapper(resultIndex, variant);
                            if (_this.variants.length === resultIndex) {
                                _this.variants.push(newWrapper);
                            }
                            else {
                                _this.variants[resultIndex] = newWrapper;
                            }
                            resultIndex++;
                        });
                    });
                };
                for (var _i = 0, _a = results.data.entry; _i < _a.length; _i++) {
                    var result = _a[_i];
                    _loop_1(result);
                }
            })
                .fail(function (err) {
                console.log("Couldn't query genomic variants error!", err);
            });
            smartClient.patient.api.search({ type: "Condition" })
                .then(function (results) {
                console.log("Got patient conditions:", results);
                if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(results.data.entry) && results.data.entry.length > 0) {
                    for (var _i = 0, _a = results.data.entry; _i < _a.length; _i++) {
                        var entry = _a[_i];
                        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(entry.resource)) {
                            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(entry.resource.code)) {
                                if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(entry.resource.code.text)) {
                                    _this.patientConditions.push(entry.resource.code.text);
                                    console.log("Added " + entry.resource.code.text);
                                }
                            }
                        }
                    }
                }
            })
                .fail(function (err) {
                console.log("The query for patient conditions failed!", err);
            });
        });
    };
    // Row management.
    VariantEntryAndVisualizationComponent.prototype.addRow = function () {
        this.variants.push(new VariantWrapper(this.variants.length, null));
    };
    VariantEntryAndVisualizationComponent.prototype.addRowMaybe = function (indexInQuestion) {
        if (this.variants.length === indexInQuestion + 1) {
            this.addRow();
        }
        this.userInteractionPoints++;
    };
    VariantEntryAndVisualizationComponent.prototype.removeRow = function (index) {
        var variantToRemove = this.variants[index].variant;
        this.variants.splice(index, 1);
        for (var i = 0; i < this.variants.length; i++) {
            this.variants[i].index = i;
        }
        this.removeEHRVariant(variantToRemove);
        this.userInteractionPoints++;
    };
    VariantEntryAndVisualizationComponent.prototype.routeToInstructions = function () {
        this.router.navigate(["ehr-link"]);
    };
    VariantEntryAndVisualizationComponent.prototype.onToggleAutosync = function (newVal) {
        this.autosync = newVal;
        if (this.autosync) {
            for (var _i = 0, _a = this.variants; _i < _a.length; _i++) {
                var variant = _a[_i];
                if (!variant.saved) {
                    this.saveEHRVariant(variant);
                }
            }
        }
    };
    VariantEntryAndVisualizationComponent.prototype.openFeedbackForm = function () {
        this.modalService.open(_feedback_form_feedback_form_modal_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackFormModalComponent"], { size: "lg" });
        this.askForReview = false;
    };
    // Remove and save EHR variants.
    VariantEntryAndVisualizationComponent.prototype.saveEHRVariant = function (variant) {
        if (!this.autosync) {
            return;
        }
        _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_1__["SMARTClient"].subscribe(function (smartClient) {
            if (smartClient === null) {
                return;
            }
            smartClient.patient.read().then(function (p) {
                var dataToTransmit = {
                    "resource": {
                        "resourceType": "Observation",
                        "id": "SMART-Observation-" + p.identifier[0].value + "-variation-" + variant.variant.hgvsID.replace(/[.,\/#!$%\^&\*;:{}<>=\-_`~()]/g, ""),
                        "meta": {
                            "versionId": "1" // ,
                            // "lastUpdated": Date.now().toString()
                        },
                        "text": {
                            "status": "generated",
                            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Variation at " + variant.variant.getLocation() + "</div>"
                        },
                        "status": "final",
                        "extension": [
                            {
                                "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "http://www.genenames.org",
                                            "code": "12014",
                                            "display": "TPMT"
                                        }
                                    ]
                                }
                            }
                        ],
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/observation-category",
                                        "code": "genomic-variant",
                                        "display": "Genomic Variant"
                                    }
                                ],
                                "text": "Genomic Variant"
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://www.hgvs.org",
                                    "code": variant.variant.hgvsID,
                                    "display": variant.variant.hgvsID
                                }
                            ],
                            "text": variant.variant.hgvsID
                        },
                        "subject": {
                            "reference": "Patient/" + p.id
                        },
                    }
                };
                console.log("Adding variant with", dataToTransmit);
                smartClient.api.update(dataToTransmit)
                    .then(function (result) {
                    console.log("Added EHR variant successfully!", result);
                    variant.saved = true;
                })
                    .fail(function (err) {
                    console.log("Failed to add EHR variant", err);
                });
            });
        });
    };
    VariantEntryAndVisualizationComponent.prototype.removeEHRVariant = function (variant) {
        if (!this.autosync)
            return;
        _smart_initialization_smart_reference_service__WEBPACK_IMPORTED_MODULE_1__["SMARTClient"].subscribe(function (smartClient) {
            // We can't do anything without a smartClient!
            if (smartClient === null)
                return;
            smartClient.patient.read().then(function (p) {
                var dataToTransmit = {
                    "resource": {
                        "resourceType": "Observation",
                        "id": "SMART-Observation-" + p.identifier[0].value + "-variation-" + variant.hgvsID.replace(/[.,\/#!$%\^&\*;:{}<>=\-_`~()]/g, ""),
                        "meta": {
                            "versionId": "1" // ,
                            // "lastUpdated": Date.now().toString()
                        },
                        "text": {
                            "status": "generated",
                            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Variation at " + variant.getLocation() + "</div>"
                        },
                        "status": "final",
                        "extension": [
                            {
                                "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
                                "valueCodeableConcept": {
                                    "coding": [
                                        {
                                            "system": "http://www.genenames.org",
                                            "code": "12014",
                                            "display": "TPMT"
                                        }
                                    ]
                                }
                            }
                        ],
                        "category": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/observation-category",
                                        "code": "genomic-variant",
                                        "display": "Genomic Variant"
                                    }
                                ],
                                "text": "Genomic Variant"
                            }
                        ],
                        "code": {
                            "coding": [
                                {
                                    "system": "http://www.hgvs.org",
                                    "code": variant.hgvsID,
                                    "display": variant.hgvsID
                                }
                            ],
                            "text": variant.hgvsID
                        },
                        "subject": {
                            "reference": "Patient/" + p.id
                        },
                    }
                };
                console.log("Removing variant with", dataToTransmit);
                smartClient.api.delete(dataToTransmit)
                    .then(function (result) {
                    console.log("Removed EHR variant successfully!", result);
                })
                    .fail(function (err) {
                    console.log("Failed to remove EHR variant", err);
                });
            });
        });
    };
    VariantEntryAndVisualizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "variant-entry-and-visualization",
            template: "\n    <div id=\"patientLinkState\">\n      <!-- If an EHR link is NOT detected -->\n      <div id=\"suggestEHRLink\" *ngIf=\"offerToLinkToEHRInstructions\">\n        <div id=\"suggestions\">\n          <img src=\"/assets/entry-and-visualization/info-icon.png\">\n          <p class=\"thinFont1\">You don't seem to be connected to an EHR! <a href=\"javascript:void(0)\" (click)=\"routeToInstructions()\">Learn how here.</a></p>\n        </div>\n        <button class=\"btn btn-danger\" (click)=\"offerToLinkToEHRInstructions = false\">X</button>\n      </div>\n\n      <!-- If an EHR link is detected -->\n      <div id=\"patientInfo\" *ngIf=\"patientExists\" [style.background-color]=\"patientObject['gender'] === 'male' ? '#27384f' : '#ff45f7'\">\n        <img [src]=\"patientObject['gender'] === 'male' ? '/assets/entry-and-visualization/male-icon.png' : '/assets/entry-and-visualization/female-icon.png'\">\n\n        <!-- Patient Details -->\n        <p style=\"color: white\">\n          <b>Name: </b> {{patientObject['name'][0].given[0]}} {{patientObject['name'][0].family}} | \n          <b>{{patientObject['active'] ? 'Lives in' : 'Lived in'}}:</b> {{patientObject['address'][0].country}} | <b>Age:</b> {{patientAge}} | \n          <b>Condition:</b> \n          <select style=\"font-size: 15px;\">\n            <option *ngFor=\"let condition of patientConditions\">{{condition}}</option>\n          </select>\n        </p>\n\n        <div id=\"autosyncToggle\">\n          <div>\n            <ui-switch [ngModel]=\"autosync\" (ngModelChange)=\"onToggleAutosync($event)\"></ui-switch>\n            <p class=\"thinFont1\" style=\"color: white\">Auto-Sync</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"variantVisualizations\">\n      <div class=\"variantWrapper\" *ngFor=\"let variant of variants; let i = index\">\n        <div class=\"variantSelector\">\n          <div [style.width]=\"i === variants.length - 1 ? '100%' : 'calc(100% - 38px)'\">\n            <variant-selector [ngModel]=\"variant.variant\"\n                              (ngModelChange)=\"variant.variant = $event; addRowMaybe(i); saveEHRVariant(variant);\"></variant-selector>\n          </div>\n          <button class=\"removeRowButton btn btn-danger\" (click)=\"removeRow(i)\" *ngIf=\"i !== variants.length - 1\">X\n          </button>\n        </div>\n        <div>\n          <div class=\"visualizationContent\" [@drawerAnimation]=\"variant.drawerState\">\n            <variant-visualization [(ngModel)]=\"variant.variant\"></variant-visualization>\n          </div>\n          <div *ngIf=\"variant.variant !== undefined && variant.variant !== null\" class=\"informationToggle\"\n               (click)=\"variant.toggleDrawer()\">\n            <img src=\"/assets/entry-and-visualization/dropdown.svg\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Review form question -->\n    <div id=\"askForReviewDiv\" *ngIf=\"userInteractionPoints >= 3 && askForReview\">\n      <a href=\"javascript:void(0)\" (click)=\"openFeedbackForm()\">\n        <ngb-alert [type]=\"'primary'\" (close)=\"askForReview = false\">Please review our service!</ngb-alert>\n      </a>\n    </div>\n  ",
            styles: ["\n    p {\n      margin: 0;\n    }\n\n    #patientLinkState {\n      margin-left: 6%;\n      margin-right: 6%;\n    }\n\n    #suggestEHRLink {\n      height: 80px;\n      width: 100%;\n\n      background-color: rgb(255, 189, 44);\n      overflow: hidden;\n    }\n\n    #suggestEHRLink > * {\n      float: left;\n    }\n\n    #suggestEHRLink > #suggestions {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: calc(100% - 60px);\n      height: 100%;\n    }\n\n    #suggestEHRLink img {\n      width: 60px;\n      height: 60px;\n      margin: 1% 10px;\n    }\n\n    #suggestEHRLink p {\n      width: calc(96% - 80px);\n      margin: 1%;\n      font-size: 20px;\n      color: black;\n    }\n\n    #suggestEHRLink button {\n      width: 60px;\n      height: 30px;\n      color: white;\n      font-size: 15px;\n      border-radius: 0;\n      padding: 0;\n    }\n\n    #patientLinkState > div {\n      border-bottom-left-radius: 30px;\n      border-bottom-right-radius: 30px;\n    }\n\n    #patientInfo {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      height: 80px;\n      width: 100%;\n\n      overflow: hidden;\n\n      text-align: center;\n    }\n\n    #patientInfo img {\n      width: 60px;\n      height: 60px;\n      margin: 10px;\n    }\n\n    #patientInfo p {\n      width: calc(96% - 280px);\n      margin: 1%;\n      font-size: 20px;\n      color: black;\n    }\n    \n    #autosyncToggle {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      width: 200px;\n      height: 100%;\n    }\n\n    #autosyncToggle > div {\n      width: 100%;\n    }\n\n    #autosyncToggle > div > p {\n      width: 100%;\n    }\n\n    #variantVisualizations {\n      padding: 15px;\n      margin-top: 2%;\n      margin-left: 4%;\n      margin-right: 4%;\n      background-color: white;\n    }\n\n    .variantWrapper {\n      margin-bottom: 5px;\n    }\n\n    .variantSelector {\n      height: 38px;\n    }\n\n    .variantSelector > * {\n      float: left;\n      height: 100%;\n    }\n\n    .removeRowButton {\n      width: 38px;\n      font-size: 20px;\n      color: white;\n      padding: 0;\n    }\n\n    .informationToggle {\n      width: 100%;\n      background-color: #e2e2e2;\n      border-bottom-left-radius: 10px;\n      border-bottom-right-radius: 10px;\n      text-align: center;\n      height: 30px;\n    }\n\n    .visualizationContent {\n      overflow: scroll;\n    }\n\n    .informationToggle:hover {\n      background-color: #b2b2b2;\n    }\n\n    .informationToggle img {\n      height: 10px;\n      width: 10px;\n      margin: 10px;\n    }\n\n    #askForReviewDiv {\n      display: block;\n      position: fixed;\n      bottom: 0;\n      left: 0;\n    }\n  "],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])("drawerAnimation", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])("closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        height: "0"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])("open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        height: "700px"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("closed => open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("400ms ease-in-out")),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("open => closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("400ms ease-in-out"))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_variant_selector_variant_selector_service__WEBPACK_IMPORTED_MODULE_2__["VariantSelectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], VariantEntryAndVisualizationComponent);
    return VariantEntryAndVisualizationComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-selector/variant-selector.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-selector/variant-selector.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SELECTOR_CONTROL_VALUE_ACCESSOR, VariantSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTOR_CONTROL_VALUE_ACCESSOR", function() { return SELECTOR_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantSelectorComponent", function() { return VariantSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _genomic_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../genomic-data */ "./src/app/routes/entry-and-visualization/genomic-data.ts");
/* harmony import */ var _variant_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant-selector.service */ "./src/app/routes/entry-and-visualization/variant-selector/variant-selector.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Data entry is an essential part of the final application that will be built, and it must be built in
 * a way which permits dynamic addition and removal of form elements.  Since Angular makes modularity
 * insanely easy and you can build custom input selectors, this shouldn"t require too much code.
 */




var SELECTOR_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return VariantSelectorComponent; }),
    multi: true
};
var VariantSelectorComponent = /** @class */ (function () {
    function VariantSelectorComponent(selectorService) {
        this.selectorService = selectorService;
        // Placeholders for the callbacks which are later providesd by the Control Value Accessor
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(VariantSelectorComponent.prototype, "currentlySelected", {
        get: function () {
            return this._currentlySelected;
        },
        set: function (v) {
            if (v !== this.currentlySelected) {
                this._currentlySelected = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // From ControlValueAccessor interface
    VariantSelectorComponent.prototype.writeValue = function (value) {
        if (value !== this.currentlySelected) {
            this.currentlySelected = value;
            if (value && value !== null) {
                this.currentReference = new _genomic_data__WEBPACK_IMPORTED_MODULE_1__["VariantReference"](new _genomic_data__WEBPACK_IMPORTED_MODULE_1__["GeneReference"](this.currentlySelected.origin.hugoSymbol, this.currentlySelected.origin.entrezID), this.currentlySelected.variantName, this.currentlySelected.hgvsID);
            }
        }
    };
    VariantSelectorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    VariantSelectorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // Update the EHR item (if possible) and change the variant.
    VariantSelectorComponent.prototype.onNewReferenceSelection = function (reference) {
        var _this = this;
        if (!reference) {
            return;
        }
        console.log("Would get by reference ", reference);
        this.currentReference = reference;
        this.selectorService.getByReference(reference)
            .subscribe(function (resultingVariant) { return _this.currentlySelected = resultingVariant; });
    };
    VariantSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "variant-selector",
            template: "\n    <!-- Gene Variation List -->\n    <div>\n      <filterable-search [searchService]=\"selectorService\" [placeholderString]=\"'Add New Variant'\" [ngModel]=\"currentReference\" (ngModelChange)=\"onNewReferenceSelection($event)\"></filterable-search>\n    </div>\n  ",
            styles: ["\n    div {\n      height: 100%;\n    }\n  "],
            providers: [SELECTOR_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_variant_selector_service__WEBPACK_IMPORTED_MODULE_2__["VariantSelectorService"]])
    ], VariantSelectorComponent);
    return VariantSelectorComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-selector/variant-selector.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-selector/variant-selector.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: VariantSelectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantSelectorService", function() { return VariantSelectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _genomic_data_providers_myvariantinfo_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../genomic-data-providers/myvariantinfo-search.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/myvariantinfo-search.service.ts");
/* harmony import */ var _genomic_data_providers_mygeneinfo_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../genomic-data-providers/mygeneinfo-search.service */ "./src/app/routes/entry-and-visualization/genomic-data-providers/mygeneinfo-search.service.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_forkJoin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Databases.


// RxJS stuff.



var VariantSelectorService = /** @class */ (function () {
    function VariantSelectorService(myvariantinfoSearchService, mygeneinfoSearchService) {
        var _this = this;
        this.myvariantinfoSearchService = myvariantinfoSearchService;
        this.mygeneinfoSearchService = mygeneinfoSearchService;
        // The databases initialized in the constructor.
        this.variantDatabases = [this.myvariantinfoSearchService];
        this.geneDatabases = [this.mygeneinfoSearchService];
        // Merge all variant streams into a single one.
        this.search = function (term) {
            console.log("Search " + term);
            if (term === "") {
                return null;
            }
            // map them into a array of observables and forkJoin
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].forkJoin(_this.variantDatabases
                .map(function (searchService) { return searchService.searchByString(term); })).map(function (variantArrays) {
                var mergedVariants = [];
                var addVariant = function (variant) {
                    for (var arrayIndex = 0; arrayIndex < mergedVariants.length; arrayIndex++) {
                        // Make sure that we are sorting alphabetically.
                        if (mergedVariants[arrayIndex].mergeable(variant)) {
                            mergedVariants[arrayIndex].merge(variant);
                            console.log("Merged " + variant.optionName());
                            return;
                        }
                        else if (mergedVariants[arrayIndex].optionName() > variant.optionName()) {
                            mergedVariants.splice(arrayIndex, 0, variant);
                            return;
                        }
                    }
                    // It must"ve not been pushed if we reach here.
                    mergedVariants.push(variant);
                };
                // Variant merging/placing loop.
                for (var _i = 0, variantArrays_1 = variantArrays; _i < variantArrays_1.length; _i++) {
                    var variantArray = variantArrays_1[_i];
                    for (var _a = 0, variantArray_1 = variantArray; _a < variantArray_1.length; _a++) {
                        var variant = variantArray_1[_a];
                        addVariant(variant);
                    }
                }
                console.log("Got in response to " + term, mergedVariants);
                return mergedVariants;
            });
        };
        // Merge all variant streams into a single one.
        this.getByReference = function (reference) {
            // map them into a array of observables and forkJoin
            console.log("Asked to get variant from ", reference);
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].forkJoin(_this.variantDatabases
                .map(function (searchService) { return searchService.getByReference(reference); })).map(function (variantArray) {
                var mergedVariant = variantArray[0];
                for (var i = 1; i < variantArray.length; i++) {
                    if (mergedVariant.mergeable(variantArray[i])) {
                        mergedVariant.merge(variantArray[i]);
                    }
                }
                console.log("Got ", mergedVariant);
                return mergedVariant;
            }).mergeMap(function (variant) {
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].forkJoin(_this.geneDatabases
                    .map(function (geneService) { return geneService.updateVariantOrigin(variant); })).map(function (updatedVariants) {
                    var mergedVariant = updatedVariants[0];
                    for (var i = 1; i < updatedVariants.length; i++) {
                        if (mergedVariant.mergeable(updatedVariants[i])) {
                            mergedVariant.merge(updatedVariants[i]);
                        }
                    }
                    console.log("Updated origin to ", mergedVariant);
                    return mergedVariant;
                });
            });
        };
    }
    VariantSelectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_genomic_data_providers_myvariantinfo_search_service__WEBPACK_IMPORTED_MODULE_1__["MyVariantInfoSearchService"], _genomic_data_providers_mygeneinfo_search_service__WEBPACK_IMPORTED_MODULE_2__["MyGeneInfoSearchService"]])
    ], VariantSelectorService);
    return VariantSelectorService;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: CLINICAL_TRIALS_CONTROL_VALUE_ACCESSOR, ClinicalTrialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLINICAL_TRIALS_CONTROL_VALUE_ACCESSOR", function() { return CLINICAL_TRIALS_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialsComponent", function() { return ClinicalTrialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clinical_trials_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinical-trials.service */ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/**
 * The best way to learn is through the experiences of others, and accessing the databse of past clinical trials
 * often is the best way to glean such information.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CLINICAL_TRIALS_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ClinicalTrialsComponent; }),
    multi: true
};
var ClinicalTrialsComponent = /** @class */ (function () {
    function ClinicalTrialsComponent(clinicalTrialsService) {
        this.clinicalTrialsService = clinicalTrialsService;
        // Clinical trials references.
        this.clinicalTrials = [];
        // The internal data model (for ngModel)
        this._currentlySelected = null;
        // Placeholders for the callbacks which are later providesd by the Control Value Accessor
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(ClinicalTrialsComponent.prototype, "currentlySelected", {
        get: function () {
            return this._currentlySelected;
        },
        set: function (v) {
            var _this = this;
            if (v !== this.currentlySelected) {
                this._currentlySelected = v;
                this.clinicalTrialsService.searchClinicalTrials(v).subscribe(function (trials) { return _this.clinicalTrials = trials; });
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // From ControlValueAccessor interface
    ClinicalTrialsComponent.prototype.writeValue = function (value) {
        if (value !== this.currentlySelected) {
            this.currentlySelected = value;
        }
    };
    ClinicalTrialsComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    ClinicalTrialsComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // Currently only logs to console.
    ClinicalTrialsComponent.prototype.getDataFor = function (reference) {
        this.clinicalTrialsService.getDetailsFor(reference).subscribe(function (details) { return console.log(details); });
    };
    ClinicalTrialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "clinical-trials",
            template: "    \n    <table class=\"table table-hover table-bordered\">\n      <thead>\n      <tr>\n        <th>Clinical Trial ID</th>\n        <th>Phase</th>\n        <th>Brief Title</th>\n        <th>Drugs</th>\n        <th>Principal Investigator</th>\n      </tr>\n      </thead>\n      <tbody>\n      <ng-container *ngIf=\"clinicalTrials.length >= 0\" >\n        <tr *ngFor=\"let clinicalTrial of clinicalTrials\" class=\"variantRow\" (click)=\"getDataFor(clinicalTrial)\">\n          <td>{{clinicalTrial.nci_id}}</td>\n          <td>{{clinicalTrial.phase}}</td>\n          <td>{{clinicalTrial.brief_title}}</td>\n          <td>{{clinicalTrial.drugsToString()}}</td>\n          <td>{{clinicalTrial.principal_investigator}}</td>\n        </tr>\n      </ng-container>\n      <ng-container *ngIf=\"clinicalTrials.length === 0\" >\n        <tr>\n          <td>Loading...</td>\n        </tr>\n      </ng-container>\n      </tbody>\n    </table>\n  ",
            styles: [""],
            providers: [CLINICAL_TRIALS_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_clinical_trials_service__WEBPACK_IMPORTED_MODULE_1__["ClinicalTrialsService"]])
    ], ClinicalTrialsComponent);
    return ClinicalTrialsComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.service.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.service.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ClinicalTrialsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialsService", function() { return ClinicalTrialsService; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clinical_trials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clinical-trials */ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.ts");
/* harmony import */ var _drugs_drug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drugs/drug */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug.ts");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Based on the Angular and RxJS documentation, this is the best way to deal with sequential HTTP requests (those
 * that have results which vary based on the results to prior queries).
 */

/**
 * Both searches for and provides data for different clinical trials.
 */
var ClinicalTrialsService = /** @class */ (function () {
    function ClinicalTrialsService(http) {
        var _this = this;
        this.http = http;
        // Reduces typing involved :P
        this.queryEndpoint = "https://clinicaltrialsapi.cancer.gov/v1/clinical-trials?";
        /**
         * What I"m trying to do for this method is obtain some examples of clinical trials being carried out on the
         * variants (also gene, but preferably variants) that the user filled out.  We get a max of 10 clinical trials
         * for each gene/variant combo.  The priority trials go to the variant (we query based on name, then HGVS ID),
         * and then finally we query for trials that involved this gene if that doesn"t work out.
         */
        this.searchClinicalTrials = function (variant) {
            // Gets a list of clinical trial references from the single JSON object.
            var clinicalTrialJSONtoReferences = function (jsonObject) {
                var references = [];
                for (var _i = 0, _a = jsonObject["trials"]; _i < _a.length; _i++) {
                    var trial = _a[_i];
                    var drugsArray = [];
                    for (var _b = 0, _c = trial.arms[0].interventions; _b < _c.length; _b++) {
                        var intervention = _c[_b];
                        if (intervention.intervention_type === "Drug") {
                            var newDrug = new _drugs_drug__WEBPACK_IMPORTED_MODULE_4__["DrugReference"](intervention.intervention_name);
                            drugsArray.push(newDrug);
                        }
                    }
                    references.push(new _clinical_trials__WEBPACK_IMPORTED_MODULE_3__["ClinicalTrialReference"](trial.nci_id, trial.phase.phase, trial.brief_title, drugsArray, trial.principal_investigator));
                }
                return references;
            };
            // Requirements before constructing queries.
            var desiredTrials = 10;
            var includes = ["brief_title", "nci_id", "principal_investigator", "phase.phase", "arms"];
            // Determine includes.
            var includeString = "";
            for (var _i = 0, includes_1 = includes; _i < includes_1.length; _i++) {
                var include = includes_1[_i];
                includeString = includeString + "&include=" + include;
            }
            // 1. Query for variant name in the clinical trials database.
            return _this.http
                .get(_this.queryEndpoint + "size=" + desiredTrials + "&_fulltext=" + encodeURIComponent(variant.variantName) + includeString)
                .mergeMap(function (result1) {
                console.log("1. Got name query results:", result1);
                var result1References = clinicalTrialJSONtoReferences(result1);
                // If we don"t have the max number of trials already.
                if (result1References.length < desiredTrials) {
                    // 2. Query for the variant HGVS ID in the clinical trials database.
                    return _this.http
                        .get(_this.queryEndpoint + "size=" + (desiredTrials - result1References.length) + "&_fulltext=" + variant.hgvsID + includeString)
                        .map(function (result2) {
                        console.log("2. Got HGVS query results:", result2);
                        var referenceArray2 = result1References;
                        // For every HGVS clinical trial reference.
                        for (var _i = 0, _a = clinicalTrialJSONtoReferences(result2); _i < _a.length; _i++) {
                            var result2Reference = _a[_i];
                            var existsInArray = false;
                            for (var _b = 0, referenceArray2_1 = referenceArray2; _b < referenceArray2_1.length; _b++) {
                                var currentReference = referenceArray2_1[_b];
                                if (result2Reference.brief_title === currentReference.brief_title) {
                                    existsInArray = true;
                                    break; // This reference must already be part of the array.
                                }
                            }
                            // Add it to the array if it doesn"t already exist.
                            if (!existsInArray) {
                                referenceArray2.push(result2Reference);
                            }
                        }
                        return referenceArray2;
                    });
                }
                else {
                    console.log("Returning result 1 references since long enough");
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].of(result1References);
                }
            })
                .mergeMap(function (result2References) {
                if (result2References.length < desiredTrials) {
                    // 2. Query for the variant HGVS ID in the clinical trials database.
                    return _this.http
                        .get(_this.queryEndpoint + "size=" + (desiredTrials - result2References.length) + "&_fulltext=" + variant.origin.hugoSymbol + includeString)
                        .map(function (result3) {
                        console.log("3. Got HUGO query results:", result3);
                        var referenceArray3 = result2References;
                        var result3References = clinicalTrialJSONtoReferences(result3);
                        // For every HGVS clinical trial reference.
                        for (var _i = 0, result3References_1 = result3References; _i < result3References_1.length; _i++) {
                            var result3Reference = result3References_1[_i];
                            var existsInArray = false;
                            for (var _a = 0, referenceArray3_1 = referenceArray3; _a < referenceArray3_1.length; _a++) {
                                var currentReference = referenceArray3_1[_a];
                                if (result3Reference.brief_title === currentReference.brief_title) {
                                    existsInArray = true;
                                    break; // This reference must already be part of the array.
                                }
                            }
                            // Add it to the array if it doesn"t already exist.
                            if (!existsInArray) {
                                referenceArray3.push(result3Reference);
                            }
                        }
                        return referenceArray3;
                    });
                }
                else {
                    console.log("Returning result 2 references since long enough");
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].of(result2References);
                }
            });
        };
        this.getDetailsFor = function (clinicalTrialReference) {
            return _this.http.get(_this.queryEndpoint + "size=1&include=official_title&include=brief_summary&nci_id=" + clinicalTrialReference.nci_id)
                .map(function (response) {
                return new _clinical_trials__WEBPACK_IMPORTED_MODULE_3__["ClinicalTrial"](clinicalTrialReference, response["trials"][0].official_title, response["trials"][0].brief_summary);
            });
        };
    }
    ClinicalTrialsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClinicalTrialsService);
    return ClinicalTrialsService;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/clinical-trials/clinical-trials.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ClinicalTrialReference, ClinicalTrial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrialReference", function() { return ClinicalTrialReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTrial", function() { return ClinicalTrial; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClinicalTrialReference = /** @class */ (function () {
    function ClinicalTrialReference(_nci_id, _phase, _brief_title, _drugs, _principal_investigator) {
        var _this = this;
        this.drugsToString = function () {
            if (!_this.drugs || _this.drugs.length === 0) {
                return "";
            }
            var drugsString = _this.drugs[0].name;
            for (var i = 1; i < _this.drugs.length; i++) {
                if (i < _this.drugs.length - 1) {
                    drugsString = drugsString + ", " + _this.drugs[i].name;
                }
                else {
                    drugsString = drugsString + ", and " + _this.drugs[i].name;
                }
            }
            return drugsString;
        };
        this.nci_id = _nci_id;
        this.phase = _phase;
        this.brief_title = _brief_title;
        this.drugs = _drugs;
        this.principal_investigator = _principal_investigator;
    }
    return ClinicalTrialReference;
}());

/**
 * The extension of a clinical trial reference which provides access to more data about a given trial.
 */
var ClinicalTrial = /** @class */ (function (_super) {
    __extends(ClinicalTrial, _super);
    function ClinicalTrial(clinicalTrialReference, _official_title, _brief_summary) {
        var _this = _super.call(this, clinicalTrialReference.nci_id, clinicalTrialReference.phase, clinicalTrialReference.brief_title, clinicalTrialReference.drugs, clinicalTrialReference.principal_investigator) || this;
        _this.official_title = _official_title;
        _this.brief_summary = _brief_summary;
        return _this;
    }
    return ClinicalTrial;
}(ClinicalTrialReference));



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug-details-modal.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug-details-modal.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: DrugDetailsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugDetailsModalComponent", function() { return DrugDetailsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drug */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug.ts");
/* harmony import */ var _drugs_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drugs-search.service */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drugs-search.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/**
 * A part of the result visualization component, which displays the drugs that will be effective against genes
 * or variants.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrugDetailsModalComponent = /** @class */ (function () {
    function DrugDetailsModalComponent(drugSearchService, activeModal) {
        this.drugSearchService = drugSearchService;
        this.activeModal = activeModal;
    }
    DrugDetailsModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.drugReference) {
            return;
        }
        this.drugSearchService.searchByReference(this.drugReference).subscribe(function (drug) {
            console.log("Got drug from reference", drug);
            _this.drugModel = drug;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _drug__WEBPACK_IMPORTED_MODULE_1__["DrugReference"])
    ], DrugDetailsModalComponent.prototype, "drugReference", void 0);
    DrugDetailsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "drugs-modal",
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{drugReference.name}} details</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <!-- A bit of info about the drug -->\n      <table class=\"table table-bordered table-striped\" *ngIf=\"drugModel !== undefined\">\n        <thead>\n        </thead>\n        <tbody>\n        <tr *ngIf=\"drugModel.description !== undefined\">\n          <td>Description</td>\n          <td>{{drugModel.description}}</td>\n        </tr>\n        <ng-container *ngIf=\"drugModel.interactions !== undefined && drugModel.interactions.length > 0\">\n          <tr>\n            <td style=\"font-weight: bold;\">Gene</td>\n            <td style=\"font-weight: bold;\">Interaction Types</td>\n          </tr>\n          <tr *ngFor=\"let interaction of drugModel.interactions\">\n            <td>{{interaction.geneTarget.hugoSymbol}}</td>\n            <td>\n              <table class=\"table table-bordered\"\n                     *ngIf=\"interaction.interactionTypes !== undefined && interaction.interactionTypes.length > 0\">\n                <thead>\n                <td>Interaction Type</td>\n                <td>Sources</td>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let interactionType of interaction.interactionTypes\">\n                  <td style=\"width: 20%\">{{interactionType.name}}</td>\n                  <td style=\"width: 80%\" *ngIf=\"interactionType.sources !== undefined\">\n                    {{interactionType.sources.join(', ')}}\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr>\n        </ng-container>\n        </tbody>\n      </table>\n    </div>\n  ",
            styles: ["\n  "]
        }),
        __metadata("design:paramtypes", [_drugs_search_service__WEBPACK_IMPORTED_MODULE_2__["DrugsSearchService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]])
    ], DrugDetailsModalComponent);
    return DrugDetailsModalComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug.ts":
/*!************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug.ts ***!
  \************************************************************************************/
/*! exports provided: DrugReference, InteractionType, GeneInteraction, Drug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugReference", function() { return DrugReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionType", function() { return InteractionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneInteraction", function() { return GeneInteraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drug", function() { return Drug; });
/* harmony import */ var _data_merging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-merging */ "./src/app/routes/entry-and-visualization/data-merging.ts");
/**
 * One of the primary things that clinicians will need to see are the drugs which are most likely to be effective
 * against different genes and variants.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DrugReference = /** @class */ (function () {
    function DrugReference(_name) {
        var _this = this;
        this.brief_name = function () {
            return (_this.name.indexOf(" ") >= 0 ? _this.name.substring(0, _this.name.indexOf(" ")) : _this.name);
        };
        this.name = _name;
    }
    return DrugReference;
}());

var InteractionType = /** @class */ (function () {
    function InteractionType(_name, _sources) {
        this.name = _name;
        this.sources = _sources;
    }
    return InteractionType;
}());

var GeneInteraction = /** @class */ (function () {
    function GeneInteraction(_geneTarget, _sourceClassifications) {
        this.geneTarget = _geneTarget;
        this.interactionTypes = _sourceClassifications;
    }
    return GeneInteraction;
}());

var Drug = /** @class */ (function (_super) {
    __extends(Drug, _super);
    function Drug(_name) {
        var _this = _super.call(this, _name) || this;
        _this.mergeable = function (other) {
            return _this.name === other.name;
        };
        // Merges another gene into this gene (overwriting properties if the property of one is undefined).
        _this.merge = function (other) {
            _this.description = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.description, other.description);
            _this.interactions = Object(_data_merging__WEBPACK_IMPORTED_MODULE_0__["MergeProperties"])(_this.interactions, other.interactions);
        };
        return _this;
    }
    return Drug;
}(DrugReference));



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drugs-search.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/drugs/drugs-search.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: DrugsSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugsSearchService", function() { return DrugsSearchService; });
/* harmony import */ var _drug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drug */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _genomic_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../genomic-data */ "./src/app/routes/entry-and-visualization/genomic-data.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * This service, like the data entry service, queries for and merges duplicate drugs for given genes.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrugsSearchService = /** @class */ (function () {
    function DrugsSearchService(http) {
        this.http = http;
    }
    DrugsSearchService.prototype.searchByReference = function (reference) {
        return this.http.get("https://dgidb.genome.wustl.edu/api/v1/interactions.json?drugs=" + (reference.name.indexOf(" ") >= 0 ? reference.name.substring(0, reference.name.indexOf(" ")) : reference.name))
            .map(function (result) {
            var newDrug = new _drug__WEBPACK_IMPORTED_MODULE_0__["Drug"](reference.name);
            if (!(result["matchedTerms"] && result["matchedTerms"].length >= 0 && result["matchedTerms"][0].interactions)) {
                return;
            }
            newDrug.interactions = [];
            var addInteractionType = function (interaction, interactionTypeName, sourceName) {
                for (var _i = 0, _a = interaction.interactionTypes; _i < _a.length; _i++) {
                    var interactionType = _a[_i];
                    if (interactionType.name === interactionTypeName) {
                        interactionType.sources.push(sourceName);
                        return;
                    }
                }
                // Add new interaction type if source not found.
                interaction.interactionTypes.push(new _drug__WEBPACK_IMPORTED_MODULE_0__["InteractionType"](interactionTypeName, [sourceName]));
            };
            var addInteraction = function (interactionData) {
                var currentGeneTarget = interactionData.geneName;
                var currentInteractionType = interactionData.interactionType;
                var currentSource = interactionData.source;
                for (var _i = 0, _a = newDrug.interactions; _i < _a.length; _i++) {
                    var interaction = _a[_i];
                    if (interaction.geneTarget.hugoSymbol === currentGeneTarget) {
                        console.log("Found mergeable");
                        addInteractionType(interaction, currentInteractionType, currentSource);
                        return;
                    }
                }
                newDrug.interactions.push(new _drug__WEBPACK_IMPORTED_MODULE_0__["GeneInteraction"](new _genomic_data__WEBPACK_IMPORTED_MODULE_2__["Gene"](currentGeneTarget), [new _drug__WEBPACK_IMPORTED_MODULE_0__["InteractionType"](currentInteractionType, [currentSource])]));
            };
            console.log("Interaction JSON is ", result["matchedTerms"][0].interactions);
            for (var _i = 0, _a = result["matchedTerms"][0].interactions; _i < _a.length; _i++) {
                var jsonInteraction = _a[_i];
                addInteraction(jsonInteraction);
            }
            return newDrug;
        });
    };
    DrugsSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DrugsSearchService);
    return DrugsSearchService;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/gene/gene-information.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/gene/gene-information.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: GeneInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneInformationComponent", function() { return GeneInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _genomic_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../genomic-data */ "./src/app/routes/entry-and-visualization/genomic-data.ts");
/**
 * Visualizing the data for the gene: a tab on the result visualization.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneInformationComponent = /** @class */ (function () {
    function GeneInformationComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _genomic_data__WEBPACK_IMPORTED_MODULE_1__["Gene"])
    ], GeneInformationComponent.prototype, "gene", void 0);
    GeneInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gene-information",
            template: "\n    <ng-container *ngIf=\"gene !== undefined\">\n      <br>\n      <h3 class=\"display-3\">\n        {{gene.hugoSymbol}}\n        <small class=\"text-muted\">{{gene.name}}</small>\n      </h3>\n\n      <div style=\"width: 70%; float: left;\">\n        <div class=\"card\">\n          <!--<img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">-->\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">Gene Description</h4>\n            <p class=\"card-text\">{{gene.description}}</p>\n          </div>\n        </div>\n\n        <div class=\"card\">\n          <div class=\"card-block\" *ngIf=\"gene.pathways !== undefined && gene.pathways.length > 0\">\n            <h4 class=\"card-title\">Gene Pathways</h4>\n            <p class=\"card-text\">{{gene.pathwaysString()}}</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card\" style=\"width: 30%; float: left;\">\n        <!--<img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">-->\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">Gene Details</h4>\n          <!-- A bit of info about the variant/gene -->\n          <table class=\"table table-bordered\">\n            <thead>\n            </thead>\n            <tbody>\n            <tr *ngIf=\"gene.entrezID !== undefined\">\n              <td>Entrez ID</td>\n              <td>{{gene.entrezID}}</td>\n            </tr>\n            <tr *ngIf=\"gene.type !== undefined\">\n              <td>Type</td>\n              <td>{{gene.type}}</td>\n            </tr>\n            <tr *ngIf=\"gene.aliases !== undefined && gene.aliases.length > 0\">\n              <td>Aliases</td>\n              <td>{{gene.aliases.join(\", \")}}</td>\n            </tr>\n            <tr *ngIf=\"gene.chromosome !== undefined\">\n              <td>Chromosome</td>\n              <td>{{gene.chromosome}}</td>\n            </tr>\n            <tr *ngIf=\"gene.strand !== undefined\">\n              <td>Strand</td>\n              <td>{{gene.strand}}</td>\n            </tr>\n            <tr *ngIf=\"gene.start !== undefined && gene.end !== undefined\">\n              <td>Nucleotides</td>\n              <td>{{gene.start}} to {{gene.end}}</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </ng-container>\n  ",
            styles: ["\n    small {\n      font-size: 25px;\n    }\n    \n    .card {\n      padding: 10px;\n    }\n  "]
        })
    ], GeneInformationComponent);
    return GeneInformationComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/variant-visualization.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/variant-visualization.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: VISUALIZATION_CONTROL_VALUE_ACCESSOR, VariantVisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISUALIZATION_CONTROL_VALUE_ACCESSOR", function() { return VISUALIZATION_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantVisualizationComponent", function() { return VariantVisualizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/**
 * Wrapper class of tabs for a bunch of post- data-entry components (Clinical Trials, etc.)
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var VISUALIZATION_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return VariantVisualizationComponent; }),
    multi: true
};
var VariantVisualizationComponent = /** @class */ (function () {
    function VariantVisualizationComponent() {
        // The internal data model (for ngModel)
        this._currentlySelected = null;
        // Placeholders for the callbacks which are later providesd by the Control Value Accessor
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(VariantVisualizationComponent.prototype, "currentlySelected", {
        get: function () {
            return this._currentlySelected;
        },
        set: function (v) {
            if (v !== this.currentlySelected) {
                this._currentlySelected = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // From ControlValueAccessor interface
    VariantVisualizationComponent.prototype.writeValue = function (value) {
        if (value !== this.currentlySelected) {
            this.currentlySelected = value;
        }
    };
    VariantVisualizationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    VariantVisualizationComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    VariantVisualizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "variant-visualization",
            template: "\n    <!-- Tabs to view the variant's info.  -->\n    <ngb-tabset [destroyOnHide]=\"false\" *ngIf=\"currentlySelected !== undefined && currentlySelected !== null\">\n      <ngb-tab title=\"Gene\">\n        <ng-template ngbTabContent>\n          <gene-information [gene]=\"currentlySelected.origin\"></gene-information>\n        </ng-template>\n      </ngb-tab>\n\n      <ngb-tab title=\"Variant\">\n        <ng-template ngbTabContent>\n          <variant-information [variant]=\"currentlySelected\"></variant-information>\n        </ng-template>\n      </ngb-tab>\n\n      <ngb-tab title=\"Clinical Trials\">\n        <ng-template ngbTabContent>\n          <clinical-trials [(ngModel)]=\"currentlySelected\"></clinical-trials>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  ",
            styles: ["    \n  "],
            providers: [VISUALIZATION_CONTROL_VALUE_ACCESSOR]
        })
    ], VariantVisualizationComponent);
    return VariantVisualizationComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/variant/classifications-modal.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/variant/classifications-modal.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ClassificationsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificationsModalComponent", function() { return ClassificationsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _genomic_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../genomic-data */ "./src/app/routes/entry-and-visualization/genomic-data.ts");
/**
 * A part of the result visualization component, which displays the drugs that will be effective against genes
 * or variants.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassificationsModalComponent = /** @class */ (function () {
    function ClassificationsModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _genomic_data__WEBPACK_IMPORTED_MODULE_2__["Variant"])
    ], ClassificationsModalComponent.prototype, "variant", void 0);
    ClassificationsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "classifications-modal",
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{variant.optionName()}} classifictions</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <!-- A bit of info about the drug -->\n      <table class=\"table table-bordered table-striped\" *ngIf=\"variant !== undefined\">\n        <thead>\n        </thead>\n        <tbody>\n        <ng-container *ngIf=\"variant.classifications !== undefined && variant.classifications.length > 0\">\n          <tr>\n            <td style=\"font-weight: bold;\">Classification</td>\n            <td style=\"font-weight: bold;\">Sources</td>\n          </tr>\n          <tr *ngFor=\"let classification of variant.classifications\">\n            <td>{{classification.name}}</td>\n            <td *ngIf=\"classification.sources !== undefined && classification.sources.length > 0\">\n              {{classification.sources.join(', ')}}\n            </td>\n          </tr>\n        </ng-container>\n        </tbody>\n      </table>\n      <br>\n    </div>\n  ",
            styles: ["\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ClassificationsModalComponent);
    return ClassificationsModalComponent;
}());



/***/ }),

/***/ "./src/app/routes/entry-and-visualization/variant-visualization/variant/variant-information.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/routes/entry-and-visualization/variant-visualization/variant/variant-information.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: VariantInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantInformationComponent", function() { return VariantInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _drugs_drug_details_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drugs/drug-details-modal.component */ "./src/app/routes/entry-and-visualization/variant-visualization/drugs/drug-details-modal.component.ts");
/* harmony import */ var _classifications_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classifications-modal.component */ "./src/app/routes/entry-and-visualization/variant-visualization/variant/classifications-modal.component.ts");
/**
 * Visualizing the data for the variant: a tab on the results display.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VariantInformationComponent = /** @class */ (function () {
    function VariantInformationComponent(modalService) {
        this.modalService = modalService;
    }
    VariantInformationComponent.prototype.viewDrugDetails = function (reference) {
        var modalRef = this.modalService.open(_drugs_drug_details_modal_component__WEBPACK_IMPORTED_MODULE_2__["DrugDetailsModalComponent"], { size: "lg" });
        modalRef.componentInstance.drugReference = reference;
    };
    VariantInformationComponent.prototype.viewClassifications = function () {
        var modalRef = this.modalService.open(_classifications_modal_component__WEBPACK_IMPORTED_MODULE_3__["ClassificationsModalComponent"], { size: "lg" });
        modalRef.componentInstance.variant = this.variant;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VariantInformationComponent.prototype, "variant", void 0);
    VariantInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "variant-information",
            template: "\n    <ng-container *ngIf=\"variant\">\n      <br>\n      <h3 class=\"display-3\">{{variant.variantName}}</h3>\n  \n      <!-- A bit of info about the variant/gene -->\n      <table class=\"table table-bordered table-striped\">\n        <thead>\n        </thead>\n        <tbody>\n        <tr *ngIf=\"variant.description && variant.description !== ''\">\n          <td>Description</td>\n          <td>{{variant.description}}</td>\n        </tr>\n        <tr>\n          <td>Functional Prediction</td>\n          <td>\n            {{variant.score}} <span (click)=\"viewClassifications()\" class=\"badge badge-{{variant.getClassification().toLowerCase().indexOf('pathogenic') >= 0 ? 'danger' : 'info'}}\">{{variant.getClassification()}}</span>\n          </td>\n        </tr>\n        <tr>\n          <td>Variant Origin</td>\n          <td>{{variant.somatic ? 'Somatic' : 'Germline'}}</td>\n        </tr>\n        <tr *ngIf=\"variant.types && variant.types.length > 0\">\n          <td>Variant Type</td>\n          <td>{{variant.types.join(\", \")}}</td>\n        </tr>\n        <tr *ngIf=\"variant.drugs && variant.drugs.length > 0\">\n          <td>Effective Drugs</td>\n          <td>\n            <button *ngFor=\"let drugReference of variant.drugs\" class=\"btn btn-light\" (click)=\"viewDrugDetails(drugReference)\">{{drugReference.name}}</button>\n          </td>\n        </tr>\n        <tr *ngIf=\"variant.diseases && variant.diseases.length > 0\">\n          <td>Known Diseases</td>\n          <td>{{variant.diseases.join(\", \")}}</td>\n        </tr>\n        <tr>\n          <td>Variant Location</td>\n          <td>Chromosome {{variant.getLocation()}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </ng-container>\n  ",
            styles: ["\n    .badge {\n      opacity: 1;\n    }\n    \n    .badge:hover {\n      opacity: 0.8;\n    }\n    \n    .badge:active {\n      opacity: 0.6;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], VariantInformationComponent);
    return VariantInformationComponent;
}());



/***/ }),

/***/ "./src/app/routes/feedback-form/feedback-form-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/feedback-form/feedback-form-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: FeedbackFormModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackFormModalComponent", function() { return FeedbackFormModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FeedbackFormModalComponent = /** @class */ (function () {
    function FeedbackFormModalComponent() {
    }
    FeedbackFormModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "feedback-form-modal",
            template: "    \n    <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSfLUXs73346HwTOxRI0G3rcdMBGBMulS4NyH3tj3aSG3MXD_Q/viewform?embedded=true\" width=\"800\" height=\"500\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\n  "
        })
    ], FeedbackFormModalComponent);
    return FeedbackFormModalComponent;
}());



/***/ }),

/***/ "./src/app/routes/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The landing page for the app, which tells the user what the app does, what the purpose of the appis, and why
 */


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(router) {
        this.router = router;
    }
    LandingPageComponent.prototype.navigateToVisualization = function () {
        this.router.navigate(["/app"]);
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "home",
            template: "\n    <div class=\"infoCard\">\n      <div class=\"cardContent\">\n        <div>\n          <h1 class=\"thinFont1\">The Issue</h1>\n          <hr>\n          <p class=\"thinFont1\">\n            In a typical genomic non-SMART Cancer Navigator workflow, oncologists will prescribe a genomic analysis of a patient with a recurrent or metastatic tumor. Next, the genomics laboratory returns an unstructured narrative report relating a set of genes and the variants found in that set. Typically scanned into EHRs as PDF files, these reports persist as irregular unstructured documents of varying lengths. While some reports may be more than 20 pages in length \u2013 including characterizations of variants and gene abnormalities, potential targeted therapies, and relevant clinical trial info \u2013 others may be brief and without much interpretation. Facing a lack of clear actionability, potential biases in the curation of the reports, and outdated information, oncologists typically access and query several knowledge bases to obtain more comprehensive, up-to-date disease-gene-variant information. Therefore, oncologists must reenter patient data every time they wish to query a knowledge base. Inconsistencies among knowledge bases (i.e. differences in querying syntax, GUIs, APIs, etc.) thus lead to inconveniency and inefficiency.</p>\n        </div>\n        <div>\n          <h1 class=\"thinFont1\">SMART Cancer Navigator's Approach</h1>\n          <hr>\n          <p class=\"thinFont1\">The SMART Cancer Navigator app securely links patient-specific data from EHRs and genomics laboratories to multiple knowledge bases for interpretation and validation. Through the built-in feedback functionality, meaningful responses regarding the usability and efficacy of the app are conveyed to the designers.\n          </p>\n        </div>\n      </div>\n      <div class=\"cardImage\" style=\"min-width: 300px;\">\n        <div>\n          <img src=\"/assets/landing-page/app-content.png\">\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .infoCard {\n      margin: 10px 5px;\n      overflow: hidden;\n    }\n\n    .cardContent {\n      float: left;\n      width: 70%;\n    }\n\n    .cardImage {\n      float: left;\n      width: 30%;\n      min-width: 150px;\n      max-width: 100%;\n    }\n\n    .cardImage>div, .cardContent>div {\n      float: left;\n      background-color: white;\n      box-shadow: 1px 3px #d5d5d5;\n      border: 1px solid #d1d1d1;\n      padding: 15px;\n      margin: 7px 3px;\n    }\n    \n    .cardImage img {\n      width: 100%;\n      height: auto;\n    }\n  "],
            animations: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/routes/team/team.component.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/team/team.component.ts ***!
  \***********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
        this.contributors = ["Gil Alterovitz, PhD", "Jeremy Warner, MD, MS", "Makiah Bennett", "Ishaan Prasad", "Monica Arniella", "Alicia Beeghly-Fadiel, PhD"];
        this.emailDisplay = "(Click to reveal)";
    }
    TeamComponent.prototype.updateEmail = function () {
        this.emailDisplay = "ga@alum.mit.edu";
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "team",
            template: "\n    <div style=\"overflow: hidden\">\n      <div class=\"cardContent\" *ngFor=\"let contributor of contributors\" style=\"margin: 5px 8px; width: calc(50% - 16px); min-width: 300px;\">\n        <div style=\"width: 100%;\">\n          <h2 class=\"thinFont1\">{{contributor}}</h2>\n        </div>\n      </div>\n    </div>\n    \n    <hr>\n    \n    <div>\n      <div class=\"cardContent\" style=\"margin: 8px; width: calc(100% - 16px);\">\n        <div style=\"width: 100%;\">\n          <h2 class=\"thinFont1\">Questions?  You can reach us at <a href=\"javascript:void(0)\" (click)=\"updateEmail()\">{{emailDisplay}}</a></h2>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["    \n    .cardContent {\n      float: left;\n    }\n\n    .cardImage {\n      float: left;\n      width: 30%;\n      min-width: 150px;\n      max-width: 100%;\n    }\n\n    .cardImage>div, .cardContent>div {\n      float: left;\n      background-color: white;\n      box-shadow: 1px 3px #d5d5d5;\n      border: 1px solid #d1d1d1;\n      padding: 15px;\n      text-align: center;\n    }\n\n    .cardImage img {\n      width: 100%;\n      height: auto;\n    }\n  "]
        })
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/smart-initialization/smart-launch.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/smart-initialization/smart-launch.component.ts ***!
  \****************************************************************/
/*! exports provided: SMARTLaunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMARTLaunchComponent", function() { return SMARTLaunchComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smart_reference_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smart-reference.service */ "./src/app/smart-initialization/smart-reference.service.ts");
/**
 * Since the SMART on FHIR framework is not built to work with Angular2, this component controls the
 * redirects involved in authentication for fhir-client.js.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Modules required to access URL parameters.



var SMARTLaunchComponent = /** @class */ (function () {
    function SMARTLaunchComponent(router, activatedRoute) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.requiredParametersSupplied = false;
        this.clientID = "";
        this.scopes = "launch patient/*.* openid profile";
        this.authorizeApp = function () {
            _smart_reference_service__WEBPACK_IMPORTED_MODULE_2__["SMARTModule"].oauth2.authorize({
                client_id: _this.clientID,
                scope: _this.scopes,
                redirect_uri: window.location.href.substring(0, window.location.href.lastIndexOf("/")) + "/token-reception"
            });
        };
    }
    SMARTLaunchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params["iss"] && params["launch"]) {
                _this.requiredParametersSupplied = true;
            }
            else {
                _this.requiredParametersSupplied = false;
                setTimeout(function () { _this.router.navigate(["/app"]); }, 3000); // Wait a second before redirecting.
            }
        });
    };
    SMARTLaunchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "smart-launch",
            template: "\n    <div *ngIf=\"requiredParametersSupplied === true\">\n      <h3 class=\"display-3\" style=\"width: 100%; text-align: center;\">Enter Authorization Info</h3>\n      <div class=\"inputPanel\">\n        <label class=\"thinFont1\">Client ID: </label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"clientID\" placeholder=\"Ex: 1e7af332-b27a-4de2-8c51-728ae3ed25c2\">\n      </div>\n      <div class=\"inputPanel\">\n        <label class=\"thinFont1\">Scopes: </label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"scopes\">\n      </div>\n      <br>\n      <button (click)=\"authorizeApp()\" class=\"btn btn-success\" style=\"margin: 20px 5%; width: 90%; height: 60px;\">Authorize</button>\n    </div>\n    \n    <p *ngIf=\"requiredParametersSupplied === false\">ISS and Launch parameters were not supplied!  Redirecting in 3 seconds...</p>\n  ",
            styles: ["\n    div {\n      padding: 10px;\n      overflow: hidden;\n    }\n    \n    div * {\n      float: left;\n    }\n    \n    .inputPanel {\n      width: 100%;\n    }\n    \n    .inputPanel>* {\n      float: left;\n    }\n\n    label {\n      width: 150px;\n      font-size: 25px;\n      margin: 0;\n    }\n    \n    input {\n      width: calc(90% - 152px);\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], SMARTLaunchComponent);
    return SMARTLaunchComponent;
}());



/***/ }),

/***/ "./src/app/smart-initialization/smart-reference.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/smart-initialization/smart-reference.service.ts ***!
  \*****************************************************************/
/*! exports provided: SMARTModule, SMARTClient, SMARTReferenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMARTModule", function() { return SMARTModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMARTClient", function() { return SMARTClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMARTReferenceService", function() { return SMARTReferenceService; });
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/**
 * Since SMART is a JS library, this is a utility class used to make it easier to work with the JS library.
 * By declaring FHIR below, the library is referenced from .angular-cli.json, and functions can be used
 * directly from the library.  In order to get this to work like global variables, I found that the best way
 * would be to use an Observable, a backend framework of Angular known as RxJS.
 * https://stackoverflow.com/questions/36715918/how-to-define-global-variables-in-angular-2-in-a-way-that-i-
 * can-use-them-for-pro
 * https://stackoverflow.com/questions/34714462/updating-variable-changes-in-components-from-a-service-with-angular2
 */

var SMARTModule = FHIR;
// Make sure to use BehaviorSubject over Subject, since it provides the current value of the object on subscribe()
var SMARTClient = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
var SMARTReferenceService = /** @class */ (function () {
    function SMARTReferenceService() {
    }
    SMARTReferenceService.prototype.ready = function () {
        SMARTModule.oauth2.ready(function (smart) {
            SMARTClient.next(smart);
        });
    };
    return SMARTReferenceService;
}());



/***/ }),

/***/ "./src/app/smart-initialization/smart-token-reception.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/smart-initialization/smart-token-reception.component.ts ***!
  \*************************************************************************/
/*! exports provided: SMARTTokenReceptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMARTTokenReceptionComponent", function() { return SMARTTokenReceptionComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _smart_reference_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smart-reference.service */ "./src/app/smart-initialization/smart-reference.service.ts");
/**
 * After being directed here as per the redirect_uri in smart-launch, this route receives the token
 * data and then applies the token as necessary.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Modules required to access URL parameters.



var SMARTTokenReceptionComponent = /** @class */ (function () {
    function SMARTTokenReceptionComponent(smartReferenceService, router) {
        this.smartReferenceService = smartReferenceService;
        this.router = router;
        this.state = "Receiving token...";
    }
    SMARTTokenReceptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set up the client reference.
        this.smartReferenceService.ready();
        // Redirect to the disease selection.
        setTimeout(function () { return _this.router.navigate(["/app"]); }, 100);
    };
    SMARTTokenReceptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "smart-launch",
            template: "\n    <p>{{state}}</p>\n  "
        }),
        __metadata("design:paramtypes", [_smart_reference_service__WEBPACK_IMPORTED_MODULE_2__["SMARTReferenceService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], SMARTTokenReceptionComponent);
    return SMARTTokenReceptionComponent;
}());



/***/ }),

/***/ "./src/app/universal-components/github-fork-us.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/universal-components/github-fork-us.component.ts ***!
  \******************************************************************/
/*! exports provided: GithubForkUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubForkUsComponent", function() { return GithubForkUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GithubForkUsComponent = /** @class */ (function () {
    function GithubForkUsComponent() {
    }
    GithubForkUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "github-fork-us",
            template: "\n    <div>\n      <a href=\"https://www.github.com/smart-cancer-navigator/Application\">\n        <img src=\"/assets/github-icon.png\">\n      </a>\n    </div>\n  ",
            styles: ["\n    div {\n      display: block;\n      position: fixed;\n      right: 0;\n      bottom: 0;\n      z-index: 50;\n      background-color: black;\n      border-radius: 25px;\n    }\n    \n    * {\n      height: 50px;\n      width: 50px;\n    }\n  "]
        })
    ], GithubForkUsComponent);
    return GithubForkUsComponent;
}());



/***/ }),

/***/ "./src/app/universal-components/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/universal-components/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HeaderComponent(router) {
        var _this = this;
        this.router = router;
        this.currentRoute = "/app";
        router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.currentRoute = val.urlAfterRedirects;
            }
        });
    }
    HeaderComponent.prototype.routeTo = function (routeLoc) {
        this.router.navigate([routeLoc]);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "header",
            template: "\n    <div id=\"greyBackground\"></div>\n\n    <div id=\"container\">\n      <img src=\"/assets/logo.svg\">\n\n      <div id=\"routingOptions\">\n        <div class=\"routeOption {{currentRoute === '/home' ? 'selectedRoute' : 'unselectedRoute'}}\" (click)=\"routeTo('home')\">\n          <p>Home</p>\n        </div>\n        <div class=\"routeOption {{currentRoute === '/team' ? 'selectedRoute' : 'unselectedRoute'}}\" (click)=\"routeTo('team')\">\n          <p>Team</p>\n        </div>\n        <div class=\"routeOption {{currentRoute === '/ehr-link' ? 'selectedRoute' : 'unselectedRoute'}}\" (click)=\"routeTo('ehr-link')\">\n          <p>EHR Link</p>\n        </div>\n        <div class=\"routeOption {{currentRoute === '/db-analysis' ? 'selectedRoute' : 'unselectedRoute'}}\" (click)=\"routeTo('db-analysis')\">\n          <p>DB Analysis</p>\n        </div>\n        <div style=\"width: 1px; height: 76px; float: left; background-color: #a4a4a4; margin: 2px 3px;\">\n        </div>\n        <div class=\"routeOption {{currentRoute === '/app' ? 'selectedRoute' : 'unselectedRoute'}}\"\n             (click)=\"routeTo('app');\">\n          <p>Try It Out!</p>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    p {\n      margin: 0;\n    }\n\n    #greyBackground {\n      width: 100vw;\n      height: 100vh;\n      background-color: #eeeeee;\n      position: fixed;\n      z-index: -50;\n    }\n\n    #container {\n      background-color: white;\n      width: 100%;\n\n      padding-left: 30px;\n\n      box-shadow: 0 2px 4px #b4b4b4;\n\n      overflow: hidden;\n    }\n\n    #container img {\n      height: 40px;\n      width: auto;\n      margin-top: 20px;\n      margin-bottom: 20px;\n      float: left;\n    }\n\n    #routingOptions {\n      min-width: 500px;\n      height: 100%;\n      overflow: hidden;\n      float: right;\n    }\n\n    .routeOption {\n      float: left;\n      color: #2f2f2f;\n\n      text-align: center;\n      height: 60px;\n      width: calc(100% / 5 - 8px); /* +1 px for each for border div */\n      margin: 10px 3px;\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      cursor: default;\n      border-radius: 5px;\n    }\n\n    .unselectedRoute {\n      background-color: white;\n    }\n\n    .unselectedRoute:hover {\n      background-color: #dbdbdb;\n    }\n\n    .unselectedRoute:active {\n      background-color: #cbcbcb;\n    }\n\n    .selectedRoute {\n      background-color: #27384f;\n      color: white;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ishaanprasad/Desktop/Application/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map