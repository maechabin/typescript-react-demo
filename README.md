# TypeScript-React-Demo

TypeScript で書いた React のデモ

## Demo

テキストフォームに入力した名前を表示する Hello World。

https://maechabin.github.io/typescript-react-demo/

## Demo のソースコード

- [src/Hello.tsx](https://github.com/maechabin/typescript-react-demo/blob/master/src/Hello.tsx)
- [index.html](https://github.com/maechabin/typescript-react-demo/blob/master/index.html)

## Demo の確認

### 1. Demo のダウンロード（clone）

```
$ git clone git@github.com:maechabin/typescript-react-demo.git typescript-react-demo
```

### 2. Demo を clone したディレクトリに移動して、必要なパッケージのインストール

```
$ cd typescript-react-demo
$ npm install
```

### 3. Demo を開く

```
$ open ./index.html
```

## Demo の修正 => webpack でビルド

### 1. 「.src/Hello.tsx」を修正したら、以下のコマンドを実行

```
$ npm run build
```

#### ファイルを監視して webpack をビルドする場合

```
$ npm run watch
```

#### HMR を使用する場合

```
$ npm run server
```

http://localhost:8080で確認

### 2. Demo を開く

```
$ open ./index.html
```
