import React from 'react';
import { styled } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';
import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner data-testid='banner' />
      <ContentWrapper container spacing={4} data-testid='content-wrapper'>
        <Grid item xs={12} md={6}>
          <div>
            <Typography variant="body1" sx={{ textAlign: 'justify', marginBottom: '20px' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <Video >
              <iframe width="100%" height="250px" src="https://www.youtube.com/embed/4jgOymrtUFk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </Video>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image className="image" src="https://picsum.photos/150/150" alt="Placeholder Image" />
            <Typography variant="body1" sx={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.</Typography>
          </div>
        </Grid>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

const Banner = styled('div')`
  height: 300px;
  background-color: #f2f2f2;
  background-image: url('https://picsum.photos/1200/300');
`;

const ContentWrapper = styled(Grid)`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const Image = styled('img')`
  width: 150px;
  height: auto;
  margin-right: 10px;
`;

const Video = styled('div')`
  width: 100%;
  height: 100%;
`;

export default Home;
