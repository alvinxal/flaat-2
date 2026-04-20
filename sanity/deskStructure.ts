import { StructureBuilder } from "sanity/desk";

export default function deskStructure(S: StructureBuilder) {
  return S.list()
    .title("Flaat Studio")
    .items([
      S.listItem()
        .title("Content")
        .child(
          S.list()
            .title("Content")
            .items([
              S.listItem().title("Blog").child(S.documentTypeList("post")),
              S.listItem()
                .title("Projects")
                .child(S.documentTypeList("project")),
              S.divider(),
              S.listItem()
                .title("All Content")
                .child(
                  S.documentList()
                    .title("All Content")
                    .filter('_type in ["post", "project"]'),
                ),
            ]),
        ),

      S.divider(),

      S.listItem()
        .title("Taxonomies")
        .child(
          S.list()
            .title("Taxonomies")
            .items([
              S.listItem().title("Services").child(S.documentTypeList("service")),
              S.listItem()
                .title("Project Types")
                .child(S.documentTypeList("projectType")),
              S.listItem()
                .title("Blog Categories")
                .child(S.documentTypeList("category")),
              S.listItem().title("Authors").child(S.documentTypeList("author")),
            ]),
        ),

      S.divider(),

      // Keep default lists for any future types.
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            "post",
            "project",
            "service",
            "projectType",
            "category",
            "author",
            "blockContent",
          ].includes(item.getId() ?? ""),
      ),
    ]);
}
