# SearchApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiSearchCreate**](#apisearchcreate) | **POST** /api/search | |

# **apiSearchCreate**
> Array<SearchResultList> apiSearchCreate(searchBody)


### Example

```typescript
import {
    SearchApi,
    Configuration,
    SearchBody
} from './api';

const configuration = new Configuration();
const apiInstance = new SearchApi(configuration);

let searchType: 'users' | 'repositories'; //Search type  * `users` - Users * `repositories` - Repositories (default to undefined)
let searchBody: SearchBody; //

const { status, data } = await apiInstance.apiSearchCreate(
    searchType,
    searchBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchBody** | **SearchBody**|  | |
| **searchType** | [**&#39;users&#39; | &#39;repositories&#39;**]**Array<&#39;users&#39; &#124; &#39;repositories&#39;>** | Search type  * &#x60;users&#x60; - Users * &#x60;repositories&#x60; - Repositories | defaults to undefined|


### Return type

**Array<SearchResultList>**

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of Users or Repositories |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

