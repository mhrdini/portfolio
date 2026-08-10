export const keyValueBlockQuery = groq`
  {
    _type,
    _key,
    label,
    valueType,

    "value": select(
      valueType == "string" => string,
      valueType == "text" => text,
      valueType == "url" => url,
      valueType == "email" => email,
      valueType == "date" => date,
      valueType == "image" => image.asset->url
    )
  }
`
