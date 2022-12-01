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
    .catch(() => ({
      private: { links: [] },
      mail: { links: [] },
      fediverse: { links: [] },
      finance: { links: [] },
      webdev: { links: [] },
      streaming: { links: [] },
    }));

  return { navData: navigationData[path.slice(1) || "private"] || {} };
}
