// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed


// contentmodel for homepage data

const HOMEPAGE_GRAPHQL_FIELDS = `
sys {
  id
}
  titel
  kurzesIntro {
    json 
  }
  langesIntro {
    json links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

// contentmodel for wir data

const WIR_GRAPHQL_FIELDS = `
sys {
  id
}
titel
head1
artikelfoto1 {
  url
}
paragraph1 {
  json
}
artikelfoto2 {
  url
}
head2
paragraph2 {
  json
}
kurationFoto {
  url
}
kurationTitel
kuratorinnen { json }
ehemaligeTitel
ehemalige { json }
kooperationTitel
kooperationen {json}
lesereihenTitel
lesereihenText {json}
lesereihenLogo { url }
`;

// contentmodel for ausgabe data

const AUSGABE_GRAPHQL_FIELDS = `
sys {
  id
}
ausgabeNummer
datumZeit
lesendeNamen { json }
ortTitel
ortDetails { json }
moderation
moderationNamen
fotosAusgabeCollection {
  items {
    url
  }
}
lesendeBios { json }
link { json }
`;

// content model impressum data

const IMPRESSUM_GRAPHQL_FIELDS = `
sys {
  id
}
titel
impressum { json }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["articles", "landingpage", "homepage", "wir", "ausgabe", "impressum"] },

    }
  ).then((response) => response.json());
}


function extractHomepage(fetchResponse) {
  return fetchResponse?.data?.homepageCollection?.items;
}

function extractWir(fetchResponse) {
  return fetchResponse?.data?.wirCollection?.items;
}

function extractAusgabe(fetchResponse) {
  return fetchResponse?.data?.ausgabeCollection?.items;
}

function extractImpressum(fetchResponse) {
  return fetchResponse?.data?.impressumCollection?.items;
}



export async function getHomepage(
  isDraftMode = false) {
  const homepage = await fetchGraphQL(
    `query {
      homepageCollection(preview: ${isDraftMode ? "true" : "false"
    }) { 
        items {
          ${HOMEPAGE_GRAPHQL_FIELDS}
        }
      }
    }`, true
  );
  return extractHomepage(homepage);
}

export async function getWir(
  isDraftMode = false) {
  const wir = await fetchGraphQL(
    `query {
      wirCollection(preview: ${isDraftMode ? "true" : "false"
    }) { 
        items {
          ${WIR_GRAPHQL_FIELDS}
        }
      }
    }`, true
  );
  return extractWir(wir);
}

export async function getAllAusgaben(
  isDraftMode = false) {
  const ausgaben = await fetchGraphQL(
    `query {
      ausgabeCollection(preview: ${isDraftMode ? "true" : "false"}
    ) { 
        items {
          ${AUSGABE_GRAPHQL_FIELDS}
        }
      
      }
    }`, true
  );
  return extractAusgabe(ausgaben);
}

export async function getImpressum(
  isDraftMode = false) {
  const impressum = await fetchGraphQL(
    `query {
      impressumCollection(preview: ${isDraftMode ? "true" : "false"}
    ) { 
        items {
          ${IMPRESSUM_GRAPHQL_FIELDS}
        }
      
      }
    }`, true
  );
  return extractImpressum(impressum);
}
