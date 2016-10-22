"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Ng2GifPreview = (function () {
    function Ng2GifPreview() {
        this.imgSrc = '';
        this.gifActiveMode = false;
        this.gifLoadingMode = false;
    }
    Ng2GifPreview.prototype.ngOnInit = function () {
        this.imgSrc = this.preview;
    };
    Ng2GifPreview.prototype.onImageLoad = function () {
        if (this.gifLoadingMode) {
            this.gifActiveMode = true;
            this.gifLoadingMode = false;
        }
        else {
            this.gifActiveMode = false;
        }
    };
    Ng2GifPreview.prototype.loadGifImage = function ($event) {
        this.imgSrc = this.gif;
        this.gifLoadingMode = true;
        $event.stopPropagation();
    };
    Ng2GifPreview.prototype.loadNormalImage = function ($event) {
        this.imgSrc = this.preview;
        this.gifActiveMode = false;
        this.gifLoadingMode = false;
        $event.stopPropagation();
    };
    __decorate([
        core_1.Input('preview'), 
        __metadata('design:type', String)
    ], Ng2GifPreview.prototype, "preview", void 0);
    __decorate([
        core_1.Input('gif'), 
        __metadata('design:type', String)
    ], Ng2GifPreview.prototype, "gif", void 0);
    Ng2GifPreview = __decorate([
        core_1.Component({
            selector: 'gifPreview',
            template: "<div class=\"jqGifPreview\">\n        <div class=\"jqGifImageDiv\"  (click)=\"loadNormalImage($event)\">\n            <img class=\"jqGifImage\" (load)=\"onImageLoad()\" [src]=\"imgSrc\"/>\n            <div class=\"jqGifCircle\" [hidden]=\"gifActiveMode\" (click)=\"loadGifImage($event)\">\n                <div class=\"jqGifImageCenter\"></div>\n                <div class=\"jqGifImageCircle\" [ngClass]=\"{jqGifRotating:gifLoadingMode}\"></div>\n                <div class=\"jqGifImageName\"></div>\n            </div>\n        </div>\n        <div class=\"jqGifImageFooter\" [hidden]=\"gifActiveMode\">\n            <a class=\"jqGifImageFooterLeft\" target=\"_blank\" [href]=\"imgSrc\">\n                {{imgLink.hostname}}\n            </a>\n            <a class=\"jqGifImageFooterRight\" #imgLink target=\"_blank\" [href]=\"imgSrc\"></a>\n        </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2GifPreview);
    return Ng2GifPreview;
}());
exports.Ng2GifPreview = Ng2GifPreview;
//# sourceMappingURL=ng2GifPreview.js.map