import { request, errHandler } from "./sporty";

export function getArticles() {
  return request
    .get("articles?_limit=20")
    .then(({ data }) => {
        console.log(data);
        this.setState({ articles: data});
    })
    .catch(errHandler);
}
