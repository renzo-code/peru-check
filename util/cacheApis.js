import moize from 'moize'
import fetch from 'node-fetch'

export const memoized = moize(item => {
  return item
}, {
  maxAge: 1000 * 60 * 5
})

export const maxAgeMemoized = age => age || 1000 * 60

export const memoized2 = moize(item => {
  return item
}, {
  maxAge: maxAgeMemoized
})

export const fetchContent = async (url) => {
  const response = await fetch(url)
  if (response.status !== 200) { throw Error(`url incorrect: ${url}!!`) }
  return await response.json()
}
