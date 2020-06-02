/* eslint-disable react/no-array-index-key */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/dracula';

import classes from './CodeBlock.module.css';

const CodeBlock = ({ children, className: codeBlockClassName }) => {
  // grab the language for this block from the
  // className passed into the code component
  const language = codeBlockClassName.replace(/language-/, '') || '';

  return (
    <Highlight
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...defaultProps}
      code={children}
      language={language}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${classes.pre} ${className || ''}`}
          style={{ ...style }}
        >
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index });
            return (
              <div className={classes.line} key={index} {...lineProps}>
                <div className={classes.lineNo}>{index + 1}</div>
                <div className={classes.lineContent}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
