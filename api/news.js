import { request, errHandler } from "./sporty";
import { subDomain } from '../src/helpers/subDomain';
import { history } from '../src/helpers/history';

export async function getArticles(limit, featured) {
  const website = await checkWebsite();
  const isFeatured = (featured) ? 1 : '';
  const isLimit = (limit) ? limit : '';

  return request
    .get(`articles/?status=Published${website}&_limit=${isLimit}&featured=${isFeatured}`)
    .then(({ data }) => {
      return data;
    })
    .catch(errHandler);
}

export async function getCategories() {
  const website = await checkWebsite();

  return request
  .get(`categories/?_limit=8${website}`)
  .then(({ data }) => {
    return data;
  })
  .catch(errHandler);
}


function checkWebsite() {

  // const isSubdomain = subDomain(window.location.hostname);

  // if(!isSubdomain) {
  //    // history.push('./404')
  // }

  return request
  .get(`websites/?link=${window.location.hostname}`)
  .then(({ data }) => {
    const website = (data.length > 0) ? '&website=' + data[0].id : '';
    return website;
  })
}
