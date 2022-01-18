# 🙈 목차

0. react-router-dom? react-router? 둘이 차이가 뭔가요?
1. react-router-dom 사용 환경 준비
2. react-router-dom 내장 컴포넌트
   - BrowserRouter
   - Route
   - Switch
   - Link
3. `<Route>`로 url 설정된 컴포넌트가 받는 props 객체
   - history
   - location
   - match
4. `<Route>`로 감싸지지 않은 컴포넌트에서 history, location, match를 사용하기
   - HOC 이용 (V.5.0 아래)
   - hooks 이용 (V. 5.1 이상)

# 0. react-router-dom이 뭔가요?

`react-router`과 `react-router-dom`에 대해 들어는 봤지만 명확한 차이는 모르시는 분들이 계실 겁니다.  
**`react-router-dom` 모듈**은 `react-router` v4 버전에서 처음 릴리즈 된 라우팅 모듈로, **`react-router` 모듈에 dom이 바인딩 되어 있는 모듈**입니다.  
v3버전까진 `react-router` 모듈 하나만을 사용할 수 있었는데, v4버전 이후 `react-router` 모듈을 코어로, 웹 개발자를 위한 `react-router-dom`과 앱 개발자를 위한 `react-router-native`가 릴리즈 되었습니다.  
사실 빠른 속도로 계속 업데이트 되고 있지만, 본 포스팅은 현재 가장 최근 릴리즈된 v5.2버전을 중심으로 react-router-dom를 설명할 예정입니다.

