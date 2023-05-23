import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';

const Contact = () => {

  return (
    <Container>
      <Header />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom mt={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ultricies risus. Fusce gravida justo vel ex porta, id bibendum tortor iaculis. Integer congue lectus vel urna ullamcorper dapibus. Cras malesuada velit sed augue fringilla, nec consectetur tortor ullamcorper. In non sem auctor, condimentum mauris sed, varius velit. Vivamus eu tristique arcu. Integer blandit sapien sed odio interdum, eu pulvinar nunc vestibulum. In iaculis pulvinar tellus ut dignissim. Maecenas dapibus felis id lorem elementum, sed viverra justo interdum.

          Nunc eget ultricies eros. Morbi in ex eu nulla tincidunt semper. Praesent consequat feugiat tortor, sit amet gravida orci. Nulla cursus nulla eget dolor facilisis, et eleifend turpis maximus. Mauris convallis lorem id congue viverra. Aliquam erat volutpat. Nullam varius convallis massa sed malesuada. Phasellus a fringilla dui. Suspendisse nec ullamcorper orci.

          Donec convallis risus vitae fermentum iaculis. Sed nec tincidunt urna. Integer id pellentesque quam. Curabitur rhoncus libero sed pharetra ullamcorper. Quisque aliquam tortor vitae malesuada congue. Aliquam aliquam odio vitae felis gravida faucibus. Sed feugiat volutpat felis non laoreet. Phasellus pharetra, velit at viverra posuere, enim elit maximus ante, a ultricies dui lectus vel mi. Cras feugiat, nulla eu euismod mattis, arcu nunc sollicitudin felis, ac semper metus purus sed turpis. Aliquam at fringilla justo.

          Vestibulum sed nisi nec nisl eleifend pulvinar. Vivamus cursus eleifend odio vitae tincidunt. In tincidunt orci sit amet metus consectetur tristique. Aenean faucibus risus ac velit bibendum, eget laoreet nisl ullamcorper. Integer hendrerit consequat dolor, in semper sem. Nullam eleifend lacinia nibh, vel pulvinar quam ullamcorper ac. Pellentesque in

          </Typography>
          <h2>Contact Information</h2>
          <p><b>Name:</b> John Doe</p>
          <p><b>Email:</b> johndoe@example.com</p>
          <p><b>Phone:</b> +1 123-456-7890</p>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default Contact;
