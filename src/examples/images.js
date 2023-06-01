import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained / default</h4>

        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="traceSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
        <h2>image</h2>
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="blurred"
          layout="fixed"
          width={200}
          className="example-img"
          as="div"
        />
        <h2>image</h2>
      </article>
      <article>
        <h4>constrained / default</h4>
        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="dominantColor"
          layout="fullwidth"
          width={200}
          className="example-img"
          as="article"
        />
        <h2>image</h2>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1 rem;
    height: 300px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default Images;