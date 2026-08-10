export const resumeQuery = groq`
*[
_type == "resume" &&
language == $language
][0] {
  _id,
  title,
  language,

  sections[] {
    title,
    type,
    containsSubsections,

    content[] {
      ...,

      _type == "keyValueBlock" => {
        _type,
        _key,
        label,
        valueType,
        "value": select(
          valueType == "string" => string,
          valueType == "text" => text,
          valueType == "url" => url,
          valueType == "email" => email,
          valueType == "image" => image.asset->url,
          valueType == "date" => date
        )
      },

      _type == "referenceBlock" => @-> {
        _type,

        _type == "social" => {
          _id,
          title,
          linkEmail
        },

        _type == "experience" => {
          _id,
          company,

          "position": select(
            $language == "en" => position.en,
            $language == "ja" => position.ja
          ),

          startDate,
          endDate,

          "description": select(
            $language == "en" => description.en,
            $language == "ja" => description.ja
          )
        },

        _type == "education" => {
          _id,
          institution,

          "degree": select(
            $language == "en" => degree.en,
            $language == "ja" => degree.ja
          ),

          "major": select(
            $language == "en" => major.en,
            $language == "ja" => major.ja
          ),

          startDate,
          endDate,

          "description": select(
            $language == "en" => description.en,
            $language == "ja" => description.ja
          )
        },

        _type == "language" => {
          _id,
          englishName,
          originalName,
          code,
          proficiency
        }
      }
    },

    subsections[] {
      title,
      type,
      containsSubsections,

      content[] {
        ...,

        _type == "referenceBlock" => @-> {
          _type,

          _type == "social" => {
            _id,
            title,
            linkEmail
          },

          _type == "experience" => {
            _id,
            company,

            "position": select(
              $language == "en" => position.en,
              $language == "ja" => position.ja
            ),

            startDate,
            endDate,

            "description": select(
              $language == "en" => description.en,
              $language == "ja" => description.ja
            )
          },

          _type == "education" => {
            _id,
            institution,

            "degree": select(
              $language == "en" => degree.en,
              $language == "ja" => degree.ja
            ),

            "major": select(
              $language == "en" => major.en,
              $language == "ja" => major.ja
            ),

            startDate,
            endDate,

            "description": select(
              $language == "en" => description.en,
              $language == "ja" => description.ja
            )
          },

          _type == "language" => {
            _id,
            englishName,
            originalName,
            code,
            proficiency
          }
        }
      }
    }
  }
}
`
