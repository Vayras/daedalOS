/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

interface BootProps {
  restart: boolean;
  setBooting: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  sleep: boolean;
}

export const Boot = ({ restart, setBooting, sleep }: BootProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    if (restart && !sleep) {
      setLoading(true);
      setPercent(0); // Reset percent when boot starts
    }
  }, [restart, sleep]);

  const handleClick = () => {
    if (sleep) {
      setBooting(false);
    } else if (restart || loading) return;
    else {
      setLoading(true);
    }
  };

  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Message = styled.div`
    transform: translateY(-50%);
    text-align: center;
    color: #cccccc;

    @media (min-width: 640px) {
      margin-top: 24px;
    }
  `;

  const ProgressBarContainer = styled.div`
    position: absolute;
    top: 50%;
    inset-x: 0;
    width: 14rem; /* 56 / 4 = 14rem */
    height: 0.25rem; /* 1px = 0.25rem */

    @media (min-width: 640px) {
      height: 0.375rem; /* sm:h-1.5 */
    }

    background-color: #6b7280; /* bg-gray-500 */
    border-radius: 0.25rem; /* rounded */
    overflow: hidden;
    margin-top: 4rem; /* t-16 = 4rem */

    @media (min-width: 640px) {
      margin-top: 6rem; /* sm:t-24 = 6rem */
    }

    margin-inline: auto; /* x-auto */
  `;

  const ProgressBarFill = styled.span<{ percent?: number }>`
    position: absolute;
    top: 0;
    background-color: white;
    height: 100%;
    border-radius: 0.125rem;
    width: ${(props) => props.percent}%;
  `;

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (loading) {
      intervalId = setInterval(() => {
        setPercent((prev) => {
          if (prev >= 100) {
            clearInterval(intervalId);
            setBooting(false);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [loading, setBooting]);

  useEffect(() => {
    if (restart && !sleep) {
      setLoading(true);
      setPercent(0);
    }
  }, [restart, sleep]);

  return (
    <Container onClick={handleClick}>
      <Icon
        color="white"
        icon="ic:baseline-apple"
        style={{ fontSize: "150px" }}
      />
      {loading && (
        <ProgressBarContainer>
          <ProgressBarFill percent={percent} />
        </ProgressBarContainer>
      )}
      {!restart && !loading && (
        <Message
          onClick={() => {
            setBooting(true);
          }}
        >
          Click to {sleep ? "wake up" : "boot"}
        </Message>
      )}
    </Container>
  );
};
