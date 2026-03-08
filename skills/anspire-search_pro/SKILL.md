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