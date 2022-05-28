import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  height: 70%;
  width: auto;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 50px;
  padding: 1rem;
  flex-direction: column;
  box-shadow: 0px 7px 8px 2px grey;

  .upper {
    display: flex;
    background: #12c2e9; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #f64f59,
      #c471ed,
      #12c2e9
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #f64f59,
      #c471ed,
      #12c2e9
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
    background: linear-gradient(to top, #753a88, #cc2b5e);
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
