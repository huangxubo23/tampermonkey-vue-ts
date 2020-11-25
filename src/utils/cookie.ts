interface GetCookiesParams {
  url?: string;
  name?: string;
}
export function getCookies(params: GetCookiesParams) {
  console.info('==getCookies==', params);
  return new Promise((resolve, reject) => {
    //@ts-ignore
    // GM_cookie.list(params, (cookies, error) => {
    //   console.info('==getCookies==', cookies, error);
    //   if (error) {
    //     reject(error)
    //   }
    //   resolve(cookies)
    // })
    //@ts-ignore
    GM.cookie.list(params).then((cookies) => {
      console.info('==GM.cookie.list==', cookies);
      resolve(cookies);
    });
  });
}

//取cookies函数
export function getCookie(name: string) {
  console.info('==getCookie==', name, document.cookie);
  var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
  if (arr != null) return unescape(arr[2]);
  return null;
}
