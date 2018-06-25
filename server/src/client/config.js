/* getConfig util
 * util to make it easeir for the client to get config value
 */

const config = (configOverride) => {
  const logger = console;

  return {
    logger,
    ...configOverride,
  };
};

export const getConfig = config({});
