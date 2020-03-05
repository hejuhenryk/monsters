import React from "react";
import styled, {keyframes} from "styled-components";

export type MonsterT = {
  name: string;
  age: number;
  facts: string[];
  picSrc: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
};

export const Monster: React.FC<MonsterT> = props => {
  const [isExtended, setIsExtended] = React.useState(false);
  return (
    <MonsterCard onClick={() => setIsExtended(!isExtended)}>
      <div>
        <div className="monsterPicture">
          <span><props.picSrc aria-labelledby={`monster named ${props.name}`}/></span>
        </div>
        <div className={isExtended ? "additionalInfo" : "additionalInfo hide"}>
          {props.facts.map((f,i) => (
            <li key={i}>{f}</li>
          ))}
        </div>
      </div>

      <div>
        <p>name</p>
        <span>
          <p>{props.name}</p>
        </span>
      </div>
      <div>
        <p>age</p>
        <span>
          <p>{props.age}</p>
        </span>
      </div>
    </MonsterCard>
  );
};

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, -1px, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, -2px, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 1px, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 3px, 0);
  }
`

const MonsterCard = styled.div`
  display: flex;
  align-self: center; 
  flex-direction: column;
  border: 4px double #ddd;
  box-shadow: 6px 6px 10px 3px #00000020;
  width: fit-content;
  margin: 1rem auto;
  @media (max-width: 500px ) {
        width: 90%;
    }
  & > div {
    display: flex;
    justify-content: space-between;
    @media (max-width: 500px ) {
        flex-direction: column;
    }
    p {
      margin: 0.2rem 0.5rem;
    }
    span > p {
      margin: 0.2rem 0.5rem;
      font-weight: bold;
      text-transform: capitalize;
    }
  }
  .monsterPicture {
    justify-content: center;
    border-bottom: 4px double #ddd;
    display: flex;
    padding: 2rem 1rem;
    max-height: 10rem;
    svg {
      height: 10rem;
      transition: height 0.5s ease-in;
      filter: drop-shadow( 4px 5px 5px rgba(0, 0, 0, .7));
    }
    span:hover {
      cursor: pointer;
      animation: ${shake} 1s ease-in-out 0s infinite;
    }
  }
  .additionalInfo {
    width: 10rem;
    border-bottom: 4px double #ddd;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 13.4rem;
    padding: 0.3rem;
    overflow: hidden;
    transition: all .5s linear;
    li {
        padding: 0 .4rem;
    }
    @media (max-width: 500px ) {
        width: 100%;
        /* padding: 0; */
    }
  }
  .hide {
    width: 0;
    @media (max-width: 500px ) {
        width: 100%;
        height: 0;
    }
    * {
      display: none;
    }
  }
`;
