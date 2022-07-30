import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface SearchProModalProps {
  filterIsOpen: boolean;
  setFiterIsOpen: any;
}
const SearchProModal = (props: SearchProModalProps) => {
  const { filterIsOpen, setFiterIsOpen } = props;

  const tabTitle: string[] = ["서비스", "지역"];

  const [openTab, setOpenTab] = useState<number>(0);

  const onClickTab = (idx: number) => {
    setOpenTab(idx);
  };

  const ModalClose = () => {
    setFiterIsOpen(!filterIsOpen);
  };
  //모달 백드롭 스크롤 막기 위한 코드
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return (
    <>
      <BackDrop onClick={ModalClose} />
      <ModalOutter>
        <ModalSearchBox>
          <FilterTitle>
            {tabTitle.map((title, idx) => {
              return (
                <FilterLi
                  key={idx}
                  idx={idx}
                  openTab={openTab}
                  onClick={() => {
                    onClickTab(idx);
                  }}
                >
                  {title}
                </FilterLi>
              );
            })}
          </FilterTitle>
          <button onClick={ModalClose} />
        </ModalSearchBox>
      </ModalOutter>
    </>
  );
};

export default SearchProModal;

const BackDrop = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalOutter = styled.div`
  width: 420px;
  height: 42.5rem;
  overflow-y: scroll;
  background: #fff;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
`;
const ModalSearchBox = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    width: 14px;
    height: 14px;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTkgNy44NjlMMTYuNDM0LjQzNGwxLjEzMiAxLjEzMkwxMC4xMyA5bDcuNDM1IDcuNDM0LTEuMTMyIDEuMTMyTDkgMTAuMTNsLTcuNDM0IDcuNDM1LTEuMTMyLTEuMTMyTDcuODcgOSAuNDM0IDEuNTY2IDEuNTY2LjQzNCA5IDcuODd6Ii8+CiAgICA8L2RlZnM+CiAgICA8dXNlIGZpbGw9IiMzMjMyMzIiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2EiLz4KPC9zdmc+Cg==")
      center;
  }
`;

const FilterTitle = styled.ul`
  width: 96px;
  height: 40px;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
`;
interface LiType {
  idx: number;
  openTab: number;
}
const FilterLi = styled.li<LiType>`
  height: 40px;
  padding: 0 2px;
  line-height: 40px;
  cursor: pointer;
  color: ${({ openTab, idx }) => (idx === openTab ? "#00c7ae" : "#323232")};
  border-bottom: ${({ openTab, idx }) =>
    idx === openTab ? `2px solid #00c7ae` : "none"};
`;
