# ๐ ๋ชฉ์ฐจ

0. react-router-dom? react-router? ๋์ด ์ฐจ์ด๊ฐ ๋ญ๊ฐ์?
1. react-router-dom ์ฌ์ฉ ํ๊ฒฝ ์ค๋น
2. react-router-dom ๋ด์ฅ ์ปดํฌ๋ํธ
   - BrowserRouter
   - Route
   - Switch
   - Link
3. `<Route>`๋ก url ์ค์ ๋ ์ปดํฌ๋ํธ๊ฐ ๋ฐ๋ props ๊ฐ์ฒด
   - history
   - location
   - match
4. `<Route>`๋ก ๊ฐ์ธ์ง์ง ์์ ์ปดํฌ๋ํธ์์ history, location, match๋ฅผ ์ฌ์ฉํ๊ธฐ
   - HOC ์ด์ฉ (V.5.0 ์๋)
   - hooks ์ด์ฉ (V. 5.1 ์ด์)

# 0. react-rounter-dom์ด ๋ญ๊ฐ์?

`react-router`๊ณผ `react-rounter-dom`์ ๋ํด ๋ค์ด๋ ๋ดค์ง๋ง ๋ชํํ ์ฐจ์ด๋ ๋ชจ๋ฅด์๋ ๋ถ๋ค์ด ๊ณ์ค ๊ฒ๋๋ค.  
**`react-router-dom` ๋ชจ๋**์ `react-router` v4 ๋ฒ์ ์์ ์ฒ์ ๋ฆด๋ฆฌ์ฆ ๋ ๋ผ์ฐํ ๋ชจ๋๋ก, **`react-router` ๋ชจ๋์ dom์ด ๋ฐ์ธ๋ฉ ๋์ด ์๋ ๋ชจ๋**์๋๋ค.  
v3๋ฒ์ ๊น์ง `react-router` ๋ชจ๋ ํ๋๋ง์ ์ฌ์ฉํ  ์ ์์๋๋ฐ, v4๋ฒ์  ์ดํ `react-router` ๋ชจ๋์ ์ฝ์ด๋ก, ์น ๊ฐ๋ฐ์๋ฅผ ์ํ `react-router-dom`๊ณผ ์ฑ ๊ฐ๋ฐ์๋ฅผ ์ํ `react-router-native`๊ฐ ๋ฆด๋ฆฌ์ฆ ๋์์ต๋๋ค.  
์ฌ์ค ๋น ๋ฅธ ์๋๋ก ๊ณ์ ์๋ฐ์ดํธ ๋๊ณ  ์์ง๋ง, ๋ณธ ํฌ์คํ์ ํ์ฌ ๊ฐ์ฅ ์ต๊ทผ ๋ฆด๋ฆฌ์ฆ๋ v5.2๋ฒ์ ์ ์ค์ฌ์ผ๋ก react-router-dom๋ฅผ ์ค๋ชํ  ์์ ์๋๋ค.

