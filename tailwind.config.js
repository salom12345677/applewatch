{
	import('tailwindcss').Config;
}
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				main: '#01010D',
				textDeco: '#6565EC',
				wrap: 'rgba(0, 0, 0, 0.6)',
				border: '#CCCCCC',
				bgcard: '#F4F4F4',
				bgfooter: '#F7F7F7',
			},
			backgroundImage: {
				heroOne: "url('./img/hero-bg1.png')",
				heroTwo: "url('./img/hero-bg2.png')",
			},
		},
		screens: {
			xs: '375px',
			sm: '576px',
			md: '768px',
			lg: '991px',
			xl: '1200px',
			xxl: '1440px',
		},
	},
	plugins: [],
};
