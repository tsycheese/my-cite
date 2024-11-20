import { getBanners } from './api/banner';

(async function () {
  const data = await getBanners();
  console.log(data);
})();
