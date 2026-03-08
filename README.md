# 🔎 Anspire AI Search Pro for OpenClaw

[![OpenClaw Plugin](https://img.shields.io/badge/OpenClaw-Plugin-blue)]()
[![License](https://img.shields.io/badge/license-MIT-green)]()
[![Platform](https://img.shields.io/badge/platform-OpenClaw-orange)]()

An OpenClaw plugin that integrates **Anspire AI Search** for real-time web search and external knowledge retrieval.

一个用于 **OpenClaw** 的插件，通过 **Anspire AI Search API** 为 AI Agent 提供 **实时互联网搜索能力**。

---

# 🌐 中文介绍

**Anspire AI Search Pro** 是一个 OpenClaw 插件，用于为 Agent 提供实时互联网搜索能力。

通过 Anspire AI Search API，Agent 可以：

- 获取最新互联网信息
- 访问外部知识来源
- 获取带来源链接的搜索结果
- 自动调用搜索工具

该插件适用于需要 **最新数据、新闻、互联网资料、外部事实验证** 的 Agent 工作流。

---

# ✨ 功能

- 🌐 实时互联网搜索
- 📚 获取外部知识
- 🔗 返回带来源链接的搜索结果
- 🤖 专为 OpenClaw Agent 设计
- ⚡ 支持 `summary` 摘要模式
- 📦 支持 `raw` 原始数据模式
- 🧠 Skill 自动提示 Agent 何时调用搜索

---

# 📦 安装

## 从 zip 安装

```bash
openclaw plugins install ./anspire-search_pro.zip
openclaw gateway restart

## 从 npm 安装
openclaw plugins install anspire-search_pro
openclaw gateway restart

#⚙️ 配置 API Key

设置 Anspire API Key：

export ANSPIRE_API_KEY=your_api_key

## 或在 OpenClaw 配置中设置：

{
  "plugins": {
    "entries": {
      "anspire-search_pro": {
        "enabled": true,
        "config": {
          "apiKey": "YOUR_API_KEY",
          "baseUrl": "https://plugin.anspire.cn"
        }
      }
    }
  }
}

#🔧 工具

插件会注册以下工具：

anspire_search_pro

用于执行互联网搜索。

参数：

参数	说明
query	搜索关键词
top_k	返回结果数量
mode	summary / raw
Insite	限定站点
FromTime	起始时间
ToTime	结束时间
🤖 Agent 使用场景

# OpenClaw Agent 在以下情况会自动调用该工具：

查询 最新新闻

获取 当前事件

查找 互联网资料

验证 外部事实

收集 资料来源

# 📁 项目结构
anspire-search_pro
├─ dist/
│  └─ index.js
├─ skills/
│  └─ anspire-search_pro/
│     └─ SKILL.md
├─ package.json
├─ openclaw.plugin.json
└─ README.md
# 🌎 English
Overview

Anspire AI Search Pro is an OpenClaw plugin that enables agents to perform real-time web search using the Anspire AI Search API.

It allows AI agents to retrieve:

up-to-date information

external knowledge sources

verifiable web links

Features

Real-time web search

Access to external knowledge

Source links included in results

Designed for OpenClaw agents

Summary and raw result modes

Skill guidance for automatic tool usage

Installation
Install from zip
openclaw plugins install ./anspire-search_pro.zip
openclaw gateway restart
Install from npm
openclaw plugins install anspire-search_pro
openclaw gateway restart
Tool

Registered tool:

anspire_search_pro

Parameters:

Parameter	Description
query	search query
top_k	number of results
mode	summary or raw
Insite	site restriction
FromTime	start time filter
ToTime	end time filter
Example

Example search request:

query: latest AI model release
top_k: 5
mode: summary

Example output:

1. Title
Summary
https://example.com
2026-03-01
# Anspire AI Search Pro for OpenClaw

An OpenClaw plugin that integrates Anspire AI Search for real-time web search and external knowledge retrieval.

## Plugin ID
anspire-search_pro

## Tool Name
anspire_search_pro

## Install

openclaw plugins install ./anspire-search_pro.zip
openclaw gateway restart

## API Key

export ANSPIRE_API_KEY=your_api_key

## Endpoint
/api/ntsearch/prosearch
