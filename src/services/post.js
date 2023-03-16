import {fetchAndParse} from "./utils";

export function getPosts() {

    return fetchAndParse("https://jsonplaceholder.typicode.com/posts");
}