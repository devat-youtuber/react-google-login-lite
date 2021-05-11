"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleLogin = void 0;
var react_1 = __importStar(require("react"));
require("./public/styles.css");
// export interface CustomWindow extends Window {
//     gapi: any;
// }
// declare let window: CustomWindow;
// declare global {
//     interface Window { gapi: any; }
// }
var GoogleLogin = function (_a) {
    var client_id = _a.client_id, scope = _a.scope, longtitle = _a.longtitle, cookiepolicy = _a.cookiepolicy, height = _a.height, theme = _a.theme, onSuccess = _a.onSuccess, onFailure = _a.onFailure, isSignedIn = _a.isSignedIn;
    react_1.useEffect(function () {
        var script = document.createElement('script');
        script.src = "https://apis.google.com/js/platform.js";
        script.async = true;
        script.defer = true;
        script.addEventListener('load', function () {
            var gapi = window.gapi;
            gapi.load('auth2', function () {
                var auth2 = gapi.auth2.init({
                    client_id: client_id,
                    cookiepolicy: cookiepolicy
                });
                gapi.signin2.render('my-signin2', {
                    'scope': scope,
                    'height': height,
                    'longtitle': longtitle,
                    'theme': theme,
                    'onsuccess': !auth2.isSignedIn.get() && onSuccess,
                    'onfailure': !auth2.isSignedIn.get() && onFailure
                });
                if (!isSignedIn) {
                    if (auth2.isSignedIn.get())
                        auth2.signOut();
                }
            });
        });
        document.body.appendChild(script);
        return function () {
            document.body.removeChild(script);
        };
    }, [client_id, scope, longtitle, cookiepolicy, theme, height, onSuccess, onFailure, isSignedIn]);
    return (react_1.default.createElement("div", { id: "my-signin2" }));
};
exports.GoogleLogin = GoogleLogin;
exports.GoogleLogin.defaultProps = {
    scope: 'profile email',
    longtitle: true,
    height: 50,
    theme: 'dark',
    isSignedIn: false,
    onSuccess: function (googleUser) {
        console.log(googleUser);
    },
    onFailure: function (error) {
        console.log(error);
    },
};
exports.default = exports.GoogleLogin;
//# sourceMappingURL=index.js.map