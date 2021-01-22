/**
 * Internal handling of Sapper's preload mechanism.
 * @param page
 * @returns
 */
export default async function (page, session) {
  const { NAV_DATA } = session;
  const path = page.path;

  const navigationData = await this.fetch(NAV_DATA)
    .then((r: { json: () => any }) => r.json())
    .catch((e) => console.error(e));

  return { navData: navigationData[path.slice(1) || "private"] || {} };
}
