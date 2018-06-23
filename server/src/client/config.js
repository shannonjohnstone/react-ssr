const config = (configOverride) => {
  const logger = console;

  return {
    logger,
    ...configOverride,
  };
};

export const getConfig = config({});
