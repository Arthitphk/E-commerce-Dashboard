import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import RatinginMonth from '../Components/RatinginMonth'
import RatinginDays from '../Components/RatinginDays'
import Stack from '@mui/material/Stack';
import Topselling from '../Components/Topselling'
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import Button from '@mui/material/Button';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import CallMissedIcon from '@mui/icons-material/CallMissed';

export default function Content() {
  return (
    <div>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={4}>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography color="text.secondary" variant="h3" >
                          Total Sale
                        </Typography>
                        <Button variant="outlined" color="success"  size="small">
                          4.54% <CallMissedOutgoingIcon />
                        </Button>
                        <Typography variant="h5" component="div">
                          <Box sx={{ flexGrow: 1 }}>
                            <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
                          </Box>
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Latest from Jan 01,2024 - March 21,2024
                        </Typography>
                        <Typography variant="h4">
                            $1,000,000.00
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                  <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography variant="h3" color="text.secondary" >
                          Product Sold 
                        </Typography>
                        <Button variant="outlined" color="success"  size="small">
                          3.81% <CallMissedOutgoingIcon />
                        </Button>
                        <Typography variant="h5" component="div">
                        <Box sx={{ flexGrow: 1 }}>
                            <SparkLineChart data={[1, 7, 4, 8, 7, 9, 2, 8]} height={100} />
                        </Box>
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Latest from Jan 01,2024 - March 21,2024
                        </Typography>
                        <Typography variant="h4">
                            $1,000,000.00
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                  <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography variant="h3" color="text.secondary" >
                          Customer
                        </Typography>
                        <Button variant="outlined" color="error"  size="small">
                          2.50% <CallMissedIcon />
                        </Button>
                        <Typography variant="h5" component="div">
                        <Box sx={{ flexGrow: 1 }}>
                            <SparkLineChart data={[1, 3, 4, 5, 2, 1, 7 , 8]} height={100} />
                        </Box>
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Latest from Jan 01,2024 - March 21,2024
                        </Typography>
                        <Typography variant="h4">
                            User: 450,876
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>



                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop='50px'>
                  <Grid item xs={6}>
                      <Card>
                        <CardContent>
                          <RatinginMonth/>
                        </CardContent>
                      </Card> 
                  </Grid>
                  <Grid item xs={6}>
                    <Card>
                      <CardContent>
                          <RatinginDays/>
                      </CardContent>
                    </Card> 
                  </Grid>
  
                </Grid>
                    
                  
                <Typography variant="h2" gutterBottom marginTop='50px'>
                    Top Selling
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Topselling/>
                  <Topselling/>
                  <Topselling/>
                  <Topselling/>
                  <Topselling/>
                </Stack>


    </div>

  );
}