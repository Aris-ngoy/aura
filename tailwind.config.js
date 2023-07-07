module.exports = {
    //mode : 'jit',
    theme: {
      screens: {
        xs: '320px',
        sm: '375px',
        md: '420px',
        lg: '680px',
        tablet: '1024px',
      },
      fontFamily: {
        MontserratThin : ['Montserrat_100Thin'], 
        MontserratLight : ['Montserrat_300Light'],
        MontserratRegular : ['Montserrat_400Regular'],
        MontserratMedium : ['Montserrat_500Medium'],
        MontserratSemiBold : ['Montserrat_600SemiBold'],
        MontserratBold : ['Montserrat_700Bold'],
        MontserratExtraBold : ['Montserrat_800ExtraBold']
      },
      extend: {
        colors: {
          primary: {
            100: '#F8D4E1',
            200: '#F2ABCB',
            300: '#DA79AE',
            400: '#B65192',
            500: '#86236C',
            600: '#731964',
            700: '#60115B',
            800: '#4B0B4D',
            900: '#390640',
          },
        },
      },
    },
    variants: {},
    plugins: [],
  };