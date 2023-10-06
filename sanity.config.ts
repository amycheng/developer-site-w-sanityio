// Different environments use different variables
const projectId = "jntbxtyy";
const dataset = "production";

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schema";

export default defineConfig({
  name: "project-name",
  title: "Project Name",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
