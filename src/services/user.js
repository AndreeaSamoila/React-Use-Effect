import {fetchAndParse} from "./utils";

export function getUsers() {

return fetchAndParse("https://jsonplaceholder.typicode.com/users");

}