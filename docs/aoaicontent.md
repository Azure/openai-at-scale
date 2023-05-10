# Azure OpenAI Service

Agenda
- [Azure OpenAI Service 概要](#azure-openai-service-概要)
- [提供モデル](#提供モデル)
- [エンタープライズ機能](#エンタープライズ機能)
- [関連技術](#関連技術)
- [ユースケース](#ユースケース)
- [FAQ](#FAQ)
- [参考情報](#参考情報)
---
## Azure OpenAI Service 概要
Azure OpenAI Service は Azure を通じて OpenAI が提供する言語モデル GPT-x、Codex、DALL-E が利用できる Azure AI サービスです (Azure Cognitive Service に分類されます)。コンテンツ制作、要約、セマンティック検索、自然言語のコードへの変換、翻訳などのさまざまなタスクを実行することができます。Azure 上で展開されるサービスであり、エンタープライズに対応した信頼性、セキュリティ、可用性のメリットを享受できます。

---
## 提供モデル

### GPT
テキストの生成と理解を行うためのモデルです。GPT-3、GPT-4 (Preview) を含みます。
#### Completion
入力されたテキスト (Prompt) に続くテキストを推定して生成します。
#### Embedding
入力されたテキスト (Prompt) をベクトル化します。
#### Chat
チャット用に設計されており、入力されたテキスト (Prompt) に対して応答を生成します。


### Codex
コードの生成と理解を行うためのモデルです。

### DALL-E (Preview)
テキストのプロンプトから画像を生成するモデルです。


---
## エンタープライズ機能


### 責任のある AI
#### Content Filter
    - 入力されたテキスト (プロンプト) と生成されたコンテンツの両方に対して、不適切なコンテンツをフィルタリングします。
#### Limited access
#### Code fo conduct
#### sData, Privacy and Security



---
## 関連技術
### Embedding

### Prompt Engineering
#### Prompt Processing
プロンプトの情報を補完したり、体裁を整えることで回答の精度を向上させます。
#### Few-shot Learning
質問と回答の例を例示することで、モデルが生成するテキストの内容を調整します。
#### Chain of Thought (CoT)
段階的に推論させることで難しいタスクを解決します。
#### ReAcT
タスクを認識 (Reacognize) し、外部 API を呼び出して処理 (Act) することで、タスクを解決します。

### Fine Tuning
ユーザーのデータを用いてモデルを追加学習させることで、ユーザーのドメインやタスクに特化したモデルを作成します。
### Hyperparameters
- Temperature
- Top P
- Max Tokens

---
## ユースケース

---
## FAQ

---
## 参考情報