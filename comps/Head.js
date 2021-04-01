import React from "react";
import styled from '@emotion/styled';
import { useRouter } from "next/router";

const Container = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: Helvetica, sans-serif;
  background-color: #fff;
  margin-bottom: 1.5rem;
  z-index: -2;
  .back_btn {
    margin-right: 20px;
    border: none;
    outline: none;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    color: white;
    background-color: #e9463f;
    cursor: pointer;
  }
`;
const Pokeball = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 5px;
`;
const PokedexTittle = styled.h1`
  color: #e9463f;
  margin-top: 10px;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const Head = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Container>
      <PokedexTittle
        onClick={() => {
          router.push("/");
        }}
      >
        {router.pathname === "/" ? null : (
          <button
            className="back_btn"
            onClick={() => {
              router.back();
            }}
          >
          
          </button>
        )}
        <Pokeball src="/images/pokebola.png" alt="Logo" />
        Pokedex NextJs
      </PokedexTittle>
     
    </Container>
  );
};

export default Head;
