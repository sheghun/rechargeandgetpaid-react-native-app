import { StyleSheet, Dimensions, ScaledSize, TextStyle, ViewStyle } from "react-native";
import { Subject } from 'rxjs';
import { widthPercentageToDP } from "../Services/Dimensionservice";

// Color Scheme

export let priColor = '#c62828';
export let priColorLight = '#F44336';
export let priColorDark = '#B71C1C';
export let priColorLightText = '#000';
export let priColorText = '#fff';
export let priColorDarkText = '#fff';

export let secColor = '#F6BB18';
export let secColorLight = '#F6E323';
export let secColorDark = '#F27800';
export let secColorText = '#000';
export let secColorLightText = '#000';
export let secColorDarkText = '#000';
export let secColorOverlay = '#FEFCE6'

export let baseBg = '#fff';
export let priBg = priColorDark;
export let secBg = secColorDark;
export let secBaseBg = '#f5f5f5';

export let inputBottomColor = '#ddd';

// Fonts

export let fontFamily = 'IBMPlexSansCondensed-Regular';
export let h1Fontsize = 96;
export let h1Fontspacing = -1.5;
export let h1FontWeight = '200';

export let h2Fontsize = 60;
export let h2Fontspacing = -0.5;
export let h2FontWeight = '200';

export let h3Fontsize = 48;
export let h3Fontspacing = 0;
export let h3FontWeight = '400';

export let h4Fontsize = 34;
export let h4Fontspacing = 0.25;
export let h4FontWeight = '400';

export let h5Fontsize = 24;
export let h5Fontspacing = 0;
export let h5FontWeight = '400';

export let h6Fontsize = 20;
export let h6Fontspacing = 0.25;
export let h6FontWeight = '500';

export let body1Fontsize = 16;
export let body1Fontspacing = 0.5;
export let body1FontWeight = '400';

export let body2Fontsize = 14;
export let body2Fontspacing = 0.25;
export let body2FontWeight = '400';


export let subtitle1Fontsize = 16;
export let subtitle1Fontspacing = 0.15;
export let subtitle1FontWeight = '400';

export let subtitle2Fontsize = 14;
export let subtitle2Fontspacing = 0.1;
export let subtitle2FontWeight = '500';

export let buttonFontsize = 14;
export let buttonFontspacing = 1.25;
export let buttonFontWeight = '500';

export let captionFontsize = 12;
export let captionFontspacing = 0.4;
export let captionFontWeight = '400';

export let overlineFontsize = 12;
export let overlineFontspacing = 2;
export let overlineFontWeight = '500';

export let cardElevation = 4;

// Dimensions
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
export let deviceWidth = window.width;
export let deviceHeight = window.height;

// Header
export let headerWidth;
export let headerHeight;
export let headerPadding;
export let headerPaddingBottom;
export let headerPaddingTop;

// Margin
export let marginDefault;

// Drawer Lists
export let activeItemBackgroundColor = '#FCEFEF';
export let activeItemColor = '#C72929';



interface dimension {
    window: ScaledSize;
    screen: ScaledSize
}
export const stylesSubscribe = new Subject();

const responsiveFunc = ({ window, screen }: dimension) => {

    deviceWidth = window.width;
    deviceHeight = window.height

    const phoneTablet = window.width < 719;

    switch (true) {
        case phoneTablet:
            marginDefault = 16
            break;

        default:
            marginDefault = 24
            break;
    }

    stylesSubscribe.next('update');
}


responsiveFunc({ window, screen });


const styles = StyleSheet.create({
    baseContainer: {
        backgroundColor: baseBg,
        flex: 1,
        margin: 8,
        marginTop: 16
    },

    card: {
        backgroundColor: '#fff',
        elevation: 4,
        padding: marginDefault
    } as ViewStyle,

    body1: {
        fontFamily: 'IBMPlexSansCondensed-Regular',
        fontSize: body1Fontsize,
        letterSpacing: body2Fontspacing
    } as TextStyle,

    body2: {
        fontFamily: 'IBMPlexSansCondensed-Regular',
        fontSize: body2Fontsize,
        letterSpacing: body2Fontspacing,
    } as TextStyle,

    baseText: {
        fontFamily: 'IBMPlexSansCondensed-Regular',
        color: priColorLightText
    },
    subtitle1: {
        fontFamily: 'IBMPlexSansCondensed-Regular',
        fontSize: subtitle1Fontsize,
        letterSpacing: subtitle1Fontspacing,
    } as TextStyle,
    subtitle2: {
        fontFamily: 'IBMPlexSansCondensed-Medium',
        fontSize: subtitle2Fontsize,
        letterSpacing: subtitle2Fontspacing,
    } as TextStyle,
    overline: {
        fontFamily: 'IBMPlexSansCondensed-Medium',
        fontSize: overlineFontsize,
        letterSpacing: overlineFontspacing,
    } as TextStyle,
    headline2: {
        fontFamily: 'IBMPlexSansCondensed-ExtraLight',
        fontSize: h2Fontsize,
        letterSpacing: h2Fontspacing,
    } as TextStyle,
    headline3: {
        fontFamily: 'IBMPlexSansCondensed-Regular',
        fontSize: h3Fontsize,
        letterSpacing: h3Fontspacing
    } as TextStyle,
    headline4: {
        fontFamily: 'IBMPlexSansCondensed-Regular',
        fontSize: h4Fontsize,
        letterSpacing: h4Fontspacing,
    } as TextStyle,
    headline5: {
        fontFamily: 'IBMPlexSansCondensed-Regular',
        fontSize: h5Fontsize,
        letterSpacing: h5Fontspacing
    } as TextStyle,
    headline6: {
        fontFamily: 'IBMPlexSansCondensed-Medium',
        fontSize: h6Fontsize,
        letterSpacing: h6Fontspacing
    } as TextStyle,
    buttonStyle: {
        fontFamily: 'IBMPlexSansCondensed-Medium',
        fontSize: buttonFontsize,
        letterSpacing: buttonFontspacing,
    } as TextStyle

})

export let baseContainer = styles.baseContainer;
export let baseText = styles.baseText;
export let body1Style = styles.body1
export let body2Style = styles.body2;
export let subtitle1Style = styles.subtitle1;
export let subtitle2Style = styles.subtitle2
export let overlineStyle = styles.overline;
export let headline2Style = styles.headline2;
export let headline3Style = styles.headline4;
export let headline4Style = styles.headline4;
export let headline5Style = styles.headline5;
export let headline6Style = styles.headline6;
export let buttonStyle = styles.buttonStyle;
export let cardStyle = styles.card


Dimensions.addEventListener('change', responsiveFunc);
