import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ Productos }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia component='img' image={Productos.img} alt={Productos.nombre} />
				<CardContent>
					<Typography gutterBottom variant='h6' component='div'>
                        {Productos.nombre}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
                        ${Productos.precio}
					</Typography>
					<Link to={`/detail/${Productos.id}`} className='Link'>
					<button>Ver Descripción</button>
					</Link>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default Item;