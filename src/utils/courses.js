import CONSTANTS from './constants';
import { getUrlFromTitle } from './urlUtils';

export const getAboutPageUrl = course => {
  return `/${
    CONSTANTS.URLS.COURSES.LIST
  }${`${course.courseNumber}`}/${getUrlFromTitle(course.title)}`;
};

export const getInfoPageUrl = course => {
  return `/${CONSTANTS.URLS.COURSES.LIST}/${
    course.courseNumber
  }${getUrlFromTitle(course.title)}/info`;
};
