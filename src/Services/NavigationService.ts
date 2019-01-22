import { NavigationActions, NavigationParams } from 'react-navigation';
// @ts-ignore
import { DrawerActions } from 'react-navigation-drawer';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

function navigate(routeName: string , params: NavigationParams ) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}


function toggleDrawer() {
  return (
    _navigator.dispatch(
      DrawerActions.toggleDrawer()
    )
  );
}

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
    toggleDrawer
};