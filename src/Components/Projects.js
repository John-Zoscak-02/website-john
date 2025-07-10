import * as React from 'react';
import { Card, CardMedia, CardContent, CardActionArea, CardHeader, Typography } from '@mui/material';
import {Fade} from 'react-reveal';
import { projectData } from '../data/data';
import Center from '../svgs/center.svg';

const Projects = (props) => {
  const handleCardClick = (url) => {
    setTimeout(function(){}, '1000');
    window.open(url, "_blank")
  }

  return (
    <div className='projects' ref={props.compRef} >
      <div class="divider-grid">
          <div class="divider left"></div>
          <img className="top-center center" src={Center} alt="floral center"></img>
          <div class="divider right"></div>
      </div>
      <Typography variant='h3'>Programming Projects</Typography>
      <div className='projects-container'>
        {projectData.map((data, key) => {
          return (
            <Fade key={key}>
              <Card className='project-card' onClick={() => handleCardClick(data.link)}>
                <CardActionArea>
                  <section className='project'>
                    <Fade right>
                      <CardHeader title={data.name} />
                    </Fade>
                    <Fade>
                      <CardMedia component="img" image={data.image} alt='project' />
                    </Fade>
                    <Fade bottom>
                      <CardContent>
                        <Typography variant='body1' component='p'>{data.description}</Typography>
                      </CardContent>
                    </Fade>
                  </section>
                </CardActionArea>
              </Card>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;