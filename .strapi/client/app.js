/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import graphql from "@strapi/plugin-graphql/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import strapiAdvancedUuid from "strapi-advanced-uuid/strapi-admin";
import importExportEntries from "strapi-plugin-import-export-entries/strapi-admin";
import restCache from "strapi-plugin-rest-cache/strapi-admin";
import todo from "strapi-plugin-todo/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.js";

renderAdmin(document.getElementById("strapi"), {
  customisations,

  plugins: {
    graphql: graphql,
    "users-permissions": usersPermissions,
    "strapi-advanced-uuid": strapiAdvancedUuid,
    "import-export-entries": importExportEntries,
    "rest-cache": restCache,
    todo: todo,
  },
});
