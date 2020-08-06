import { media, styled } from "@styles";
import { css } from "styled-components";

const textProps = css`
  font-size: ${(props) => props.theme.typography.baseFontSize};
  margin: 0 0 0.5rem 0;
  text-align: left;
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.light};
  text-align: center;
  /* max-height: 70rem; */
  transition: 0.3s;

  > div > h4,
  p {
    transition: 0.3s;
    margin-left: -1.7rem;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.hoverLightBackground};
    box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.1);
    > div > h4,
    p {
      margin-left: -0.2rem;
    }
  }

  ${media.largeScreen`
    > div > h4, p {
      transition: 0.3s;
      margin-left: -1rem;
    }
  `}
`;

export const DetailWrapper = styled.div`
  /* background: ${(props) => props.theme.colors.light}; */
  background: #ffffff;
  padding: 1.8rem;
  transition: 0.3s;
  width: 100%;

`;

export const Title = styled.h4`
  color: rgb(45, 45, 45);
  cursor: pointer;
  font-weight: 400;
  line-height: 1.6rem;

  ${textProps}

  ${media.smallScreen`
    font-size: 0.98rem;
  `}
`;

export const Price = styled.p`
  color: rgb(45, 45, 45);
  line-height: 1.6rem;
  font-weight: 500;

  ${textProps}

  font-size: 1rem;

  ${media.smallScreen`
    font-size: 0.9rem;
    line-height: 1rem;
  `}
`;

export const Image = styled.div`
  width: auto;
  height: auto;
  max-width: 100%;
  min-height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.smallScreen`
    min-height: 17rem;
  `}

  > img {
    width: auto;
    height: auto;
    max-width: 100%;
  }
`;
