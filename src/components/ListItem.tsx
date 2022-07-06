import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IPerson } from '../types/IPerson';
import Avatar from '@mui/material/Avatar';

interface IProps {
	person: IPerson;
}

const ListItem: React.FC<IProps> = ({ person })  => {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
						{person.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
						{person.note}
          </Typography>
        </CardContent>
      </Box>
			<Box pr={4} pb={2}>
				{/* <CardMedia
					component="img"
					sx={{ width: 151 }}
					image={person.imageUrl}
					alt="Live from space album cover"
				/> */}
				<Avatar variant={"rounded"} alt="The image" src={person.imageUrl} style={{
					width: 200,
					height: 200,
				}} />
			</Box>
    </Card>
  );
}

export default ListItem