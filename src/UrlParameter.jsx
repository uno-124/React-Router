import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams(); // URLパラメーターの受け取り
  const { search } = useLocation(); // クエリパラメーター取得
  const query = new URLSearchParams(search); // クエリパラメーターを扱いやすくできる
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{query.get("name")}です</p>
    </div>
  );
};
