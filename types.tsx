export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

export type BottomTabParamList = {
  Form: undefined
  History: undefined
}

export type TabOneParamList = {
  TabOneScreen: undefined
}

export type TabTwoParamList = {
  TabTwoScreen: undefined
}

export type Transaction = {
  account_id: string
  amount: number
  created_at: Date
  transaction_id: string
}

export type Account = {
  account_id: string
  balance: number
}
