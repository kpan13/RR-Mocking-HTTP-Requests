import React, { useEffect, useState } from 'react'
import './App.css'

beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
  })
  describe('receives values from GitHub REST API using jest fetch mock', () => {
  test("receives GitHub name", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'coder'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('coder')
  })
  test("receives GitHub URL", async () => {
    fetch.mockResponseOnce(JSON.stringify({html_url: 'https://github.com/learningToCode1234'}))
    render(<App />)
    const gitHubURL = await waitFor(() => screen.getByRole('Link', { level: 2 }))
    expect(gitHubURL).toHaveTextContent('coder')
  })
  test("receives GitHub Image URL", async () => {
    fetch.mockResponseOnce(JSON.stringify({avatar_url: 'https://avatars.githubusercontent.com/u/87375911?v=4'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByAltText('Github profile image'))
    expect(gitHubName).toHaveTextContent('coder')
  })

  


  })

