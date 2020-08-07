import { media, styled } from "@styles";

export const Wrapper = styled.div``;

export const Divider = styled.div`
  width: 100%;
  /* border-bottom: 1px solid
    ${props => props.theme.colors.baseFontColorTransparent}; */
  margin: 2rem 0;
`;

export const Title = styled.h3`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  padding: 0 0 1.6rem 0;
  margin-bottom: 1.5rem;
`;

export const DiscountField = styled.div`
  /* background-color: ${props => props.theme.colors.light}; */
  padding: 2rem 0;

  ${media.smallScreen`
    padding: 30px 0px;
  `}
`;

export const Tile = styled.label<{ checked: boolean }>`
  display: block;
  background-color: ${props => props.theme.colors.light};
  padding: 20px;
  ${props => props.checked && `border: 2px solid #21125E;`}
  font-size: ${props => props.theme.typography.smallFontSize};
  cursor: pointer;
`;
