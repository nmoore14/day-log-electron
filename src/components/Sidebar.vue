<template>
	<div class="w-56 bg-black text-white border-r border-blackblack fixed min-h-screen pt-8">
		<div class="search-container text-center p-4 relative">
			<input type="text" placeholder="Search" class="bg-grey-lighter text-indigo-dark text-xs p-2 pl-6 border border-grey-dark rounded clickable">
			<div class="absolute pin-t py-6 px-5 text-teal-light">
				<svg width="15" height="15" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
					<path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z" fill="#4dc0b5"/>
				</svg>
			</div>
			<div class="sidebar-icons">
				<div class="clickable sidebar-icon flex items-center px-4 py-2 mt-1 text-teal-light cursor-pointer rounded bg-grey-darker hover:bg-grey-darker">
					<span>
						<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" class="mt-1">
							<path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 
							74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 
							9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" fill="#4dc0b5"/>
						</svg>
					</span>
					<div class="ml-1">Home</div>
				</div>
				<div class="clickable sidebar-icon flex items-center px-4 py-2 mt-1 text-teal-light cursor-pointer rounded hover:bg-grey-darker">
					<span>
						<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
							<path d="M192 1664h1408v-1024h-1408v1024zm384-1216v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 
							23-9t9-23zm768 0v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zm384-64v1280q0 52-38 90t-90 
							38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 
							47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z" fill="#4dc0b5"/>
						</svg>
					</span>
					<div class="ml-1">Today</div>
				</div>
				<div class="clickable sidebar-icon flex items-center px-4 py-2 mt-1 text-teal-light cursor-pointer rounded hover:bg-grey-darker">
					<span>
						<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
						<path d="M1303 964l-512 512q-10 9-23 9t-23-9l-288-288q-9-10-9-23t9-22l46-46q9-9 22-9t23 9l220 220 
						444-444q10-9 23-9t22 9l46 46q9 9 9 22t-9 23zm-1175 700h1408v-1024h-1408v1024zm384-1216v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 
						23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zm768 0v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 
						23-9t9-23zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 
						0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z" fill="#4dc0b5"/>
						</svg>
					</span>
					<div class="ml-1">Week</div>
				</div><div class="clickable sidebar-icon flex items-center px-4 py-2 mt-1 text-teal-light cursor-pointer rounded hover:bg-grey-darker">
					<span>
						<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
						<path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 
						736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 
						0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 
						0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 
						52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 
						113 47t47 113v96h128q52 0 90 38t38 90z" fill="#4dc0b5"/>
						</svg>
					</span>
					<div class="ml-1">Month</div>
				</div>
				<div class="clickable sidebar-icon flex items-center px-4 py-2 mt-1 text-teal-light cursor-pointer rounded hover:bg-grey-darker">
					<span>
						<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
							<path d="M1703 478q40 57 18 129l-275 906q-19 64-76.5 107.5t-122.5 43.5h-923q-77 0-148.5-53.5t-99.5-131.5q-24-67-2-127 
							0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5 16.5-23.5q23-38 45-91.5t30-91.5q3-10 .5-30t-.5-28q3-11 17-28t17-23q21-36 
							42-92t25-90q1-9-2.5-32t.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5t27.5-96.5q1-8-3-25.5t-2-26.5q2-8 9-18t18-23 17-21q8-12 16.5-30.5t15-35 
							16-36 19.5-32 26.5-23.5 36-11.5 47.5 5.5l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5t-128.5 34.5h-869q-27 0-38 15-11 
							16-1 43 24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57 38 15 59 43zm-1064 2q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 
							0-25.5 9.5t-16.5 22.5zm-83 256q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5z" fill="#4dc0b5"/>
							</svg>
					</span>
					<div class="ml-1">Planner</div>
				</div>
				<div class="clickable sidebar-icon flex items-center px-4 py-2 mt-10 text-teal-light cursor-pointer rounded hover:bg-grey-darker">
					<span>
						<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
							<path d="M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 
							84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 
							0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 
							8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 
							647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z" fill="#4dc0b5"/>
						</svg>
					</span>
					<div class="ml-1">Todos</div>
				</div>
			</div>
		</div>
	</div>
</template>
