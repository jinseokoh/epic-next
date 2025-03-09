import { getStrapiURL } from '@/lib/utils'
import qs from 'qs'

const baseUrl = getStrapiURL()

async function fetchData(url: string) {
  const authToken = null // we will implement this later getAuthToken() later
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  }

  try {
    const response = await fetch(url, authToken ? headers : {})
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error // or return null;
  }
}

export async function getHomePageData() {
  const url = new URL('/api/home-page', baseUrl)

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          'layout.hero-section': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              link: {
                populate: true,
              },
            },
          },
          'layout.features-section': {
            populate: {
              features: {
                populate: true,
              },
            },
          },
        },
      },
    },
  })
  console.log(`🚀`, url.search);

  return await fetchData(url.href)
}

export async function getGlobalData() {
  const url = new URL('/api/global', baseUrl)

  url.search = qs.stringify({
    populate: [
      'header.logoText',
      'header.ctaButton',
      'footer.logoText',
      'footer.socialLinks',
    ],
  })
  console.log(`🚀`, url.search)

  return await fetchData(url.href)
}


export async function getGlobalPageMetadata() {
  const url = new URL('/api/global', baseUrl)

  return await fetchData(url.href)
}
