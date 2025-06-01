import {Configuration, SearchApi, SearchResultList} from './api-client';
import type { SearchBody} from './api-client';

const api = new SearchApi(
  new Configuration({ basePath: 'http://localhost:8000' })
);

export async function fetchSearch(
  searchType: 'users' | 'repositories',
  searchText: string
): Promise<SearchResultList[]> {
  const payload: SearchBody = { search_text: searchText };
  const response = await api.apiSearchCreate(searchType, payload);
  return response.data;
}