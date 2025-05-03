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
  console.log(`🏡 home page qs`, url.search)
  const data = await fetchData(url.href)
  console.log(`🏡 home page data`, JSON.stringify(data, null, 2))
  return data
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
  console.log(`📋 global qs`, url.search)
  const data = await fetchData(url.href)
  console.log(`📋 global data`, JSON.stringify(data, null, 2))
  return data
}

export async function getGlobalPageMetadata() {
  const url = new URL('/api/global', baseUrl)
  url.search = qs.stringify({
    fields: ['title', 'description'],
  })

  console.log(`🦊 global meta qs`, url.search)
  const data = await fetchData(url.href)
  console.log(`🦊 global meta data`, JSON.stringify(data, null, 2))
  return data
}
