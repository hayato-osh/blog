export const astroPageLoader = (fn: () => void) => {
	document.addEventListener("astro:page-load", fn);
};
