import React from 'react'
import styled from 'styled-components'
import {Monster} from './Monster'
import {MonsterT} from './App'

type MonstersPropsT = {
    monsters: MonsterT[]
}


export const Monsters: React.FC<MonstersPropsT> = (props) => {
    return (
        <MonstersList>
           {props.monsters.map((m,i)=><Monster key={i} {...m} />)}
        </MonstersList>
    )
}

const MonstersList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`