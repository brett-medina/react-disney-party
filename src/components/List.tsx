import Grid from '@mui/material/Grid'
import createTheme from '@mui/material/styles/createTheme'
import Box from '@mui/material/Box';
import React from 'react'
import { IPerson } from '../types/IPerson'
import ListItem from './ListItem'

interface IProps {
  people: IPerson[] 
}

const List: React.FC<IProps> = ({ people }) => {
  const theme = createTheme();
  theme.spacing(3); // `${8 * 2}px` = '16px'


  const renderList = (): JSX.Element[] => {
    return (
      people.map((person) => {
        return (
          <li>
              <Box pb={3}>
                <ListItem person={person}/>
              </Box>
          </li>
        )
      })
    )
  }

  return (
    <ul className="List-nobullets">{renderList()}</ul>
  )
}

export default List