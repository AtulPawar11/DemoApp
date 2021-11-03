const BASE_URL = 'https://api.github.com';

//... All API url constants for app
export const apiConstants = {
  REPO_LIST: keyword => `${BASE_URL}/search/repositories?q=${keyword}`,
};
