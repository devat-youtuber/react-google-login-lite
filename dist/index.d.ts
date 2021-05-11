/// <reference types="react" />
import './public/styles.css';
export declare const GoogleLogin: {
    ({ client_id, scope, longtitle, cookiepolicy, height, theme, onSuccess, onFailure, isSignedIn }: GoogleLoginProps): JSX.Element;
    defaultProps: {
        scope: string;
        longtitle: boolean;
        height: number;
        theme: string;
        isSignedIn: boolean;
        onSuccess: (googleUser: GoogleLoginResponse) => void;
        onFailure: (error: any) => void;
    };
};
export default GoogleLogin;
export interface GoogleLoginProps {
    client_id: string;
    scope: string;
    longtitle: boolean;
    cookiepolicy: string;
    height: number;
    theme: string;
    onSuccess: (googleUser: GoogleLoginResponse) => void;
    onFailure: (error: any) => void;
    isSignedIn: boolean;
}
export interface GoogleLoginResponse {
    getId(): string;
    isSignedIn(): boolean;
    getBasicProfile(): BasicProfile;
    getAuthResponse(includeAuthorizationData?: boolean): AuthResponse;
}
export interface AuthResponse {
    readonly access_token: string;
    readonly id_token: string;
    readonly scope: string;
    readonly expires_in: number;
    readonly first_issued_at: number;
    readonly expires_at: number;
}
export interface BasicProfile {
    getId(): string;
    getName(): string;
    getGivenName(): string;
    getFamilyName(): string;
    getImageUrl(): string;
    getEmail(): string;
}
//# sourceMappingURL=index.d.ts.map