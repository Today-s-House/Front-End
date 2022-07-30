import styled from "styled-components";

export const Outter = styled.section`
  width: 100%;
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
