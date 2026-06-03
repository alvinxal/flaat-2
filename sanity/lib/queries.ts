export const projectsIndexQuery = `
  *[_type == "project" && (
    ($locale == "id" && defined(slugId.current)) ||
    ($locale == "en" && defined(slugEn.current) && defined(titleEn) && defined(bodyEn))
  )]
    | order(coalesce(year, "") desc, _createdAt desc)
    {
      _id,
      "title": select($locale == "en" => titleEn, titleId),
      "slug": select($locale == "en" => slugEn.current, slugId.current),
      "description": select($locale == "en" => descriptionEn, descriptionId),
      heroImage,
      heroAlt,
      "types": types[]->{title, "slug": slug.current},
      "services": services[]->title
    }
`;

export const projectsFilterTypesQuery = `
  *[_type == "projectType" && defined(slug.current)]
    | order(title asc)[0...3] {
      _id,
      title,
      "slug": slug.current
    }
`;

export const projectBySlugQuery = `
  *[_type == "project" && (
    ($locale == "id" && slugId.current == $slug) ||
    ($locale == "en" && slugEn.current == $slug)
  )][0] {
    _id,
    "title": select($locale == "en" => titleEn, titleId),
    "slug": select($locale == "en" => slugEn.current, slugId.current),
    "description": select($locale == "en" => descriptionEn, descriptionId),
    year,
    client,
    timeline,
    liveUrl,
    heroImage,
    heroAlt,
    "types": types[]->{title, "slug": slug.current},
    "services": services[]->{title, "slug": slug.current},
    "body": select($locale == "en" => bodyEn, bodyId)
  }
`;

export const relatedProjectsBySlugQuery = `
  *[_type == "project" && (
    ($locale == "id" && defined(slugId.current) && slugId.current != $slug) ||
    ($locale == "en" && defined(slugEn.current) && defined(titleEn) && defined(bodyEn) && slugEn.current != $slug)
  )]
    | order(coalesce(year, "") desc, _createdAt desc)[0...2] {
      _id,
      "title": select($locale == "en" => titleEn, titleId),
      "slug": select($locale == "en" => slugEn.current, slugId.current),
      "description": select($locale == "en" => descriptionEn, descriptionId),
      heroImage,
      heroAlt,
      "types": types[]->title
    }
`;
