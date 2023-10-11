import React from 'react'
import renderer, { act } from 'react-test-renderer'
import { TransactionHistory } from '../../screens/TransactionHistory'

jest.mock('../../hooks/useFetch', () => ({
  useFetch: jest.fn(() => ({
    loading: false,
    error: null,
    data: [
      {
        account_id: '0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2',
        amount: 50,
        created_at: new Date(),
        transaction_id: 'abc123',
      },
    ],
    refetch: jest.fn(),
  })),
}))

jest.mock('../../context/AccountContext', () => ({
  useAccountContext: jest.fn(() => ({
    account_id: '0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2',
    balance: 100,
  })),
}))

describe('navigation', () => {
  describe('TransactionHistory component', () => {
    test('it renders error state correctly', async () => {
      jest.spyOn(console, 'error').mockImplementation(() => {})
      jest
        .requireMock('../../hooks/useFetch')
        .useFetch.mockImplementation(() => ({
          loading: false,
          error: 'An error occurred',
          data: null,
          refetch: jest.fn(),
        }))

      let tree
      await act(async () => {
        tree = renderer.create(<TransactionHistory />)
        await new Promise((resolve) => setTimeout(resolve, 0))
      })
      expect(tree.toJSON()).toMatchSnapshot()
    })

    test('it renders data correctly', async () => {
      let tree
      await act(async () => {
        tree = renderer.create(<TransactionHistory />)
        await new Promise((resolve) => setTimeout(resolve, 0))
      })
      expect(tree.toJSON()).toMatchSnapshot()
    })
  })
})
