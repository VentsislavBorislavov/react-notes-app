import { SEARCH } from './types';

const searchAction = (searchKey) => ({ type: SEARCH, payload: searchKey });

export default searchAction;
