/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
				PublicSans: ['Public-Sans', 'sans-serif'],
			  },
			  colors: {
				"dark-blue": "var(--dark-blue)",
				"lime-green": "var(--lime-green)",
        "bright-cyan": "var(--bright-cyan)",
        "grayish-blue": "var(--grayish-blue)",
        "light-grayish-blue": "var(--light-grayish-blue)",
        "light-gray": "var(--light-gray)",
        "white":"var(--white)"
			  },
    },
  },
  plugins: [],
}

