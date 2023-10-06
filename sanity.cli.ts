// sanity.cli.ts
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "<your-project-id>",
    dataset: "<your-dataset-name>",
  },
});
