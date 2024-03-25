"use client";
import styled from "styled-components";
import { ShowMore } from "./TrendsForYou";

export default function WhoToFollow() {
  return (
    <Container>
      <h1>Who to follow</h1>
      <Profile>
        <div></div>
        <div>
          <div>김지환</div>
          <div>@surrrrfffing</div>
        </div>
        <div>
          <button>Follow</button>
        </div>
      </Profile>
      <Profile>
        <div></div>
        <div>
          <div>김지환</div>
          <div>@surrrrfffing</div>
        </div>
        <div>
          <button>Follow</button>
        </div>
      </Profile>
      <Profile>
        <div></div>
        <div>
          <div>김지환</div>
          <div>@surrrrfffing</div>
        </div>
        <div>
          <button>Follow</button>
        </div>
      </Profile>
      <ShowMore>Show more</ShowMore>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgb(247, 249, 249);
  border-radius: 21px;

  & > h1 {
    padding: 12px 16px;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;

  cursor: pointer;
  background-color: inherit;

  &:hover {
    background-color: rgb(15, 20, 25, 0.1);
  }
  & > div {
    height: 40px;
  }

  & > div:nth-child(1) {
    width: 40px;
    border-radius: 50%;
    background-color: red;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 100%;
    margin: 12px;
    flex-grow: 1;

    div:nth-child(2) {
      color: rgb(83, 100, 113);
    }
  }

  & > div:nth-child(3) {
    display: flex;
    background-color: rgb(15, 20, 25);
    min-width: 32px;
    min-height: 32px;
    border-radius: 9999px;

    button {
      background-color: rgb(15, 20, 25);
      color: rgb(255, 255, 255);
      font-weight: 700;
      font-size: 15px;
      border-radius: 9999px;
      cursor: pointer;
      padding: 0 16px;
    }
  }
`;
