module.exports = function (api) {
  api.registerTool(
    {
      name: "anspire_search_pro",
      description: "Search the web with Anspire AI Search Pro and return up-to-date results.",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string", description: "Search query" },
          top_k: { type: "integer", description: "Number of results to return", default: 10 },
          mode: { type: "string", enum: ["summary", "raw"], default: "summary" },
          Insite: { type: "string", description: "Optional site restriction" },
          FromTime: { type: "string", description: "Optional start time filter" },
          ToTime: { type: "string", description: "Optional end time filter" }
        },
        required: ["query"]
      },
      async execute(_id, params) {
        const query = params.query || "";
        const top_k = Number(params.top_k || 10);
        const mode = params.mode || "summary";
        const Insite = params.Insite || "";
        const FromTime = params.FromTime || "";
        const ToTime = params.ToTime || "";

        const apiKey = process.env.ANSPIRE_API_KEY;
        if (!apiKey) {
          return {
            content: [
              { type: "text", text: "Missing ANSPIRE_API_KEY environment variable." }
            ]
          };
        }

        const url = new URL("https://plugin.anspire.cn/api/ntsearch/prosearch");
        url.searchParams.set("query", query);
        url.searchParams.set("top_k", String(top_k));
        if (Insite) url.searchParams.set("Insite", Insite);
        if (FromTime) url.searchParams.set("FromTime", FromTime);
        if (ToTime) url.searchParams.set("ToTime", ToTime);

        const res = await fetch(url.toString(), {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        });

        if (!res.ok) {
          const text = await res.text();
          return {
            content: [
              { type: "text", text: `Anspire request failed: ${res.status} ${res.statusText} - ${text}` }
            ]
          };
        }

        const data = await res.json();
        const results = Array.isArray(data.results) ? data.results : [];

        if (mode === "raw") {
          return {
            content: [
              { type: "text", text: JSON.stringify(data, null, 2) }
            ]
          };
        }

        const text = results.length
          ? results.map((item, i) =>
              `${i + 1}. ${item.title || "Untitled"}\n${item.content || ""}\n${item.url || ""}\n${item.date || ""}`
            ).join("\n\n")
          : "No results found.";

        return {
          content: [
            { type: "text", text }
          ]
        };
      }
    },
    { optional: true }
  );

  api.registerTool(
    {
      name: "tavily_search",
      description: "Search the web with Tavily and return up-to-date results.",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string", description: "Search query" },
          max_results: { type: "integer", description: "Number of results to return", default: 10 },
          search_depth: { type: "string", enum: ["basic", "advanced"], default: "basic", description: "Search depth: basic (fast) or advanced (thorough)" }
        },
        required: ["query"]
      },
      async execute(_id, params) {
        const query = params.query || "";
        const max_results = Number(params.max_results || 10);
        const search_depth = params.search_depth || "basic";

        const apiKey = process.env.TAVILY_API_KEY;
        if (!apiKey) {
          return {
            content: [
              { type: "text", text: "Missing TAVILY_API_KEY environment variable." }
            ]
          };
        }

        const baseUrl = process.env.TAVILY_BASE_URL || "https://api.tavily.com";
        const res = await fetch(`${baseUrl}/search`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            query,
            max_results,
            search_depth
          })
        });

        if (!res.ok) {
          const text = await res.text();
          return {
            content: [
              { type: "text", text: `Tavily request failed: ${res.status} ${res.statusText} - ${text}` }
            ]
          };
        }

        const data = await res.json();
        const results = Array.isArray(data.results) ? data.results : [];

        const text = results.length
          ? results.map((item, i) =>
              `${i + 1}. ${item.title || "Untitled"}\n${item.content || ""}\n${item.url || ""}`
            ).join("\n\n")
          : "No results found.";

        return {
          content: [
            { type: "text", text }
          ]
        };
      }
    },
    { optional: true }
  );
};
