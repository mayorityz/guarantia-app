import Dashboard from '../screens/dashboard/home/Dashboard'
import Settings from '../screens/dashboard/settings/Settings'
import Transactions from '../screens/dashboard/transactions/Transactions'
import DashboardStackNavigation from '../navigation/dashboard/DashboardStackNavigation'
import TransactionStackNavigation from '../navigation/transactions/TransactionStackNavigation'
import Requests from '../screens/dashboard/home/Requests'

export const Auth_Screen_Titles = {
  LOGIN: 'Login',
  REGISTER: 'Register',
  WELCOME: 'Welcome',
}

export const TabScreenNavStack = {
  DASHBOARD: 'Home',
  SETTING: 'Setting',
  TRANSACTIONS: 'Transactions',
}

export const DashboardScreenTitles = {
  DASHBOARD: 'DashboardHome',
  DASHBOARD_RECEIVED: 'dashboard_received',
}

export const TranxScreenTitles = {
  HOME: 'TransactionHome',
}

// bottom tab navigation options
export const TabScreenOptions = [
  {
    name: TabScreenNavStack.DASHBOARD,
    component: DashboardStackNavigation,
  },
  {
    name: TabScreenNavStack.TRANSACTIONS,
    component: TransactionStackNavigation,
  },
  {
    name: TabScreenNavStack.SETTING,
    component: Settings,
  },
]

// Dashboard stack screens.
export const DashboardStack = [
  {
    name: DashboardScreenTitles.DASHBOARD,
    component: Dashboard,
  },
  {
    name: DashboardScreenTitles.DASHBOARD_RECEIVED,
    component: Requests,
  },
]

// Transaction stack screens
export const TransactionStacks = [
  {
    name: TranxScreenTitles.HOME,
    component: Transactions,
  },
]
