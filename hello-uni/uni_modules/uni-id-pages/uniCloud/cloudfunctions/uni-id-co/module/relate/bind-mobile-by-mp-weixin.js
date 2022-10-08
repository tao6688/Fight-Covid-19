const {
  preBind,
  postBind
} = require('../../lib/utils/relate')
const {
  LOG_TYPE
} = require('../../common/constants')
const {
  decryptWeixinData,
  getWeixinCache
} = require('../../lib/utils/weixin')

/**
 * 通过微信绑定手机号
 * @tutorial https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#bind-mobile-by-mp-weixin
 * @param {Object} params
 * @param {String} params.encryptedData   微信获取手机号返回的加密信息
 * @param {String} params.iv              微信获取手机号返回的初始向量
 * @returns
 */
module.exports = async function (params = {}) {
  /**
   * 微信小程序的规则是客户端应先使用checkSession接口检测上次获取的sessionKey是否仍有效
   * 如果有效则直接使用上次存储的sessionKey即可
   * 如果无效应重新调用login接口再次刷新sessionKey
   * 因此此接口不应直接使用客户端login获取的code，只能使用缓存的sessionKey
   */
  const schema = {
    encryptedData: 'string',
    iv: 'string'
  }
  const {
    encryptedData,
    iv
  } = params
  this.middleware.validate(params, schema)
  const uid = this.authInfo.uid

  const sessionKey = await getWeixinCache.call(this, {
    uid,
    key: 'session_key'
  })
  if (!sessionKey) {
    throw new Error('Session key not found')
  }
  const {
    purePhoneNumber: mobile
  } = decryptWeixinData.call(this, {
    encryptedData,
    sessionKey,
    iv
  })

  const bindAccount = {
    mobile
  }
  await preBind.call(this, {
    uid,
    bindAccount,
    logType: LOG_TYPE.BIND_MOBILE
  })
  await postBind.call(this, {
    uid,
    bindAccount,
    extraData: {
      mobile_confirmed: 1
    },
    logType: LOG_TYPE.BIND_MOBILE
  })
  return {
    errCode: 0
  }
}
