// @ts-nocheck
export function addRequestListener() {
  console.info('==addRequestListener==', chrome)
  window.addEventListener('urlchange', (info) => {
    console.info('==urlchange==', info);
  })
  console.info('==chrome.webRequest==', chrome.webRequest)
  // chrome.webRequest.onBeforeRequest.addListener(
  //   function(details) {
  //     // removeCookies('https://www.example.com');
  //     console.info('==onBeforeRequest==', details)
  //   },
  //   {
  //     urls: [
  //       "*://*.taobao.com/*"
  //     ]
  //   }
  // );
}