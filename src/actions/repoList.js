import {GET_REPO_LIST} from '../constants/actionConstants';
import {getRepoListAsync} from '../services/api.service';

//... returning action 
export const setRepoList = (repoList, loader = false) => {
  return {
    type: GET_REPO_LIST,
    repoList: repoList,
    loader: loader,
  };
};

//... function for get repo list from server
export const getRepoList = keyword => {
  return async dispatch => {
    try {
      keyword === 'query' && (await dispatch(setRepoList([], true)));
      //... Calling API for get repos from server
      const response = await getRepoListAsync(keyword);
      if (response && response.items) {
        await dispatch(setRepoList(response.items, false));
      }
      return response.items || [];
    } catch (error) {
      console.error(error);
    }
  };
};
