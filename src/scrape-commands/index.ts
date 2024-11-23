import { JSDOM } from 'jsdom'

/**
 *
 * @param JSDOM
 * @returns username: string
 *
 * @description Function to parse the username from the provided dom.
 * classname provided in the querySelector is coming from the live site.
 */
export const getUsername = (dom: JSDOM): string => {
  let usernameDiv = dom.window.document.querySelector('span.fit-long-username')

  if (usernameDiv === null) {
    throw new Error('No div found')
  }

  return usernameDiv!.textContent!
}
