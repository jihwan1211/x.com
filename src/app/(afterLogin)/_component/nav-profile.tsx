"use client";

import { MouseEventHandler } from "react";
import styled from "styled-components";

import logout from "../_lib/signout";

export default function NavProfile() {
  const handleLogout: MouseEventHandler<HTMLDivElement> = async (e) => {
    await logout();
  };
  return (
    <Profile onClick={handleLogout}>
      <div></div>
      <div>
        <div>김지환</div>
        <div>@surrrrfffing</div>
      </div>
      <div>
        <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
          <g>
            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
          </g>
        </svg>
      </div>
    </Profile>
  );
}

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  width: inherit;
  cursor: pointer;

  &:hover {
    background-color: rgb(15, 20, 25, 0.1);
    border-radius: 9999px;
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
    display: none;
  }

  svg {
    display: none;
  }

  @media (min-width: 1295px) {
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
    svg {
      display: inline-block;
    }
  }
`;
