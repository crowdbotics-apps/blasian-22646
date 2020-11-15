import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen28173707Navigator from '../features/BlankScreen28173707/navigator';
import Settings173706Navigator from '../features/Settings173706/navigator';
import UserProfile173699Navigator from '../features/UserProfile173699/navigator';
import Settings173698Navigator from '../features/Settings173698/navigator';
import Settings173696Navigator from '../features/Settings173696/navigator';
import SignIn2173694Navigator from '../features/SignIn2173694/navigator';
import Settings173692Navigator from '../features/Settings173692/navigator';
import UserProfile173685Navigator from '../features/UserProfile173685/navigator';
import Settings173684Navigator from '../features/Settings173684/navigator';
import Settings173682Navigator from '../features/Settings173682/navigator';
import SignIn2173680Navigator from '../features/SignIn2173680/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen28173707: { screen: BlankScreen28173707Navigator },
Settings173706: { screen: Settings173706Navigator },
UserProfile173699: { screen: UserProfile173699Navigator },
Settings173698: { screen: Settings173698Navigator },
Settings173696: { screen: Settings173696Navigator },
SignIn2173694: { screen: SignIn2173694Navigator },
Settings173692: { screen: Settings173692Navigator },
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
