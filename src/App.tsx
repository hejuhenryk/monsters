import React, { useState } from "react";
import { ReactComponent as Logo } from "./kidaha-05.svg";
import { ToggleBar } from "./ToggleBar";
import { Switch, Route, NavLink, RouteComponentProps } from "react-router-dom";
import { Monsters } from "./Monsters";
import { monstersData } from "./srcMonsters";
import { Monster } from "./Monster";

export type MonsterT = {
  name: string;
  age: number;
  facts: string[];
  picSrc: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
};

const App = () => {
  const [monsters] = useState(monstersData);
  const getMonster = (props: RouteComponentProps<{ name: string }>) => {
    const name = props.match.params.name.toLowerCase();
    const monster = monsters.find(m => m.name.toLowerCase() === name);
    if (monster) return <Monster {...monster} />;
    else
      return (
        <h1 style={{ position: "relative", top: "34vh", textAlign: "center" }}>
          did not find
        </h1>
      );
  };
  return (
    <>
      <ToggleBar logo={<Logo />}>
        <NavLink exact activeClassName="activeLink" to="/monsters">
          All Monsters
        </NavLink>
        {monsters.map((m, i) => (
          <NavLink
            exact
            activeClassName="activeLink"
            key={i}
            to={`/monsters/${m.name}`}
          >
            {<m.picSrc style={{height: '2rem'}}/>}
          </NavLink>
        ))}
      </ToggleBar>
      {/* <Monster {...monsters[1] } /> */}
      {/* {/* logo={} nav={} */}
      <Switch>
        <Route exact path="/monsters/:name" render={getMonster} />
        <Route
          exact
          path="/monsters"
          render={() => <Monsters monsters={monsters} />}
        />
      </Switch>
    </>
  );
};

export default App;
