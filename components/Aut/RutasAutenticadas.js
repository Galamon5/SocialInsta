import { createTabNavigator } from 'react-navigation';
import Home from './Home';
import Search from './Search';
import Add from './Add';
import Follow from './Follow';
import Profile from './Profile';

const RutasAutenticadas = createTabNavigator({
  Home: {
    screen: Home,
  },
  Search: {
    screen: Search,
  },
  Add: {
    screen: Add,
  },
  Follow: {
    screen: Follow,
  },
  Profile: {
    screen: Profile,
  },
}, {
  tabBarPosition: 'top',
});

export { RutasAutenticadas };
