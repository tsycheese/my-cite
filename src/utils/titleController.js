var routeTitle = '';
var siteTitle = '';

function setTitle() {
  if (!routeTitle && !siteTitle) {
    document.title = 'loading...';
  } else if (routeTitle && !siteTitle) {
    document.title = routeTitle;
  } else if (!routeTitle && siteTitle) {
    document.title = siteTitle;
  } else {
    document.title = `${routeTitle} - ${siteTitle}`;
  }
}

function setRouteTitle(title) {
  routeTitle = title;
  setTitle();
}

function setSiteTitle(title) {
  siteTitle = title;
  setTitle();
}

export default {
  setRouteTitle,
  setSiteTitle,
};
