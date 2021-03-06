import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NotFoundPage from './NotFoundPage';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid({ product }) {
    // console.log(data); 
    return (
        <>
            <div></div>
            {product == false ? <NotFoundPage message={"Нет товаров"} /> :
                <Box sx={{ flexGrow: 1, ml: 10, mr: 10, mt: 7 }} style={{ color: 'grey' }}>


                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        {Array.from(product.content).map((item, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Item>{item.name}</Item>
                            </Grid>
                        ))}


                    </Grid>

                </Box>}
        </>
    );
}