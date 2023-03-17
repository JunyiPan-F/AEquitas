// This file contains all of the logic necessary to interact 
// with the Solr search API
interface Document {
	author: string;
	content: string | undefined;
	id: string;
	title: string;
	_version_: number;
}

interface APIResponseHeader {
	status: number;
	QTime: number;
	params: Record<string, unknown>;
}

interface APIResponseData {
	docs: Array<Document>;
	numFound: number;
	numFoundExact: boolean;
	start: number;
}

interface APIResponse {
	responseHeader: APIResponseHeader;
	response: APIResponseData;
}

async function solrSearch(parser: string, method: string, start: number, query: string): Promise<APIResponse> {
  let pwd = sessionStorage.getItem("password");
  if (pwd === null)
    pwd = "";

  const searchParams = new URLSearchParams({
    "q": query,
    "parser": parser,
    "search_type": method,
    "start": start.toString()
  });

  const url = `${import.meta.env.VITE_VUE_APP_API}/documents?${searchParams}`;
  
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "password": pwd
    }
  });

  return response.json() as Promise<APIResponse>;
}

export default solrSearch;