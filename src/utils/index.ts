/**
 * load style file
 * @param {String} url
 */
export const loadStyle = (url: string): void => {
  const head = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  link.media = 'all';
  head.appendChild(link);
};

export async function setValue(name: string, value: any) {
  // @ts-ignore
  return GM_setValue(name, value);
}

export async function getValue(name: string) {
  // @ts-ignore
  return GM_getValue(name);
}

export async function deleteValue(name: string) {
  // @ts-ignore
  return GM_deleteValue(name);
}

export function addValueChangeListener(name: string, callback: Function) {
  // @ts-ignore
  const listenerId = GM_addValueChangeListener(
    name,
    (name: string, old_value: any, new_value: any, remote: any) => {
      console.info(
        '==GM_addValueChangeListener==',
        name,
        old_value,
        new_value,
        remote
      );
      callback({ name, oldValue: old_value, newValue: new_value, remote });
    }
  );
  console.info('==listenerId==', listenerId);
  return listenerId;
}

export function removeValueChangeListener(listenerId: any) {
  // @ts-ignore
  return GM_removeValueChangeListener(listenerId);
}

interface OpenInTabOptions {
  active?: boolean; // 是否应突出显示新标签
  insert?: boolean; // 是否将新标签页插入当前标签页之后
  setParent?: boolean;
  incognito?: boolean; // 是否使用隐身模式
}
export function openInTab(url: string, options: OpenInTabOptions = { active: true, insert: true }) {
  // @ts-ignore
  GM_openInTab(url, options);
}

interface NotificationDetails {
  title?: string
  text: string
  image?: string
  highlight?: boolean
  silent?: boolean
  timeout?: number
  ondone?: Function
  onclick?: Function
}
export function notification(details: NotificationDetails) {
  // @ts-ignore
  GM_notification(details)
}

interface GMCookieDetails {
  url?: string
  domain?: string
  name?: string
  path?: string
}
export function getGMCookie(details: GMCookieDetails) {
  // @ts-ignore
  console.info('==GM_cookie url==', details, GM_cookie)
  // @ts-ignore
  console.info('==JSON.stringify(GM_cookie)==', JSON.stringify(GM_cookie))
  // @ts-ignore
  // GM_cookie.list details supports url, domain, name and path
  GM_cookie('list', details, function(cookies, error) {
    if (error) {
      console.info('==GM_cookie error==', error)
      return
    }
    console.info('==GM_cookie cookies==', cookies)
  });

  // @ts-ignore
  GM_cookie.list(details, function(cookies, error) {
    if (error) {
      console.info('==GM_cookie.list error==', error)
      return
    }
    console.info('==GM_cookie.list cookies==', cookies)
  });
}
