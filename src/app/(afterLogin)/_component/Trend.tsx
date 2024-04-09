"use client";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import { trend as ITrend } from "@/model/Trend";

export default function Trend({ trend }: { trend: ITrend }) {
  const router = useRouter();
  const onClickTrend = () => {
    localStorage.setItem("searchTabMenu", "hot");
    router.push(`/search?q=${trend.title}&src=trend_click&vertical=trends`);
  };
  return (
    <TrendContainer onClick={onClickTrend}>
      <div>
        only for X
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true" width={20}>
            <g>
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            </g>
          </svg>
        </div>
      </div>
      <div>{trend.title}</div>
      <div>{trend.count.toLocaleString()} posts</div>
    </TrendContainer>
  );
}

const TrendContainer = styled.div`
  box-sizing: border-box;
  padding: 12px 16px;
  text-decoration: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    transition: 0.2s;
    background-color: rgba(15, 20, 25, 0.1);
  }

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      fill: rgb(83, 100, 113);
    }
  }

  & > div:nth-child(1),
  & > div:nth-child(3) {
    color: rgb(83, 100, 113);
    font-size: 13px;
    min-width: 0px;
    font-weight: 400;
    line-height: 16px;
  }

  & > div:nth-child(2) {
    margin-top: 2px;
    line-height: 20px;
    min-width: 0px;
    color: rgb(15, 20, 25);
    font-size: 15px;
    font-weight: 700;
  }
`;
