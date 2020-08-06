import { styled } from "@styles";

export const Wrapper = styled.div`
  overflow: scroll;
  width: 410px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-shadow: 6px 0px 30px rgba(0, 0, 0, 0.15);
`;
export const Header = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 3.5rem;
  padding: 0;

  font-weight: ${props => props.theme.typography.boldFontWeight};
  font-size: 2.3rem;
`;