[공식 홈페이지 바로가기](https://reactrouter.com/)

# 1. react-router-dom 사용 환경 준비

**yarn을 통해 설치**

```javascript
yarn add react-router-dom
```

**npm을 통해 설치**

```javascript
npm install react-router-dom
```

# 2. react-router-dom 내장 컴포넌트

> **BrowserRouter**: html5의 history API를 이용해 UI 업데이트를 합니다.

> **Switch**: Route로 생성된 자식컴포넌트 중에 매칭되는 첫번째 Route를 렌더링 해줍니다. 이것을 이용해 특정 컴포넌트만 렌더링 해 화면에 띄울 수 있습니다.

> **Route**: 컴포넌트 별로 원하는 url을 지정합니다.

> **Link**: 지정한 URL로 이동되게 해줍니다. 아예 새로운 페이지를 불러오므로 기존 컴포넌트의 상태값은 소멸됩니다.

아래의 예시를 통해 각각의 컴포넌트가 어떻게 사용되는지 함께 보도록 하겠습니다. 우선 폴더구조는 아래와 같습니다.

```
📦 public
 ┗ 📜 index.html
📦 src
 ┣ 📂 pages
 ┃  ┣ 📜 index.js
 ┃  ┣ 📜 Info.js
 ┃  ┗ 📜 Login.js
 ┃  ┣ 📜 Main.js
 ┃  ┗ 📜 Nav.js
 ┣ 📜 App.js
 ┗ 📜 index.js
```

## 🐰 BrowserRouter, Route, Switch

위의 세 컴포넌트는 기본적으로 SPA구조에서 전체적인 라우팅 구조를 잡는 데에 사용합니다. 라우팅 할 컴포넌트들을 `<BrowserRouter>`르 감싸고 `<Route>`로 컴포넌트 별로 원하는 URL 주소를 할당합니다. 그리고 `<Switch>`로 감싸면 특정 url에 따라 특정 컴포넌트만을 라우팅할 수 있습니다.
아래의 코드에서 `<Nav/>`는 항상 렌더링 되지만, `<Switch>`로 감싸져 있는 코드는 한번에 하나씩만 렌더링 됩니다. `<Route>`로 맵핑된 url이 같더라도, `<Switch>`로 감싸져 있으면 첫번째 Route만 렌더링 됩니다.

```javascript
//App.js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// src/pages/index.js를 통해서 한번에 import 할 수 있도록 함
import { Info, Login, Main, Nav } from "./pages";

function App() {
  const [userInfo, setUserInfo] = React.useState("devstone");
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        //전달할 props가 있는 경우 아래와 같이
        <Route exact path="/info" render={() => <Info userInfo={userInfo} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
```

## 🐰 Link

`<Link>`는 특정 주소로 넘어갈 수 있도록 역할을 해줍니다.

```javascript
//pages/Nav.js
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Link to="/">
        <button>메인 화면으로</button>
      </Link>
      <Link to="/login">
        <button>로그인 화면으로</button>
      </Link>
      <Link to="/info">
        <button>정보 화면으로</button>
      </Link>
    </>
  );
}

export default Nav;
```

**실행화면**

![](https://images.velog.io/images/devstone/post/4d29d783-f28a-428a-ba13-99a5421c1547/Router-post1.gif)

# 3. `<Route>`로 설정한 컴포넌트가 받는 props

위와같은 App.js 파일에서 `<BrowserRouter>`로 감싸져 있고, `Route`를 통해 경로로 접근할 수 있는 컴포넌트에는 기본적으로 전달되는 props가 있습니다.

- pages/Main.js

```javascript
import React from "react";

function Main(props) {
  console.log(props);
  return <div>main page</div>;
}

export default Main;
```

이와 같이 기본적으로 전달되는 props를 콘솔에 찍어보면 아래와 같은 결과가 나옵니다.

![](https://images.velog.io/images/devstone/post/92a09a01-47c3-4aaf-9ce8-d9c0cc5e53d5/router2.png)
그 props 객체에는 크게 세 가지 객체, `history`, `location`, `match`가 있습니다.

## 🐰 history

**history** 객체는 **SPA의 특성을 지키며** 페이지 전체를 리로드 하지 않으면서 **주소를 임의로 변경**하거나 되돌아 갈 수 있도록 합니다.
아래는 history 객체 내부의 사용할 수 있는 프로퍼티들입니다.

> **`length`**: [number] 전체 history 스택의 길이
> **`action`** : [string] 최근에 수행된 action (PUSH, REPLACE or POP)
> **`location`** : [JSON object] 최근 경로 정보
> **`push(path, [state])`**: [function] 새로운 경로를 history 스택으로 푸시하여 페이지를 이동
> **`replace(path, [state])`** : [function] 최근 경로를 history 스택에서 교체하여 페이지를 이동
> **`go(n)`** : [function] history 스택의 포인터를 n번째로 이동
> **`goBack()`** : [function] 이전 페이지로 이동
> **`goForward()`** : [function] 앞 페이지로 이동
> **`block(prompt)`** : [function] history 스택의 PUSH/POP 동작을 제어

예제 코드

```javascript
import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goBack = () => {
    //이전 페이지로 이동
    history.goBack();
  };

  const goHome = () => {
    //해당 주소로 이동
    history.push("/");
  };

  useEffect(() => {
    console.log(history);
    //history값 변해서 다른 주소로 이동하면 prompt창으로 이탈 막을 수 있음
    const unblock = history.block("정말 떠나실건가요?");
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default HistorySample;
```

## 🐰 match

**match** 객체는 어떤 라우트에 매칭되었는지에 대한 정보 가지고, **params에 설정한 파라미터 (`/main:foo` 형식)** 정보를 가지고 있습니다.
아래는 match 객체 내부에서 사용할 수 있는 프로퍼티들입니다.

> **`path`** : [string] 라우터에 정의된 path
> **`url`** : [string] 실제 클라이언트로부터 요청된 url path
> **`isExact`**: [boolean] true일 경우 전체 경로가 완전히 매칭될 경우에만 요청을 수행
> **`params`** : [JSON object] url path로 전달된 파라미터 객체

**예제코드**

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
        //match.params 값을 id 이름으로 받을 것임
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
  //이게 실행되면 match.params값 들어감
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
  const params = match.params.id ? match.params.id : "익명";
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

**실행화면**
![](https://images.velog.io/images/devstone/post/a9d5faa5-1934-40fe-b251-48a48f47e910/router3.gif)

match.params.id 값에 push한 값이 있는 것을 확인할 수 있습니다.
![](https://images.velog.io/images/devstone/post/8e8fed06-bca7-4252-a1d3-b9677f8f1f92/image.png)

## 🐰 location

**location** 객체는 현재 페이지에 대한 정보를 가지고 있습니다.
**url 쿼리 정보**(`/main?name=devstone` 형식)를 **search 프로퍼티** 안에 갖고 있습니다.
아래는 location 객체 내부에서 사용할 수 있는 프로퍼티들입니다.

> **`pathname`** : [string] 현재 페이지의 경로명
> **`search`** : [string] 현재 페이지의 query string
> **`hash`**: [string] 현재 페이지의 hash

### - URL 쿼리 사용하기

> URL 쿼리를 사용하기 위해선 부가적인 라이브러리의 설치가 필요합니다.

**yarn을 통해 설치**

```javascript
yarn add query-string
```

**npm을 통해 설치**

```javascript
npm install query-string
```

**예제코드**

- pages/Login.js

```javascript
import React from "react";
import queryString from "query-string";

function Login({ match, location }) {
  const params = match.params.id ? match.params.id : "익명";
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

그리고 주소 뒤에 쿼리스트링을 붙이면 아래와 같이 `loacation.search`에 들어가있음을 확인할 수 있습니다.
![](https://images.velog.io/images/devstone/post/add0cbc1-e309-4e98-a6e4-6f46029e0cda/image.png)

# 4. `<Route>`로 감싸지지 않은 컴포넌트에서 history, location, match를 사용하기

종종 `<Route>`로 url 맵핑이 되지 않은 컴포넌트에서 `{history, location, match}` 를 사용해야 할 때가 있습니다. 이럴 경우, 두 가지 방법을 이용해 세 객체를 사용할 수 있습니다.

## 🐰 HOC 이용 (V.5.0 아래)

첫 번째 방법은 withRouter을 이용하는 방법입니다.
`<Route>`로 url 맵핑이 되지 않은 컴포넌트에 HOC 방식으로 import와 export를 해주면 props로 `{history, location, match}`를 사용할 수 있습니다.

```javascript
import { withRouter } from 'react-router-dom';

function withRouterSample ({history, location, match})
  console.log(history, location, match);
  return (
    <>
      <div> withRouter 이용예제</div>
    </>
  );
}

export default withRouter(withRouterSample);
```

## 🐰 hooks 이용 (V. 5.1 이상)

두 번째 방법은 hooks를 이용하는 방법입니다.

### - useHistroy

이 hooks를 이용하면 history 객체를 사용할 수 있습니다.

```javascript
import { useHistory } from "react-router-dom";

function useHistorySample() {
  //history 객체 사용 가능
  const history = useHistory();

  return <div> useHistory 이용예제</div>;
}
```

### - useLocation

이 hooks를 이용하면 lacation 객체를 사용할 수 있습니다.

```javascript
import { useLocation } from "react-router-dom";

function useLocationSample() {
  //location 객체 사용 가능
  const location = useLocation();

  return <div> useLocation 이용예제</div>;
}
```

### - useRouteMatch

이 hooks를 이용하면 현재 URL의 match 객체를 사용할 수 있습니다.

```javascript
import { useRouteMatch } from "react-router-dom";

function useRouteMatch() {
  //match 객체 사용 가능
  const match1 = useRouteMatch("/login/:id");

  //다양한 속성에 접근 가능
  const match2 = useRouteMatch({
    path: "/BLOG/:slug/",
    strict: true,
    sensitive: true,
  });

  return <div> useRouteMatch 이용예제</div>;
}
```

### - useParams

이 hooks를 이용하면 현재`<Route> 컴포넌트`의 match.params값에 useParams()를 통해 접근할 수 있습니다.

```javascript
//공식 문서 예제
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function BlogPost() {
  //현재 match.params값
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

# 🙉 Reference

https://www.cookieparking.com/share/U2FsdGVkX18KY60JhtydBxh8KfLTWfAXfsSrfGB4vEw9vaexP64NWJJyqj9xIkEhEDzG_E4yaCvDVldepEoKv-bQ6RYVaFMLq2rzl6R1RHo

레퍼런스는 쿠키파킹을 통해 볼 수 있습니다~!
