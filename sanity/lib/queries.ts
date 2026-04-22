export const projectsIndexQuery = `
  *[_type == "project" && defined(slug.current)]
    | order(coalesce(year, "") desc, _createdAt desc)
    {
      _id,
      title,
      "slug": slug.current,
      description,
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
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    year,
    client,
    timeline,
    liveUrl,
    heroImage,
    heroAlt,
    "types": types[]->{title, "slug": slug.current},
    "services": services[]->{title, "slug": slug.current},
    body
  }
`;

export const relatedProjectsBySlugQuery = `
  *[_type == "project" && defined(slug.current) && slug.current != $slug]
    | order(coalesce(year, "") desc, _createdAt desc)[0...2] {
      _id,
      title,
      "slug": slug.current,
      description,
      heroImage,
      heroAlt,
      "types": types[]->title
    }
`;
