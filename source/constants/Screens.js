import Dashboard from '../screens/dashboard/home/Dashboard'
import Settings from '../screens/dashboard/settings/Settings'
import Transactions from '../screens/dashboard/transactions/Transactions'

export const Auth_Screen_Titles = {
  LOGIN: 'Login',
  REGISTER: 'Register',
}

export const TabScreenNavStack = {
  DASHBOARD: 'Home',
  SETTING: 'Setting',
  TRANSACTIONS: 'Transactions',
}

// bottom tab navigation options
export const TabScreenOptions = [
  {
    name: TabScreenNavStack.DASHBOARD,
    component: Dashboard,
  },
  {
    name: TabScreenNavStack.TRANSACTIONS,
    component: Transactions,
  },
  {
    name: TabScreenNavStack.SETTING,
    component: Settings,
  },
]
