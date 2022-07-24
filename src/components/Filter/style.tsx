import styled from "styled-components";

export const Filter = styled.div`
  position: relative;
`;
export const ListFilter = styled.ul`
  position: absolute;
  left: 10px;
  display: flex;
  background: #fff;
  width: 250px;
  box-shadow: 0 0 3px #ccc;
  flex-direction: column;
  @media (max-width: 768px) {
    left: -25px;
    width: 270px;
    box-shadow: 0 0 3px #181818;
  }
`;
export const ButtonFilter = styled.button`
  background: #000;
  display: flex;
  flex-align: center;
  justify-content: space-between;
  color: #fff;
  padding: 10px;
  width: 200px;
  margin: 11px;
  transition: 1s;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    background: #333;
  }
`;
export const FilterItem = styled.li`
  margin: 15px;
  cursor: pointer;
  padding: 5px;
  &:hover {
    font-weight: bold;
  }
`;
export const buttonActive = {
  transform: "rotate(-180deg)",
  transition: "1s",
};
export const buttonDesactive = {
  transform: "rotate(0deg)",
  transition: "1s",
};
