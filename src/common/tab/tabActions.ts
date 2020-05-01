interface TabSelected {
  type?: string;
  payload?: string;
  tabId?: string;
}

export const selectTab = (tabId: string) => {
  return {
    type: 'TAB_SELECTED',
    payload: tabId,
  };
};

export const showTabs = (...tabIds: any[]) => {
  const tabsToShow = {} as any;
  tabIds.forEach((tab) => (tabsToShow[tab] = true));

  return {
    type: 'TAB_SHOWED',
    payload: tabsToShow,
  };
};
