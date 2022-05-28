import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  height: 70%;
  width: auto;
  border-radius: 50px;
  padding: 1rem;
  flex-direction: column;
  box-shadow: 0px 7px 8px 2px #666f74;
  font-family: "Cedarville Cursive", cursive;
  font-family: "Poppins", sans-serif;

  .upper {
    display: flex;
    background: linear-gradient(90deg, #339cff, #5960ff 43%, #d713e6);

    border-radius: 50px 50px 0 0;
    align-items: center;
    flex: 1;
    color: white;
    justify-content: space-around;
    flex-direction: column;
    .info {
      display: flex;
      font-size: 4rem;
      align-items: center;
      gap: 5rem;

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
  }
  .lower {
    display: flex;
    background: linear-gradient(90deg, #339cff, #5960ff 43%, #d713e6);

    align-items: center;
    justify-content: space-evenly;
    flex: 1;
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: 0 0 50px 50px;
    color: white;

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
