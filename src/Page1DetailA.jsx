import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation(); // stateの受け取り方
  console.log(state);

  const history = useHistory();

  const onClickBack = () => history.goBack(); //　　前の画面に戻る

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
