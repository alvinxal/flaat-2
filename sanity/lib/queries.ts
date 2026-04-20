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
      "types": types[]->title,
      "services": services[]->title
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
    heroImage,
    heroAlt,
    "types": types[]->{title, "slug": slug.current},
    "services": services[]->{title, "slug": slug.current},
    body
  }
`;
