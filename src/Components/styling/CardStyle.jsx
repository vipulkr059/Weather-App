import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  height: 70%;
  width: 30%;
  background-color: seashell;
  border-radius: 50px;
  padding: 1rem;
  flex-direction: column;

  .upper {
    display: flex;
    background-color: #385aff;
    border-radius: 50px 50px 0 0;
    align-items: center;
    flex: 1;
    color: white;
    justify-content: space-around;

    .iconMain {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 40%;
      img {
        width: 100%;
      }
      p {
        font-size: 2rem;
        margin: 0;
      }
    }
  }
  .lower {
    display: flex;
    background-color: aquamarine;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;
    font-size: 1.5rem;

    .row1 {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .row2 {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
