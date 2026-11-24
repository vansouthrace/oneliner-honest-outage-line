import * as fs from "node:fs";

const ENTRY = "All services are down, including this status page. I don't know what broke yet. The logs are on the same server that just died.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log("Wrote entry.txt:", ENTRY);
