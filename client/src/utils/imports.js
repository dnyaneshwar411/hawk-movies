import { lazyLoad } from "./lazyLoad";

/**
 * Lists all the imports for the Router.jsx file in the src/routes directory
 */
export const NamedExport = {
  Landing: lazyLoad("../pages/Landing"),
  MoviesShows: lazyLoad("../pages/MoviesShows"),
}