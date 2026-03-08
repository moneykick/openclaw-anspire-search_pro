

# Anspire AI Search Pro for OpenClaw

OpenClaw 插件，为 AI Agent 提供 **实时互联网搜索能力**。

An OpenClaw plugin that provides **real-time web search capabilities** for AI agents.

通过 Anspire AI Search，你的 OpenClaw Agent 可以访问 **最新互联网信息、外部知识源，并生成结构化搜索结果**。

With Anspire AI Search, your OpenClaw agent can access **up-to-date internet information, external knowledge sources, and structured search results**.

---

# ✨ Features | 功能特点

* 🌐 实时互联网搜索
  Real-time web search

* 📚 外部知识源检索
  External knowledge retrieval

* 🔗 返回引用来源
  Source links included

* ⚡ 快速摘要模式
  Fast summary mode

* 🧠 AI 友好结构化结果
  LLM-friendly structured results

* 🔌 与 OpenClaw Agent 无缝集成
  Seamless integration with OpenClaw agents

---

# 📦 Plugin Information | 插件信息

| Item          | Value                |
| ------------- | -------------------- |
| Plugin ID     | `anspire-search_pro` |
| Tool Name     | `anspire_search_pro` |
| Version       | `0.1.1`              |
| Compatibility | OpenClaw 2026+       |

---

# 🚀 Installation | 安装

### 使用 npm 安装

Install via npm:

```bash
openclaw plugins install anspire-search_pro
```

### 重启 OpenClaw

Restart OpenClaw:

```bash
openclaw gateway restart
```

---

# ⚙️ Configuration | 配置

设置你的 **Anspire API Key**

Set your **Anspire API Key**

```bash
export ANSPIRE_API_KEY=your_api_key
```

你也可以在系统环境变量中配置。

You can also configure it through your system environment variables.

---

# 🔍 Usage | 使用方式

示例：

Example:

```text
Use anspire_search_pro to search: OpenClaw latest documentation
```

示例参数：

Example parameters:

```json
{
  "query": "OpenClaw AI framework",
  "mode": "summary",
  "top_k": 5
}
```

参数说明：

Parameters:

| 参数       | 类型            | 说明     |
| -------- | ------------- | ------ |
| query    | string        | 搜索关键词  |
| top_k    | number        | 返回结果数量 |
| mode     | summary / raw | 返回格式   |
| Insite   | string        | 限制站点   |
| FromTime | string        | 起始时间   |
| ToTime   | string        | 结束时间   |

---

# 🌍 Welcome to Anspire AI Open Platform

# 🌍 欢迎使用 Anspire AI 开放平台

使用 Anspire AI Search 构建强大的 AI 应用。

Build powerful AI applications with **Anspire AI Search APIs**.

官网 / Official website

[https://open.anspire.cn/](https://open.anspire.cn/)

---

# 🎁 新用户福利 | New User Benefits

完成认证，即可领取 **免费额度**

Complete verification to receive **free credits**

| 用户类型 | 赠送额度     |
| ---- | -------- |
| 个人认证 | 2,500 点  |
| 企业认证 | 10,000 点 |

| User Type               | Free Credits   |
| ----------------------- | -------------- |
| Personal Verification   | 2,500 credits  |
| Enterprise Verification | 10,000 credits |

---

# ⚡ 快速开始 | Quick Start

1️⃣ 登录官网

Visit the official website

[https://open.anspire.cn/](https://open.anspire.cn/)

2️⃣ 完成实名认证

Complete identity verification
（系统与公安联网，手机号需实名）

(System connected with national identity verification)

3️⃣ 领取额度并开始体验

Claim your credits and start building.

---

# 🏢 企业认证 | Enterprise Verification

企业认证需要提供以下信息：

For enterprise verification please prepare:

* 企业名称
* 三证合一编号
* 申请代表人
* 联系方式

Company name
Unified social credit code
Applicant representative
Contact information

将以上信息提交至平台客服即可。

Submit the above information through platform support.

---

# 📚 Documentation | 文档

产品介绍、API 文档、计费规则：

Product documentation and pricing:

[https://open.anspire.cn/document/docs/searchProduce/#price](https://open.anspire.cn/document/docs/searchProduce/#price)

---

# ⭐ Support | 支持

如果你喜欢这个项目，请给一个 Star。

If you like this project, please give it a ⭐ on GitHub.

---

# 📄 License

MIT License

---
