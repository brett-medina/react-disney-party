import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import List from './components/List';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { IPerson } from './types/IPerson';
import Grid from '@mui/material/Grid'

interface IState {
  people: IPerson[]; 
}

function App() {
  const initialPeople: IState['people'] = [
    {
      name: "Bobby Le",
      age: 24,
      note: "My Love!",
      imageUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8D5F7F0FC035BAA9D28E10884D9EA897542417736A09B04D4A58EAAD473F9B8/scale?width=300&aspectRatio=1.00&format=png"
    },
    {
      name: "Brett Medina",
      age: 23,
      note: "This is me. A lost soul.",
      imageUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6D599ED6592198B026E56700EA04CB8D583C5B934F08C5432B1877554E89D527/scale?width=300&aspectRatio=1.00&format=png"
    },
    {
      name: "Baymax",
      age: 100,
      note: "This will be Bub when she's a PA!",
      imageUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/48A531D5FA06BD087151D82A68AA98FFC6BBE16D342DFF4AA09FDCEB8D8F59E8/scale?width=300&aspectRatio=1.00&format=png"
    },
    {
      name: "Doug",
      age: 5,
      note: "Woof!",
      imageUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B1CBFF3F397FF5A8CA180BE6404FFBBF42C5C8408176330CC8AAF43FAB40A0C/scale?width=300&aspectRatio=1.00&format=png"
    },
  ];

  const [people, setPeople] = useState<IState['people']>(initialPeople);

  return (
    <div>
      <ResponsiveAppBar />
      <Grid container spacing={2}>
        <Grid item md={3} lg={4} xl={4}></Grid>
        <Grid item md={6} lg={4} xl={4}>
          <List people={people}/>
          <Input people={people} setPeople={setPeople}/>
        </Grid>
        <Grid item md={3} lg={4} xl={4}></Grid>
      </Grid>
    </div>
  );
}

export default App;
