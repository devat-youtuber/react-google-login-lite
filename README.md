# React Google Login Lite

> A Google oAUth Sign-in / Log-in Component for React


## Install
```
npm install react-google-login-lite
```

## How to use
```js
import GoogleLogin from 'react-google-login-lite';
// or
import { GoogleLogin } from 'react-google-login-lite';


const onSuccess = (googleUser) => {
  console.log(googleUser);
}

const onFailure = (err) => {
  console.log(err);
}

//or typescript
const onSuccess = (googleUser: GoogleLoginResponse) => {
  console.log(googleUser);
}

const onFailure = (err: any) => {
  console.log(err);
}


ReactDOM.render(
    <GoogleLogin 
    client_id='your-google-client-id'
    cookiepolicy='single_host_origin'
    onSuccess={onSuccess}
    onFailure={onFailure}
    />,
    document.getElementById('root')
);
```

## Stay Logged in
`isSignedIn={true}` attribute will call `onSuccess` callback on load to keep the user signed in.
```jsx
    <GoogleLogin 
    client_id='your-google-client-id'
    cookiepolicy='single_host_origin'
    onSuccess={onSuccess}
    onFailure={onFailure}
    isSignedIn={true}
    />
```


## onSuccess callback

 1. In the `onSuccess(googleUser) {...}` callback function, you can use:
  * `googleUser.getId()`
  * `googleUser.isSignedIn()`
  * `googleUser.getBasicProfile()`
  * `googleUser.getAuthResponse()`
  * You should get back a standard JWT located at `googleUser.getAuthResponse().id_token`
 2. Send this id_token to your server 
 3. Have your server decode the id_token by using a common JWT library such as [google-auth-library](https://www.npmjs.com/package/google-auth-library) or by sending a GET request to `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=YOUR_TOKEN_HERE`
 4. The returned decoded token should have an `hd` key equal to the hosted domain you'd like to restrict to.

More details can be found in the official Google docs:
 * https://developers.google.com/identity/sign-in/web/reference#users


## Login Props

|    params    |   value  |             default value            |   description    |
|:------------:|:--------:|:------------------------------------:|:----------------:|
|    client_id |  string  |               REQUIRED               | You can create a clientID by creating a [new project](https://console.cloud.google.com/) |
|     scope    |  string  |             profile email            |                  |
|  longtitle   |  boolean |               true                   | You can change it to 'false' to change it into your country's language. |
|     height   |  number  |                 50                   |                  |
|     theme    |  string  |                dark                  | There are two values: 'dark' and 'light'  |
| cookiepolicy |  string  |          single_host_origin          |                  |
|   onSuccess  | function |               REQUIRED               |                  |
|   onFailure  | function |               REQUIRED               |                  |
| isSignedIn   | boolean  |                false                 | If true will return GoogleUser object on load, if user has given your app permission |
Google Scopes List: [scopes](https://developers.google.com/identity/protocols/googlescopes)


## onFailure callback

onFailure callback is called when either initialization or a signin attempt fails.

| property name |  value   |             definition               |
|:-------------:|:--------:|:------------------------------------:|
|   error       |  string  |           Error code                 |
|   details     |  string  |      Detailed error description      |



More details can be found in the official Google docs:
 * [Google developers website](https://developers.google.com/identity/sign-in/web/sign-in)


### 👉 Follow me on Youtube: [@devat-vietnam](https://www.youtube.com/c/DevATHTML)
### 👉 Buy Me a Coffee . Thank You ! 💗: (https://www.buymeacoffee.com/QK1DkYS)
