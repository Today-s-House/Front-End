import styled from "styled-components";

type OutterType = {
  mainPage: boolean;
};
export const Outter = styled.header<OutterType>`
  width: 100%;
  height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: #fff;
  border-bottom: ${({ mainPage }) => (mainPage ? `none` : "1px solid #fafafa")};
`;
export const Inner = styled.div`
  width: 970px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
  }
`;
export const RightInner = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.h1`
  width: 106px;
  height: 36px;
  cursor: pointer;
  background-image: url("https://assets.cdn.soomgo.com/icons/icon-navi-logo.svg");
`;
export const SearchBox = styled.div`
  width: 336px;
  height: 48px;
  border-radius: 6px;
  border: 0.0625rem solid ${({ theme }) => theme.colors.borderColor};
  margin-right: 21px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 12px;

  & > div {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNCkiIHN0cm9rZT0iI0I1QjVCNSIgc3Ryb2tlLXdpZHRoPSIxLjYiPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGN4PSI2LjUiIGN5PSI2LjUiIHI9IjYuNSIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Im0xMS41IDExLjUgNSA1Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K");
  }

  & > input {
    width: 100%;
    height: 46px;
    border: none;
    font-size: 1.025rem;
  }
  & > input::placeholder {
    color: #b5b5b5;
  }

  & > input:focus {
    outline: none;
  }
`;

export const LeftInner = styled.div`
  width: 50%;
  height: 42px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > ul {
    display: flex;
    width: 296px;
    height: 100%;
    font-size: 1rem;
    justify-content: space-between;
    align-items: center;
  }

  & > ul > li {
    height: 23px;
  }
`;
export const Noti = styled.div`
  margin-left: 1.5rem;
  height: 24px;
`;

export const UserBox = styled.div`
  margin-left: 1.5rem;
  width: 52px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > button {
    width: 32px;
    height: 32px;
    border: 0.0625rem solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 32px;
  }
  & > div {
    width: 12px;
    height: 12px;
    cursor: pointer;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxMnYxMkgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzg4OCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEwIDQgNiA4IDIgNCIvPgogICAgPC9nPgo8L3N2Zz4K");
  }
`;
