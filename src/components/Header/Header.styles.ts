import styled from '@emotion/styled';

export const HeaderMain = styled.header`
  position: relative;
  z-index: 1;
  background-color: var(--cl-white);
  box-shadow: 0.2px 0.2px 3px 0.1px var(--cl-shadow);
`;

export const HeaderContent = styled.div`
  height: 8rem;
  display: flex;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const HeaderContentLeft = styled.div`
  flex: 1;
  display: flex;

  @media only screen and (max-width: 626px) {
    justify-content: center;
  }

  @media only screen and (max-width: 320px) {
    align-items: center;
  }
`;

export const HeaderContentLSvgWrap = styled.div`
  @media only screen and (max-width: 626px) {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 320px) {
    height: 60%;
  }

  & > svg {
    height: 100%;
    object-fit: cover;

    @media only screen and (max-width: 626px) {
      position: relative;
      left: 3%;
    }

    @media only screen and (max-width: 320px) {
      position: relative;
      left: 6%;
    }
  }
`;

export const HeaderContentRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 626px) {
    flex: 0;
  }
`;

export const HeaderContentRSvgWrap = styled.div`
  display: none;
  cursor: pointer;
  height: 3.5rem;
  width: 3.5rem;

  @media only screen and (max-width: 626px) {
    display: inline-block;
  }

  & svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    fill: var(--cl-font);

    transition: fill 0.3s;

    &:hover {
      fill: var(--cl-primary);
    }
  }
`;

export const HeaderContentUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;

  & li:not(:last-child) {
    margin-right: 25px;
  }

  @media only screen and (max-width: 626px) {
    display: none;
  }
`;

export const HeaderContentLi = styled.li`
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.3s;

  &:hover {
    color: var(--cl-primary);
  }
`;
