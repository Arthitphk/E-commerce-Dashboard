import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg"
          alt="Product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Product
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus corrupti quas aut ab hic.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See More
        </Button>
      </CardActions>
    </Card>
  );
}
