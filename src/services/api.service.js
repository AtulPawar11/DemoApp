import {apiConstants} from '../constants/apiUrls';
export const getRepoListAsync = async keyword => {
  try {
    const response = await fetch(apiConstants.REPO_LIST(keyword));
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
