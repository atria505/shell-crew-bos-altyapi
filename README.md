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
## quick.db indirmek için.
İlk önce bilgisayarınıza 
```
https://www.microsoft.com/en-us/download/details.aspx?id=40773
``` 
indirin, eğer bu güncelleştirme zaten yüklü derse kapatın.

Windows Powershell'i yönetici olarak çalıştırın,
konsola:
```
npm install --global --production --vs2015 --add-python-to-path windows-build-tools
```
yazın, hata verirse:
```
npm install --global --production --add-python-to-path windows-build-tools node-gyp
```
yazdıktan sonra yine hata verirse node_modules klasörünü silin, tekrar kodları deneyin,
tamamlası biraz uzun sürebilir(15-30 dakika),
Tamamlandığında `All done!` + `windows-build-tools` yazacaktır.
Bunu yazdıktan sonra Powershell kapatın.
botunuzun olduğu dosyaya gelip: 
`shift+sağtık` yapın ve powershell/cmd açın:
```js
npm init -y
``` 
yazın
ardından:
```
npm install quick.db
```
ve son, quick.db yüklenmiş olması gerek.

Hala yüklenmedi mi? Bana ulaş,

Discord: `Atria#0008`

## Gerekli Ayarlar
`Path :`**`bot.js`**
```js
client.login("bot token")
# bot token kısmını botunuzun TOKEN değeri ile değiştirin
```

`Path :`**`conf/settings.js`**
```js
exports.prefix = "+"
// Yukarıya Botunuzun Ön-Ek (Prefix) değerini yazın
```

`Path :`**`conf/settings.js`**
```js
exports.developer = {"bot developer id":{}}
// Yukarıya bot sahibinin id değerini yazın
```
