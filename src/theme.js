import { extendTheme, theme as base, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const purpleRing = (props) => ({
  _focus: {
    ringColor: mode('purple.300', 'purple.600')(props),
    ring: 3,
  },
});

const inputBorder = (props) => ({
  _focus: {
    borderColor: mode('purple.300', 'purple.600')(props),
  },
});

const theme = extendTheme({
  config,
  styles: {
    global: {
      'body': {
        fontFeatureSettings: '"ss02"',
      }
    },
  },
  sizes: {
    18: '4.5rem',
  },
  components: {
    Heading: {
      baseStyle: (props) => ({
        color: mode('gray.700', 'white')(props),
        letterSpacing: '1px',
      }),
    },
    Text: {
      baseStyle: (props) => ({
        color: mode('gray.700', 'white')(props),
      }),
    },
    Link: {
      baseStyle: (props) => ({
        ...purpleRing(props),
      }),
    },
    Button: {
      baseStyle: (props) => ({
        ...purpleRing(props),
      }),
    },
    Input: {
      variants: {
        filled: (props) => ({
          field: {
            ...inputBorder(props),
          },
        }),
      },
    },
    Textarea: {
      variants: {
        filled: (props) => ({
          ...inputBorder(props),
        }),
      },
    },
  },
  colors: {
    twitter: '#1EA1F1',
  },
  fonts: {
    heading: `Cal Sans, ${base.fonts.heading}`,
    body: `Inter, ${base.fonts.body}`,
  },
});

export default theme;