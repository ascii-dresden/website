import { Component, JSX } from 'solid-js';

import { background, fill } from './sticker.css.ts';

export const SvgSticker: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = function (props) {
	return (
		<svg
			height="100%"
			viewBox="0 0 105 132"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M5.06,73.039c-2.23,-1.992 -3.2,-5.117 -2.38,-8.091c0.317,-1.151 0.876,-2.184 1.613,-3.051c-0.272,-2.099 0.289,-4.282 1.678,-6.024c1.345,-1.689 3.267,-2.711 5.302,-2.955c0.654,-0.908 1.505,-1.689 2.525,-2.271l0.014,-0.008c1.238,-0.703 2.603,-1.045 3.952,-1.045c1.312,0 2.616,0.324 3.78,0.946l-0,-0.073c-0,-3.314 2.686,-6 6,-6l7.6,-0c-1.714,-3.997 -2.365,-7.441 -2.366,-10.495c-0.001,-4.994 1.762,-8.773 3.374,-12.005l0.005,-0.01c0.835,-1.666 1.692,-3.018 1.693,-4.89c-0.001,-1.432 -0.503,-3.17 -1.696,-5.557l-0.002,-0.004c-1.962,-3.934 -0.369,-8.699 3.558,-10.664c2.976,-1.489 6.442,-0.936 8.802,1.132c0.501,-0.439 1.066,-0.821 1.69,-1.134l0.005,-0.002c2.976,-1.484 6.44,-0.928 8.796,1.136c0.5,-0.437 1.063,-0.819 1.685,-1.131c3.924,-1.965 8.712,-0.376 10.675,3.562c2.47,4.936 3.373,9.068 3.373,12.663c-0,4.995 -1.764,8.772 -3.374,12.001l-0.003,0.006c-0.834,1.668 -1.693,3.022 -1.696,4.896c0.003,1.431 0.504,3.171 1.698,5.561l0.002,-0.001c0.793,1.588 1.004,3.313 0.716,4.936l9.901,-0c3.314,-0 6,2.686 6,6c-0,-0 -0,7.05 -0,7.049c2.578,1.497 4.877,3.677 6.729,6.392c3.119,4.566 5.078,10.745 5.08,17.571l0,0.004c-0.002,6.828 -1.961,13.005 -5.08,17.57c-1.852,2.716 -4.151,4.896 -6.729,6.392l-0,3.89c2.729,0.286 4.978,0.604 6.715,0.943c1.928,0.376 4.387,1.038 6.093,2.187c2.386,1.607 3.859,3.915 3.859,7.087c-0,3.173 -1.473,5.48 -3.857,7.087c-1.707,1.15 -4.167,1.812 -6.095,2.188c-2.459,0.48 -5.949,0.917 -10.372,1.283c-8.556,0.706 -19.922,1.097 -32.001,1.097c-12.079,0 -23.444,-0.391 -31.999,-1.097c-4.423,-0.366 -7.913,-0.803 -10.372,-1.283c-1.928,-0.376 -4.388,-1.038 -6.094,-2.188c-2.384,-1.607 -3.857,-3.914 -3.857,-7.087c-0,-3.172 1.473,-5.48 3.858,-7.087c1.706,-1.149 4.166,-1.811 6.094,-2.187c0.098,-0.019 0.198,-0.038 0.299,-0.057c0.236,-0.503 0.492,-1.034 0.765,-1.596c1.868,-3.84 4.732,-9.671 5.945,-17.618c-4.478,-2.187 -8.14,-5.922 -10.195,-10.694c-1.002,-2.326 -1.574,-4.784 -1.706,-7.274Z"
				class={background}
			/>
			<path
				d="M38.778,33.971c-0.001,-3.893 1.487,-6.807 2.743,-9.326c1.279,-2.552 2.328,-4.709 2.329,-7.578c-0.001,-2.11 -0.571,-4.721 -2.329,-8.239c-0.482,-0.967 -0.091,-2.138 0.874,-2.62c0.963,-0.482 2.135,-0.091 2.618,0.873c1.953,3.9 2.74,7.145 2.74,9.986c0.003,3.894 -1.485,6.808 -2.742,9.324c-1.278,2.555 -2.326,4.709 -2.328,7.58c0.002,2.108 0.571,4.72 2.33,8.241c0.483,0.965 0.093,2.137 -0.872,2.619c-0.281,0.139 -0.578,0.206 -0.873,0.206c-0.715,-0 -1.405,-0.396 -1.747,-1.08c-1.955,-3.902 -2.743,-7.147 -2.743,-9.986Zm10.491,-0c-0,-3.893 1.485,-6.808 2.742,-9.326c1.278,-2.554 2.328,-4.711 2.328,-7.577c0,-2.111 -0.57,-4.722 -2.326,-8.242c-0.483,-0.963 -0.095,-2.136 0.872,-2.619c0.964,-0.481 2.137,-0.091 2.617,0.872c1.954,3.902 2.741,7.146 2.741,9.989c0,3.891 -1.483,6.805 -2.741,9.324c-1.278,2.554 -2.326,4.71 -2.328,7.579c0,2.106 0.568,4.718 2.328,8.241l0.003,0c0.48,0.964 0.09,2.137 -0.875,2.619c-0.28,0.139 -0.577,0.206 -0.869,0.206c-0.716,-0 -1.408,-0.396 -1.748,-1.08c-1.954,-3.901 -2.744,-7.147 -2.744,-9.986Zm44.278,82.197c2.031,0.395 5.1,0.993 5.1,3.384c-0,2.392 -3.069,2.99 -5.1,3.386c-2.305,0.45 -5.574,0.85 -9.718,1.192c-8.424,0.695 -19.614,1.077 -31.507,1.077c-11.893,0 -23.082,-0.382 -31.505,-1.077c-4.144,-0.342 -7.414,-0.742 -9.717,-1.192c-2.031,-0.396 -5.1,-0.994 -5.1,-3.386c0,-2.391 3.069,-2.989 5.1,-3.384c0.96,-0.188 2.099,-0.366 3.388,-0.536c0.372,-1.187 1.049,-2.586 1.924,-4.383c2.425,-4.987 6.321,-13.041 7.015,-24.355c-4.913,-0.943 -9.122,-4.245 -11.15,-8.954c-1.063,-2.467 -1.453,-5.141 -1.144,-7.789c-0.513,-0.524 -1.094,-0.973 -1.739,-1.344c-0.79,-0.454 -1.173,-1.386 -0.93,-2.264c0.239,-0.868 1.029,-1.468 1.926,-1.468l0.134,-0c0.612,-0 1.153,-0.095 1.609,-0.223c-0.303,-0.842 -0.773,-1.811 -1.508,-2.79c-0.546,-0.729 -0.531,-1.737 0.038,-2.449c0.388,-0.487 0.968,-0.752 1.562,-0.752c0.275,0 0.555,0.056 0.818,0.175c0.971,0.435 1.99,0.665 3.033,0.685c-0.017,-0.476 -0.083,-1.019 -0.241,-1.602c-0.24,-0.88 0.147,-1.81 0.938,-2.262c0.311,-0.176 0.653,-0.263 0.991,-0.263c0.526,0 1.047,0.209 1.434,0.607c0.747,0.767 1.542,1.121 2.082,1.284c1.624,-0.569 3.314,-0.856 5.033,-0.856c0.415,-0 0.823,0.022 1.231,0.055l-0,-6.217l54.436,-0l-0,11.029c3.074,0.735 5.769,2.856 7.774,5.795c2.516,3.683 4.034,8.684 4.035,14.19c-0.001,5.508 -1.519,10.508 -4.035,14.19c-2.005,2.939 -4.7,5.061 -7.774,5.795l-0,13.018c-0,0.117 -0.012,0.231 -0.018,0.346c0.636,0.047 1.26,0.095 1.867,0.145c4.144,0.341 7.413,0.742 9.718,1.193Zm-13.566,-1.684l0,-62.017l-50.438,0l0,4.51c3.614,0.779 6.818,2.844 9.019,5.802c1.584,1.438 2.879,3.213 3.76,5.26c1.284,2.977 1.581,6.211 0.892,9.316c0.146,-0.025 0.293,-0.045 0.446,-0.045c0.984,0 2.025,0.6 2.475,1.891c0.406,-0.064 0.872,-0.127 1.335,-0.127c1.585,-0 2.769,0.806 3.21,2.156c0.527,0.457 0.925,1.083 1.14,1.864c0.361,1.302 0.319,3.256 -0.877,4.829c-0.765,1.003 -2.277,2.2 -5.142,2.2c-0.323,-0 -0.663,-0.015 -1.009,-0.047c-0.218,-0.018 -0.441,-0.028 -0.665,-0.028c-5.133,-0 -11.961,4.642 -14.584,8.688l0,13.308c0.485,-0.088 1.123,-0.161 2.116,-0.161c1.798,-0 3.238,1.057 3.914,2.697c0.712,0.405 1.308,1.031 1.705,1.846c0.472,0.97 0.611,2.083 0.457,3.127l37.177,-0c2.799,-0 5.069,-2.269 5.069,-5.069Zm-5.278,2.637c-0.768,0 -1.471,-0.246 -2.052,-0.714c-0.577,0.468 -1.279,0.714 -2.047,0.714c-0.893,0 -1.699,-0.333 -2.324,-0.965c-0.153,-0.152 -0.29,-0.315 -0.407,-0.487c-1.036,0.951 -2.388,1.452 -3.958,1.452c-1.91,0 -3.487,-0.732 -4.57,-2.12c-0.023,-0.028 -0.045,-0.057 -0.068,-0.087c-0.019,0.026 -0.039,0.053 -0.06,0.078c-1.091,1.39 -2.678,2.129 -4.583,2.129c-1.906,0 -3.488,-0.732 -4.569,-2.118c-0.022,-0.028 -0.046,-0.058 -0.068,-0.089c-0.021,0.026 -0.041,0.055 -0.063,0.08c-1.087,1.388 -2.676,2.127 -4.581,2.127c-1.909,0 -3.489,-0.732 -4.569,-2.12c-0.866,-1.104 -1.308,-2.37 -1.308,-3.755l0,-6.495c0,-1.421 0.435,-2.689 1.292,-3.77c0.209,-0.266 0.438,-0.507 0.681,-0.724c-0.445,-0.564 -0.689,-1.257 -0.689,-1.995c-0,-0.908 0.33,-1.715 0.951,-2.336c0.619,-0.622 1.427,-0.95 2.335,-0.95l1.307,0c1.408,0 2.67,0.436 3.749,1.295c0.337,0.264 0.634,0.56 0.895,0.88c0.019,-0.024 0.037,-0.047 0.056,-0.071c1.072,-1.371 2.66,-2.104 4.581,-2.104c1.907,0 3.486,0.733 4.569,2.117c0.019,0.026 0.04,0.052 0.06,0.078c0.026,-0.031 0.048,-0.061 0.072,-0.091c1.068,-1.371 2.657,-2.104 4.58,-2.104c1.57,0 2.915,0.498 3.947,1.445c0.117,-0.176 0.253,-0.342 0.407,-0.495c0.621,-0.622 1.428,-0.95 2.335,-0.95c0.761,0 1.456,0.241 2.037,0.705c0.577,-0.464 1.282,-0.705 2.062,-0.705c0.886,0 1.689,0.33 2.318,0.959c0.635,0.636 0.966,1.44 0.966,2.327c0,0.724 -0.218,1.389 -0.634,1.944c0.415,0.553 0.634,1.21 0.634,1.929l0,11.701c0,0.893 -0.332,1.694 -0.963,2.324c-0.63,0.629 -1.432,0.961 -2.321,0.961Zm-0,-17.578c0.378,0 0.69,-0.122 0.938,-0.369c0.246,-0.247 0.37,-0.551 0.37,-0.913c0,-0.363 -0.128,-0.671 -0.383,-0.926c-0.255,-0.255 -0.565,-0.382 -0.925,-0.382c-0.38,0 -0.692,0.122 -0.939,0.37c-0.246,0.246 -0.37,0.559 -0.37,0.938c0,0.362 0.131,0.666 0.395,0.913c0.264,0.247 0.567,0.369 0.914,0.369Zm-4.099,-2.59c-0.378,0 -0.69,0.122 -0.937,0.37c-0.246,0.246 -0.37,0.559 -0.37,0.938c-0,0.362 0.131,0.666 0.395,0.913c0.261,0.247 0.567,0.369 0.912,0.369c0.379,0 0.693,-0.122 0.939,-0.369c0.246,-0.247 0.37,-0.551 0.37,-0.913c-0,-0.363 -0.128,-0.671 -0.382,-0.926c-0.257,-0.255 -0.563,-0.382 -0.927,-0.382Zm-22.733,0.863c-0.725,-0.575 -1.564,-0.863 -2.518,-0.863l-1.308,0c-0.378,0 -0.692,0.122 -0.938,0.37c-0.246,0.246 -0.37,0.559 -0.37,0.938c-0,0.362 0.13,0.666 0.395,0.913c0.262,0.247 0.568,0.369 0.913,0.369l1.308,0c0.347,0 0.646,0.1 0.902,0.298c0.255,0.197 0.382,0.534 0.382,1.012l-1.284,0c-1.315,0 -2.329,0.453 -3.035,1.358c-0.579,0.723 -0.864,1.572 -0.864,2.543l0,6.49c0,0.938 0.295,1.787 0.888,2.543c0.708,0.906 1.711,1.359 3.011,1.359c1.299,-0 2.313,-0.462 3.035,-1.383c0.577,-0.725 0.865,-1.563 0.865,-2.519l-0,-10.391c-0,-1.301 -0.46,-2.312 -1.382,-3.037Zm-1.234,13.428c-0,0.363 -0.083,0.651 -0.247,0.865c-0.231,0.281 -0.577,0.419 -1.037,0.419c-0.493,0 -0.836,-0.123 -1.023,-0.37c-0.19,-0.246 -0.285,-0.559 -0.285,-0.937l-0,-6.467c-0,-0.363 0.099,-0.671 0.297,-0.928c0.197,-0.254 0.535,-0.381 1.011,-0.381l1.284,0l-0,7.799Zm23.967,-10.391c-0.378,0 -0.69,0.124 -0.937,0.37c-0.246,0.246 -0.37,0.551 -0.37,0.912l-0,11.701c-0,0.363 0.128,0.671 0.382,0.926c0.255,0.256 0.564,0.384 0.925,0.384c0.364,-0 0.67,-0.128 0.927,-0.384c0.254,-0.255 0.382,-0.563 0.382,-0.926l-0,-11.701c-0,-0.361 -0.132,-0.666 -0.395,-0.912c-0.265,-0.246 -0.568,-0.37 -0.914,-0.37Zm4.099,0c-0.38,0 -0.692,0.124 -0.939,0.37c-0.246,0.246 -0.37,0.551 -0.37,0.912l0,11.701c0,0.363 0.127,0.671 0.383,0.926c0.254,0.256 0.565,0.384 0.926,0.384c0.36,-0 0.67,-0.128 0.925,-0.384c0.255,-0.255 0.383,-0.563 0.383,-0.926l0,-11.701c0,-0.361 -0.132,-0.666 -0.396,-0.912c-0.261,-0.246 -0.568,-0.37 -0.912,-0.37Zm-10.787,-3.9c-1.317,0 -2.33,0.452 -3.036,1.358c-0.577,0.723 -0.865,1.571 -0.865,2.542l0,10.391c0,0.938 0.297,1.787 0.89,2.543c0.706,0.906 1.71,1.359 3.011,1.359c1.3,-0 2.311,-0.462 3.036,-1.383c0.575,-0.725 0.864,-1.563 0.864,-2.519l0,-1.308c0,-0.361 -0.131,-0.666 -0.395,-0.913c-0.264,-0.247 -0.569,-0.371 -0.913,-0.371c-0.38,0 -0.692,0.124 -0.939,0.371c-0.247,0.247 -0.37,0.552 -0.37,0.913l0,1.308c0,0.363 -0.082,0.651 -0.248,0.865c-0.229,0.281 -0.576,0.419 -1.035,0.419c-0.495,0 -0.837,-0.123 -1.026,-0.37c-0.189,-0.246 -0.283,-0.559 -0.283,-0.937l0,-10.368c0,-0.362 0.097,-0.671 0.295,-0.925c0.2,-0.256 0.537,-0.385 1.014,-0.385c0.459,0 0.806,0.149 1.035,0.446c0.166,0.213 0.248,0.502 0.248,0.864l0,1.282c0,0.363 0.126,0.671 0.382,0.927c0.256,0.254 0.565,0.383 0.927,0.383c0.361,0 0.669,-0.129 0.923,-0.383c0.257,-0.256 0.385,-0.564 0.385,-0.927l0,-1.282c0,-0.955 -0.297,-1.802 -0.888,-2.542c-0.708,-0.906 -1.712,-1.358 -3.012,-1.358Zm-9.282,0c-1.316,0 -2.329,0.452 -3.035,1.358c-0.578,0.723 -0.865,1.571 -0.865,2.542l-0,2.592c-0,0.954 0.297,1.802 0.889,2.542c0.706,0.905 1.711,1.357 3.011,1.357c0.46,-0 0.807,0.15 1.038,0.446c0.164,0.214 0.246,0.501 0.246,0.862l0,2.592c0,0.363 -0.082,0.651 -0.246,0.865c-0.231,0.281 -0.578,0.419 -1.038,0.419c-0.494,0 -0.836,-0.123 -1.025,-0.37c-0.188,-0.246 -0.283,-0.559 -0.283,-0.937l-0,-1.285c-0,-0.361 -0.131,-0.666 -0.395,-0.913c-0.264,-0.247 -0.566,-0.371 -0.913,-0.371c-0.362,0 -0.667,0.124 -0.914,0.371c-0.247,0.247 -0.37,0.552 -0.37,0.913l-0,1.308c-0,0.938 0.297,1.787 0.889,2.543c0.706,0.906 1.711,1.359 3.011,1.359c1.3,-0 2.312,-0.462 3.037,-1.383c0.574,-0.725 0.863,-1.563 0.863,-2.519l0,-2.592c0,-0.952 -0.295,-1.801 -0.887,-2.542c-0.71,-0.903 -1.713,-1.356 -3.013,-1.356c-0.494,-0 -0.836,-0.128 -1.025,-0.383c-0.188,-0.256 -0.283,-0.572 -0.283,-0.951l-0,-2.567c-0,-0.362 0.1,-0.671 0.297,-0.925c0.197,-0.256 0.534,-0.385 1.011,-0.385c0.46,0 0.807,0.149 1.038,0.446c0.164,0.213 0.246,0.502 0.246,0.864l0,1.282c0,0.363 0.127,0.671 0.383,0.927c0.255,0.254 0.564,0.383 0.926,0.383c0.361,0 0.67,-0.129 0.925,-0.383c0.255,-0.256 0.382,-0.564 0.382,-0.927l0,-1.282c0,-0.955 -0.295,-1.802 -0.887,-2.542c-0.71,-0.906 -1.713,-1.358 -3.013,-1.358Zm27.346,-20.203l-0,9.462c0.708,-1.249 1.159,-2.907 1.157,-4.731c0.002,-1.823 -0.449,-3.483 -1.157,-4.731Zm-51.587,43.801c4.508,0 4.613,-6.669 1.266,-6.669c-1.774,0 -2.088,0.25 -2.971,0.376c-1.164,0.332 -2.457,0.63 -2.467,0.633c-0.076,0.015 -0.151,0.024 -0.226,0.024c-0.454,0 -0.864,-0.312 -0.97,-0.772c-0.124,-0.537 0.21,-1.073 0.747,-1.197c0.001,-0.001 0.859,-0.199 1.761,-0.439l-0,-11.318c-0.105,0.037 -0.215,0.062 -0.327,0.062c-0.178,0 -0.358,-0.047 -0.522,-0.147c-0.467,-0.288 -0.615,-0.903 -0.327,-1.373c0.011,-0.015 1.014,-1.653 2.006,-2.926c2.777,-3.829 9.404,-11.11 14.898,-10.626c4.834,0.427 5.997,-2.63 5.547,-4.266c-0.565,-2.045 -4.445,0.529 -4.445,-1.244c0,-0.919 -0.427,-2.56 -2.417,0.055c-1.082,1.421 -5.359,4.028 -8.982,4.922c-0.202,0.097 -0.404,0.193 -0.611,0.282c-1.926,0.829 -3.957,1.249 -6.039,1.249c-0.296,0 -0.589,-0.015 -0.883,-0.032c-1.082,17.168 -9.26,26.877 -9.26,30.262c0,3.624 -1.349,3.144 14.222,3.144Zm-16.279,-43.403c2.9,6.736 10.711,9.843 17.447,6.943c6.733,-2.9 9.842,-10.712 6.942,-17.446c-2.851,-6.616 -10.435,-9.718 -17.086,-7.076c-0.609,-0.102 -2.215,-0.496 -3.652,-1.974c0.468,1.722 0.32,3.171 0.164,3.966c-0.924,0.184 -3.166,0.437 -5.704,-0.699c1.457,1.94 2.033,3.861 2.26,4.997c-0.033,0.065 -0.057,0.131 -0.089,0.195c-0.783,0.453 -2.172,1.05 -4.005,1.02c1.345,0.774 2.269,1.715 2.857,2.453c-0.454,2.487 -0.209,5.126 0.866,7.621Zm11.357,-4.219c0.218,0.505 -0.016,1.092 -0.522,1.311c-0.128,0.055 -0.262,0.081 -0.393,0.081c-0.387,0 -0.754,-0.227 -0.917,-0.603c-0.168,-0.393 -0.237,-0.803 -0.238,-1.208c0.006,-0.715 0.206,-1.426 0.63,-2.034c0.412,-0.603 1.15,-1.121 2.052,-1.116c0.342,-0.001 0.692,0.073 1.027,0.209c0.51,0.206 0.757,0.786 0.551,1.298c-0.206,0.511 -0.787,0.758 -1.296,0.552c-0.132,-0.052 -0.219,-0.063 -0.282,-0.063c-0.15,0.005 -0.254,0.049 -0.421,0.27c-0.156,0.212 -0.269,0.577 -0.266,0.884c0,0.174 0.034,0.324 0.075,0.418l-0,0.001Zm8.32,6.296c-2.236,1.688 -4.751,2.567 -6.579,2.585c-0.444,-0.002 -0.859,-0.051 -1.264,-0.208c-0.514,-0.203 -0.764,-0.782 -0.562,-1.294c0.202,-0.512 0.781,-0.765 1.294,-0.563c0.064,0.028 0.258,0.072 0.532,0.07c1.169,0.018 3.503,-0.73 5.368,-2.176c1.89,-1.453 3.332,-3.486 3.333,-6.104c-0.001,-1.062 -0.236,-2.243 -0.81,-3.56c-0.221,-0.506 0.009,-1.094 0.514,-1.315c0.505,-0.222 1.093,0.009 1.315,0.514c0.671,1.537 0.976,3.001 0.975,4.361c0.001,3.405 -1.905,6.011 -4.116,7.69Zm-3.993,-10.925c-0.387,0 -0.755,-0.226 -0.916,-0.602c-0.17,-0.393 -0.238,-0.803 -0.238,-1.206c0.004,-0.717 0.205,-1.427 0.628,-2.036c0.411,-0.602 1.148,-1.121 2.052,-1.115c0.346,-0.002 0.692,0.074 1.026,0.208c0.51,0.204 0.759,0.784 0.556,1.295c-0.205,0.511 -0.786,0.761 -1.297,0.557c-0.135,-0.053 -0.224,-0.065 -0.285,-0.066c-0.149,0.005 -0.253,0.052 -0.421,0.271c-0.154,0.211 -0.269,0.576 -0.265,0.886c0,0.172 0.033,0.32 0.074,0.414l0,0.001c0.219,0.506 -0.014,1.093 -0.521,1.311c-0.128,0.055 -0.262,0.082 -0.393,0.082Zm52.182,21.027l-0,10.079c2.312,-0.693 4.428,-2.386 6.127,-4.861c2.255,-3.291 3.69,-7.927 3.687,-13.064c0.003,-5.137 -1.432,-9.772 -3.688,-13.064c-1.698,-2.476 -3.814,-4.168 -6.126,-4.861l-0,10.079c0.5,0.425 0.952,0.924 1.336,1.488c1.144,1.68 1.813,3.911 1.815,6.358c-0.002,2.447 -0.671,4.678 -1.815,6.358c-0.384,0.564 -0.836,1.064 -1.336,1.488Zm-22.22,-55.356c-0.002,-3.895 1.485,-6.809 2.741,-9.325c1.279,-2.553 2.328,-4.712 2.33,-7.578c0,-2.11 -0.571,-4.721 -2.33,-8.242c-0.481,-0.965 -0.09,-2.135 0.874,-2.618c0.963,-0.482 2.137,-0.092 2.618,0.873c1.953,3.901 2.743,7.146 2.743,9.987c-0,3.894 -1.488,6.806 -2.743,9.323c-1.277,2.554 -2.328,4.712 -2.33,7.58c0.002,2.108 0.571,4.72 2.33,8.241l0.002,0c0.482,0.965 0.087,2.137 -0.875,2.621c-0.279,0.139 -0.576,0.205 -0.869,0.205c-0.716,-0 -1.408,-0.396 -1.75,-1.08c-1.952,-3.903 -2.743,-7.148 -2.741,-9.987Z"
				class={fill}
			/>
		</svg>
	);
};
