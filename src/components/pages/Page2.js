import React from 'react';
import './Page2.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

function Page2() {
    return (
        <Box className='page2'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader title="WhatsApp Clone"/>
                        <CardMedia
                            className='page2__img1'
                            component="img"
                            height="194"
                            image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/whatsapp-design-template-a62f0bf703ae0061d9754c93653c510a_screen.jpg?ts=1585224864"
                            alt="whatsapp logo"
                        />
                        <CardContent>
                            Implemented using the MERN stack. Additional technologies include MUI library for icon images, Pusher to replicate a real time database with MongoDB, and Firebase for authentication.
                            <br />
                            <a href='https://whatsapp-frontend-850cb.firebaseapp.com/'>Link to project </a>
                            <br />
                            <a href='https://github.com/phuhaha7/whatsapp_frontend'>Front end repo</a>
                            <br />
                            <a href='https://github.com/phuhaha7/whatsapp_backend'>Back end repo</a>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader title="Java Spring Boot API"/>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://repository-images.githubusercontent.com/259018719/0663e880-8a02-11ea-9c75-44ca9a90cc1f"
                            alt="Spring Boot logo"
                        />
                        <CardContent>
                            Built a back end with Spring Boot, JPA, and PostgeSQL that perform CRUD operations on a students database.
                            <br />
                            <a href='https://github.com/phuhaha7/Java_rest_api_with_jpa'>Link to repo</a>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader title="Personal Website"/>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://reactjs.org/logo-og.png"
                            alt="Paella dish"
                        />
                        <CardContent>
                            Project with React
                            <br />
                            <a href='https://github.com/phuhaha7/personal_website'>Link to repo</a>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Page2;