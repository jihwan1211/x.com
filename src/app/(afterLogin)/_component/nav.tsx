"use client";

import { styled } from "styled-components";
import Link from "next/link";
import useModalStore from "@/store/modal";
import { useSelectedLayoutSegment } from "next/navigation";
import { Session } from "@auth/core/types";

type Props = {
  me: Session | null;
};
export default function Nav({ me }: Props) {
  const segment = useSelectedLayoutSegment();
  const modalStore = useModalStore();

  return (
    <Menus>
      {me?.user ? (
        <>
          <MenuLink href="/home">
            <Menu>
              {segment === "home" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path>
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"></path>
                  </g>
                </svg>
              )}

              {segment === "home" ? <MenuContentSelected>Home</MenuContentSelected> : <MenuContent>Home</MenuContent>}
            </Menu>
          </MenuLink>
          <MenuLink href="/explore">
            <Menu>
              {segment === "explore" || segment === "search" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"></path>
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                  </g>
                </svg>
              )}
              {segment === "explore" || segment === "search" ? <MenuContentSelected>Explore</MenuContentSelected> : <MenuContent>Explore</MenuContent>}
            </Menu>
          </MenuLink>
          <MenuLink href="/notification">
            <Menu>
              {segment === "notification" ? (
                <>
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                    <g>
                      <path d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"></path>
                    </g>
                  </svg>
                  <MenuContentSelected>Notification</MenuContentSelected>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                    <g>
                      <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
                    </g>
                  </svg>
                  <MenuContent>Notification</MenuContent>
                </>
              )}
            </Menu>
          </MenuLink>
          <MenuLink href="/messages">
            <Menu>
              {segment === "messages" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"></path>
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
                  </g>
                </svg>
              )}

              {segment === "message" ? <MenuContentSelected>Message</MenuContentSelected> : <MenuContent>Message</MenuContent>}
            </Menu>
          </MenuLink>
          <MenuLink href="/lists">
            <Menu>
              {segment === "lists" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM16 14H8v-2h8v2zm0-4H8V8h8v2z"></path>
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>
                  </g>
                </svg>
              )}

              {segment === "lists" ? <MenuContentSelected>Lists</MenuContentSelected> : <MenuContent>Lists</MenuContent>}
            </Menu>
          </MenuLink>
          <MenuLink href="/bookmarks">
            <Menu>
              {segment === "/bookmarks" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"></path>
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                  </g>
                </svg>
              )}

              {segment === "bookmarks" ? <MenuContentSelected>Bookmarks</MenuContentSelected> : <MenuContent>Bookmarks</MenuContent>}
            </Menu>
          </MenuLink>
          <MenuLink href="/communities">
            <Menu>
              {segment === "/communities" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-1.608 1.732-2.762 4.389-2.869 8.248l-.03 1.083zM9.616 9.27C10.452 8.63 11 7.632 11 6.5 11 4.57 9.433 3 7.5 3S4 4.57 4 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73zm6.884 1.726c-3.264 0-6.816 2.358-7 8.977L9.471 21h14.057l-.029-1.027c-.184-6.618-3.736-8.977-7-8.977zm2.116-1.726C19.452 8.63 20 7.632 20 6.5 20 4.57 18.433 3 16.5 3S13 4.57 13 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73z"></path>
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>
                  </g>
                </svg>
              )}

              {segment === "communities" ? <MenuContentSelected>Communities</MenuContentSelected> : <MenuContent>Communities</MenuContent>}
            </Menu>
          </MenuLink>
          <MenuLink href="/premium">
            <Menu>
              {segment === "/premium" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </g>
                </svg>
              )}

              {segment === "premium" ? <MenuContentSelected>Premiu,</MenuContentSelected> : <MenuContent>Premium</MenuContent>}
            </Menu>
          </MenuLink>
          <MenuLink href={`/${me?.user.email}`}>
            <Menu>
              {segment === "profile" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path>
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                  </g>
                </svg>
              )}

              {segment === "profile" ? <MenuContentSelected>Profile</MenuContentSelected> : <MenuContent>Profile</MenuContent>}
            </Menu>
          </MenuLink>
          <MenuLink href="/more">
            <Menu>
              {segment === "/more" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true" width="1.75rem" height="1.75rem">
                  <g>
                    <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
                  </g>
                </svg>
              )}
              {segment === "more" ? <MenuContentSelected>More</MenuContentSelected> : <MenuContent>More</MenuContent>}
            </Menu>
          </MenuLink>
          <ComposeTweet
            href="/compose/tweet"
            scroll={false}
            onClick={() => {
              modalStore.setModal("post");
            }}
          >
            <span>게시하기</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" width="24px">
              <g>
                <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
              </g>
            </svg>
          </ComposeTweet>
        </>
      ) : null}
    </Menus>
  );
}

const Menus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  width: 100%;

  display: flex;
  justify-content: center;

  &:hover {
    & > div {
      background-color: rgba(15, 20, 25, 0.1);
      border-radius: 9999px;
    }
  }

  @media (min-width: 1295px) {
    justify-content: flex-start;
  }
`;

const Menu = styled.div`
  /* flex-grow: 1; */
  cursor: pointer;
  padding: 12px;

  display: flex;
`;

const MenuContent = styled.div`
  display: none;
  align-items: center;

  margin: 0 16px 0 20px;
  max-width: 100%;
  min-width: 0px;

  font-size: 20px;
  color: rgba(15, 20, 25, 1);
  line-height: 24px;

  @media (min-width: 1295px) {
    display: flex;
  }
`;

const MenuContentSelected = styled(MenuContent)`
  font-weight: 700;
  display: none;
  @media (min-width: 1295px) {
    display: inline-block;
  }
`;

const ComposeTweet = styled(Link)`
  text-decoration: none;
  height: 52px;
  width: 65px;
  margin: 16px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 9999px;
  background-color: rgb(29, 155, 240);
  &:hover {
    background-color: rgb(26, 140, 216);
  }

  span {
    display: none;
  }

  svg {
    fill: rgb(255, 255, 255);
  }

  @media (min-width: 1295px) {
    width: 235px;
    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: inherit;
      min-width: 52px;
      height: inherit;

      color: white;
      cursor: pointer;
      padding: 0 32px;
      font-size: 15px;
    }

    svg {
      display: none;
    }
  }
`;
