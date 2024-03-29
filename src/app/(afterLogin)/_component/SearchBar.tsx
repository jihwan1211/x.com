"use client";

import styled from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import { FormEventHandler, useState, ChangeEventHandler } from "react";

type Props = { query: { q: string; f?: string; pf?: string } };
// export default function SearchBar({ query }: Props)
export default function SearchBar() {
  const [input, setInput] = useState("");

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  const router = useRouter();
  const onSubmitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push(`/search?q=${input}&src=typed_query`);
  };

  return (
    <InnerContainer>
      <form onSubmit={onSubmitForm}>
        <svg viewBox="0 0 24 24" aria-hidden="true" width="2rem" height="2rem">
          <g>
            <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" value={input} onChange={onChangeInput}></input>
      </form>
    </InnerContainer>
  );
}

const Container = styled.div`
  display: flex;

  justify-content: start;
  width: 350px;
  height: 53px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;

  width: inherit;
  height: inherit;

  & > form {
    display: flex;
    align-items: center;
    position: fixed;

    border-radius: 9999px;
    box-sizing: border-box;
    width: inherit;

    height: inherit;

    background-color: rgb(247, 249, 249);

    & > svg {
      margin-left: 20px;
      fill: rgb(83, 100, 113);
    }

    /* 이거 크기 시발 */
    & > input {
      background-color: inherit;
      border: none;
      outline: 0;
      box-sizing: border-box;
      /* flex-grow: 1; */
      width: 70%;

      padding: 12px;
      font-size: 17px;
    }
  }
`;
