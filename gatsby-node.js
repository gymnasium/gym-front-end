/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const { getUrlFromTitle } = require('./src/utils/urlUtils');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // import each of the page types to be rendered on the site
  const courseAboutTemplate = path.resolve(
    './src/templates/Course/CourseAboutPage.js'
  );
  const blogPostTemplate = path.resolve(
    `./src//templates/Blog/BlogPostPage.js`
  );

  return graphql(`
    {
      takeshape {
        courses: getFullCourseList {
          items {
            _id
            title
            courseNumber
            courseUrlSuffix
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
    const { courses, blogPosts } = takeshape;

    if (result.errors) {
      return Promise.reject(result.errors);
    }

    courses.items.forEach((course, idx) => {
      console.log(`🔥 found course ${course.title} with id ${course._id}`);
      createPage({
        path: `courses/${course.courseNumber}`,
        component: courseAboutTemplate,
        context: {
          id: course._id,
          courseUrlSuffix: course.courseUrlSuffix,
          type: 'courseAbout',
        },
      });
    });

    blogPosts.items.forEach((post, idx) => {
      console.log(`🔥 found blog post ${post.title} with id ${post._id}`);
      const sanitizedTitle = getUrlFromTitle(post.title);
      createPage({
        path: `blog/post/${sanitizedTitle}`,
        component: blogPostTemplate,
        context: {
          id: post._id,
          type: 'blogPost',
        },
      });
    });

    return {
      courses: courses.items,
      blogPosts: blogPosts.items,
    };
  });
};
