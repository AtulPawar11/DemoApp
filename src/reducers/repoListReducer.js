import {GET_REPO_LIST} from '../constants/actionConstants';
const initialState = {
  repoList: [],
};
const repoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPO_LIST:
      return {
        ...state,
        repoList: action.repoList,
        loaderVisibility: action.loader,
      };
    default:
      return state;
  }
};
export default repoListReducer;
