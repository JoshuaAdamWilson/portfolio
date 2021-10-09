import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "qq2c8hp8",
  dataset: "production",
  useCdn: true,
})