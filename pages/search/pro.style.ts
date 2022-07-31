import styled from "styled-components";

export const Outter = styled.header`
  width: 100%;
  min-height: 3000px;
  position: relative;
  top: 72px;
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
export const SearchH1 = styled.h1`
  width: 100%;
  font-weight: 500;
  line-height: normal;
  padding-top: 3rem;
  margin-bottom: 2rem;
  font-size: 2.125rem;
`;