[๊ณต์ ํํ์ด์ง ๋ฐ๋ก๊ฐ๊ธฐ](https://reactrouter.com/)

# 1. react-router-dom ์ฌ์ฉ ํ๊ฒฝ ์ค๋น

**yarn์ ํตํด ์ค์น**

```javascript
yarn add react-router-dom
```

**npm์ ํตํด ์ค์น**

```javascript
npm install react-router-dom
```

# 2. react-router-dom ๋ด์ฅ ์ปดํฌ๋ํธ

> **BrowserRouter**: html5์ history API๋ฅผ ์ด์ฉํด UI ์๋ฐ์ดํธ๋ฅผ ํฉ๋๋ค.

> **Switch**: Route๋ก ์์ฑ๋ ์์์ปดํฌ๋ํธ ์ค์ ๋งค์นญ๋๋ ์ฒซ๋ฒ์งธ Route๋ฅผ ๋ ๋๋ง ํด์ค๋๋ค. ์ด๊ฒ์ ์ด์ฉํด ํน์  ์ปดํฌ๋ํธ๋ง ๋ ๋๋ง ํด ํ๋ฉด์ ๋์ธ ์ ์์ต๋๋ค.

> **Route**: ์ปดํฌ๋ํธ ๋ณ๋ก ์ํ๋ url์ ์ง์ ํฉ๋๋ค.

> **Link**: ์ง์ ํ URL๋ก ์ด๋๋๊ฒ ํด์ค๋๋ค. ์์ ์๋ก์ด ํ์ด์ง๋ฅผ ๋ถ๋ฌ์ค๋ฏ๋ก ๊ธฐ์กด ์ปดํฌ๋ํธ์ ์ํ๊ฐ์ ์๋ฉธ๋ฉ๋๋ค.

์๋์ ์์๋ฅผ ํตํด ๊ฐ๊ฐ์ ์ปดํฌ๋ํธ๊ฐ ์ด๋ป๊ฒ ์ฌ์ฉ๋๋์ง ํจ๊ป ๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค. ์ฐ์  ํด๋๊ตฌ์กฐ๋ ์๋์ ๊ฐ์ต๋๋ค.

```
๐ฆ public
 โ ๐ index.html
๐ฆ src
 โฃ ๐ pages
 โ  โฃ ๐ index.js
 โ  โฃ ๐ Info.js
 โ  โ ๐ Login.js
 โ  โฃ ๐ Main.js
 โ  โ ๐ Nav.js
 โฃ ๐ App.js
 โ ๐ index.js
```

## ๐ฐ BrowserRouter, Route, Switch

์์ ์ธ ์ปดํฌ๋ํธ๋ ๊ธฐ๋ณธ์ ์ผ๋ก SPA๊ตฌ์กฐ์์ ์ ์ฒด์ ์ธ ๋ผ์ฐํ ๊ตฌ์กฐ๋ฅผ ์ก๋ ๋ฐ์ ์ฌ์ฉํฉ๋๋ค. ๋ผ์ฐํ ํ  ์ปดํฌ๋ํธ๋ค์ `<BrowserRouter>`๋ฅด ๊ฐ์ธ๊ณ  `<Route>`๋ก ์ปดํฌ๋ํธ ๋ณ๋ก ์ํ๋ URL ์ฃผ์๋ฅผ ํ ๋นํฉ๋๋ค. ๊ทธ๋ฆฌ๊ณ  `<Switch>`๋ก ๊ฐ์ธ๋ฉด ํน์  url์ ๋ฐ๋ผ ํน์  ์ปดํฌ๋ํธ๋ง์ ๋ผ์ฐํํ  ์ ์์ต๋๋ค.
์๋์ ์ฝ๋์์ `<Nav/>`๋ ํญ์ ๋ ๋๋ง ๋์ง๋ง, `<Switch>`๋ก ๊ฐ์ธ์ ธ ์๋ ์ฝ๋๋ ํ๋ฒ์ ํ๋์ฉ๋ง ๋ ๋๋ง ๋ฉ๋๋ค. `<Route>`๋ก ๋งตํ๋ url์ด ๊ฐ๋๋ผ๋, `<Switch>`๋ก ๊ฐ์ธ์ ธ ์์ผ๋ฉด ์ฒซ๋ฒ์งธ Route๋ง ๋ ๋๋ง ๋ฉ๋๋ค.

```javascript
//App.js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// src/pages/index.js๋ฅผ ํตํด์ ํ๋ฒ์ import ํ  ์ ์๋๋ก ํจ
import { Info, Login, Main, Nav } from "./pages";

function App() {
  const [userInfo, setUserInfo] = React.useState("devstone");
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        //์ ๋ฌํ  props๊ฐ ์๋ ๊ฒฝ์ฐ ์๋์ ๊ฐ์ด
        <Route exact path="/info" render={() => <Info userInfo={userInfo} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
```

## ๐ฐ Link

`<Link>`๋ ํน์  ์ฃผ์๋ก ๋์ด๊ฐ ์ ์๋๋ก ์ญํ ์ ํด์ค๋๋ค.

```javascript
//pages/Nav.js
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Link to="/">
        <button>๋ฉ์ธ ํ๋ฉด์ผ๋ก</button>
      </Link>
      <Link to="/login">
        <button>๋ก๊ทธ์ธ ํ๋ฉด์ผ๋ก</button>
      </Link>
      <Link to="/info">
        <button>์ ๋ณด ํ๋ฉด์ผ๋ก</button>
      </Link>
    </>
  );
}

export default Nav;
```

**์คํํ๋ฉด**

![](https://images.velog.io/images/devstone/post/4d29d783-f28a-428a-ba13-99a5421c1547/Router-post1.gif)

# 3. `<Route>`๋ก ์ค์ ํ ์ปดํฌ๋ํธ๊ฐ ๋ฐ๋ props

์์๊ฐ์ App.js ํ์ผ์์ `<BrowserRouter>`๋ก ๊ฐ์ธ์ ธ ์๊ณ , `Route`๋ฅผ ํตํด ๊ฒฝ๋ก๋ก ์ ๊ทผํ  ์ ์๋ ์ปดํฌ๋ํธ์๋ ๊ธฐ๋ณธ์ ์ผ๋ก ์ ๋ฌ๋๋ props๊ฐ ์์ต๋๋ค.

- pages/Main.js

```javascript
import React from "react";

function Main(props) {
  console.log(props);
  return <div>main page</div>;
}

export default Main;
```

์ด์ ๊ฐ์ด ๊ธฐ๋ณธ์ ์ผ๋ก ์ ๋ฌ๋๋ props๋ฅผ ์ฝ์์ ์ฐ์ด๋ณด๋ฉด ์๋์ ๊ฐ์ ๊ฒฐ๊ณผ๊ฐ ๋์ต๋๋ค.

![](https://images.velog.io/images/devstone/post/92a09a01-47c3-4aaf-9ce8-d9c0cc5e53d5/router2.png)
๊ทธ props ๊ฐ์ฒด์๋ ํฌ๊ฒ ์ธ ๊ฐ์ง ๊ฐ์ฒด, `history`, `location`, `match`๊ฐ ์์ต๋๋ค.

## ๐ฐ history

**history** ๊ฐ์ฒด๋ **SPA์ ํน์ฑ์ ์งํค๋ฉฐ** ํ์ด์ง ์ ์ฒด๋ฅผ ๋ฆฌ๋ก๋ ํ์ง ์์ผ๋ฉด์ **์ฃผ์๋ฅผ ์์๋ก ๋ณ๊ฒฝ**ํ๊ฑฐ๋ ๋๋์ ๊ฐ ์ ์๋๋ก ํฉ๋๋ค.
์๋๋ history ๊ฐ์ฒด ๋ด๋ถ์ ์ฌ์ฉํ  ์ ์๋ ํ๋กํผํฐ๋ค์๋๋ค.

> **`length`**: [number] ์ ์ฒด history ์คํ์ ๊ธธ์ด
> **`action`** : [string] ์ต๊ทผ์ ์ํ๋ action (PUSH, REPLACE or POP)
> **`location`** : [JSON object] ์ต๊ทผ ๊ฒฝ๋ก ์ ๋ณด
> **`push(path, [state])`**: [function] ์๋ก์ด ๊ฒฝ๋ก๋ฅผ history ์คํ์ผ๋ก ํธ์ํ์ฌ ํ์ด์ง๋ฅผ ์ด๋
> **`replace(path, [state])`** : [function] ์ต๊ทผ ๊ฒฝ๋ก๋ฅผ history ์คํ์์ ๊ต์ฒดํ์ฌ ํ์ด์ง๋ฅผ ์ด๋
> **`go(n)`** : [function] history ์คํ์ ํฌ์ธํฐ๋ฅผ n๋ฒ์งธ๋ก ์ด๋
> **`goBack()`** : [function] ์ด์  ํ์ด์ง๋ก ์ด๋
> **`goForward()`** : [function] ์ ํ์ด์ง๋ก ์ด๋
> **`block(prompt)`** : [function] history ์คํ์ PUSH/POP ๋์์ ์ ์ด

์์  ์ฝ๋

```javascript
import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goBack = () => {
    //์ด์  ํ์ด์ง๋ก ์ด๋
    history.goBack();
  };

  const goHome = () => {
    //ํด๋น ์ฃผ์๋ก ์ด๋
    history.push("/");
  };

  useEffect(() => {
    console.log(history);
    //history๊ฐ ๋ณํด์ ๋ค๋ฅธ ์ฃผ์๋ก ์ด๋ํ๋ฉด prompt์ฐฝ์ผ๋ก ์ดํ ๋ง์ ์ ์์
    const unblock = history.block("์ ๋ง ๋ ๋์ค๊ฑด๊ฐ์?");
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>๋ค๋ก๊ฐ๊ธฐ</button>
      <button onClick={goHome}>ํ์ผ๋ก</button>
    </div>
  );
}

export default HistorySample;
```

## ๐ฐ match

**match** ๊ฐ์ฒด๋ ์ด๋ค ๋ผ์ฐํธ์ ๋งค์นญ๋์๋์ง์ ๋ํ ์ ๋ณด ๊ฐ์ง๊ณ , **params์ ์ค์ ํ ํ๋ผ๋ฏธํฐ (`/main:foo` ํ์)** ์ ๋ณด๋ฅผ ๊ฐ์ง๊ณ  ์์ต๋๋ค.
์๋๋ match ๊ฐ์ฒด ๋ด๋ถ์์ ์ฌ์ฉํ  ์ ์๋ ํ๋กํผํฐ๋ค์๋๋ค.

> **`path`** : [string] ๋ผ์ฐํฐ์ ์ ์๋ path
> **`url`** : [string] ์ค์  ํด๋ผ์ด์ธํธ๋ก๋ถํฐ ์์ฒญ๋ url path
> **`isExact`**: [boolean] true์ผ ๊ฒฝ์ฐ ์ ์ฒด ๊ฒฝ๋ก๊ฐ ์์ ํ ๋งค์นญ๋  ๊ฒฝ์ฐ์๋ง ์์ฒญ์ ์ํ
> **`params`** : [JSON object] url path๋ก ์ ๋ฌ๋ ํ๋ผ๋ฏธํฐ ๊ฐ์ฒด

**์์ ์ฝ๋**

- App.js

```javascript
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Info, Login, Main, Nav } from "./pages";

function App() {
  const [userInfo, setUserInfo] = React.useState("devstone");
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        //match.params ๊ฐ์ id ์ด๋ฆ์ผ๋ก ๋ฐ์ ๊ฒ์
        <Route exact path="/login/:id" component={Login} />
        <Route
          exact
          path="/info"
          render={(props) => <Info {...props} userInfo={userInfo} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
```

- pages/Info.js

```javascript
import React from "react";

function Info({ userInfo, history }) {
  //์ด๊ฒ ์คํ๋๋ฉด match.params๊ฐ ๋ค์ด๊ฐ
  const clickHandler = () => {
    history.push(`/login/:${userInfo}`);
  };
  return (
    <>
      <div>info page</div>
      <button onClick={clickHandler}>go to {userInfo} login page</button>
    </>
  );
}

export default Info;
```

- pages/Login.js

```javascript
import React from "react";

function Login({ match, location }) {
  const params = match.params.id ? match.params.id : "์ต๋ช";
  console.log("match", match);
  console.log("location", location);
  return (
    <>
      <div>{params} login page</div>
    </>
  );
}

export default Login;
```

**์คํํ๋ฉด**
![](https://images.velog.io/images/devstone/post/a9d5faa5-1934-40fe-b251-48a48f47e910/router3.gif)

match.params.id ๊ฐ์ pushํ ๊ฐ์ด ์๋ ๊ฒ์ ํ์ธํ  ์ ์์ต๋๋ค.
![](https://images.velog.io/images/devstone/post/8e8fed06-bca7-4252-a1d3-b9677f8f1f92/image.png)

## ๐ฐ location

**location** ๊ฐ์ฒด๋ ํ์ฌ ํ์ด์ง์ ๋ํ ์ ๋ณด๋ฅผ ๊ฐ์ง๊ณ  ์์ต๋๋ค.
**url ์ฟผ๋ฆฌ ์ ๋ณด**(`/main?name=devstone` ํ์)๋ฅผ **search ํ๋กํผํฐ** ์์ ๊ฐ๊ณ  ์์ต๋๋ค.
์๋๋ location ๊ฐ์ฒด ๋ด๋ถ์์ ์ฌ์ฉํ  ์ ์๋ ํ๋กํผํฐ๋ค์๋๋ค.

> **`pathname`** : [string] ํ์ฌ ํ์ด์ง์ ๊ฒฝ๋ก๋ช
> **`search`** : [string] ํ์ฌ ํ์ด์ง์ query string
> **`hash`**: [string] ํ์ฌ ํ์ด์ง์ hash

### - URL ์ฟผ๋ฆฌ ์ฌ์ฉํ๊ธฐ

> URL ์ฟผ๋ฆฌ๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํด์  ๋ถ๊ฐ์ ์ธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ์ค์น๊ฐ ํ์ํฉ๋๋ค.

**yarn์ ํตํด ์ค์น**

```javascript
yarn add query-string
```

**npm์ ํตํด ์ค์น**

```javascript
npm install query-string
```

**์์ ์ฝ๋**

- pages/Login.js

```javascript
import React from "react";
import queryString from "query-string";

function Login({ match, location }) {
  const params = match.params.id ? match.params.id : "์ต๋ช";
  console.log("match", match);
  console.log("location", location);
  const query = queryString.parse(location.search);
  console.log(query);
  return (
    <>
      <div>{params} login page</div>
    </>
  );
}

export default Login;
```

๊ทธ๋ฆฌ๊ณ  ์ฃผ์ ๋ค์ ์ฟผ๋ฆฌ์คํธ๋ง์ ๋ถ์ด๋ฉด ์๋์ ๊ฐ์ด `loacation.search`์ ๋ค์ด๊ฐ์์์ ํ์ธํ  ์ ์์ต๋๋ค.
![](https://images.velog.io/images/devstone/post/add0cbc1-e309-4e98-a6e4-6f46029e0cda/image.png)

# 4. `<Route>`๋ก ๊ฐ์ธ์ง์ง ์์ ์ปดํฌ๋ํธ์์ history, location, match๋ฅผ ์ฌ์ฉํ๊ธฐ

์ข์ข `<Route>`๋ก url ๋งตํ์ด ๋์ง ์์ ์ปดํฌ๋ํธ์์ `{history, location, match}` ๋ฅผ ์ฌ์ฉํด์ผ ํ  ๋๊ฐ ์์ต๋๋ค. ์ด๋ด ๊ฒฝ์ฐ, ๋ ๊ฐ์ง ๋ฐฉ๋ฒ์ ์ด์ฉํด ์ธ ๊ฐ์ฒด๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค.

## ๐ฐ HOC ์ด์ฉ (V.5.0 ์๋)

์ฒซ ๋ฒ์งธ ๋ฐฉ๋ฒ์ withRouter์ ์ด์ฉํ๋ ๋ฐฉ๋ฒ์๋๋ค.
`<Route>`๋ก url ๋งตํ์ด ๋์ง ์์ ์ปดํฌ๋ํธ์ HOC ๋ฐฉ์์ผ๋ก import์ export๋ฅผ ํด์ฃผ๋ฉด props๋ก `{history, location, match}`๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค.

```javascript
import { withRouter } from 'react-router-dom';

function withRouterSample ({history, location, match})
  console.log(history, location, match);
  return (
    <>
      <div> withRouter ์ด์ฉ์์ </div>
    </>
  );
}

export default withRouter(withRouterSample);
```

## ๐ฐ hooks ์ด์ฉ (V. 5.1 ์ด์)

๋ ๋ฒ์งธ ๋ฐฉ๋ฒ์ hooks๋ฅผ ์ด์ฉํ๋ ๋ฐฉ๋ฒ์๋๋ค.

### - useHistroy

์ด hooks๋ฅผ ์ด์ฉํ๋ฉด history ๊ฐ์ฒด๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค.

```javascript
import { useHistory } from "react-router-dom";

function useHistorySample() {
  //history ๊ฐ์ฒด ์ฌ์ฉ ๊ฐ๋ฅ
  const history = useHistory();

  return <div> useHistory ์ด์ฉ์์ </div>;
}
```

### - useLocation

์ด hooks๋ฅผ ์ด์ฉํ๋ฉด lacation ๊ฐ์ฒด๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค.

```javascript
import { useLocation } from "react-router-dom";

function useLocationSample() {
  //location ๊ฐ์ฒด ์ฌ์ฉ ๊ฐ๋ฅ
  const location = useLocation();

  return <div> useLocation ์ด์ฉ์์ </div>;
}
```

### - useRouteMatch

์ด hooks๋ฅผ ์ด์ฉํ๋ฉด ํ์ฌ URL์ match ๊ฐ์ฒด๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค.

```javascript
import { useRouteMatch } from "react-router-dom";

function useRouteMatch() {
  //match ๊ฐ์ฒด ์ฌ์ฉ ๊ฐ๋ฅ
  const match1 = useRouteMatch("/login/:id");

  //๋ค์ํ ์์ฑ์ ์ ๊ทผ ๊ฐ๋ฅ
  const match2 = useRouteMatch({
    path: "/BLOG/:slug/",
    strict: true,
    sensitive: true,
  });

  return <div> useRouteMatch ์ด์ฉ์์ </div>;
}
```

### - useParams

์ด hooks๋ฅผ ์ด์ฉํ๋ฉด ํ์ฌ`<Route> ์ปดํฌ๋ํธ`์ match.params๊ฐ์ useParams()๋ฅผ ํตํด ์ ๊ทผํ  ์ ์์ต๋๋ค.

```javascript
//๊ณต์ ๋ฌธ์ ์์ 
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function BlogPost() {
  //ํ์ฌ match.params๊ฐ
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </Router>,
  node
);
```

# ๐ Reference

https://www.cookieparking.com/share/U2FsdGVkX18KY60JhtydBxh8KfLTWfAXfsSrfGB4vEw9vaexP64NWJJyqj9xIkEhEDzG_E4yaCvDVldepEoKv-bQ6RYVaFMLq2rzl6R1RHo

๋ ํผ๋ฐ์ค๋ ์ฟ ํคํํน์ ํตํด ๋ณผ ์ ์์ต๋๋ค~!
