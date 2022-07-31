import React, { useState } from "react";
import Head from "next/head";
import { Header } from "../../components/basic";
import { SearchProModal } from "../../components/searchPro";
import * as Style from "./pro.style";

const Pro = () => {
  const [filterIsOpen, setFiterIsOpen] = useState(true);
  return (
    <>
      <Head>
        <title>내 주변 고수찾기, 현재 215,018명 활동중 - 숨고, 숨은고수</title>
      </Head>
      <Header />
      <Style.Outter>
        <Style.Inner>
          <Style.SearchH1>고수찾기</Style.SearchH1>
        </Style.Inner>
      </Style.Outter>
      {filterIsOpen ? (
        <SearchProModal
          filterIsOpen={filterIsOpen}
          setFiterIsOpen={setFiterIsOpen}
        />
      ) : null}
    </>
  );
};

export default Pro;
