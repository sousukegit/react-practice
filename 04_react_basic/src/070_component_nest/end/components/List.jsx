import { Button } from "./Button";
import { Fragment } from "react"

const List = () => {
  return (
    <Fragment>
      <ul>
        <li>item-1</li>
        <li>item-2</li>
        <li>item-3</li>
        <li>item-4</li>
        <li>item-5</li>
      </ul>
      <Button/>
    </Fragment>
  );
};

export { List };

/* POINT 名前付き export の別の記法

export const List = () => {
  return (
    <ul>
      <li>item-1</li>
      <li>item-2</li>
      <li>item-3</li>
      <li>item-4</li>
      <li>item-5</li>
    </ul>
  );
};

*/
