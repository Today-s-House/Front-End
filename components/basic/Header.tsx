import React from "react";
import * as Style from "./header.style";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const mainPage = router.pathname === "/";
  return (
    <>
      <Style.Outter mainPage={mainPage}>
        <Style.Inner>
          <Style.RightInner>
            <Style.Logo
              onClick={() => {
                router.push("/");
              }}
            />
            <Style.SearchBox>
              <div />
              <input
                type="text"
                placeholder="어떤 서비스가 필요하세요?"
                autoComplete="none"
              />
            </Style.SearchBox>
          </Style.RightInner>
          <Style.LeftInner>
            <ul>
              <li>
                <a
                  onClick={() => {
                    router.push("/search/pro");
                  }}
                >
                  고수 찾기
                </a>
              </li>
              <li>
                <a>마켓</a>
              </li>
              <li>
                <a>받은 견적</a>
              </li>
              <li>
                <a>채팅</a>
              </li>
            </ul>
            <Style.Noti>
              <button>
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+OEUwOTAwNEYtQTVEOC00Mzk0LTk0M0UtRDczM0VEOENGOTA5PC90aXRsZT4KICAgIDxnIGlkPSJbaGVyZV0tU29vbWdvLUhvbWUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLsm7nqs7XthrUvaGVhZGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg0My4wMDAwMDAsIC0xNjk2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0ibmF2aWdhdGlvbi93ZWIvbmF2aWdhdGlvbl9wcm92aWRlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODc3LjAwMDAwMCwgMTY3Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpY29uX25hdmlfbm90aWZpY2F0aW9ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTY2LjAwMDAwMCwgMjQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9InBhdGgiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgMy4wMDAwMDApIiBzdHJva2U9IiMyRDJEMkQiIHN0cm9rZS13aWR0aD0iMS41Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUsMTQuNSBDNSwxNi4xNTY4NTQyIDYuMzQzMTQ1NzUsMTcuNSA4LDE3LjUgQzkuNjU2ODU0MjUsMTcuNSAxMSwxNi4xNTY4NTQyIDExLDE0LjUiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLDYgQzIsMi42ODYyOTE1IDQuNjg2MjkxNSw2LjA4NzE4Mzc2ZS0xNiA4LDAgQzExLjMxMzcwODUsLTYuMDg3MTgzNzZlLTE2IDE0LDIuNjg2MjkxNSAxNCw2IEwxNCwxMCBMMTYsMTQgTDAsMTQgTDIsMTAgTDIsNiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                  alt="알림아이콘"
                />
              </button>
            </Style.Noti>
            <Style.UserBox>
              <button></button>
              <div />
            </Style.UserBox>
          </Style.LeftInner>
        </Style.Inner>
      </Style.Outter>
    </>
  );
};

export default Header;
