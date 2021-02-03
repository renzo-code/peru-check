const dotenv = require('dotenv').config()

module.exports = {
  env: {
    SITE_DOMAIN_URL: 'https://perucheck.pe',
    KEY_FB_ID: '3571853402874757',
    KEY_FB_PAGE: '1378490425513559',
    ...dotenv.parsed
  }
}
