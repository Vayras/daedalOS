/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { type MacActions } from "types";
import user from "configs/user";

export const Login = (props: MacActions) => {
  const Flex = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("img/ui/wallpaper-day.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `;

  const UserAvatarContainer = styled.div`
    display: inline-block;
    width: auto;
    position: absolute;
    top: 36%;
    margin-top: -30px;
  `;

  const AvatarImage = styled.img`
    border-radius: 9999px;
    width: 96px;
    height: 96px;
    margin: 0 auto;
  `;

  const UserName = styled.div`
    font-weight: bold;
    margin-top: 8px;
    font-size: 20px;
    color: white;
  `;

  const PasswordInputContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 11rem; /* Converted 44 to rem */
    height: 2rem; /* Converted 8 to rem */
    margin-top: 1rem; /* Converted 4 to rem */
    border-radius: 0.375rem; /* Converted rounded-md to rem */
    backdrop-filter: blur(10px); /* Converted backdrop-blur-2xl to px */
    background-color: rgba(
      209,
      213,
      219,
      0.5
    ); /* Converted bg-gray-300/50 to rgba */

    input {
      font-size: 0.875rem; /* Converted text-sm to rem */
      color: white;
      grid-column-start: 1;
      grid-column-end: 5;
      outline: none;
      background-color: transparent;
      padding-left: 0.5rem; /* Converted px-2 to rem */
    }
    ::placeholder {
      color: white;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-column-start: 5;
      grid-column-end: 6;
    }

    span {
      color: white;
      margin-left: 0.25rem; /* Converted ml-1 to rem */
    }
  `;

  const Text = styled.p`
    font-size: 14px;
    margin-top: 5px;
  `;

  const ButtonContainer = styled.div`
    position: fixed;
    bottom: 75px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    max-width: fit-content;

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  `;

  const ButtonWrapper = styled.div`
    width: 6rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    gap: 10px;

    &:hover {
    }

    span:last-child {
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }
  `;

  const ButtonIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;

    span {
      font-size: 2.5rem;
    }

    &:hover {
    }
  `;

  const [password, setPassword] = useState("");
  const [sign, setSign] = useState("Click to enter");

  const loginHandle = () => {
    if (user.password === "" || user.password === password) {
      props.setLogin(true);
    } else if (password !== "") {
      setSign("Incorrect password");
    }
  };
  const keyPress = (e: React.KeyboardEvent) => {
    const keyCode = e.key;
    if (keyCode === "Enter") loginHandle();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <Flex onClick={() => loginHandle()}>
      <UserAvatarContainer>
        {/* Avatar */}
        <AvatarImage alt="img" src={user.avatar} />
        <UserName>{user.name}</UserName>
        {/* Password Input */}
        <PasswordInputContainer>
          <input
            onChange={handleInputChange}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={keyPress}
            placeholder="Enter Password"
            type="password"
            value={password}
          />
          <div>
            <Icon icon="ph:question-mark-fill" style={{ fontSize: "26px" }} />
          </div>
        </PasswordInputContainer>
        <Text>{sign}</Text>
      </UserAvatarContainer>

      <ButtonContainer>
        <ButtonWrapper onClick={props.sleepMac}>
          <ButtonIcon>
            <Icon icon="gg:sleep" style={{ fontSize: "36px" }} />
          </ButtonIcon>
          Sleep
        </ButtonWrapper>

        <ButtonWrapper onClick={props.restartMac}>
          <ButtonIcon>
            <Icon icon="ri:restart-line" style={{ fontSize: "36px" }} />
          </ButtonIcon>
          Restart
        </ButtonWrapper>

        <ButtonWrapper onClick={props.shutMac}>
          <ButtonIcon>
            <Icon icon="ri-shut-down-line" style={{ fontSize: "36px" }} />
          </ButtonIcon>
          Shut Down
        </ButtonWrapper>
      </ButtonContainer>
    </Flex>
  );
};
