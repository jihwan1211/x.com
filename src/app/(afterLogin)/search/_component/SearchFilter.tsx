"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ChangeEventHandler } from "react";

import styled from "styled-components";

export default function SearchFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  if (pathname !== "/search") return null;

  const router = useRouter();
  const onChangeFollowers: ChangeEventHandler<HTMLInputElement> = (e) => {
    router.replace(`/search?${searchParams.toString()}&pf=${e.target.value}`);
  };

  const onChangeEveryone: ChangeEventHandler<HTMLInputElement> = (e) => {
    const params = new URLSearchParams(searchParams);
    if (searchParams.has("pf")) params.delete("pf");
    router.replace(`/search?${params.toString()}`);
  };

  const onChangeAnywhere: ChangeEventHandler<HTMLInputElement> = (e) => {
    const params = new URLSearchParams(searchParams);
    if (searchParams.has("lf")) params.delete("lf");
    router.replace(`search?${params.toString()}`);
  };

  const onChangeNearby: ChangeEventHandler<HTMLInputElement> = (e) => {
    router.replace(`search?${searchParams.toString()}&lf=${e.target.value}`);
  };

  return (
    <Container>
      <div>
        <h2>검색 필터</h2>
      </div>
      <RadioWrapper>
        <fieldset>
          <h3>사용자</h3>
          <label htmlFor="everyone">
            <InputWrapper>
              <div>모든 사용자</div>
              <input type="radio" id="everyone" name="user" value="1" onChange={onChangeEveryone} defaultChecked></input>
            </InputWrapper>
          </label>
          <label htmlFor="followers">
            <InputWrapper>
              <div>내가 팔로우하는 사람들</div>
              <input type="radio" id="followers" name="user" value="on" onChange={onChangeFollowers}></input>
            </InputWrapper>
          </label>
        </fieldset>
        <fieldset>
          <h3>위치</h3>
          <label htmlFor="anywhere">
            <InputWrapper>
              <div>어디에서나</div>
              <input type="radio" id="anywhere" name="location" value="2" onChange={onChangeAnywhere} defaultChecked></input>
            </InputWrapper>
          </label>
          <label htmlFor="curLocal">
            <InputWrapper>
              <div>현 위치 주변</div>
              <input type="radio" id="curLocal" name="location" value="on" onChange={onChangeNearby}></input>
            </InputWrapper>
          </label>
        </fieldset>
      </RadioWrapper>
    </Container>
  );
}

const Container = styled.main`
  box-sizing: border-box;
  padding-top: 12px;
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;

  & > div:nth-child(1) {
    border: 1px solid rgb(239, 243, 244);
    border-radius: 16px;
    margin-bottom: 16px;
    padding-left: 16px;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(239, 243, 244);
  border-radius: 16px;

  & > fieldset {
    border: none;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  color: rgb(15, 20, 25);
  min-width: 0px;
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
`;
