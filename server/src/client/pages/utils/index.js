export const exportPage = (component, connect) => ({
  component: connect ? connect(component) : component,
  loadData: component.loadData ? component.loadData : null,
});
