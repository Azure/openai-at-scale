import path from "path";
import upstashStorage from "monosize-storage-upstash";

export default {
  repository: "https://github.com/microsoft/use-disposable",
  storage: upstashStorage({
    url: "https://usw1-bursting-skylark-33255.upstash.io",
    readonlyToken:
      "AoHnASQgYzI2ZTFiN2YtN2VkNi00YWFjLTkyYTQtNDE4YzRlNGE2NGVlX3VGKBPwppebs7tkUrzjh4xy3kj5xcSi_pq35F_n9As=",
  }),
  webpack: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          "use-disposable": path.resolve(
            new URL(".", import.meta.url).pathname,
            "./lib/index.js"
          ),
        },
      },
    };
  },
};
