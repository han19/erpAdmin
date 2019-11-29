import router from '@/router'
//登录后对登录态的操作
import Cookies from 'js-cookie'

const Token = 'Token'

export function getToken() {
  return Cookies.get(Token)
}

export function setToken(token) {
  return Cookies.set(Token, token)
}

export function removeToken() {
  Cookies.remove(Token)
  router.push({ path: '/login'});
}
