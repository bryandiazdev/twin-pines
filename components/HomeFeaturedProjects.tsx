// components/HomeFeaturedProjects.tsx
import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import styles from './HomeFeaturedProjects.module.css';
const featuredProjects = [
  {
    title: 'Pool Cabana',
    description: '',
    image: '/pool.jpg',
  },
  {
    title: 'Front Yard - Grand Entrance',
    description: '',
    image: '/yard.jpg',
  },
  {
    title: 'Modern Waterfront',
    description: '',
    image: '/waterfront.png',
  },
];

const HomeFeaturedProjects: React.FC = () => {
  return (
    <Container sx={{marginTop: '2rem', marginBottom: '80px'}}>
      <Typography sx={{fontFamily: 'PT serif'}} variant="h2" align="center" gutterBottom>
        Featured Projects
      </Typography>

      <Grid container spacing={3}>
        {featuredProjects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={styles.projectCard}>
              <CardMedia
                className={styles.cardImage}
                component="img"
                height="300"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography sx={{fontFamily: 'PT serif'}} variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography sx={{fontFamily: 'PT serif'}} variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeFeaturedProjects;
