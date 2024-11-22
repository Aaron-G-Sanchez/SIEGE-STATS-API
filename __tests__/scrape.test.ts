import { readFile } from 'fs/promises'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('HTML response scrape test', () => {
  let dom: JSDOM

  // Load the HTML sim file
  beforeAll(async () => {
    const filePath = path.join(__dirname, 'test.html')

    let data = await readFile(filePath, 'utf8')
    dom = new JSDOM(data)
  })

  test('should return the username', () => {
    // TODO: Replace with function that will actually search for the username.
    let username = dom.window.document.querySelector(
      'span.fit-long-username'
    )?.textContent

    expect(username).toBe('TEST_USERNAME')
  })
})
