import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { find } from 'lodash';

export const getMicrocopy = (title, microcopyDictionary) => {
  // iterate over the dictionary we got back until we find something that matches the input title
  const foundCopy = find(microcopyDictionary, microcopyEntry => {
    return microcopyEntry.title.toLowerCase() === title.toLowerCase();
  });

  if (!foundCopy) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(
        `No dictionary entry found for id '${title}'.  Falling back to using just the title.  Double check takeshape to make sure there is a microcopy entry with this title!`
      );
    }
    return title;
  }

  return foundCopy.bodyHtml;
};

const Microcopy = ({ component: Component = 'div', title, data, ...rest }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          takeshape {
            microcopyDictionary: getMicrocopyList {
              items {
                title
                bodyHtml
              }
            }
          }
        }
      `}
      render={subdata => {
        const { microcopyDictionary } = subdata.takeshape;
        const microcopy = getMicrocopy(title, microcopyDictionary.items);
        return (
          <Component
            dangerouslySetInnerHTML={{ __html: microcopy }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
          />
        );
      }}
    />
  );
};

Microcopy.propTypes = {
  title: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
};

export default Microcopy;
