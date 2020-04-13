# learn-express-json-api
基本的に、[サルでも分かるExpressでのjsonAPIサーバーの作り方](https://qiita.com/ngmr_mo/items/73cc7160d002a4989416)の写経です。  
MongoDBの代わりにNeDBを採用しています。

## 使い方
1. cloneするなり[ZIPダウンロード](https://github.com/windchime-yk/learn-express-json-api/archive/master.zip)するなりして、ローカルに持ってきてください
2. ターミナルでディレクトリまで移動して、`yarn start`を叩いてサーバーを立ち上げてください
3. [Postman](https://www.postman.com/)でGET/POST/DELETEしてみてください

### HTTPメソッドの送信方法
APIキーですが、任意で指定してください。  
ディレクトリ直下に`.env.sample`というのがあるので、そこの`X-API-KEY`の値を編集し、Postmanでheadersに`x-api-key`を追加してその値を入れればPOST/DELETEメソッドが動作します。

#### GET
GETメソッドを選択し、Postmanで`http://localhost:3000/api/v1/user/`と送信してください。  
何かしら値があればJSONが返ってきます。

また、`http://localhost:3000/api/v1/user/?name=hogehoge`のように`name`パラメーターを追加することで、任意の名前を持つObjectを返すことができます。

#### POST
POSTメソッドを選択し、Postmanで`http://localhost:3000/api/v1/user/`と入力して、Bodyタブから値を送信してください。  
この際、headersに`x-api-key`を追加しないと送信してもブロックされます。

#### DELETE
DELETEメソッドを選択し、Postmanで`http://localhost:3000/api/v1/user/?name=hogehoge`のように、`name`パラメーターで削除したいクエリを入力し、送信してください。  
この際、headersに`x-api-key`を追加しないと送信してもブロックされます。

## 参考資料
- [サルでも分かるExpressでのjsonAPIサーバーの作り方](https://qiita.com/ngmr_mo/items/73cc7160d002a4989416)
- [NeDBの基本](https://hajipy.net/2018/08/nedb-basic/)
- [NeDBでドキュメントの暗号化](https://qiita.com/kechizenya/items/1a8abc5588ca0db33a30)
- [Node.jsのCryptoドキュメント](https://nodejs.org/api/crypto.html)
