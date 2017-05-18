# TypeScript-React-Demo

TypeScriptで書いたReactのデモ

## Demo

テキストフォームに入力した名前を表示するHello World。

https://maechabin.github.io/typescript-react-demo/

## Demoのソースコード

- [src/index.tsx](https://github.com/maechabin/typescript-react-demo/blob/master/src/index.tsx)
- [index.html](https://github.com/maechabin/typescript-react-demo/blob/master/index.html)

## Demoの確認

### 1. Demoのダウンロード（clone）

~~~
$ git clone git@github.com:maechabin/typescript-react-demo.git typescript-react-demo
~~~

### 2. Demoをcloneしたディレクトリに移動して、必要なパッケージのインストール

~~~
$ cd typescript-react-demo
$ npm install
~~~

### 3. Demoを開く

~~~
$ open ./index.html
~~~

## Demoの修正 => webpackでビルド

### 1. 「.src/index.tsx」を修正したら、以下のコマンドを実行

~~~
$ npm run build
~~~

#### ファイルを監視してwebpackをビルドする場合

~~~
$ npm run watch
~~~

#### HMRを使用する場合

~~~
$ npm run server
~~~

http://localhost:8080で確認


### 2. Demoを開く
~~~
$ open ./index.html
~~~
