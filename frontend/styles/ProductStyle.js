import styled from "styled-components";

export const ProductStyle = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  img {
    width: 100%;
    cursor: pointer;
  }

  h2 {
    padding: 0.5rem 0rem;
    font-size: 1.2rem;
  }
  h3{
    font-size: 1rem;
  }
  /* height: fit-content; */
  align-items: center;
  /* justify-content: space-between; */
`;
