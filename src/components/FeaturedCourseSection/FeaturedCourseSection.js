import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Box, SimpleGrid, Stack, useTheme } from '@chakra-ui/core';
import { Container } from 'react-bootstrap';

import { H2, Button } from '@gymnasium/gym-ui';
import { FeaturedCourse, Microcopy } from '..';

import classes from './FeaturedCourseSection.module.css';

const FeaturedCourseSection = ({ courses }) => {
  const theme = useTheme();

  if (!courses) return null;

  return (
    <Box marginTop="-4em" backgroundColor="var(--gym-light-page-background)">
      <Container>
        <header className={classes.featuredCoursesTitleContainer}>
          <H2>Featured Courses</H2>
        </header>
        <section id="featured-courses" className={classes.featuredCourses}>
          <SimpleGrid columns={[1, 2, 2, 4]} spacing={theme.space[3]}>
            {courses.items.map(course => (
              <FeaturedCourse course={course} key={course._id} />
            ))}
          </SimpleGrid>

          <Stack
            width={['100%', 10 / 12]}
            spacing={theme.space[4]}
            marginLeft="auto"
            marginRight="auto"
          >
            <Microcopy
              component="p"
              className={classes.viewCoursesPrompt}
              title="home-page-view-courses-prompt"
            />
            <Box margin="auto">
              <Link to="/courses">
                <Button>View all courses</Button>
              </Link>
            </Box>
          </Stack>
        </section>
      </Container>
    </Box>
  );
};

FeaturedCourseSection.propTypes = {
  courses: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

export default FeaturedCourseSection;
