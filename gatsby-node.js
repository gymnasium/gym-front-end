/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const createMDXNode = require('gatsby-plugin-mdx/utils/create-mdx-node');

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
        course,
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
  const take5Template = path.resolve('./src/templates/Take5/Take5Page.js');

  return graphql(`
    {
      takeshape {
        take5s: getTake5List {
          items {
            _id
            title
            transcript
          }
        }
        gymShorts: getGymShortList {
          items {
            _id
            title
            author {
              bioHtml
              displayName
              workplace
              photo {
                path
              }
            }
            coursePreviewVideoUrl
            courseNumber
            courseUrlSuffix
            courseType {
              color {
                hex
              }
            }
            coverImage {
              path
            }
            descriptionHtml
            shortDescriptionHtml
            syllabus
            thisCourseIsFor {
              attribute
            }
          }
        }
        courses: getFullCourseList {
          items {
            _id
            title
            author {
              bioHtml
              displayName
              workplace
              photo {
                path
              }
            }
            courseNumber
            coursePreviewVideoUrl
            courseUrlSuffix
            courseType {
              color {
                hex
              }
            }
            coverImage {
              path
            }
            descriptionHtml
            shortDescriptionHtml
            syllabus
            thisCourseIsFor {
              attribute
            }
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
    const { courses, blogPosts, gymShorts, take5s } = takeshape;

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

    take5s.items.forEach((take5, idx) => {
      console.log(`5️⃣ found take5 ${take5.title} with id ${take5._id}`);
      const sanitizedTitle = getUrlFromTitle(take5.title);

      const path = `${CONSTANTS.URLS.COURSES.TAKE_FIVE}${sanitizedTitle}`;
      createPage({
        path, // requied to tell gatsby where to render this page
        component: take5Template,
        context: {
          id: take5._id,
          type: 'take5',
          markdown: take5.transcript,
          path, // required to look up children of this page from context to render markdown from transcript
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

exports.onCreateNode = async ({
  node,
  actions,
  createNodeId,
  loadNodeContent,
}) => {
  const { createNode, createParentChildLink } = actions;
  if (node.internal.type === 'SitePage') {
    if (
      node.context &&
      node.context.type === 'take5' &&
      node.context.markdown
    ) {
      const mdxNode = await createMDXNode({
        id: createNodeId(`${node.id} >>> Mdx`),
        node,
        content: node.context.markdown,
      });
      createNode(mdxNode);
      createParentChildLink({ parent: node, child: mdxNode });
    }
  }
  // do any checks for which content you want to transform here
};
