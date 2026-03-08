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
};
