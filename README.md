## Shell Crew

Boş altyapı.

## Kurulum

Bu altyapıyı çalıştırmak için gerekli modülleri [NodeJS](https://nodejs.org) aracılığı ile indirmeniz gerekmektedir.

```cmd
npm install discord.js
npm install request
npm install fs
npm install chalk
npm install quick.db
```

## Gerekli Ayarlar
`Path :`**`bot.js`**
```js
client.login("bot token")
# bot token kısmını botunuzun TOKEN değeri ile değiştirin
```

`Path :`**`conf/settings.js`**
```js
exports.prefix = "?";
// Yukarıya Botunuzun Ön-Ek (Prefix) değerini yazın
```

