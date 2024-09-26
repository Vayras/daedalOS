/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

/* eslint-disable react-hooks/exhaustive-deps */
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
  let intervalId: string | number | NodeJS.Timeout | undefined;

  useEffect(() => {
    if (restart && !sleep) setLoading(true);
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

  const ProgressBar = styled.progress`
    width: 200px;
    height: 5px;
    margin-top: 10px;
    border-radius: 10px;
  `;

  useEffect(() => {
    const startIncrement = () => {
      intervalId = setInterval(() => {
        setPercent((prev) => Math.min(prev + 0.01, 1));
      }, 10);
    };
    const stopIncrement = setTimeout(() => {
      clearInterval(intervalId);
    }, 3000);

    if (restart) {
      startIncrement();
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(stopIncrement);
    };
  }, []);

  useEffect(() => {
    if (percent >= 1) {
      setBooting(false);
    }
  });
  return (
    <Container onClick={handleClick}>
      <Icon
        color="white"
        icon="ic:baseline-apple"
        style={{ fontSize: "150px" }}
      />
      {loading && <ProgressBar value={percent} />}
      {!restart && !loading && (
        <Message>Click to {sleep ? "wake up" : "boot"}</Message>
      )}
    </Container>
  );
};
