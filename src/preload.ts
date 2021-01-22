import navigationData from "./nav.json";

/**
 * Internal handling of Sapper's preload mechanism.
 * @param page
 * @returns
 */
export default function (page) {
  const path = page.path;

  return { navData: navigationData[path.slice(1) || "private"] || {} };
}
