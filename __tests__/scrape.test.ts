import { readFile } from 'fs/promises'
import { JSDOM } from 'jsdom'
import path from 'path'

import { getUsername } from '../src/scrape-commands'

describe('HTML response scrape test', () => {
  let dom: JSDOM

  // Load the HTML sim file
  beforeAll(async () => {
    const filePath = path.join(__dirname, 'test.html')

    let data = await readFile(filePath, 'utf8')
    dom = new JSDOM(data)
  })

  test('should return the username', () => {
    let username = getUsername(dom)

    expect(username).toBe('TEST_USERNAME')
  })
})
