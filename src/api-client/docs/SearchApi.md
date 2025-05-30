# SearchApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**search**](#search) | **POST** /api/search | |

# **search**
> Array<SearchResponse> search(searchRequest)


### Example

```typescript
import {
    SearchApi,
    Configuration,
    SearchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SearchApi(configuration);

let searchType: 'users' | 'repositories' | 'issues'; //Search type  (default to undefined)
let searchRequest: SearchRequest; //

const { status, data } = await apiInstance.search(
    searchType,
    searchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchRequest** | **SearchRequest**|  | |
| **searchType** | [**&#39;users&#39; | &#39;repositories&#39; | &#39;issues&#39;**]**Array<&#39;users&#39; &#124; &#39;repositories&#39; &#124; &#39;issues&#39;>** | Search type  | defaults to undefined|


### Return type

**Array<SearchResponse>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

