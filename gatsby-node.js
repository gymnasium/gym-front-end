/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // import each of the page types to be rendered on the site
  const courseAboutTemplate = path.resolve(
    './src/templates/Course/CourseAboutPage.js'
  );

  return graphql(`
    {
      takeshape {
        courses: getFullCourseList {
          items {
            _id
            title
            syllabus
            courseNumber
            descriptionHtml
            shortDescription
            courseUrlSuffix
          }
        }
      }
    }
  `).then(result => {
    const { takeshape } = result.data;
    const { courses } = takeshape;

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
          type: 'courseAbout',
        },
      });
    });

    return courses.items;
  });
};
