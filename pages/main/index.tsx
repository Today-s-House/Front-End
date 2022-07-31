import React from "react";
import { Header } from "../../components/basic";
import * as Style from "./index.style";

const Main = () => {
  return (
    <>
      <Header />
      <Style.Outter>
        <Style.Inner>
          <p>메인페이지</p>
        </Style.Inner>
      </Style.Outter>
    </>
  );
};

export default Main;
