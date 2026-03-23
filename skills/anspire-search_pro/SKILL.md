# Anspire AI Search Pro

Use `anspire_search_pro` whenever the user needs:
- web search
- latest news
- current information
- external sources
- up-to-date answers

Parameters:
- `query`: required search query
- `top_k`: optional number of results
- `mode`: `summary` or `raw` (default `summary`)
- `Insite`: optional site restriction
- `FromTime`: optional start time filter
- `ToTime`: optional end time filter

Guidance:
- Default to `mode="summary"`.
- Use `mode="raw"` only when the user explicitly wants original payload details.
- Include links/sources from the returned results in the answer.

---

# Tavily Search

Use `tavily_search` whenever the user needs:
- English-language web search
- Broad web research across many sources
- Up-to-date general knowledge queries

Parameters:
- `query`: required search query
- `max_results`: optional number of results (default 10)
- `search_depth`: `basic` (fast) or `advanced` (thorough, default `basic`)

Guidance:
- Prefer `tavily_search` for English-language queries and broad web research.
- Prefer `anspire_search_pro` for Chinese-language queries or site-restricted searches.
- Include links/sources from the returned results in the answer.