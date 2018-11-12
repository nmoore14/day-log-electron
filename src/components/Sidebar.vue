<template>
	<div class="w-56 bg-grey-darkest text-white border-r border-blackblack fixed min-h-screen pt-8">
		<div class="search-container text-center p-4 relative">
			<input type="text" placeholder="Search" class="bg-grey-darker text-grey-light text-xs p-2 pl-6 border border-grey-dark rounded clickable">
			<div class="absolute pin-t py-6 px-5 text-grey-light">
				<svg width="15" height="15" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
					<path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z" fill="#fff"/>
				</svg>
			</div>
			<div class="sidebar-icons">
				<div class="sidebar-icon flex items-center px-4 py-2 mt-1 text-grey-light cursor-pointer bg-grey-darker hover:bg-grey-darker">
					<span>
						<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" class="mt-1">
							<path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" fill="#fff"/>
						</svg>
					</span>
					<div class="ml-1">Home</div>
				</div>
			</div>
		</div>
	</div>
</template>