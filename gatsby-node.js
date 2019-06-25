/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const { getUrlFromTitle } = require('./src/utils/urlUtils');
const CONSTANTS = require('./src/utils/constants');

const generateCoursePages = ({ courses, actions }) => {
  const { createPage } = actions;

  // import each of the page types to be rendered on the site
  const courseAboutTemplate = path.resolve(
    './src/templates/Course/CourseAboutPage.js'
  );

  courses.items.forEach(course => {
    console.log(`🔥 found course ${course.title} with id ${course._id}`);

    // generate URL of format courses/100/coding-for-designers
    const url = `${CONSTANTS.URLS.COURSES.LIST}${
      course.courseNumber
    }/${getUrlFromTitle(course.title)}`;

    createPage({
      path: url,
      component: courseAboutTemplate,
      context: {
        course: course,
        id: course._id,
        courseUrlSuffix: course.courseUrlSuffix,
        type: 'courseAbout',
      },
    });
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(
    `./src//templates/Blog/BlogPostPage.js`
  );

  return graphql(`
    {
      takeshape {
        gymShorts: getGymShortList {
          items {
            _id
            title
            courseNumber
            courseUrlSuffix
            descriptionHtml
            shortDescription
            syllabus
          }
        }
        courses: getFullCourseList {
          items {
            _id
            title
            courseNumber
            courseUrlSuffix
            descriptionHtml
            shortDescription
            syllabus
          }
        }
        blogPosts: getBlogPostList {
          items {
            _id
            title
          }
        }
      }
    }
  `).then(result => {
    const { takeshape } = result.data;
    const { courses, blogPosts, gymShorts } = takeshape;

    if (result.errors) {
      return Promise.reject(result.errors);
    }

    generateCoursePages({ courses, actions });
    generateCoursePages({ courses: gymShorts, actions });

    blogPosts.items.forEach((post, idx) => {
      console.log(`🔥 found blog post ${post.title} with id ${post._id}`);
      const sanitizedTitle = getUrlFromTitle(post.title);
      createPage({
        path: `${CONSTANTS.URLS.BLOG.SINGLE_POST}${sanitizedTitle}`,
        component: blogPostTemplate,
        context: {
          id: post._id,
          type: 'blogPost',
        },
      });
    });

    return {
      courses: courses.items,
      gymShorts: gymShorts.items,
      blogPosts: blogPosts.items,
    };
  });
};
