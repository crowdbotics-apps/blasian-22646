import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile173685Navigator from '../features/UserProfile173685/navigator';
import Settings173684Navigator from '../features/Settings173684/navigator';
import Settings173682Navigator from '../features/Settings173682/navigator';
import SignIn2173680Navigator from '../features/SignIn2173680/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile173685: { screen: UserProfile173685Navigator },
Settings173684: { screen: Settings173684Navigator },
Settings173682: { screen: Settings173682Navigator },
SignIn2173680: { screen: SignIn2173680Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
