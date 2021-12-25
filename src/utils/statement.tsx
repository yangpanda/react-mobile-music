import { Modal } from 'antd-mobile';

function getCookie(name: string) {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name: string, value: string, day: number = 1) {
  let date = new Date(Date.now());
  date.setDate(date.getDate() + day);

  const options: any = {
    path: '/',
    expires: date.toUTCString()
  };

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function showStatement() {
  if (!getCookie('popup-statement')) {
    Modal.show({ title: '声明', content: '本站只用于学习交流，未进行任何谋利。', showCloseButton: true });
    setCookie('popup-statement', 'true');
  }
}

export default showStatement;
