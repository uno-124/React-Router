import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    // Switchは条件分岐
    <Switch>
      {/* Routeは表示するコンポーネントを設定、exactは完全一致 */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        // 引数matchの中のurlを展開している
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        // 引数matchの中のurlを展開している
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      {/* "*"は全てに一致。404エラーに遷移する実装に使われる */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
