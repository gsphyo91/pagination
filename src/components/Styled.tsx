import styled from "styled-components";

export const PageWrap = styled.ul`
  padding: 0;
  display: flex;
  li {
    list-style: none;
  }
`;

type Props = {
  active?: boolean;
};

export const PageBtn = styled.li`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: ${({ active }: Props) => (active ? "#75d372" : null)};
  color: ${({ active }: Props) => (active ? "white" : null)};
`;
export const PagePrev = styled(PageBtn)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
export const PageNext = styled(PageBtn)`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
