import { Configuration, SearchApi } from './api-client';
import type { SearchRequest, SearchResponse } from './api-client';

const api = new SearchApi(
  new Configuration({ basePath: 'http://localhost:8000' })
);

export async function fetchSearch(
  searchType: 'users' | 'repositories',
  searchText: string
): Promise<SearchResponse[]> {
  const payload: SearchRequest = { search_text: searchText };
  const response = await api.search(searchType, payload);
  return response.data;
}