async function getPageVar(name, tabId) {
  const [{result}] = await chrome.scripting.executeScript({
    func: name => window[name],
    args: [name],
    target: {
      tabId: tabId ??
        (await chrome.tabs.query({active: true, currentWindow: true}))[0].id
    },
    world: 'MAIN',
  });
  return result;
}