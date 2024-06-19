import plugin from 'tailwindcss/plugin'

export const shadcnPlugin = plugin(
  function ({ addBase, theme }) {
    addBase({
      ':root': {
        // =============================================================
        // Named Colors
        // =============================================================
        '--primary': '240 4.8% 95.9%',
        '--primary-50': theme('colors.gulfStream.100'),
        '--primary-250': theme('colors.gulfStream.150'),
        '--primary-500': theme('colors.gulfStream.450'),

        '--foreground-250': theme('colors.blackBlue.250'),
        '--foreground-500': theme('colors.blackBlue.400'),
        '--foreground-750': theme('colors.blackBlue.600'),

        '--background': theme('colors.white'),
        '--primary-foreground': '0 0% 98%',

        '--secondary': '240 4.8% 95.9%',
        '--secondary-foreground': '240 5.9% 10%',

        '--foreground': '240 10% 3.9%',

        '--accent': '240 4.8% 95.9%',
        '--accent-foreground': '240 5.9% 10%',

        '--muted': '240 4.8% 95.9%',
        '--muted-foreground': '240 3.8% 46.1%',

        // =============================================================
        // Other
        // =============================================================
        '--border': '240 5.9% 90%',
        '--input': '240 5.9% 90%',
        '--ring': '240 5% 64.9%',
        '--radius': '0.5rem',

        // =============================================================
        // Main Components
        // ============================================================= 

        // Header
        // -------------------------------------------------------------
        "--header-height": "",
        "--header-background": "white"


        // Sidebar
        // -------------------------------------------------------------

        // Main
        // ------------------------------------------------------------
      },
      '.dark': {
        // =============================================================
        // Mains Components
        // ============================================================= 

        // Header
        // -------------------------------------------------------------
        "--header-background": "black"


      }
    })
    addBase({
      '*': {
        '@apply border-border': {}
      },
      body: {
        '@apply bg-background text-foreground': {}
      }
    })
  },
  {
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px'
        }
      },
      extend: {
        colors: {

          // Primitives
          // =================================================

          // Neutral
          // --------------------------------------

          // Feedback
          // --------------------------------------

          // Named Colors
          // =================================================
          primary: {
            DEFAULT: 'var(--primary)',
            50: 'var(--primary-50)',
            500: 'var(--primary)',
            foreground: 'var(--primary-foreground)'
          },

          foreground: {
            DEFAULT: 'var(--foreground-500)',
            250: 'var(--foreground-250)',
            500: 'var(--foreground-500)',
            750: 'var(--foreground-750)'
          },

          destructive: {
            DEFAULT: 'var(--destructive)',
            foreground: 'var(--destructive-foreground)'
          },
          muted: {
            DEFAULT: 'var(--muted)',
            foreground: 'var(--muted-foreground)'
          },
          accent: {
            DEFAULT: 'var(--accent)',
            foreground: 'var(--accent-foreground)'
          },

          // Other
          // =================================================
          border: 'var(--border)',
          input: 'var(--input)',
          ring: 'var(--ring)',
          background: 'var(--background)',

          // =============================================================
          // Main Components
          // ============================================================= 
          header: {
            background: 'var(--header-background)',
          },
          // main: {

          // },
          // sidebar: {
            
          // },


          // =============================================================
          // Components
          // ============================================================= 
          popover: {
            DEFAULT: 'var(--popover)',
            foreground: 'var(--popover-foreground)'
          },
          card: {
            DEFAULT: 'var(--card)',
            foreground: 'var(--card-foreground)'
          }
        },
        // Animation
        // =================================================
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' }
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' }
          }
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out'
        }
      }
    }
  }
)
