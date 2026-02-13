# バイト変換早見表

2進数・10進数・16進数を変換してバイトごとに分けて早見できるWebアプリです。

## 技術スタック

- **Next.js** 16 - App Router / Static Export
- **React** 19
- **TypeScript** 5
- **ESLint** 10 - Flat Config
- **Prettier** 3

## 開発

```bash
pnpm install
pnpm dev
```

## スクリプト

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバーを起動 |
| `pnpm build` | 静的サイトをビルド（`/out` に出力） |
| `pnpm lint` | ESLint を実行 |
| `pnpm format` | Prettier でコードをフォーマット |
| `pnpm typecheck` | TypeScript の型チェック |

## ディレクトリ構成

```
.
├── app/
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # メインページ（変換フォーム）
│   └── reset.css       # CSSリセット
├── components/
│   └── form.tsx        # フォームUIコンポーネント
├── .github/
│   └── workflows/
│       ├── lint.yml    # リント自動実行
│       └── deploy.yml  # GitHub Pages 自動デプロイ
├── next.config.js      # Next.js 設定
├── tsconfig.json       # TypeScript 設定
├── eslint.config.mjs   # ESLint 設定
└── .prettierrc.json    # Prettier 設定
```

## デプロイ

main ブランチへの push で GitHub Pages に自動デプロイされます。

## ライセンス

ISC
