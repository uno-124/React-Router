import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id", // UrlPrameterを渡すときは:を使用する
    exact: false,
    children: <UrlParameter />
  }
];
